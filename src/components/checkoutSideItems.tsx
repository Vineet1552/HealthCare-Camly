type CheckoutSideItemsTypes = {
  product_id: string;
  product_image: string;
  product_name: string;
  product_price: string;
  product_quantity: string;
};

const CheckoutSideItems = ({
  product_id,
  product_image,
  product_name,
  product_price,
  product_quantity,
}: CheckoutSideItemsTypes) => {
  return (
    <>
      <div className="single">
        <figure>
          <img src={product_image} alt="Image" />
        </figure>
        <div className="info">
          <h4>{product_name}</h4>
          <p>
            Price: <strong>{product_price}</strong>
          </p>
          <p>
            QTY: <strong>{product_quantity}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutSideItems;
