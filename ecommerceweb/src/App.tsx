import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'
import Pay from './components/Pay';
import Success from './components/Success';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  const router = createBrowserRouter([
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
      path: "/",
      element: <div>Página não encontrada.</div>,
      errorElement: <div>Error</div>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
