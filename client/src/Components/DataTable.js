import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { saveComment } from "../store/jsonReducer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable(props) {
  const dispatch = useDispatch();

  const classes = useStyles();
  let history = useHistory();

  const loadJSON = (obj) => {
    dispatch(saveComment(obj));
    history.push(`/comment/${obj.id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>postId</TableCell>
            <TableCell align="justify">id</TableCell>
            <TableCell align="justify">name</TableCell>
            <TableCell align="justify">email</TableCell>
            <TableCell align="center">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((obj) => (
            <TableRow
              key={obj._source.id}
              onClick={() => loadJSON(obj._source)}
            >
              <TableCell component="th" scope="row">
                {obj._source.postId}
              </TableCell>
              <TableCell align="justify">{obj._source.id}</TableCell>
              <TableCell align="justify">{obj._source.name}</TableCell>
              <TableCell align="justify">{obj._source.email}</TableCell>
              <TableCell align="justify">{obj._source.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
