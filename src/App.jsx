
import { useState,useEffect } from 'react'
import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
// 7cd1e989
const API_URL="http://www.omdbapi.com/?apikey=17416bf2";
const movie={
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
function App() {
 const [movies, setMovies] =useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
   setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  return (
    <>
     <div className="app">
     <h1>MovieVerse</h1>
      
     <div className="search">
      <input placeholder="Search for movies" 
      value={serachTerm} 
      onChange={(e)=>setSearchTerm(e.target.value)}/>
      <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
      </div> 
      {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
  
}

export default App