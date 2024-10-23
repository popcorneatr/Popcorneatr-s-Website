import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./styling/ThankYou.css"

function ThankYou() {

  const { cart, itemCount, clearCart } = useContext(CartContext); 

  const navigate = useNavigate();

  function convertToUSD(price) {
    return Number(price).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
  }

  function returnHome() {
    clearCart()
    navigate("/");
  }

  return (
    <div>
      <div className='thankyou_page'>
        <div className='thankyou_message'>Thank You For Your {itemCount} Order</div>
        <div className='order_summary'>Order Summary</div>
        <div className='order_package'>
          {
            cart.map((item) => (
              <div key={item.id} className="checkout_item">
                
                <div className="img_info">
                  {item.images && item.images.small ? (
                  <img className="img_resize" src={item.images.small} alt={item.name} />
                  ) : item.image ? (
                  <img className="img_resize" src={item.image} alt={item.title} />
                  ) : (
                  <p>No image available</p>
                  )}
                </div>

                <div className="item_info">
                  {item.name ? (<h3>{item.name}</h3>) : <h3>{item.title}</h3>}
                </div>

                <div className="price_info">
                  {item.price ? <b>{convertToUSD(item.price)}</b> : "No Price Avaliable!"}
                </div>
              </div>
            ))
          }
        </div>

        <div className='home_button' onClick={returnHome}>Return to Home</div>
        
      </div>
      
    </div>
  )
}

export default ThankYou