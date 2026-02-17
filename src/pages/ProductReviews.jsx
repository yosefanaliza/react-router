import { useOutletContext } from "react-router";

export default function ProductReviews() {
  const { product } = useOutletContext();

  return (
    <div>
      <h3>Customer Reviews</h3>
      <div style={{ marginTop: "12px" }}>
        {product.reviews.map((review, i) => (
          <div key={i} className="review">
            <div className="review-header">
              <span className="review-author">{review.author}</span>
              <span className="review-stars">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </span>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="info-box">
        <strong>Nested Route</strong>
        This component renders at <code>/products/:productId/reviews</code>. It uses{" "}
        <code>useOutletContext()</code> to receive product data from the parent route.
      </div>
    </div>
  );
}
