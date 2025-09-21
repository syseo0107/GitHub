#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 컴포넌트를 분석하고 Storybook 스토리를 자동 생성하는 스크립트

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const STORIES_DIR = path.join(__dirname, '../stories');

// 컴포넌트 타입별 카테고리 매핑
const COMPONENT_CATEGORIES = {
  'AppCheckBox': 'Form',
  'AppRadio': 'Form', 
  'AppSelect': 'Form',
  'AppPagination': 'Navigation',
  'AppModal': 'Feedback',
  'AppAvatar': 'Data Display',
  'AvatarBadge': 'Data Display',
  'FlexBox': 'Layout',
  'FlexBetween': 'Layout',
  'FlexRowAlign': 'Layout',
  'Typography': 'Data Display',
  'IconWrapper': 'Utils',
  'LoadingScreen': 'Feedback',
  'MoreOptions': 'Utils',
  'ScrollBar': 'Utils',
  'ColorRadio': 'Form',
  'RoundCheckBox': 'Form'
};

// 공통 props 타입별 argTypes 정의
const COMMON_ARG_TYPES = {
  onClick: {
    action: 'clicked',
    description: '클릭 이벤트 핸들러'
  },
  onChange: {
    action: 'changed',
    description: '변경 이벤트 핸들러'
  },
  disabled: {
    control: 'boolean',
    description: '비활성화 상태'
  },
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
    description: '컴포넌트 크기'
  },
  variant: {
    control: { type: 'select' },
    options: ['outlined', 'contained', 'text'],
    description: '컴포넌트 변형'
  },
  color: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'default', 'error', 'warning', 'info', 'success'],
    description: '색상 테마'
  },
  children: {
    control: 'text',
    description: '자식 컴포넌트 또는 텍스트'
  }
};

// 파일에서 export default된 컴포넌트명 추출
function extractComponentName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // export default ComponentName 패턴 찾기
    const defaultExportMatch = content.match(/export\s+default\s+(\w+)/);
    if (defaultExportMatch) {
      return defaultExportMatch[1];
    }
    
    // const ComponentName = () => {}; export default ComponentName; 패턴 찾기
    const constExportMatch = content.match(/const\s+(\w+)\s*=.*?export\s+default\s+\1/s);
    if (constExportMatch) {
      return constExportMatch[1];
    }
    
    // 파일명에서 추출 (fallback)
    return path.basename(filePath, path.extname(filePath));
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// 컴포넌트 파일에서 props 분석
function analyzeComponentProps(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const props = [];
    
    // Props destructuring 패턴 찾기
    const destructuringMatches = content.match(/{\s*([^}]+)\s*}/g);
    if (destructuringMatches) {
      destructuringMatches.forEach(match => {
        const propsText = match.replace(/[{}]/g, '').trim();
        const propNames = propsText.split(',').map(prop => 
          prop.trim().split('=')[0].split(':')[0].trim()
        ).filter(prop => prop && !prop.includes('...'));
        
        props.push(...propNames);
      });
    }
    
    // children prop 확인
    if (content.includes('{children}') || content.includes('props.children')) {
      props.push('children');
    }
    
    return [...new Set(props)];
  } catch (error) {
    console.error(`Error analyzing props for ${filePath}:`, error);
    return [];
  }
}

// argTypes 생성
function generateArgTypes(props) {
  const argTypes = {};
  
  props.forEach(prop => {
    if (COMMON_ARG_TYPES[prop]) {
      argTypes[prop] = COMMON_ARG_TYPES[prop];
    } else {
      // 기본 타입 추론
      if (prop.toLowerCase().includes('text') || prop.toLowerCase().includes('title') || prop.toLowerCase().includes('label')) {
        argTypes[prop] = {
          control: 'text',
          description: `${prop} 속성`
        };
      } else if (prop.toLowerCase().includes('show') || prop.toLowerCase().includes('open') || prop.toLowerCase().includes('visible')) {
        argTypes[prop] = {
          control: 'boolean',
          description: `${prop} 상태`
        };
      } else {
        argTypes[prop] = {
          control: 'text',
          description: `${prop} 속성`
        };
      }
    }
  });
  
  return argTypes;
}

