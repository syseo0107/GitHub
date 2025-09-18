import { FC } from "react";
import { useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import { H2 } from "components/Typography";

// component props interface
interface HeadingProps {
  heading: string;
  onSearch?: () => void;
}

const Heading: FC<HeadingProps> = ({ heading }) => {
  const theme = useTheme();

  return (
    <FlexBox
      alignItems="center"
      flexWrap="wrap"
      sx={{
        [theme.breakpoints.down(520)]: {
          flexDirection: "column-reverse",
          alignItems: "flex-start",
          "& .MuiInputBase-root": { maxWidth: "100%" },
          "& h2": { marginLeft: 0, marginBottom: 1 },
        },
      }}
    >
      <SearchInput placeholder="Find Products" />
      <H2 marginLeft={2}>{heading}</H2>
    </FlexBox>
  );
};

export default Heading;
