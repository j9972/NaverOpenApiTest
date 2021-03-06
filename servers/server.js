const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001;
const axios = require("axios");

const ID_KEY = "dPmjFL2OZv1Mm2tnscFu";
const SECRET_KEY = "0XY5X_GOww";

app.use(cors());

app.use(bodyParser.json());

app.use("/search", (req, res) => {
  console.log("server-search");
  const word = req.query.query;
  console.log("word: ", word, "req: ", req, "req.query :", req.query);
  axios
    .get("https://openapi.naver.com/v1/search/movie.json", {
      params: {
        query: word,
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      console.log(response.data.items);
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
