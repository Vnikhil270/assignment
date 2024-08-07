import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Chip } from "@mui/material";

const columns = [
  { id: "customer", label: "Customer", minWidth: 170 },
  { id: "orderno", label: "Order\u00a0no.", minWidth: 170 },
  { id: "amount", label: "Amount", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
];

function createData(customer, orderno, amount, status) {
  return { customer, orderno, amount, status };
}

const rows = [
  createData("Test", "78263864", "$4751353.20", "Pending"),
  createData("Test", "17287263", "$9493.20", "Cancellled"),
  createData("Test", "9834", "$853", "Pending"),
  createData("test", "8953", "$68.540", "Delivered"),
  createData("Test", "29321284", "$458.25", "Delivered"),
];

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", background: "transparent" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