// 스토리 템플릿 생성
function generateStoryContent(componentName, componentPath, category, props) {
  const relativePath = path.relative(STORIES_DIR, componentPath).replace(/\\/g, '/');
  const argTypes = generateArgTypes(props);
  
  return `import ${componentName} from '${relativePath}';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/${category}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '${componentName} 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: ${JSON.stringify(argTypes, null, 4)},
};

export const Default = {
  args: {
    ${props.includes('children') ? `children: '${componentName} Content',` : ''}
    ${props.includes('onClick') ? 'onClick: action(\'onClick\'),' : ''}
    ${props.includes('onChange') ? 'onChange: action(\'onChange\'),' : ''}
  },
};

${props.includes('disabled') ? `
export const Disabled = {
  args: {
    ${props.includes('children') ? `children: '${componentName} Content',` : ''}
    disabled: true,
    ${props.includes('onClick') ? 'onClick: action(\'onClick\'),' : ''}
    ${props.includes('onChange') ? 'onChange: action(\'onChange\'),' : ''}
  },
};` : ''}

${props.includes('size') ? `
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <${componentName} size="small" ${props.includes('children') ? 'children="Small"' : ''} />
      <${componentName} size="medium" ${props.includes('children') ? 'children="Medium"' : ''} />
      <${componentName} size="large" ${props.includes('children') ? 'children="Large"' : ''} />
    </div>
  ),
};` : ''}

${props.includes('variant') ? `
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <${componentName} variant="outlined" ${props.includes('children') ? 'children="Outlined"' : ''} />
      <${componentName} variant="contained" ${props.includes('children') ? 'children="Contained"' : ''} />
      <${componentName} variant="text" ${props.includes('children') ? 'children="Text"' : ''} />
    </div>
  ),
};` : ''}
`;
}

// 컴포넌트 디렉터리 순회
function findComponentFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findComponentFiles(fullPath, files);
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      // getLayout.jsx 같은 유틸리티 파일 제외
      if (!item.toLowerCase().includes('layout') && !item.startsWith('.')) {
        files.push(fullPath);
      }
    }
  });
  
  return files;
}

// 메인 함수
function generateAllStories() {
  console.log('🎨 UKO Storybook 스토리 자동 생성을 시작합니다...');
  
  // stories 디렉터리 생성
  if (!fs.existsSync(STORIES_DIR)) {
    fs.mkdirSync(STORIES_DIR, { recursive: true });
  }
  
  const componentFiles = findComponentFiles(COMPONENTS_DIR);
  let generatedCount = 0;
  
  componentFiles.forEach(filePath => {
    const componentName = extractComponentName(filePath);
    if (!componentName) {
      console.warn(`⚠️  컴포넌트명을 추출할 수 없습니다: ${filePath}`);
      return;
    }
    
    const category = COMPONENT_CATEGORIES[componentName] || 'Others';
    const props = analyzeComponentProps(filePath);
    
    const storyContent = generateStoryContent(componentName, filePath, category, props);
    const storyFileName = `${componentName}.stories.js`;
    const storyFilePath = path.join(STORIES_DIR, storyFileName);
    
    // 이미 존재하는 스토리는 덮어쓰지 않음
    if (fs.existsSync(storyFilePath)) {
      console.log(`⏭️  스킵: ${storyFileName} (이미 존재)`);
      return;
    }
    
    try {
      fs.writeFileSync(storyFilePath, storyContent);
      console.log(`✅ 생성: ${storyFileName}`);
      generatedCount++;
    } catch (error) {
      console.error(`❌ 실패: ${storyFileName}`, error);
    }
  });
  
  console.log(`\n🎉 총 ${generatedCount}개의 스토리가 생성되었습니다!`);
  
  // 인덱스 스토리 생성
  generateIndexStory();
}

