import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://64.media.tumblr.com/dff225353afead97f0c0768e8aa9a493/af2f149918e6c6e1-a8/s540x810/23c138ab73c3ed27a226c413ed8bed97e6405bc1.png"
        alt="Phantom Knight Torn Scales"
      />

      <h1 className="store_name">Popcorneatr's Card Corner</h1>

      <div className="header_search">
        <input className="search_field" type="text" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="two">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="two">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="two">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
