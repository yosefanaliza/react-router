import { useLocation } from "react-router";

export default function About() {
  const location = useLocation();

  return (
    <div className="page">
      <span className="feature-badge feature-badge--route">Basic Route</span>
      <h1 className="page-title">About</h1>
      <p className="page-subtitle">
        This is a basic route mapped to <code>/about</code>.
      </p>

      <div className="card">
        <h3>How this route works</h3>
        <div className="code-block">
          <span className="code-comment">{"// In App.jsx"}</span>
          <br />
          <span className="code-keyword">{"<Route "}</span>
          <span className="code-string">{'path="about"'}</span>
          <span className="code-keyword">{" element={"}</span>
          <span className="code-component">{"<About />"}</span>
          <span className="code-keyword">{"} />"}</span>
        </div>
      </div>

      <div className="card">
        <h3>useLocation() data</h3>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "12px" }}>
          The <code>useLocation()</code> hook gives you access to the current location object:
        </p>
        <div className="code-block">
          {JSON.stringify(location, null, 2)}
        </div>
      </div>

      <div className="info-box">
        <strong>Redirect demo</strong>
        The route <code>/old-about</code> redirects here using{" "}
        <code>{"<Navigate to=\"/about\" replace />"}</code>. Try visiting{" "}
        <a href="/old-about">/old-about</a> to see it in action.
      </div>
    </div>
  );
}
