import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const Navigation: React.FC = () => {
    const { state } = useContext(GlobalContext);

  return (
    <nav className='navbar'>
        <ul className='d-flex gap-3 m-0'>
            <li className='nav-item'>
                <Link className='nav-link' to='/begendiklerim'>
                    <i className="bi bi-heart"></i>
                    <strong className='ms-2 fw-bold' style={{fontSize: "13px"}}>Beğendiklerim</strong>
                </Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link d-flex align-items-center' to='/sepetim'>
                    <i className="bi bi-cart3"></i>
                    <strong className='mx-2 fw-bold' style={{fontSize: "13px"}}>Sepetim</strong>
                    <span className={'bg-primary text-white d-inline-flex rounded-circle cart-count-number'} style={{fontSize: "10px"}}>{state.cart.length ? state.cart.length : '0'}</span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
