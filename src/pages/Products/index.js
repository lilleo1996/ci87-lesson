import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="products-page">
      <h2>Products</h2>
      <ul>
        <li onClick={() => navigate("/products/1")}>Product 1</li>
        <li onClick={() => navigate("/products/2")}>Product 2</li>
        <li onClick={() => navigate("/products/3")}>Product 3</li>
      </ul>
    </div>
  );
};

export default Products;
