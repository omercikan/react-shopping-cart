import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Header:React.FC = () => {
  return (
    <header className='border-bottom py-2 sticky-top' style={{backdropFilter: "blur(15px)"}}>
        <div className="container">
            <div className="header-wrapper d-flex align-items-center justify-content-between flex-wrap">
                <div className="brand">
                    <Link to='/' className='nav-link fw-medium active'>Shopping Cart</Link>
                </div>

                <Navigation/>
            </div>
        </div>
    </header>
  )
}
