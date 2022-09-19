const express = require("express");
const app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Listening to requests test on http://localhost:${port}`);
  });