import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { products } from "../data/products";

const categories = ["all", ...new Set(products.map((p) => p.category))];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (inputValue) params.q = inputValue;
    if (category !== "all") params.category = category;
    setSearchParams(params);
  };

  const handleCategoryChange = (cat) => {
    const params = {};
    if (query) params.q = query;
    if (cat !== "all") params.category = cat;
    setSearchParams(params);
  };

  const filteredProducts = products.filter((p) => {
    const matchesQuery =
      !query || p.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="page">
      <span className="feature-badge feature-badge--search">useSearchParams</span>
      <h1 className="page-title">Search</h1>
      <p className="page-subtitle">
        This page reads and writes URL search params using <code>useSearchParams()</code>.
        The URL updates as you search and filter.
      </p>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <div className="search-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="info-box">
        <strong>Current search params</strong>
        <code>
          {searchParams.toString()
            ? `?${searchParams.toString()}`
            : "(none)"}
        </code>
      </div>

      <div className="search-results">
        {filteredProducts.length === 0 ? (
          <p style={{ color: "var(--color-text-muted)", textAlign: "center", padding: "20px" }}>
            No products match your search.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="search-result-item">
              <span className="name">{product.name}</span>
              <span className="meta">
                {" "}&mdash; {product.category} &mdash; ${product.price.toFixed(2)}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="code-block" style={{ marginTop: "24px" }}>
        <span className="code-comment">{"// Reading and writing search params"}</span>
        <br />
        <span className="code-keyword">{"const "}</span>
        {"[searchParams, setSearchParams] = "}
        <span className="code-component">{"useSearchParams"}</span>
        {"();"}
        <br />
        <span className="code-keyword">{"const "}</span>
        {"query = searchParams."}
        <span className="code-component">{"get"}</span>
        {"("}
        <span className="code-string">{'"q"'}</span>
        {");"}
        <br /><br />
        <span className="code-comment">{"// Update the URL"}</span>
        <br />
        <span className="code-component">{"setSearchParams"}</span>
        {"({ "}
        <span className="code-string">{"q: \"keyboard\""}</span>
        {", "}
        <span className="code-string">{"category: \"peripherals\""}</span>
        {" });"}
      </div>
    </div>
  );
}
