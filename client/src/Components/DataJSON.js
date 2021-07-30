import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function DataJSON(props) {
  return (
    <div>
      {props.data.map((obj) => {
        return (
          <Container key={obj._source.id} style={{ marginBottom: "20px" }}>
            {Object.keys(obj._source).map((el, index) => {
              return (
                <Typography key={index} variant="h4" color="textPrimary">
                  {el}: {obj._source[el]}
                </Typography>
              );
            })}
          </Container>
        );
      })}
    </div>
  );
}
