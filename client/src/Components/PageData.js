import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.css";
import JSONData from "./JSONData";
import TableData from "./TableData";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

export default function PageData() {
  const [table, setTable] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //const [currentComments, setCurrentComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get("api/load/data")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const searcherHandler = (event) => {
    setFilter(event.target.value);
    if (!filter) {
      return setFilteredData(data);
    }
    //const re = new RegExp(`${filter}`);
    setFilteredData(
      data.filter((obj) => obj._source.postId.toString() === filter)
    );
  };
  // useEffect(() => {
  //   const lastComment = currentPage * commentsPerPage;
  //   const firstComment = lastComment - commentsPerPage;
  //   setCurrentComments(filteredData.slice(firstComment, lastComment));
  // }, [filteredData, currentPage]);
  const lastComment = currentPage * commentsPerPage;
  const firstComment = lastComment - commentsPerPage;
  let currentComments = filteredData.slice(firstComment, lastComment);

  return (
    <Container>
      <ButtonGroup className="tableData--buttons" size="large">
        <Button
          onClick={() => {
            setTable(true);
          }}
        >
          Table
        </Button>
        <Button
          onClick={() => {
            setTable(false);
          }}
        >
          JSON
        </Button>
      </ButtonGroup>
      {!loading ? (
        table ? (
          <TableData
            data={currentComments}
            commentsPerPage={commentsPerPage}
            totalComments={filteredData.length}
            paginate={paginate}
            searcherHandler={searcherHandler}
          />
        ) : (
          <JSONData data={data} />
        )
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
}
