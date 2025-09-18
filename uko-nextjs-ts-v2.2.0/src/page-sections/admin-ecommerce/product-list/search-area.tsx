import { Box, Button, IconButton, styled, Theme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import { H6 } from "components/Typography";
import Apps from "icons/Apps";
import FormatBullets from "icons/FormatBullets";
import { useRouter } from "next/router";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const SecondaryWrapper = styled(FlexBetween)(({ theme }) => ({
  gap: 8,
  flexWrap: "wrap",
  margin: "24px 0",
  [theme.breakpoints.down(550)]: {
    "& .MuiInputBase-root": { maxWidth: "calc(100% - 90px)" },
  },
}));

// --------------------------------------------------------------------
type SearchAreaProps = {
  value?: any;
  onChange?: any;
  setValue?: any;
  selectedItems?: any;
  gridRoute: string;
  listRoute: string;
};
// --------------------------------------------------------------------

const SearchArea: FC<SearchAreaProps> = ({
  value,
  onChange,
  setValue,
  selectedItems,
  gridRoute,
  listRoute,
}) => {
  const { pathname, push } = useRouter();
  const activeColor = (path: string) => (pathname === path ? "primary.main" : "text.disabled");

  return (
    <SecondaryWrapper>
      <SearchInput
        placeholder="Search..."
        value={value || ""}
        onChange={(e) => {
          if (onChange && setValue) {
            setValue(e.target.value);
            onChange(e.target.value);
          }
          onChange(e.target.value);
        }}
      />

      <FlexBox alignItems="center" gap={1}>
        {selectedItems && selectedItems.length > 0 && (
          <FlexBox alignItems="center" gap={1}>
            <H6>{selectedItems.length} Selected</H6>
            <Button variant="contained" color="error">
              Delete Selected
            </Button>
          </FlexBox>
        )}

        <Box
          sx={{
            backgroundColor: (theme: Theme) => (lightTheme(theme) ? "white" : "background.paper"),
          }}
        >
          <IconButton onClick={() => push(listRoute)}>
            <FormatBullets sx={{ color: activeColor(listRoute) }} />
          </IconButton>

          <IconButton onClick={() => push(gridRoute)}>
            <Apps sx={{ color: activeColor(gridRoute) }} />
          </IconButton>
        </Box>
      </FlexBox>
    </SecondaryWrapper>
  );
};

export default SearchArea;
