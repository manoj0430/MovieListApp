import { Component } from "react";
import NavbarCSS from "./Navbar.module.css"




class Navbar extends Component {
  render() {
    const {cartCount}=this.props;
    return (
      <>
        <div className={NavbarCSS.nav}>
          <div className={NavbarCSS.title}> Movie-App</div>
          <div className={NavbarCSS.cartContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              alt="cart icon" className={NavbarCSS.cart}
            />
            <span className={NavbarCSS.cartCount} >{cartCount}</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
