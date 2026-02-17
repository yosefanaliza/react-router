import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a login request
    setTimeout(() => {
      setIsLoading(false);
      // Programmatic navigation after login
      navigate("/dashboard", { state: { fromLogin: true } });
    }, 1000);
  };

  return (
    <div className="page">
      <div className="card">
        <span className="feature-badge feature-badge--nav">useNavigate</span>
        <h2 style={{ marginBottom: "4px" }}>Login</h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          After login, <code>useNavigate()</code> redirects to the dashboard.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" defaultValue="jane@example.com" />
          <label>Password</label>
          <input type="password" defaultValue="password123" />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
            style={{ marginTop: "8px" }}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="code-block" style={{ marginTop: "20px", textAlign: "left" }}>
          <span className="code-keyword">{"const "}</span>
          {"navigate = "}
          <span className="code-component">{"useNavigate"}</span>
          {"();"}
          <br /><br />
          <span className="code-comment">{"// After successful login"}</span>
          <br />
          <span className="code-component">{"navigate"}</span>
          {"("}
          <span className="code-string">{'"/dashboard"'}</span>
          {");"}
        </div>
      </div>
    </div>
  );
}
