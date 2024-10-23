import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import "./styling/Sidebar.css"; 

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useContext(AuthContext);
  const { itemCount, clearCart } = useContext(CartContext);
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

  const handleClickAuthForm = () => {
    navigate("/authform");
    onClose();
  }

  const handleLogout = () => {
    logout();  
    clearCart()
    navigate("/"); 
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
              {user ? (
                // Show Logout if user is logged in
                <div onClick={handleLogout}>Logout</div>  
              ) : (
                // Show Login if user is logged out
                <div onClick={handleClickAuthForm}>Login</div>  
              )}
            </div>
          </div>
          <button className="close_sidebar" onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
