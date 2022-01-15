import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import movie from "../components/Movie";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location === undefined) {
      navigate.push("/");
    }
  }, []);

  if (movie) {
    console.log("movie: ", movie);
    console.log("movie.title: ", movie.title);
    // console.log("movie.genre: ", movie.genre);
    return (
      <div className="movie">
        <img src={movie.poster} alt={movie.title} titlt={movie.title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{movie.title}</h3>
          <h4 className="movie__rating">{movie.rating}/10</h4>
          <h5 className="movie__year">{movie.year}</h5>
          <ul className="movie__genres">
            {movie.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{movie.summary}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Detail;
