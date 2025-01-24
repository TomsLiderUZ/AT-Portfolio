import { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Wrapper,
  NavWrapper,
  NavLineLeft,
  NavLineRight,
  NavHeader,
  NavHeaderIcon,
  NavContent,
  NavContMenu,
  NavContMenuTxt,
  NavContMenuIcon,
} from "./style";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [activeColor, setActiveColor] = useState({
    home: "gray",
    about: "gray",
    skills: "gray",
    education: "gray",
    work: "gray",
    contact: "gray",
  });
  const [scrollDirection, setScrollDirection] = useState(null);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };
  
  const location = useLocation();

  const scrollToSection = useCallback(() => {
    const sections = {
      "/g/home": 0,
      "/g/about": windowHeight,
      "/g/skills": windowHeight * 2,
      "/g/education": windowHeight * 3,
      "/g/work": windowHeight * 4,
      "/g/contact": windowHeight * 5,
    };
    const scrollPosition = sections[location.pathname] || 0;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }, [location, windowHeight]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = [
      { path: "/g/home", position: 0 },
      { path: "/g/about", position: window.innerHeight },
      { path: "/g/skills", position: window.innerHeight * 2 },
      { path: "/g/education", position: window.innerHeight * 3 },
      { path: "/g/work", position: window.innerHeight * 4 },
      { path: "/g/contact", position: window.innerHeight * 5 },
    ];

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].position - window.innerHeight / 2) {
        window.history.replaceState(null, "", sections[i].path); // Navigate
        updateActiveColor(sections[i].path);
        break;
      }
    }
  };


  const handleScrollDirection = () => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        console.log("Pastga qarab aylanyabdi");
        setScrollDirection("down");
            } else if (st < lastScrollTop) {
        console.log("Tepaga qarab aylanyabdi");
        setScrollDirection("up");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  };

  useEffect(() => {
    handleScrollDirection();
  }, []);




  const updateActiveColor = useCallback((path) => {
    setActiveColor({
      home: path === "/g/home" ? "orange" : "gray",
      about: path === "/g/about" ? "orange" : "gray",
      skills: path === "/g/skills" ? "orange" : "gray",
      education: path === "/g/education" ? "orange" : "gray",
      work: path === "/g/work" ? "orange" : "gray",
      contact: path === "/g/contact" ? "orange" : "gray",
    });
  }, []);

  useEffect(() => {
    if (location.pathname) {
      scrollToSection();
      updateActiveColor(location.pathname);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, scrollToSection, updateActiveColor, windowHeight]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };


    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <NavWrapper style={{ width: navToggle ? "20vh" : "7vh" }}>
        <NavLineRight>
          <NavHeader className="query-menu">
            <NavHeaderIcon onClick={toggleNav}>
              <i className="query-menu fa-solid fa-bars"></i>
            </NavHeaderIcon>
          </NavHeader>
          <NavContent>
            <NavContMenu className="query-menu" style={{color: activeColor.home}} to={"/g/home"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-house"></i>
              </NavContMenuIcon>
            </NavContMenu>
            <NavContMenu className="query-menu" style={{color: activeColor.about}} to={"/g/about"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-address-card"></i>
              </NavContMenuIcon>
            </NavContMenu>
            <NavContMenu className="query-menu" style={{color: activeColor.skills}} to={"/g/skills"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-book"></i>
              </NavContMenuIcon>
            </NavContMenu>
            <NavContMenu className="query-menu" style={{color: activeColor.education}} to={"/g/education"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-graduation-cap"></i>
              </NavContMenuIcon>
            </NavContMenu>
            <NavContMenu className="query-menu" style={{color: activeColor.work}} to={"/g/work"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-briefcase"></i>
              </NavContMenuIcon>
            </NavContMenu>
            <NavContMenu className="query-menu" style={{color: activeColor.contact}} to={"/g/contact"}>
              <NavContMenuIcon>
                <i className="query-menu fa-solid fa-address-book"></i>
              </NavContMenuIcon>
            </NavContMenu>
          </NavContent>
        </NavLineRight>
      </NavWrapper>

      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
