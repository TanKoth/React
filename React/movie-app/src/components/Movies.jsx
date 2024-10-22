import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
  };
  //console.log(watchlist);

  const removeFromWatchlist = (movie) => {
    const removeUpdatedWatchlist = watchlist.filter(
      (movieList) => movieList.id !== movie.id
    );
    setWatchlist(removeUpdatedWatchlist);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=api_key&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        //console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, [pageNo]);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movie, index) => {
          return (
            <MovieCard
              movie={movie}
              key={index}
              addToWatchlist={addToWatchlist}
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default Movies;
