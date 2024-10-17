import React from "react";
import "./styling/Product.css";
import StarIcon from "@mui/icons-material/Star";

function Product({id, title, image, price, rating, addToCart }) {

  const handleAddToCart = () => {
    // Create product object
    const product = { id, title, image, price, rating }; 
    // Call addToCart passed from parent
    addToCart(product); 
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
