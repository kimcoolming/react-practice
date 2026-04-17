import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="inner header__inner">
        <h1 className="header__logo">
          <Link to="/">리액트 뿌수기</Link>
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
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
