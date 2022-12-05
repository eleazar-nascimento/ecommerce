import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'
import Pay from './components/Pay';
import Success from './components/Success';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {

      path: "/",
      element: <Home />
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
