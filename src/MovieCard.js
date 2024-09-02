import { Component } from "react";
import "./index.css";
class Moviecard extends Component {
  render() {
    const { movies, addStars,decStars,handleFav,handleCart } = this.props;
    const { title, plot, price, rating, star, fav, isInCart, poster } =
      this.props.movies;
    return (
      <>
        <section className="main">
          <div className="movie-card">
            <div className="left">
              <img alt="Poster" src={poster} />
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">{price}</div>
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    className="str-btn"
                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                    alt="decrease"
                    onClick={()=>decStars(movies)}
                  />
                  <img
                    className="stars"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt="stars"
                  />
                  <img
                    className="str-btn"
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    alt="increase"
                    onClick={() => {
                      addStars(movies);
                    }}
                  />
                  <span className="starCount">{star}</span>
                </div>
                {fav ? (
                  <button className="unfavourite-btn" onClick={()=>handleFav(movies)}>
                    Un-Favourite
                  </button>
                ) : (
                  <button className="favourite-btn" onClick={()=>handleFav(movies)}
                  >
                    Favourite
                  </button>
                )}

                {
                  <button
                    className={isInCart ? "uncart-btn" : "cart-btn"}
                    onClick={()=>handleCart(movies)}
                  >
                    {isInCart ? "Remove Cart" : "Cart"}
                  </button>
                }
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Moviecard;
