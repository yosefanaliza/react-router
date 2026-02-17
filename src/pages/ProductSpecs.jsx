import { useOutletContext } from "react-router";

export default function ProductSpecs() {
  const { product } = useOutletContext();

  return (
    <div>
      <h3>Technical Specifications</h3>
      <table className="specs-table" style={{ marginTop: "12px" }}>
        <tbody>
          {Object.entries(product.specs).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box">
        <strong>Nested Route</strong>
        This component renders at <code>/products/:productId/specs</code>. The parent
        layout (product header, tabs) stays mounted while only this content swaps via{" "}
        <code>&lt;Outlet /&gt;</code>.
      </div>
    </div>
  );
}
