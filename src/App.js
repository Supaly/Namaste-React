import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";

const AppLayout = () => {
  return (
  <div className="AppLayout">
    <Header />
    <Outlet />
    <Footer></Footer>
  </div>
  );
}

const appRouter = createBrowserRouter([
  { path: '/',
    element: <AppLayout />,
    children: [ 
      { path: '/',
        element: <Body />
      },
      { path: '/about',
      element: <About />,
    },
    { path: '/contact',
      element: <Contact />,
    },
    { path: '/restaurents/:resId',
      element: <RestaurentMenu />,
    },
  ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider  router={appRouter}/>);