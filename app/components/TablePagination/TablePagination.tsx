import { Pagination } from "@mui/material";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const TablePagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      color="primary"
      variant="outlined"
      onChange={(event, page) => onPageChange(page)}
    />
  );
};

export default TablePagination;
