import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieAdd from "./MovieAdd";


const MovieList = ({ movies, setMovies, filterName, searchRate }) => {
  return (
    <div>
      <div className="movie-add">
        <MovieAdd movies={movies} setMovies={setMovies} />
      </div>
      <div className="movie-list">
        {movies
          .filter(
            (movie) =>
              movie.name
                .toLowerCase()
                .trim()
                .includes(filterName.toLowerCase().trim()) &&
              movie.rating >= searchRate
          )

          .map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie-desc-trailer/${movie.id}`}><MovieCard movie={movie} key={movie.id} /></Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
