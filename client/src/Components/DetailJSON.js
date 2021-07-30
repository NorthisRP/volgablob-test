import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DetailJSON() {
  const comment = useSelector((state) => state.jsonReducer);
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      {Object.keys(comment).map((el, index) => {
        return (
          <Typography key={index} variant="h4" color="textPrimary">
            {el}: {comment[el]}
          </Typography>
        );
      })}
    </div>
  );
}
