import React, { useEffect, useState } from "react";
import axios from "axios";
import DataJSON from "./DataJSON";
import DataTable from "./DataTable";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

export default function DataPage() {
  const [table, setTable] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api/load/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      {table ? <DataTable data={data} /> : <DataJSON data={data} />}
    </Container>
  );
}
