import React, { useState, useEffect } from "react";
import "./Style/Navbar.css";
import logo from "../Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import resume from "../Images/Resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const gap = 50;
      if (window.scrollY >= gap) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
    document.querySelector("ul").classList.toggle("open");
    document.body.classList.toggle("menu-open");
  };

  // const handleMenuToggle = () => {
  //   setMenuOpen(!menuOpen);
  //   console.log(menuOpen);
  //   document.querySelector("ul").classList.toggle("open");
  //   document.body.classList.toggle("menu-open");
  // };
  return (
    <div
      className={`navbar_main ${navbarTransparent ? "transparent" : "active"}`}
      style={{
        height: "50px",
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        transition: "all 0.5s ease",
        zIndex: "10000",
      }}
    >
      <div
        className="container"
        style={{
          height: "50px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "40px", height: "auto" }}
          />
        </div>
        <div
          style={{
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul>
            <li>
              <Link
                to="home-page"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
            <a href={resume} download={resume} style={{ color: "white" }}>
              <button className="btn1">Downlaod CV</button>
            </a>
          </ul>

          {menuOpen ? (
            <CloseIcon
              onClick={handleMenuToggle}
              style={{ display: "none" }}
              className="icons closeicon"
            />
          ) : (
            <MenuIcon
              onClick={handleMenuToggle}
              style={{ display: "none" }}
              className="icons menuicon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
