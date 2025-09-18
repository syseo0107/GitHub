import { Box, Card, Checkbox, Stack, styled, Table, TableRow, useTheme } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import AppPagination from "components/AppPagination";
import getLayout from "components/getLayout";
import Scrollbar from "components/ScrollBar";
import BlankCheckBoxIcon from "icons/BlankCheckBoxIcon";
import CheckBoxIcon from "icons/CheckBoxIcon";
import SearchArea from "page-sections/admin-ecommerce/product-list/search-area";
import columnShape from "page-sections/user-list/columnShape";
import HeadingArea from "page-sections/user-list/heading-area";
import { forwardRef, SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import USER_LIST from "__fakeData__/user-and-contact/user_list";

const HeadTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.text.secondary,
  "&:first-of-type": { paddingLeft: 24 },
  "&:last-of-type": { paddingRight: 24 },
}));

const BodyTableCell = styled(HeadTableCell)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 13,
  fontWeight: 500,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SelectCheckBox = forwardRef(({ indeterminate, ...rest }: any, ref: any) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    if (resolvedRef) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <Checkbox
      {...rest}
      disableRipple
      ref={resolvedRef}
      icon={<BlankCheckBoxIcon fontSize="small" color="disabled" />}
      checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />}
    />
  );
});

const UserListView = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const columns: any = useMemo(() => columnShape, []);
  const tableData: any = useMemo(() => USER_LIST, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state,
    setGlobalFilter,
    selectedFlatRows,
  }: any = useTable(
    { columns, data: tableData },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <SelectCheckBox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }: any) => <SelectCheckBox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );
  // handle change pagination
  const handleChange = (_: any, currentPageNo: number) => gotoPage(currentPageNo - 1);
  // handle change for tab list
  const changeTab = (_: SyntheticEvent, newValue: string) => setValue(newValue);
  // search value state
  const [searchValue, setSearchValue] = useState(state.globalFilter);
  const handleSearch = (value: any) => setGlobalFilter(value || undefined);

  return (
    <Box pt={2} pb={4}>
      <Card sx={{ py: 2 }}>
        <Box px={3}>
          <HeadingArea value={value} changeTab={changeTab} />

          <SearchArea
            value={searchValue}
            onChange={handleSearch}
            setValue={setSearchValue}
            selectedItems={selectedFlatRows}
            gridRoute="/dashboards/user-grid"
            listRoute="/dashboards/user-list"
          />
        </Box>

        <Scrollbar autoHide={false}>
          <Table {...getTableProps()} sx={{ minWidth: 900 }}>
            <TableHead sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
              {headerGroups.map((headerGroup: any, index: number) => (
                <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, index: number) => (
                    <HeadTableCell
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                    </HeadTableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody {...getTableBodyProps()}>
              {page.map((row: any, index: number) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()} key={index}>
                    {row.cells.map((cell: any, index: number) => (
                      <BodyTableCell key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </BodyTableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>

        <Stack alignItems="center" marginY={4}>
          <AppPagination shape="rounded" onChange={handleChange} count={pageOptions.length} />
        </Stack>
      </Card>
    </Box>
  );
};

// ==============================================================
UserListView.getLayout = getLayout;
// ==============================================================
export default UserListView;
