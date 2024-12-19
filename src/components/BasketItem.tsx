import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Product } from '../types/types';
import { cartActionTypeEnum } from '../reducer/cartReducer';

type BasketItemProps = {
    item: Product
}

export const BasketItem: React.FC<BasketItemProps> = ({item}) => {
    const { dispatch } = useContext(GlobalContext);
    const { id, imageURL, price, productName, sellerName, sellerRating } = item;
    const formattedPrice = new Intl.NumberFormat("tr-TR").format(price)

    return (
        <li className='col-12 position-relative'>
            <div className="card">
                <div className="card-header bg-white">
                    <ul className='p-0'>
                        <li className='fs-5 d-flex align-items-center'>
                            <span className='text-muted'>Satıcı:</span>
                            <strong className='mx-1 fw-medium'>{sellerName}</strong>
                            <span className='badge bg-success rounded-1 fw-medium px-1'>{sellerRating}</span>
                        </li>
                    </ul>
                </div>

                <div className="row basket-item-row">
                    <div className="col-4 col-xs-2 col-sm-2 img-col">
                        <div className="product-picture">
                            <picture>
                                <source srcSet={imageURL} type='image/webp'/>
                                <img src={imageURL} alt={productName} className='img-fluid user-select-none pe-none basket-picture'/>
                            </picture>
                        </div>
                    </div>

                    <div className="col-8 col-sm-10 col-xs-9 pt-md-3">
                        <div>
                            <div className="position-absolute top-75 end-50">
                                <button className='bg-transparent border-0 circle fs-5 d-flex align-items-center gap-2' onClick={() => dispatch({ type: cartActionTypeEnum.REMOVE_CART, payload: id })}>
                                    <i className="bi bi-trash3"></i>
                                    <span>Sil</span>
                                </button>
                            </div>

                            <div>
                                <div className="product-title">
                                    <h4 className='fs-5 text-truncate'><strong>{sellerName}</strong>  {productName}</h4>
                                </div>

                                <div className="product-price mt-4">
                                    <span className='text-primary fw-medium'>{formattedPrice} TL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
