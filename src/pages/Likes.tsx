import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { LikesItem } from '../components/LikesItem';
import { Link } from 'react-router-dom';

export const Likes: React.FC = () => {
    const { state } = useContext(GlobalContext);

  return (
    <div className='productList-container mt-3'>
        <div className="container">
            <p>Beğendiklerim ({state.likes.length})</p>
            <div className="productList-wrapper">
                <ul className='p-0'>
                    <div className="row g-3">
                        {state.likes.length ? (
                            state.likes.map((product) => (
                                <LikesItem item={product} key={product.id}/>
                            )) 
                        ) : <p className='d-flex gap-2 likes-cart-message'>
                                <i className="bi bi-info-circle"></i>
                                Henüz beğendiniz ürün bulunmamaktadır.
                                <Link to='/'>Göz at!</Link>
                            </p>
                        }
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
