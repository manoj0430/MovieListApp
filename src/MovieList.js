import { Component } from "react";
import Moviecard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies,addStars, decStars,handleFav,handleCart } = this.props;
    
    return (
      <>
        {movies.map((movie) => (
          <Moviecard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            handleFav={handleFav}
            handleCart={handleCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
