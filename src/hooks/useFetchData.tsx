import {  useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../types/types';

export const useFetchData = (url: string) => {
    const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
        (async () => {
            const request = await axios.get(url);
            setProducts(request.data)
        })();
    }, [url]);

    return { products };
}
