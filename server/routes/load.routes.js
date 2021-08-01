const { Router } = require("express");
const router = Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/data", async (req, res) => {
  try {
    const { body } = await client.search({ size: 500 });
    res.send(body.hits.hits);
  } catch (error) {
    res.status(404).json({ message: `Server error: ${error}` });
  }
});

module.exports = router;