// 인덱스 스토리 생성 (디자인 시스템 개요)
function generateIndexStory() {
  const indexContent = `import { Meta } from '@storybook/blocks';
import { designTokens } from '../src/design-tokens';

<Meta title="디자인 시스템/소개" />

# UKO 디자인 시스템

UKO는 현대적이고 일관된 사용자 경험을 제공하는 디자인 시스템입니다.

## 🎨 색상 팔레트

### Primary Colors
<div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
  {Object.entries(designTokens.colors.primary).map(([name, color]) => (
    <div key={name} style={{ textAlign: 'center' }}>
      <div style={{ 
        width: 80, 
        height: 80, 
        backgroundColor: color, 
        borderRadius: 8,
        border: '1px solid #e0e0e0'
      }} />
      <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#666' }}>{color}</div>
    </div>
  ))}
</div>

### Text Colors
<div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
  {Object.entries(designTokens.colors.text).map(([name, color]) => (
    <div key={name} style={{ textAlign: 'center' }}>
      <div style={{ 
        width: 80, 
        height: 80, 
        backgroundColor: color, 
        borderRadius: 8,
        border: '1px solid #e0e0e0'
      }} />
      <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#666' }}>{color}</div>
    </div>
  ))}
</div>

## 📝 Typography

<div style={{ fontFamily: designTokens.typography.fontFamily }}>
  <h1 style={{ fontSize: designTokens.typography.fontSize['4xl'] }}>Heading 1</h1>
  <h2 style={{ fontSize: designTokens.typography.fontSize['3xl'] }}>Heading 2</h2>
  <h3 style={{ fontSize: designTokens.typography.fontSize['2xl'] }}>Heading 3</h3>
  <h4 style={{ fontSize: designTokens.typography.fontSize.xl }}>Heading 4</h4>
  <h5 style={{ fontSize: designTokens.typography.fontSize.lg }}>Heading 5</h5>
  <h6 style={{ fontSize: designTokens.typography.fontSize.base }}>Heading 6</h6>
  <p style={{ fontSize: designTokens.typography.fontSize.base }}>Body Text - Lorem ipsum dolor sit amet</p>
  <small style={{ fontSize: designTokens.typography.fontSize.sm }}>Small Text - Additional information</small>
</div>

## 📐 Spacing

<div style={{ display: 'flex', gap: '1rem', alignItems: 'end', marginBottom: '2rem' }}>
  {Object.entries(designTokens.spacing).map(([name, size]) => (
    <div key={name} style={{ textAlign: 'center' }}>
      <div style={{ 
        width: size, 
        height: size, 
        backgroundColor: designTokens.colors.primary.blue300,
        marginBottom: '0.5rem'
      }} />
      <div style={{ fontSize: '0.875rem' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#666' }}>{size}</div>
    </div>
  ))}
</div>

## 🔲 Border Radius

<div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
  {Object.entries(designTokens.borderRadius).map(([name, radius]) => (
    <div key={name} style={{ textAlign: 'center' }}>
      <div style={{ 
        width: 60, 
        height: 60, 
        backgroundColor: designTokens.colors.primary.blue200,
        borderRadius: radius === 'full' ? '50%' : radius,
        marginBottom: '0.5rem'
      }} />
      <div style={{ fontSize: '0.875rem' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#666' }}>{radius}</div>
    </div>
  ))}
</div>

## 📱 사용법

각 컴포넌트는 UKO 디자인 토큰을 기반으로 제작되었습니다. 
좌측 사이드바에서 원하는 컴포넌트를 선택하여 사용법과 예제를 확인하세요.

## 🔧 커스터마이징

디자인 토큰은 \`src/design-tokens/index.js\` 파일에서 수정할 수 있습니다.
`;

  const indexPath = path.join(STORIES_DIR, 'Introduction.stories.mdx');
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ 디자인 시스템 소개 페이지 생성 완료');
}

// 스크립트 실행
if (require.main === module) {
  generateAllStories();
}

module.exports = {
  generateAllStories,
  generateStoryContent,
  analyzeComponentProps,
  extractComponentName
};