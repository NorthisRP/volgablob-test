import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Searcher({ searcherHandler }) {
  return (
    <TextField
      onChange={searcherHandler}
      label="Введите idPost"
      variant="outlined"
      size="small"
    />
  );
}
