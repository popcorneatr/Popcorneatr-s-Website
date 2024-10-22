import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import "./styling/Sidebar.css"; 

const Sidebar = ({ isOpen, onClose }) => {
  const { itemCount } = useContext(CartContext);
  const { setSearchTerm } = useContext(SearchContext);
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(searchInput.toLowerCase());
      // Close the sidebar after searching
      onClose(); 
    }
  };

  const handleClickHome = () => {
    navigate("/");
    // Close the sidebar after navigation
    onClose(); 
  };

  const handleClickPokemon = () => {
    navigate("/pokemon");
    onClose(); 
  };

  const handleClickCheckout = () => {
    navigate("/checkout");
    onClose(); 
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar">
          <div className="sidebar_content">
            <input
              className="sidebar_search_field"
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleKeyPress}
            />
            <div className="sidebar_links">
              <div onClick={handleClickHome}>Home</div>
              <div onClick={handleClickPokemon}>Pokemon</div>
              <div onClick={handleClickCheckout}>Cart ({itemCount})</div>
              <div>Sign In</div>
            </div>
          </div>
          <button className="close_sidebar" onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
