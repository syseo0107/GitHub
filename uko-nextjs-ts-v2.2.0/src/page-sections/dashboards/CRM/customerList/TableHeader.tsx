import {
  styled,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import React, { ChangeEvent, FC } from "react";

// ----------------------------------------------------------------------
type TableHeaderProps = {
  heading: any[];
  orderBy: string;
  rowCount: number;
  numSelected: number;
  order: "asc" | "desc";
  onRequestSort: (id: string) => void;
  onSelectAllClick: (checked: boolean) => void;
};
// ----------------------------------------------------------------------

// styled components
const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 600,
}));

const TableHeader: FC<TableHeaderProps> = (props) => {
  const {
    heading,
    orderBy,
    rowCount,
    numSelected,
    order,
    onRequestSort,
    onSelectAllClick,
  } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <AppCheckBox
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onSelectAllClick(event.target.checked)
            }
          />
        </TableCell>

        {heading.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              disabled={headCell.id === "edit"}
              onClick={() => onRequestSort(headCell.id)}
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{ "& .MuiTableSortLabel-icon": { display: "none" } }}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
