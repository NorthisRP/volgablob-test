import React, { useEffect, useState } from "react";
import axios from "axios";
import JSONData from "./JSONData";
import TableData from "./TableData";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function PageData() {
  const [table, setTable] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    let filter = event.target.value;
    if (!filter) {
      return setFilteredData(data);
    }
    setFilteredData(
      data.filter((obj) => obj._source.postId.toString() === filter)
    );
    setCurrentPage(1);
  };
  const lastComment = currentPage * commentsPerPage;
  const firstComment = lastComment - commentsPerPage;
  let currentComments = filteredData.slice(firstComment, lastComment);

  return (
    <Container>
      <div className="tableData--buttons" size="large">
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            setTable(true);
          }}
        >
          Table
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            setTable(false);
          }}
        >
          JSON
        </Button>
      </div>
      {!loading ? (
        table ? (
          <TableData
            data={currentComments}
            commentsPerPage={commentsPerPage}
            totalComments={filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
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
