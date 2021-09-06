import React from 'react'
import './Checkout.css'
import ad from './assets/amazon-ad.jpg'
import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider";
function Checkout() {
  const[{basket},dispatch] = useStateValue();
  console.log('hooooi',basket);
    return (
        <div className="checkout">
             <div className="checkout_left">
                <img className="checkout_ad" src={ad} alt="" />
              <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
              </div>            
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>

            
        </div>
    )
}

export default Checkout
