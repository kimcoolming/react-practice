import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="inner header__inner">
        <h1 className="header__logo">
          <Link to="/" onClick={handleCloseMenu}>
            리액트 뿌수기
          </Link>
        </h1>

        <nav className="header__nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/guide" className={({ isActive }) => (isActive ? "active" : "")}>
            Guide
          </NavLink>
          <NavLink to="/components" className={({ isActive }) => (isActive ? "active" : "")}>
            Components
          </NavLink>
          <NavLink to="/study" className={({ isActive }) => (isActive ? "active" : "")}>
            Study
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="모바일 메뉴 열기"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="inner mobile-menu__inner">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleCloseMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/guide"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleCloseMenu}
            >
              Guide
            </NavLink>

            <NavLink
              to="/components"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleCloseMenu}
            >
              Components
            </NavLink>

            <NavLink
              to="/study"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleCloseMenu}
            >
              Study
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleCloseMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;