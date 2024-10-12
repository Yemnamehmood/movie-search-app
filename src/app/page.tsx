'use client'
import { useState } from 'react';


const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState<any[]>([]);

  const fetchMovies = async () => {
    if (movieTitle.trim()) {
      const response = await fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=54894766`);
      const data = await response.json();
      setMovies(data.Search || []);
    }
  };

  return (
    <>
      {/* Background image */}
      <div className="background-image"></div>

      {/* Gradient overlay */}
      <div className="gradient-bg"></div>

      <div className="container">
        <h1>Movie Search App</h1>

        {/* Movie search label with emoji 🎥 */}
        <div className="search-label">
          <label htmlFor="movie-search">Search Movies</label>
          <span role="img" aria-label="movie emoji">&#x1F3A5;</span>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Enter movie title..."
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className="search-input"
          id="movie-search"
        />

        {/* Search Button */}
        <button onClick={fetchMovies} className="search-button">
          Search
        </button>

        {/* Movie Results */}
        <div className="movies-list">
          {movies.length > 0 &&
            movies.map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Movie Search App by <span>Yemna Mehmood</span></p>
        <p>All rights reserved</p>
      </footer>
    </>
  );
};

export default MovieSearch;
