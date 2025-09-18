import {
  Box,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import BlankCheckBoxIcon from "icons/BlankCheckBoxIcon";
import CheckBoxIcon from "icons/CheckBoxIcon";
import { FC, forwardRef, useEffect, useMemo, useRef } from "react";
import { useFilters, usePagination, useRowSelect, useTable } from "react-table";
import ScrollBar from "simplebar-react";
import columnShape from "./columnShape";
import {
  StyledPagination,
  StyledSearchIcon,
  StyledSearchInput,
  StyledTableBodyRow,
} from "./styledComponents";

interface DataTableProps {
  data: [] | unknown;
  clearFilter?: String;
  onFilterChange?: (filters: any) => void;
  handleRowSelect: (rows: []) => void;
}

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
      ref={resolvedRef}
      disableRipple
      checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />}
      icon={<BlankCheckBoxIcon fontSize="small" color="primary" />}
    />
  );
});

function SearchFilter({ column }: any) {
  const { filterValue, setFilter } = column;
  const theme = useTheme();
  return (
    <StyledSearchInput
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
      startAdornment={<StyledSearchIcon sx={{ color: "text.disabled" }} />}
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#ECEFF5" : theme.palette.divider,
        borderRadius: "8px",
      }}
    />
  );
}

const DataTable: FC<DataTableProps> = ({ data, clearFilter, handleRowSelect, onFilterChange }) => {
  const tableData: any = useMemo(() => data, [data]);
  const columns: any = useMemo(() => columnShape, []);
  const defaultColumn: any = useMemo(() => ({ Filter: SearchFilter }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state,
    setAllFilters,
    selectedFlatRows,
  }: any = useTable(
    {
      columns,
      defaultColumn,
      data: tableData,
    },
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <SelectCheckBox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }: any) => {
            return <SelectCheckBox {...row.getToggleRowSelectedProps()} />;
          },
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    handleRowSelect(selectedFlatRows);
  }, [selectedFlatRows, handleRowSelect]);

  useEffect(() => {
    setAllFilters([]);
  }, [clearFilter, setAllFilters]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(state.filters);
    }
  }, [onFilterChange, state.filters]);

  // handle pagination
  const handleChange = (_: any, currentPageNo: number) => {
    gotoPage(currentPageNo - 1);
  };

  const selectedRow = (selectId: any) => {
    const rowId = Object.keys(state.selectedRowIds);
    const findId = rowId.find((id) => id === selectId);
    if (findId) return true;
    return false;
  };

  return (
    <Box>
      <ScrollBar>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: any) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <TableCell
                    {...column.getHeaderProps()}
                    sx={{
                      fontSize: 12,
                      fontWeight: 600,
                      minWidth: column.minWidth,
                      borderColor: "secondary.300",
                      "&:first-of-type": { paddingLeft: "16px" },
                      "&:last--of-type": { paddingRight: "16px" },
                    }}
                  >
                    {column.render("Header")}
                    {column.canFilter ? column.render("Filter") : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <StyledTableBodyRow
                  {...row.getRowProps()}
                  selected_row={selectedRow(row.id) ? "select" : ""}
                >
                  {row.cells.map((cell: any) => (
                    <TableCell
                      {...cell.getCellProps()}
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        borderColor: "secondary.300",
                        "&:first-of-type": { paddingLeft: "16px" },
                      }}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </StyledTableBodyRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollBar>

      <Stack alignItems="center" marginY="1rem">
        <StyledPagination shape="rounded" onChange={handleChange} count={pageOptions.length} />
      </Stack>
    </Box>
  );
};

export default DataTable;
