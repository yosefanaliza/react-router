import { Link } from "react-router";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="page">
      <span className="feature-badge feature-badge--params">Dynamic Params</span>
      <h1 className="page-title">Products</h1>
      <p className="page-subtitle">
        Click any product to navigate to a dynamic route using <code>:productId</code>.
        Each product card is a <code>&lt;Link&gt;</code> component.
      </p>

      <div className="code-block">
        <span className="code-comment">{"// Route definition"}</span>
        <br />
        <span className="code-keyword">{"<Route "}</span>
        <span className="code-string">{'path="products/:productId"'}</span>
        <span className="code-keyword">{" element={"}</span>
        <span className="code-component">{"<ProductDetail />"}</span>
        <span className="code-keyword">{"} />"}</span>
        <br /><br />
        <span className="code-comment">{"// Reading the param"}</span>
        <br />
        <span className="code-keyword">{"const "}</span>
        {"{ productId } = "}
        <span className="code-component">{"useParams"}</span>
        {"();"}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
