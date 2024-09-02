import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, #6617CB,#CB218E);
  color: black;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 0.5rem 0;
  margin-left: 3rem;
  padding-top: 0.5rem;
  &:hover{
  color: blue;
  }
`;
const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const Cart = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 0.9rem;
  margin-right: 2rem;
`;

const CartCount = styled.span`
  background: orange;
  border-radius: 50%;
  padding: 3.5px 7px;
  position: absolute;
  right: 20px;
  top: 4px;
  font-size: 12px;
  visibility: ${(props)=>props.show ? "visible" : "hidden"}
`;
class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title> title</Title>
          <CartContainer>
            <Cart
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              alt="cart icon"
            />
            <CartCount color="yellow" show={true}>0</CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}
export default Navbar;
