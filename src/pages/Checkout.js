import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./styling/Checkout.css";

function Checkout() {

  const { cart, removeFromCart, clearCart, cartSubtotal, itemCount } = useContext(CartContext); 

  function convertToUSD(price) {
    return Number(price).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
  }

  return (
    <div className="checkout">
      <h1 className="checkout_title">Checkout</h1>
      {cart.length === 0 ? (
        <p className="empty_cart">Your cart is empty</p>
      ) : (
        <div className="checkout_page">
          <div className="checkout_background">
            <br/> 
            {
              cart.map((item) => (
                <div key={item.id} className="checkout_item">
                  
                  <div className="img_info">
                    {item.images && item.images.small ? (
                    <img src={item.images.small} alt={item.name} />
                    ) : item.image ? (
                    <img className="img_resize" src={item.image} alt={item.title} />
                    ) : (
                    <p>No image available</p>
                    )}
                  </div>

                  <div className="item_info">
                    {item.name ? (<h3>{item.name}</h3>) : <h3>{item.title}</h3>}
                    <p>
                      <b>Set: </b> {item.set ? item.set.name : "No set information available"}
                    </p>
                    <span className="remove_button" onClick={() => removeFromCart(item.id)}>Remove</span> 
                  </div>

                  <div className="price_info">
                    {item.price ? <b>{convertToUSD(item.price)}</b> : "No Price Avaliable!"}
                  </div>

                </div>
                
              ))
            }
            <br/>
          </div>

          <div className="cart_summary">
            <b>Cart Summary</b>
            <div>Item: {itemCount}</div>
            <b>Cart Subtotal: {convertToUSD(cartSubtotal)}</b>
            <div>
              <button>Checkout</button>
            </div>
            <div className="remove_button" onClick={clearCart}>Clear Cart</div>
          </div>

        </div>

        
      )}
    </div>
  );

}

export default Checkout;