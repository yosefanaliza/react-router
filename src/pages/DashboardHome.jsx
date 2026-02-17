export default function DashboardHome() {
  return (
    <div>
      <h3>Welcome back!</h3>
      <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
        This is the dashboard index route &mdash; the default view when you visit <code>/dashboard</code>.
      </p>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$1,280</div>
          <div className="stat-label">Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">142</div>
          <div className="stat-label">Visitors</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">98%</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>
    </div>
  );
}
