import { useEffect, useState } from "react";
import SearchIcon from './SearchIcon.svg';
import MovieCard from './MovieCard'
import './index.css';


const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const APP = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [Movies, setMovies] = useState([1]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);


  return (
    <div className="APP">
      <h1>FILMHOUSE</h1>

      <div className="search">
        <input
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search movies" />
        <img src={SearchIcon}
          onClick={() => searchMovies(SearchTerm)} alt="search button"/>
      </div>

      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )
        : (
          <div className="empty"><h2>no movies found</h2></div>
        )}
    </div>
  );
};


export default APP;
