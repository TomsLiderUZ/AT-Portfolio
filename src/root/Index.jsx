import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from '../components/NavBar/Navbar';
import { navbar } from "../utils/navbar";
import NotPage from "../pages/notFound/index";
import useTitle from "../hooks/useTitle";

function Index() {
  const [pageTitle, setPageTitle] = useState("Portfolio");
  const location = useLocation();

  useTitle(pageTitle);

  useEffect(() => {
    const currentNavItem = navbar.find(
      ({ path }) =>
        path === location.pathname ||
        (path === "*" && location.pathname.includes(path))
    );

    if (currentNavItem) {
      setPageTitle(currentNavItem.title);
    } else {
      setPageTitle("404 Not Found");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        {navbar.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="/" element={<Navigate to="/g" />} />
        <Route path="/g/" element={<Navigate to="/g/home" />} />
        <Route path="/g" element={<Navigate to="/g/home" />} />
        <Route path="*" element={<NotPage />} />
      </Route>
    </Routes>
  );
}

export default Index;
