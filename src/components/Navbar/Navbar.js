import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const Navbar = () => {
  return (
<div className='container-fluid'>
  <div className='container-parent'>
      <div className='children1'>
        <img src='/logo.png' height={50} alt='logo' />
      </div>
      <div className='children2'>
      <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">
              <a href="/">PC Gamer</a>
              </a>
            </li>
            <li>
              <a href="/">Computadoras</a>
            </li>
            <li>
              <a href="/">Todo en Uno</a>
            </li>
            <li>
              <a href="/">Laptops</a>
            </li>
            <li>
              <a href="/">Pantallas</a>
            </li>
            <li>
              <a href="/">Impresoras</a>
            </li>
            <li>
              <a href="/">Accesorios</a>
            </li>
          </ul>
        </nav>
      </div>
    <CartWidget/>
  </div>
 <ItemListContainer greetings ={'Hola'}/>
</div>
  )
}
