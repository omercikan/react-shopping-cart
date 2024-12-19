import { Product } from "../types/types";

export const InitialState: cartReducerStateType = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    likes: JSON.parse(localStorage.getItem('likes') || '[]')
}

export type cartReducerStateType = {
    cart: Product[];
    likes: Product[]
}

export enum cartActionTypeEnum {
    ADD_CART = "ADD_CART",
    ADD_LIKES = "ADD_LIKES",
    REMOVE_LIKES = "REMOVE_LIKES",
    REMOVE_CART = "REMOVE_CART",
}

export type cartReducerActionType = { type: cartActionTypeEnum.ADD_CART, payload: Product } | { type: cartActionTypeEnum.ADD_LIKES, payload: Product } | { type: cartActionTypeEnum.REMOVE_LIKES, payload: number } | { type: cartActionTypeEnum.REMOVE_CART, payload: number };

export const cartReducer = (state: cartReducerStateType, action: cartReducerActionType): cartReducerStateType => {
    switch(action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, {...action.payload, amount: 1}]
            }
        case "REMOVE_CART": 
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        case "ADD_LIKES":
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        case "REMOVE_LIKES":
            return {
                ...state,
                likes: state.likes.filter((product) => product.id !== action.payload)
            }
        default: 
            return state
    }
};