import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className="cart_item">
        <div className="cart_items_title">
          <p>Item</p>
          <p>Titlt</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {

          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart_items_title cart_items_item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>$ {item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-totle">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totle-details">
              <p>Subtotle</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totle-details">
              <p>Delivery Free</p>
              <p>$ {getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totle-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount()==0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code'/>
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
