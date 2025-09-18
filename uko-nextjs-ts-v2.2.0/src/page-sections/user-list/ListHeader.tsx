import { FC } from "react";
import { Button, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import SearchInput from "components/input-fields/SearchInput";

// styled component
const StyledFlexBox = styled(FlexBetween)(({ theme }) => ({
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": { width: "100%", marginTop: 15 },
  },
}));

// -----------------------------------------------------------
type ListHeaderProps = {
  setSearchValue: (value: React.SetStateAction<string>) => void;
  handleClick: () => void;
  buttonText?: string;
};
// -----------------------------------------------------------

const ListHeader: FC<ListHeaderProps> = ({
  handleClick,
  setSearchValue,
  buttonText = "Add New User",
}) => {
  return (
    <StyledFlexBox>
      <SearchInput
        bordered={false}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Button variant="contained" onClick={handleClick}>
        {buttonText}
      </Button>
    </StyledFlexBox>
  );
};

export default ListHeader;
