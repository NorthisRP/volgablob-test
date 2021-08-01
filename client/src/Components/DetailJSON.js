import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function DetailJSON() {
  const comment = useSelector((state) => state.jsonReducer);
  let history = useHistory();
  return (
    <div className="JSON-container">
      <Button
        onClick={() => history.push("/")}
        color="primary"
        variant="contained"
        size="large"
        style={{ width: "90px", margin: "20px auto", display: "block" }}
      >
        Back
      </Button>
      <Card variant="outlined">
        <CardHeader title={`${comment.name}`} subheader={`${comment.email}`} />
        <CardContent>
          <Typography variant="h6">
            postId: {comment.postId} / commentId: {comment.id}
          </Typography>
          {comment.body}
        </CardContent>
      </Card>
    </div>
  );
}
