type checkoutAddresstype = {
    product_id: string;
    user_name: string,
    user_address: string
}

const CheckoutAddress = ({
    product_id,
    user_name,
    user_address
}: checkoutAddresstype) => {
  return (
    <>
      <div className="address_list">
        <label>
          <span>
            <strong>{user_name}</strong>
            {user_address}
          </span>
          <input type="radio" name="address" value="address1" />
        </label>
      </div>
    </>
  );
};

export default CheckoutAddress;