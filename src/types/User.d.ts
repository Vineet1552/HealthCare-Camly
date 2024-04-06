export interface User {
  token: string | null;
  address: string;
  documents: [];
  email: string;
  firstName: string;
  image: string;
  isEmailVerify: boolean;
  isPhoneVerify: boolean;
  isProfileComplete: boolean;
  isVerified: boolean;
  lastName: string;
  name: string;
  phone_number: string;
  countryCode: string;
  countryName: string;
  profession: number;
  id: string;
  DOB: string;
  accountNumber: string;
  address: string;
  height: string | number | undefined;
  weight: string | number | undefined;
  country: string;
  occupation: string;
  gender: string;
  marital_status: string;

  // step 1
  medical_reports: string;
  date: string;
  test_results: string;
  prescribed_by: string;
  test_center: string;

  // step 2
  health_condition_name: string;
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
  duration?: string;
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
}
