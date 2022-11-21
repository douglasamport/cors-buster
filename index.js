const express = require("express");
const axios = require("axios");
const { parse, stringify, toJSON, fromJSON } = require("flatted");
const app = express();
const port = 3000;

app.get("/:param", async (req, res) => {
  console.log("recieved!");
  const { url } = req.query;
  console.log(req.params);
  console.log(url);

  await axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response.data, "Axios Response");
      data = JSON.stringify(response.data);
      //   const data = toJSON(response.data);

      res.set("Access-Control-Allow-Origin", "http://localhost:3001");
      res.set("Access-Control-Allow-Credentials", true);

      res.send(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log("Cors Buster Server Error");
    });
});
app.listen(port, () => {
  console.log(`cors-buster Listening on port ${port}`);
});
