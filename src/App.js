import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Movies } from "./MoviesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: Movies,
      cartCount:0
    };
  }
  handleAddStars = (movie) => {
    const { movies } = this.state;
    let mid = movies.indexOf(movie);

    if (movies[mid].star < 5) {
      movies[mid].star += 0.5;
    }
    this.setState({
      movies,
    });
  };

  //   Handle DecStars
  handleDecStars = (movie) => {
    const { movies } = this.state;
    let mid = movies.indexOf(movie);
    if (movies[mid].star > 0) {
      movies[mid].star -= 0.5;
    }
    this.setState({
      movies,
    });
  };
  // handleFav
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    let mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };
 
  handleToggleCart = (movie) => {
    let { movies ,cartCount} = this.state;
    let mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    if(movies[mid].isInCart){
      cartCount+=1;
    }else{
      cartCount-=1;
    }
    this.setState({
      movies,cartCount
    });
  };
  render() {
    const { movies ,cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList
          movies={movies}
          addStars={this.handleAddStars}
          decStars={this.handleDecStars}
          handleFav={this.handleToggleFav}
          handleCart={this.handleToggleCart}
        />
      </>
    );
  }
}

export default App;
