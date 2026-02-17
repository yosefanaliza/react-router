import { useOutletContext } from "react-router";

export default function ProductIndex() {
  const { product } = useOutletContext();

  return (
    <div>
      <h3>Product Overview</h3>
      <p style={{ color: "var(--color-text-muted)", margin: "8px 0 16px" }}>
        {product.description}
      </p>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-value">${product.price.toFixed(2)}</div>
          <div className="stat-label">Price</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{product.category}</div>
          <div className="stat-label">Category</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{product.reviews.length}</div>
          <div className="stat-label">Reviews</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {(product.reviews.reduce((s, r) => s + r.stars, 0) / product.reviews.length).toFixed(1)}
          </div>
          <div className="stat-label">Avg Rating</div>
        </div>
      </div>

      <div className="info-box">
        <strong>Index Route</strong>
        This is the <code>index</code> route &mdash; the default child rendered when no nested
        path segment is present. Try clicking "Reviews" or "Specs" tabs above.
      </div>
    </div>
  );
}
