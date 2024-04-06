import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";
import { API_URL } from "../constants/url";
import { resetAuth } from "../reducers/authSlice";
import { STORAGE_KEYS, getFromStorage } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;
    const { tempToken } = (getState() as RootState).auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else if (tempToken) {
      headers.set("authorization", `Bearer ${tempToken}`);
    }
    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs | any,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 400) {
    const errors = Object.values(result?.error?.data || {});
    console.log({ errors });
    if (errors?.length > 1 && errors[1] === 400) {
      return result;
    }

    if (errors?.length) {
      const error = errors[0] as any;
      if (error?.length) {
        console.log(error[0]);
      }
    }
  }
  if (result.error?.status === 401) {
    api.dispatch(resetAuth());
    if (window) {
      window.location.replace("/");
    }
  }

  return result;
};

const emptySplitApi = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["UNAUTHORIZED", "UNKNOWN_ERROR"],
  endpoints: () => ({}),
});

export default emptySplitApi;
