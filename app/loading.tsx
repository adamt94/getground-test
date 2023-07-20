import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  TableBody,
  Skeleton,
} from "@mui/material";

import React from "react";

interface TableProps {
  rows: number;
  columns: number;
}

const Loading: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Array.from(Array(columns).keys()).map((header) => (
              <TableCell key={header}>{<Skeleton />}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(Array(rows).keys()).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Array.from(Array(columns).keys()).map((header) => (
                <TableCell key={header}>{<Skeleton />}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Loading;
