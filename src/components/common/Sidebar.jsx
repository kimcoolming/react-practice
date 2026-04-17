import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <p className="sidebar__title">STUDY MENU</p>

        <nav className="sidebar__nav">
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
    </aside>
  );
}

export default Sidebar;
