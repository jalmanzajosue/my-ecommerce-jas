import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
  return (
    <div className=' children3'>
    
    <div className='cart-widget'>
       <FontAwesomeIcon icon={faShoppingCart} size="lg"  />
    </div>
      <div className="qty-display">0</div>

      </div>
  )
}
