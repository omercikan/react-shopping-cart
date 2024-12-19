import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';
import { BasketItem } from '../components/BasketItem';

export const Basket: React.FC = () => {
    const { state } = useContext(GlobalContext);
    let totalCart: number = 0;
    let cargo: number = 49.99;
    state.cart.map((product) => totalCart += (product.price * product.amount))
    const formattedPrice = new Intl.NumberFormat("tr-TR")

    console.log(totalCart);

    return (
        <div className='productList-container mt-3'>
            <div className="container">
                <p>Sepetim ({state.cart.length})</p>

                <div className="row">
                    <div className="col-lg-9 col-md-8">
                        <div className="productList-wrapper">
                            <ul className='p-0'>
                                <div className="row g-3">
                                    {state.cart.length ? (
                                        state.cart.map((product) => (
                                            <BasketItem item={product} key={product.id}/>
                                        )) 
                                    ) : <p className='d-flex gap-2 likes-cart-message'>
                                            <i className="bi bi-info-circle"></i>
                                            Sepetiniz şuan da boş.
                                            <Link to='/'>Hemen alışveriş yap!</Link>
                                        </p>
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 basket-card">
                        <div className="card">
                            <h2 className="card-header bg-transparent border-0 fs-4 summary-text">Sipariş Özeti</h2>

                            <div className="card-body pb-0">
                                <ul className='p-0 fs-5'>
                                    <li className='d-flex justify-content-between gap-3'>
                                        <span className='text-truncate'>Ürünün Toplamı:</span>
                                        <span className='text-truncate'>{formattedPrice.format(totalCart)} TL</span>
                                    </li>

                                    {
                                        state.cart.length > 0 && (
                                            <li className='mt-3'>
                                                <span>Kargo Toplam:</span>
                                                <span className='float-end'>49.99 TL</span>
                                            </li>
                                        )
                                    }

                                    <li className='border-top mt-3 pt-3'>
                                        <span>Toplam</span>
                                        <span className='float-end text-primary fw-medium'>{formattedPrice.format(totalCart === 0 ? 0 : totalCart - cargo)} TL</span>
                                    </li>

                                </ul>
                                
                                <button className='btn btn-primary text-white w-100 mt-3 d-md-none'>Sepeti Onayla</button>
                            </div>
                        </div>

                        <button className='btn btn-primary text-white w-100 mt-3 basket-btn'>Sepeti Onayla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
