import { useParams, NavLink, Outlet, Link } from "react-router";
import { products } from "../data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="page">
        <h1 className="page-title">Product not found</h1>
        <p>No product with ID: <code>{productId}</code></p>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: "16px" }}>
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="page product-detail">
      <Link to="/products" className="back-link">
        &larr; Back to Products
      </Link>

      <span className="feature-badge feature-badge--nested">Nested Routes + Outlet</span>

      <div className="product-header">
        <div>
          <h1 className="page-title">{product.name}</h1>
          <p className="page-subtitle">{product.description}</p>
        </div>
        <span className="price">${product.price.toFixed(2)}</span>
      </div>

      <div className="info-box">
        <strong>useParams() result</strong>
        <code>{`{ productId: "${productId}" }`}</code> &mdash; extracted from the URL
        <code> /products/:productId</code>
      </div>

      {/* Nested route tabs */}
      <nav className="product-tabs">
        <NavLink to="" end>
          Overview
        </NavLink>
        <NavLink to="reviews">
          Reviews ({product.reviews.length})
        </NavLink>
        <NavLink to="specs">Specs</NavLink>
      </nav>

      {/* Outlet renders the matched nested route */}
      <div className="product-tab-content">
        <Outlet context={{ product }} />
      </div>

      <div className="code-block">
        <span className="code-comment">{"// Nested routes render inside <Outlet />"}</span>
        <br />
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="products/:productId"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<ProductDetail />"}</span>
        <span className="code-keyword">{"}"}</span>
        <span className="code-keyword">{">"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{"index"}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<ProductIndex />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="reviews"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<ProductReviews />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        {"  "}
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="specs"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<ProductSpecs />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br />
        <span className="code-keyword">{"</Route>"}</span>
      </div>
    </div>
  );
}
