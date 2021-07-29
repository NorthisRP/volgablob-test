const express = require("express");
// const { Client } = require("@elastic/elasticsearch");
// const fs = require("fs");
// const client = new Client({ node: "http://localhost:9200" });
const app = express();

app.use("/api/load", require("./routes/load.routes"));

const PORT = 5000;
//http://localhost:9200/comments/_doc/1
async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    // let data = JSON.parse(fs.readFileSync("data.json", "utf8"));
    // data.values.map((obj, index) => {
    //   client.index({
    //     index: "comments",
    //     id: index,
    //     body: obj,
    //   });
    // });
  } catch (error) {
    console.log(`Server error`, error.message);
    process.exit(1);
  }
}

start();
