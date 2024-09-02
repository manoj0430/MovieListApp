import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}> title</div>
          <div style={styles.cartContainer}>
            <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart icon" style={styles.cart}/>
            <span style={styles.cartCount}>0</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;

const styles = {
  nav: {
    width: "100%",
    height: "72px",
    display: "flex",
    justifyContent: "space-between",
    background: "yellow",
    color: "black",
  },
  title:{
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform:"uppercase",
    margin:"0.5rem 0",
    marginLeft:"3rem",
    paddingTop:"0.5rem"
  },
  cartContainer:{
    postion:"relative",
    cursor:"pointer"
  },
  cart:{
    height: 30,
    marginRight: 30,
    marginTop: 15
  },
  cartCount:{
    background: "orange",
    borderRadius: "50%",
    padding: "3px 6px",
    position: "absolute",
    right: 20,
    top: 5,
    fontSize: 10,

  }
};
