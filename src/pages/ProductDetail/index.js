import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const urlParams = useParams();
  return (
    <div className="product-detail">
      <h4>Product {urlParams.productId}</h4>
    </div>
  );
};

export default ProductDetail;
