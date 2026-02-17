import { NavLink, Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="app-layout">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            React Router v7
          </NavLink>
          <nav className="main-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/protected">Protected</NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="url-display">
          Current URL: <span className="url-highlight">{location.pathname}{location.search}</span>
        </div>
        <Outlet />
      </main>

      <footer className="footer">
        React Router v7 Demo &mdash; Demonstrating routing features with plain CSS
      </footer>
    </div>
  );
}
