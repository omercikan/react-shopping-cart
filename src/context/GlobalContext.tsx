import { createContext, useEffect, useReducer } from "react";
import { GlobalContextDefaultValues, GlobalContextProviderProps } from "../types/types";
import { useFetchData } from "../hooks/useFetchData";
import { cartReducer, InitialState } from "../reducer/cartReducer";

const GlobalContextInitialValue: GlobalContextDefaultValues = {
    products: [], 
    dispatch: () => {},
    state: {
        cart: [],
        likes: []
    }
};

export const GlobalContext = createContext<GlobalContextDefaultValues>(GlobalContextInitialValue);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({children}) => {
    const { products }  = useFetchData("src/assets/product.json");
    const [state, dispatch] = useReducer(cartReducer, InitialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(state.likes))
    }, [state.likes]);

    return (
        <GlobalContext.Provider value={{products, state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
}