import React from "react";
import { Pagination as Paginator } from "@material-ui/lab/";

export default function Pagination({
  commentsPerPage,
  totalComments,
  paginate,
  currentPage,
}) {
  const pages = Math.ceil(totalComments / commentsPerPage);

  return (
    <Paginator
      page={currentPage}
      count={pages}
      onChange={paginate}
      color="primary"
      variant="outlined"
    />
  );
}
