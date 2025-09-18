import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import getLayout from "components/getLayout";
import SearchInput from "components/input-fields/SearchInput";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import { productsFakeData } from "page-sections/admin-ecommerce/fakeData";
import CreateProductModal from "page-sections/admin-ecommerce/CreateProductModal";
import ProductColumnShape from "page-sections/admin-ecommerce/columnShapes/ProductColumnShape";
import { searchByName } from "utils/utils";
export const HeadingWrapper = styled(FlexBox)(({
  theme
}) => ({
  marginBottom: 20,
  flexWrap: "wrap",
  [theme.breakpoints.down(530)]: {
    "& .MuiButton-root": {
      width: "100%"
    },
    "& .MuiInputBase-root": {
      maxWidth: "100%",
      marginBottom: 15
    }
  }
}));

const ProductManagement = () => {
  const [openModal, setOpenModal] = useState(false); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(productsFakeData);
  useEffect(() => {
    const result = searchByName(productsFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <SearchInput bordered={false} placeholder="Find Products" onChange={e => setSearchValue(e.target.value)} />
        <Button variant="contained" endIcon={<Add />} onClick={() => setOpenModal(true)}>
          Add Products
        </Button>
      </HeadingWrapper>

      <CustomTable columnShape={ProductColumnShape} data={filteredItem} />

      <CreateProductModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>;
}; // ==============================================================


ProductManagement.getLayout = getLayout; // ==============================================================

export default ProductManagement;