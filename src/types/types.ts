import { cartReducerActionType, cartReducerStateType } from "../reducer/cartReducer"

//!Interface product fields START !//
export interface Product {
    id: number
    productName: string
    imageURL: string
    price: number
    description: string
    sellerName: string
    rating: number
    reviewCount: number
    stars: string[]
}
//!Interface product fields END !//

//! Global context provider children props START !//
export type GlobalContextProviderProps = {
    children: React.ReactNode;
};
//! Global context provider children props END !//

//!Global context initialize default values START !//
export type GlobalContextDefaultValues = {
    products: Product[];
    dispatch: React.Dispatch<cartReducerActionType>
    state: cartReducerStateType
};
//!Global context initialize default values END !//