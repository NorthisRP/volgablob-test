import React, { useEffect, useState } from "react";
import axios from "axios";
import JSONData from "./JSONData";
import TableData from "./TableData";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

export default function PageData() {
  const [table, setTable] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get("api/load/data")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const lastComment = currentPage * commentsPerPage;
  const firstComment = lastComment - commentsPerPage;
  const currentComments = data.slice(firstComment, lastComment);

  return (
    <Container>
      <ButtonGroup size="large">
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
            totalComments={data.length}
            paginate={paginate}
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
