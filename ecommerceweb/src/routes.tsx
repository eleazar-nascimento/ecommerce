import { createBrowserRouter } from "react-router-dom";

import Pay from './components/Pay';
import Success from './components/Success';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {

        path: "/product-list",
        element: <ProductList />
    },
    {

        path: "/product",
        element: <Product />
    },
    {
        path: "/pay",
        element: <Pay />
    },
    {
        path: "/success",
        element: <Success />
    },
    {
        path: "*",
        element: <NotFound />,
        errorElement: <div>Página não encontrada.</div>
    }
])