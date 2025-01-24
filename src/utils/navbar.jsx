import uniqueId from "../hooks/useId";
import Global from "../pages/global/index";
import NotPage from "../pages/notFound/index";

export const navbar = [
  {
    id: uniqueId,
    title: "Portfolio",
    path: "/g",
    element: <Global />,
    private: false,
    hidden: false,
  },

  {
    id: uniqueId,
    title: "Home - Portfolio",
    path: "/g/home",
    element: <Global />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "About - Portfolio",
    path: "/g/about",
    element: <Global />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Skills - Portfolio",
    path: "/g/skills",
    element: <Global />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Education - Portfolio",
    path: "/g/education",
    element: <Global />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Work - Portfolio",
    path: "/g/work",
    element: <Global />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Contact - Portfolio",
    path: "/g/contact",
    element: <Global />,
    private: false,
    hidden: false,
  },

  {
    id: uniqueId,
    title: "404 Not Found",
    path: "*",
    element: <NotPage />,
    private: false,
    hidden: false,
  },
];
