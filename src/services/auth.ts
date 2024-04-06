import { END_POINTS } from "../constants/url";
import { User } from "../types/User";
import emptySplitApi from "../utils/rtk";

type CommonResponseType = {
  status: number;
  mesaage: string;
  message: string;
  token: string;
  user: User;
};

type PostAuthBody = {
  email?: any;
  phone_number?: any;
  countryCode?: any;
  countryName?: any;
};

type PostLoginBody = {
  email?: any;
  password?: any;
  phone?: any;
  countryCode?: any;
  countryName?: any;
};

type PostForgotPasswordBody = {
  key: string;
};

type PostVerifyOtpBody = {
  email?: any;
  phone_number?: any;
  countryCode?: any;
  countryName?: any;
  id: number;
};

type ForgotPassBody = {
  email?: any;
  phone_number?: any;
  otp: string;
};

type PostSetPasswordBody = {
  email?: string;
  phone_number?: string;
  new_password: string;
};

type UpdateProfile = {
  email?: string;
  fullName?: string;
  phone?: string;
  countryCode?: string;
  profile_photo?: any;
  DOB?: string;
  gender?: string;
  height?: string;
  weight?: string;
  marital_status?: string;
  country?: string;
  occupation?: string;
  id?: any;

  // step 1
  medical_reports?: string;
  date?: string;
  test_results?: string;
  prescribed_by?: string;
  test_center?: string;

  // step 2
  // healthConditionName?: string,
  health_condition_name?: string;
  first_diagnosed_on?: string;
  status?: number;
  treated_by?: string;
  medication_taken?: string;
  additional_note?: string;

  // step 3
  medication_condition_name?: string;
  medication_concetration?: string;
  medication_dose?: string;
  medication_duration?: string;
  medication_taken_dose?: string;
  medication_prescribed_by?: string;

  // step 4
  allergy_name?: string;
  triggered_by?: string;
  reaction?: string;
  // duration?: string,
  frequency?: string;
  allergy_first_diognosed_on?: string;

  // step 5
  hospital_name?: string;
  admission_date?: string;
  discharge_date?: string;
  provider_name?: string;
  reason_of_condition?: string;

  // step 6
  surgery_name?: string;
  conducted_on?: string;
  operated_by?: string;
  implant?: string;
  additional_notes_surgery?: string;

  // step 7
  vaccination_name?: string;
  vaccination_on?: string;
  vaccine_name?: string;
  vaccine_details?: string;
  vaccine_add_notes?: string;
};

type GetProfileBody = {
  id: any;
};

type changePasswordBody = {
  current_password: string;
  new_password: string;
  id: any;
};

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    postSignUp: builder.mutation<
      CommonResponseType & { data: any },
      PostAuthBody
    >({
      query: (body) => ({
        url: END_POINTS.signUp,
        method: "POST",
        body,
      }),
    }),

    testApi: builder.query<CommonResponseType, {}>({
      query: () => ({
        url: END_POINTS.test,
        method: "GET",
      }),
    }),

    postLogin: builder.mutation<
      CommonResponseType & { data: User },
      PostLoginBody
    >({
      query: (body) => ({
        url: END_POINTS.login,
        method: "POST",
        body,
      }),
    }),

    postVerifyOtp: builder.mutation<
      CommonResponseType & { data: User },
      PostVerifyOtpBody
    >({
      query: (body) => ({
        url: `${END_POINTS.register}`,
        method: "POST",
        body,
      }),
    }),

    postProfileSetup: builder.mutation<
      CommonResponseType & { data: any },
      UpdateProfile
    >({
      query: (body) => ({
        url: END_POINTS.profileSetup,
        method: "POST",
        body,
      }),
    }),

    postForgotPass: builder.mutation<
      CommonResponseType & { data: User },
      ForgotPassBody
    >({
      query: (body) => ({
        url: `${END_POINTS.forgotPassword}`,
        method: "POST",
        body,
      }),
    }),

    postResetPassword: builder.mutation<
      CommonResponseType & { data: User },
      PostSetPasswordBody
    >({
      query: (body) => ({
        url: `${END_POINTS.resetPassword}`,
        method: "POST",
        body,
      }),
    }),

    PostGetProfile: builder.mutation<
      CommonResponseType & { data: User },
      GetProfileBody
    >({
      query: (body) => ({
        url: END_POINTS.getProfile,
        method: "POST",
        body,
      }),
    }),

    changePassword: builder.mutation<
      CommonResponseType & { data: User },
      changePasswordBody
    >({
      query: (body) => ({
        url: END_POINTS.changePassword,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePostSignUpMutation,
  useLazyTestApiQuery,
  usePostVerifyOtpMutation,
  usePostProfileSetupMutation,
  usePostLoginMutation,
  usePostForgotPassMutation,
  usePostResetPasswordMutation,
  usePostGetProfileMutation,
  useChangePasswordMutation,
} = authApi;
