import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
