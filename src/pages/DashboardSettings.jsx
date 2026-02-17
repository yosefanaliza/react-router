export default function DashboardSettings() {
  return (
    <div>
      <h3>Settings</h3>
      <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
        Rendered at <code>/dashboard/settings</code>. Notice the sidebar stays in place &mdash;
        only this content area changes.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="checkbox" defaultChecked /> Email notifications
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="checkbox" /> Dark mode
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="checkbox" defaultChecked /> Two-factor authentication
        </label>
      </div>
    </div>
  );
}
