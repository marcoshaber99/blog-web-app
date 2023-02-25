// import react-router components from the react-router-dom library
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./style.scss"


const Layout = () =>  {
  return ( 
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// Create a BrowserRouter instance
const router = createBrowserRouter([

  //specify paths and elements
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  // Render the RouterProvider component with the router as a prop
  return (
    <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
    </div>
  )
}



export default App