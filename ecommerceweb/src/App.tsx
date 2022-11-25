import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Success from './components/Success';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Olá Mundo!</div>
    },
    {
      path: "/pay",
      element: <div>pago</div>
    },
    {
      path: "/success",
      element: <Success />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
