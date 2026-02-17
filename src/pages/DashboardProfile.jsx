export default function DashboardProfile() {
  return (
    <div>
      <h3>Profile</h3>
      <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
        Rendered at <code>/dashboard/profile</code>. The sidebar layout stays mounted.
      </p>
      <table className="specs-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Jane Developer</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>jane@example.com</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Joined</td>
            <td>March 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
