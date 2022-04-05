import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, code, title, unit) {
  return { name, code, title, unit };
}

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5")
];

export default function Table1() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 610 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Credit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
