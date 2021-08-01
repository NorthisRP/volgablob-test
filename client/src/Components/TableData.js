import React from "react";
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
import { Container } from "@material-ui/core";
import Pagination from "./Pagination";
import Searcher from "./Searcher";

export default function TableData(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  const loadJSON = (obj) => {
    dispatch(saveComment(obj));
    history.push(`/comment/${obj.id}`);
  };

  return (
    <Container>
      <div className="tableData--utilities">
        <Pagination
          commentsPerPage={props.commentsPerPage}
          totalComments={props.totalComments}
          paginate={props.paginate}
        />
        <Searcher searcherHandler={props.searcherHandler} />
      </div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
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
    </Container>
  );
}
