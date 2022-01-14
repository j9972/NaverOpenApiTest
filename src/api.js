import axios from "axios";

const ID_KEY = "dPmjFL2OZv1Mm2tnscFu";
const SECRET_KEY = "0XY5X_GOww";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "X-Naver-Client-Id": ID_KEY,
    "X-Naver-Client-Secret": SECRET_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

export const naverMoviesApi = {
  search: (word) =>
    api.get("/v1/search/movie.json", {
      params: {
        query: word,
        display: 20,
      },
    }),
};
