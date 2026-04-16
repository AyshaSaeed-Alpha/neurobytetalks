import React, { useState } from "react";
import { Container, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    { name: "About Us", slug: "/about-us", active: true },
  ];

  const activeItems = navItems.filter((item) => item.active);
  const leftItems = activeItems.slice(0, 2);
  const rightItems = activeItems.slice(2);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <header className="main-header">
      <Container>
        <nav className="header-nav">
          {/* Desktop View: Split Links */}
          <div className="nav-desktop">
            <div className="nav-side nav-left">
              {leftItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.slug)}
                  className="nav-item-btn"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="header-logo-centered">
              <Link to="/">
                <p className="header-logo-text">NeuroByteTalks </p>
              </Link>
            </div>

            <div className="nav-side nav-right">
              {rightItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.slug)}
                  className="nav-item-btn"
                >
                  {item.name}
                </button>
              ))}
              {authStatus && <LogoutBtn />}
            </div>
          </div>

          {/* Mobile View: Center Logo + Hamburger */}
          <div className="nav-mobile">
            <div className="mobile-placeholder"></div>
            <div className="header-logo-centered">
              <Link to="/">
                <p className="header-logo-text">NeuroByteTalks </p>
              </Link>
            </div>
            <button
              className="hamburger-btn"
              onClick={toggleDrawer}
              aria-label="Menu"
            >
              <div className={`bar ${isDrawerOpen ? "open" : ""}`}></div>
              <div className={`bar ${isDrawerOpen ? "open" : ""}`}></div>
              <div className={`bar ${isDrawerOpen ? "open" : ""}`}></div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Side Drawer (Mobile) */}
      <div className={`side-drawer ${isDrawerOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleDrawer}>
          &times;
        </button>
        <ul className="drawer-list">
          {activeItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  navigate(item.slug);
                  toggleDrawer();
                }}
                className="drawer-item"
              >
                {item.name}
              </button>
            </li>
          ))}
          {authStatus && (
            <li className="drawer-item">
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
    </header>
  );
}

export default Header;
