import React, { useState, useContext } from "react";
import "./styling/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useNavigate} from "react-router-dom";
import { CartContext } from "../context/CartContext"


function Header() {

  const { itemCount } = useContext(CartContext);
  const [title, setTitle] = useState("Pokemon")
  const navigate = useNavigate();

const handleClickPokemon = () => {
  if (title === "Pokemon") {
    navigate("/pokemon")
    setTitle("Yugioh")
  }else {
    navigate("/")
    setTitle("Pokemon")
  }
  
}

  const handleClickCheckout = () => {
    navigate("/checkout");
  }

  const handleClickHome = () => {
    navigate("/")
  }

  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://64.media.tumblr.com/dff225353afead97f0c0768e8aa9a493/af2f149918e6c6e1-a8/s540x810/23c138ab73c3ed27a226c413ed8bed97e6405bc1.png"
        alt="Phantom Knight Torn Scales"
        onClick={handleClickHome}
      />

      <h1 className="store_name" onClick={handleClickHome}>Popcorneatr's Card Corner</h1>

      <div className="header_search">
        <input
          className="header_search_field"
          type="text"
          placeholder="Search..."
          title="search bar"
        />
        <SearchIcon className="header_search_icon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Visit</span>
          <span className="header_option_line_two pageTitle" onClick={handleClickPokemon}>{title}</span>
        </div>

        <div className="header_option_cart_icon">
          <ShoppingCartIcon onClick={handleClickCheckout}/>
          <span className="header_option_line_two header_cart_count">{itemCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;