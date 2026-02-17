import { useState } from "react";
import { Navigate, Link } from "react-router";

export default function ProtectedPage() {
  // Simulated auth state — in a real app this would come from context/store
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="page">
        <span className="feature-badge feature-badge--redirect">Navigate (Redirect)</span>
        <h1 className="page-title">Protected Route</h1>
        <p className="page-subtitle">
          This page demonstrates route protection. Toggle the auth state to see how
          <code> &lt;Navigate&gt;</code> can redirect unauthenticated users.
        </p>

        <div className="card">
          <h3>You are not authenticated</h3>
          <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
            In a real app, this would automatically redirect to <code>/login</code> using{" "}
            <code>{"<Navigate to=\"/login\" />"}</code>. For this demo, you can toggle the
            state to see the protected content.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setIsAuthenticated(true)}
          >
            Simulate Login
          </button>
        </div>

        <div className="code-block" style={{ marginTop: "16px" }}>
          <span className="code-comment">{"// Protected route pattern"}</span>
          <br />
          <span className="code-keyword">{"if "}</span>
          {"(!isAuthenticated) {"}
          <br />
          {"  "}
          <span className="code-keyword">{"return "}</span>
          <span className="code-component">{"<Navigate "}</span>
          <span className="code-string">{'to="/login"'}</span>
          <span className="code-component">{" replace />"}</span>
          <br />
          {"}"}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <span className="feature-badge feature-badge--redirect">Protected Content</span>
      <h1 className="page-title">Secret Dashboard</h1>
      <p className="page-subtitle">
        You have access to this protected content.
      </p>

      <div className="card">
        <h3>Authenticated!</h3>
        <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
          You're seeing this because you passed the auth check. In a real app, this state
          would persist via context or a session.
        </p>
        <button
          className="btn btn-outline"
          onClick={() => setIsAuthenticated(false)}
        >
          Simulate Logout
        </button>
      </div>
    </div>
  );
}
