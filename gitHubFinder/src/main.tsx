import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import Home from './routes/Home';

// invocando componentes repetidos 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
    ],
  
  },
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* importando objeto criado acima para uso */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
