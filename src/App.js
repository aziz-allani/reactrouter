import { useState } from "react";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MovieList from "./Components/MovieList";
import { movieData } from "./Data";
import { Route, Routes } from "react-router-dom";
import MovieDescTrailer from "./Components/MovieDescTrailer";


function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterName, setFilterName] = useState("");
  const [searchRate, setSearchRate] = useState(0);



  return (
    <div className="App">
      <div className="header">
        <SearchAppBar setFilterName={setFilterName} setSearchRate={setSearchRate} searchRate={searchRate} />
      </div>

      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterName={filterName} searchRate={searchRate} />} />
        <Route path="/movie-desc-trailer/:id" element={<MovieDescTrailer />} />
      </Routes>
    </div>
  );
}

export default App;
