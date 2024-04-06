import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddressModal } from "../../Modals/addAddressModal";
import {
  useDeleteAddressMutation,
  useLazyGetAllAddressQuery,
} from "../../services/profile";

import { UserAddress } from "../../types/General";
import { showError, showToast } from "../../constants";

type AddressProps = {
  addressData: UserAddress[];
  getAllAddress: () => void;
};

export default function ManageAddress({
  addressData,
  getAllAddress,
}: AddressProps) {
  const [open, setOpen] = useState(false);
  const [addressById, setAddressById] = useState<UserAddress | any>();
  const [isAdd, setIsAdd] = useState(false);
  const [deleteAddress] = useDeleteAddressMutation();

  const handleDelete = async (id: number | undefined) => {
    try {
      const response = await deleteAddress({ id }).unwrap();
      showToast("User deleted successfully");
      getAllAddress();
      //   if (response?.status === 200) {

      //   }
    } catch (error: any) {
      console.log(error, "errror");
      showError(error?.data?.message || "");
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="tab-pane">
      <div className="account_head">
        <h3>Manage Addresses</h3>
        <div className="btn_flex">
          <Button
            className="btn_xsm btn_primary"
            onClick={() => {
              setOpen(true);
              setIsAdd(true);
            }}
          >
            Add New Address
          </Button>
        </div>
      </div>
      <div className="address_list">
        {addressData?.length > 0 ? (
          addressData?.map((item) => (
            <label key={item?.id}>
              <span>
                <strong>
                  {item?.first_name} {item?.last_name}
                </strong>
                {item?.address} {item?.city} , {item?.zipcode}
              </span>
              <div style={{ display: "flex", gap: "15px" }}>
                <span
                  onClick={() => {
                    setOpen(true);
                    setAddressById(item);
                    setIsAdd(false);
                  }}
                  className="c_edit"
                >
                  Edit
                </span>
                <span
                  onClick={() => {
                    handleDelete(item?.id);
                  }}
                  className="c_danger"
                >
                  Delete
                </span>
              </div>
            </label>
          ))
        ) : (
          <strong>No address added</strong>
        )}
      </div>
      <AddressModal
        open={open}
        onClose={handleCloseModal}
        setOpen={setOpen}
        getAllAddress={getAllAddress}
        addressById={addressById}
        isAdd={isAdd}
      />
    </div>
  );
}
