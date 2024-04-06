/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

type SimilarProductType = {
  product_id: string;
  product_image: string;
  product_desc: string;
  product_name: string;
  product_price: string;
  product_addCart: string;
};

const SimilarProductCard = ({
  product_id,
  product_image,
  product_desc,
  product_name,
  product_price,
  product_addCart,
}: SimilarProductType) => {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="product_single">
        <a onClick={() => navigate("/product-details")}>
          <figure>
            {/* <img src="static/images/product_attachment_01.jpg" alt="Image" /> */}
            <img src={product_image} alt="Image" />
          </figure>
        </a>
        <h3>
          <a onClick={() => navigate("/product-details")}>{product_name}</a>
        </h3>
        <p>{product_desc}</p>
        <div className="btn_flex">
          <a onClick={() => navigate("/my-cart")} className="btnn btn_primary">
            {product_addCart}
          </a>
          <p>{product_price}</p>
        </div>
      </div>
    </>
  );
};

export default SimilarProductCard;
