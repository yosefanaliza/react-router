import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="page not-found">
      <span className="feature-badge feature-badge--catch">Catch-All Route</span>
      <h1>404</h1>
      <p>
        No route matches <code>{location.pathname}</code>
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>

      <div className="code-block" style={{ marginTop: "32px", textAlign: "left", maxWidth: "500px", margin: "32px auto 0" }}>
        <span className="code-comment">{"// Catch-all route (must be last)"}</span>
        <br />
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="*"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<NotFound />"}</span>
        <span className="code-keyword">{"} />"}</span>
      </div>
    </div>
  );
}
