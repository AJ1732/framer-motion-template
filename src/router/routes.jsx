import { Navigate, createBrowserRouter } from "react-router-dom";
import { TopScroll } from "../components/TopScroll";
import App from "../App";
import Home from "../pages/Home";
import Stagger from "../pages/Stagger";
import Basic from "../pages/Basic";
import RevealText from "../pages/RevealText";
import Scroll from "../pages/Scroll";
import HorizontalScroll from "../pages/HorizontalScroll";
import PageScroll from "../pages/PageScroll";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopScroll />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stagger",
        element: <Stagger />,
      },
      {
        path: "/basic",
        element: <Basic />,
      },
      {
        path: "/reveal",
        element: <RevealText />,
      },
      {
        path: "/scroll",
        element: <Scroll />,
        children: [
          {
            path: "/scroll",
            element: <p className="font-thin">Click on any of the Tabs above</p>,
          },
          {
            path: "/scroll/horizontal",
            element: <HorizontalScroll />,
          },
          {
            path: "/scroll/page",
            element: <PageScroll />,
          },
        ]
      },
      {
        path: "/*",
        element: <Navigate to={`.`} />,
      },
    ],
  },
]);
