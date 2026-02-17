import { Link } from "react-router";

export default function Home() {
  return (
    <div className="page">
      <span className="feature-badge feature-badge--route">Index Route</span>
      <h1 className="page-title">React Router v7 Feature Demo</h1>
      <p className="page-subtitle">
        An interactive demo showcasing the main features of React Router v7 (declarative mode).
        Click around to see each feature in action.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>NavLink & Active Styles</h3>
          <p>
            The navigation bar uses <code>&lt;NavLink&gt;</code> which automatically adds
            an <code>.active</code> class to the current route's link.
          </p>
          <Link to="/about">See it in action &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Dynamic Route Params</h3>
          <p>
            Product pages use <code>:productId</code> dynamic segments.
            The component reads the param with <code>useParams()</code>.
          </p>
          <Link to="/products">Browse products &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Nested Routes & Outlet</h3>
          <p>
            Product detail pages have nested tab routes (reviews, specs) that render
            inside an <code>&lt;Outlet /&gt;</code>.
          </p>
          <Link to="/products/mechanical-keyboard">See nested tabs &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Layout Routes</h3>
          <p>
            The dashboard uses a layout route with a sidebar that persists
            across all dashboard sub-pages.
          </p>
          <Link to="/dashboard">Open dashboard &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Search Params</h3>
          <p>
            The search page uses <code>useSearchParams()</code> to read and write
            query string values like <code>?q=keyboard&category=all</code>.
          </p>
          <Link to="/search?q=keyboard">Try searching &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Programmatic Navigation</h3>
          <p>
            The login page uses <code>useNavigate()</code> to redirect
            after a simulated login.
          </p>
          <Link to="/login">Try logging in &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>Redirects with Navigate</h3>
          <p>
            Visiting <code>/old-about</code> redirects to <code>/about</code> using
            the <code>&lt;Navigate&gt;</code> component.
          </p>
          <Link to="/old-about">Test redirect &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>404 Catch-All Route</h3>
          <p>
            Any unmatched URL falls through to a <code>path="*"</code> catch-all
            route that renders a 404 page.
          </p>
          <Link to="/this-does-not-exist">Visit a 404 &rarr;</Link>
        </div>

        <div className="feature-card">
          <h3>useLocation Hook</h3>
          <p>
            The URL bar at the top of every page uses <code>useLocation()</code> to
            display the current pathname and search params live.
          </p>
          <Link to="/search?q=demo&category=audio">See it update &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
