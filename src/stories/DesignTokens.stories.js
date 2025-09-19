import tokens from '../tokens/tokens.json';
import { H3, H4, Paragraph, Small } from '../components/Typography';

export default {
  title: 'UKO/Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'UKO 디자인 시스템의 디자인 토큰들입니다. 이 토큰들은 Figma에서 추출되어 일관된 디자인을 유지합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

const ColorSwatch = ({ name, value, description }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    padding: '12px', 
    border: '1px solid #e0e0e0', 
    borderRadius: '8px',
    marginBottom: '8px'
  }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        backgroundColor: value,
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '12px'
      }}
    />
    <div style={{ flex: 1 }}>
      <Small fontWeight="600">{name}</Small>
      <Paragraph color="text.secondary" style={{ margin: 0 }}>{value}</Paragraph>
      {description && <Small color="text.secondary">{description}</Small>}
    </div>
  </div>
);

const ColorSection = ({ title, colors }) => (
  <div style={{ marginBottom: '32px' }}>
    <H4 mb={2}>{title}</H4>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8px' }}>
      {Object.entries(colors).map(([name, token]) => {
        if (typeof token === 'object' && token.value) {
          return <ColorSwatch key={name} name={name} value={token.value} />;
        }
        return null;
      })}
    </div>
  </div>
);

export const Colors = {
  render: () => (
    <div style={{ padding: '24px', maxWidth: '1200px' }}>
      <H3 mb={3}>Color Tokens</H3>
      
      <ColorSection title="Primary Colors" colors={tokens.Primary || {}} />
      <ColorSection title="Text Colors" colors={tokens.Text || {}} />
      
      {/* White 색상 */}
      {tokens.White && (
        <ColorSection title="Base Colors" colors={{ White: tokens.White }} />
      )}
      
      {/* 기타 색상 그룹들 */}
      {Object.entries(tokens).map(([groupName, group]) => {
        if (['Primary', 'Text', 'White'].includes(groupName)) return null;
        if (typeof group === 'object' && !group.value) {
          return <ColorSection key={groupName} title={`${groupName} Colors`} colors={group} />;
        }
        return null;
      })}
    </div>
  ),
};

export const ColorPalette = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <H3 mb={3}>Complete Color Palette</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {Object.entries(tokens).map(([groupName, group]) => {
          if (typeof group === 'object' && group.value) {
            // 단일 색상
            return (
              <div key={groupName} style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div
                  style={{
                    width: '100%',
                    height: '80px',
                    backgroundColor: group.value,
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginBottom: '8px'
                  }}
                />
                <Small fontWeight="600">{groupName}</Small>
                <Paragraph color="text.secondary" style={{ margin: 0, fontSize: '12px' }}>
                  {group.value}
                </Paragraph>
              </div>
            );
          } else if (typeof group === 'object') {
            // 색상 그룹
            return (
              <div key={groupName} style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px'
              }}>
                <H4 mb={1} style={{ fontSize: '14px' }}>{groupName}</H4>
                {Object.entries(group).map(([colorName, colorValue]) => {
                  if (typeof colorValue === 'object' && colorValue.value) {
                    return (
                      <div key={colorName} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '4px' 
                      }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: colorValue.value,
                            borderRadius: '2px',
                            border: '1px solid #ccc',
                            marginRight: '8px',
                            flexShrink: 0
                          }}
                        />
                        <div>
                          <Small style={{ fontSize: '11px' }}>{colorName}</Small>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  ),
};