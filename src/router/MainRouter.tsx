import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ProductList } from "../components/product/ProductList";
import { Likes } from "../pages/Likes";
import { Basket } from "../pages/Basket";

export const MainRouter = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            { index: true, element: <ProductList /> },
            { path: '/begendiklerim', element: <Likes /> },
            { path: '/sepetim', element: <Basket /> }
        ]
    }
]);