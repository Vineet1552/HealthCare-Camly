import { END_POINTS } from "../constants/url";
import { UserAddress } from "../types/General";
import { User } from "../types/User";
import emptySplitApi from "../utils/rtk";

type CommonResponseType = {
  status: number;
  mesaage: string;
  token: string;
  user: User;
};

type GetAddressResponse = {
  status: number;
  mesaage: string;
  token: string;
  addresses: UserAddress[];
};

type PostAddAddressBody = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  zipcode: string;
  phone: string;
  user_id: any;
};

export const profileApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    postAddAddress: builder.mutation<
      CommonResponseType & { data: any },
      PostAddAddressBody
    >({
      query: (body) => ({
        url: END_POINTS.addAddress,
        method: "POST",
        body,
      }),
    }),

    GetAllAddress: builder.query<GetAddressResponse, { id: any }>({
      query: ({ id }) => ({
        url: `${END_POINTS.userAddress}/${id}`,
        method: "GET",
      }),
    }),

    postEditAddress: builder.mutation<
      CommonResponseType & { data: any },
      PostAddAddressBody
    >({
      query: (body) => ({
        url: END_POINTS.addAddress,
        method: "POST",
        body,
      }),
    }),

    deleteAddress: builder.mutation<
      CommonResponseType & { data: any },
      { id: number | undefined }
    >({
      query: ({ id }) => ({
        url: `${END_POINTS.userAddress}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostAddAddressMutation,
  useLazyGetAllAddressQuery,
  usePostEditAddressMutation,
  useDeleteAddressMutation,
} = profileApi;
