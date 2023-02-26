import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

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
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/category/1">Gama Media</Link>
              </li>
              <li>
                <Link to="/category/2">Gama Intel</Link>
              </li>
              <li>
                <Link to="/category/3">Amd Rayzen</Link>
              </li>
            </ul>
          </nav>
        </div>
        <CartWidget />
      </div>

    </div>
  )
}
