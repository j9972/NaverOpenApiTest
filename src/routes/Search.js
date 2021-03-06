import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";

function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState("");

  const getSearchMovie = async () => {
    const ID_KEY = "dPmjFL2OZv1Mm2tnscFu";
    const SECRET_KEY = "0XY5X_GOww";
    // const search = this.state.value;
    const search = value; // or setValue

    try {
      if (search === "") {
        setMovie([]);
        setIsLoading(false);
        // this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("/api/v1/search/movie.json", {
          params: {
            query: search,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });

        // this.setState({ movies: items, isLoading: false });
        setMovie(items);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, []);

  const handleChange = (e) => {
    const movieNameValue = e.target.value;
    setValue(movieNameValue);
    // this.setState({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovie();
  };

  // const { movies, isLoading } = this.state;

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="영화 검색해보기"
              />
            </div>
            <div className="movies">
              {movie.map((movie) => (
                <SearchMovie
                  key={movie.link}
                  id={movie.link}
                  year={movie.pubDate}
                  title={movie.title}
                  poster={movie.image}
                  rating={movie.userRating}
                  director={movie.director}
                  actor={movie.actor}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
}

export default Search;
