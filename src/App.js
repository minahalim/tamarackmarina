import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

import "./output.css";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import ComingSoon from "./components/ComingSoon";
import Services from "./components/Services";
import Rentals from "./components/Rentals";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
          {
            path: "about-us",
            element: <AboutUs />,
          },
          {
            path: "contact-us",
            element: <ContactUs />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "rentals",
            element: <Rentals />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
