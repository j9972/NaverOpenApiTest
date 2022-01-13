import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
  };

  getSearchMovie = async () => {
    const ID_KEY = "dPmjFL2OZv1Mm2tnscFu";
    const SECRET_KEY = "0XY5X_GOww";
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false });
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

        this.setState({ movies: items, isLoading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getSearchMovie();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchMovie();
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                <h1>영화 검색</h1>
                <input
                  className="input_search"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="영화 검색해보기"
                />
              </div>
              <div className="movies">
                {movies.map((movie) => (
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
}

export default Search;
