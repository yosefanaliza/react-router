import { NavLink, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="page">
      <span className="feature-badge feature-badge--nested">Layout Route + Nested Routes</span>
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">
        This dashboard uses a layout route pattern. The sidebar persists while the content
        area swaps via <code>&lt;Outlet /&gt;</code>.
      </p>

      <div className="dashboard-layout">
        <nav className="dashboard-sidebar">
          <NavLink to="/dashboard" end>
            Home
          </NavLink>
          <NavLink to="/dashboard/profile">Profile</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>

      <div className="code-block" style={{ marginTop: "24px" }}>
        <span className="code-comment">{"// Dashboard layout with nested routes"}</span>
        <br />
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="dashboard"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<Dashboard />"}</span>
        <span className="code-keyword">{"}"}</span>
        <span className="code-keyword">{">"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{"index"}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<DashboardHome />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="profile"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<DashboardProfile />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="settings"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<DashboardSettings />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        <span className="code-keyword">{"</Route>"}</span>
      </div>
    </div>
  );
}
