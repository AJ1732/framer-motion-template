import { Navigate, createBrowserRouter } from "react-router-dom";
import { TopScroll } from "../components/util/TopScroll";
import App from "../App";
import Home from "../pages/Home";
import Stagger from "../pages/Stagger";
import Basic from "../pages/Basic";
import RevealText from "../pages/RevealText";
import Scroll from "../pages/scroll/Scroll";
import PageScroll from "../pages/scroll/PageScroll";
import HorizontalScroll from "../pages/scroll/HorizontalScroll";
import FlipText from "../pages/FlipText";
import EnlargeScroll from "../pages/scroll/EnlargeScroll";
import BubbleText from "../pages/BubbleText";
import Hamburger from "../pages/Hamburger";

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
        path: "/flip",
        element: <FlipText />,
      },
      {
        path: "/bubble",
        element: <BubbleText />,
      },
      {
        path: "/hamburger",
        element: <Hamburger />,
      },
      {
        path: "/scroll",
        element: <Scroll />,
        children: [
          {
            path: "/scroll",
            element: (
              <p className="font-thin">Click on any of the Tabs above</p>
            ),
          },
          {
            path: "/scroll/horizontal",
            element: <HorizontalScroll />,
          },
          {
            path: "/scroll/page",
            element: <PageScroll />,
          },
          {
            path: "/scroll/enlarge",
            element: <EnlargeScroll />,
          },
        ],
      },
      {
        path: "/*",
        element: <Navigate to={`.`} />,
      },
    ],
  },
]);
