import * as Yup from "yup";

const REQUIRED_TXT = "This field is required";
const VALID_EMAIL_TXT = "Please enter a valid email address";
const CONSENT_TXT = "To submit this form, please consent to being contacted";
const QUERY_TYPE_TXT = "Please select a query type";

export const SignupSchema = Yup.object({
  firstName: Yup.string().required(REQUIRED_TXT),
  lastName: Yup.string().required(REQUIRED_TXT),
  message: Yup.string().required(REQUIRED_TXT),
  email: Yup.string().email(VALID_EMAIL_TXT).required(REQUIRED_TXT),
  consent: Yup.bool().oneOf([true], CONSENT_TXT),
  queryType: Yup.string()
    .oneOf(["General Enquiry", "Support Request"], QUERY_TYPE_TXT)
    .required(QUERY_TYPE_TXT),
});
