import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Toast from "./Toast";

const REQUIRED_TXT = "This field is required";
const VALID_EMAIL_TXT = "Please enter a valid email address";
const CONSENT_TXT = "To submit this form, please consent to being contacted";
const QUERY_TYPE_TXT = "Please select a query type";

const SignupSchema = Yup.object({
  firstName: Yup.string().required(REQUIRED_TXT),
  lastName: Yup.string().required(REQUIRED_TXT),
  message: Yup.string().required(REQUIRED_TXT),
  email: Yup.string().email(VALID_EMAIL_TXT).required(REQUIRED_TXT),
  consent: Yup.bool().oneOf([true], CONSENT_TXT),
  queryType: Yup.string()
    .oneOf(["General Enquiry", "Support Request"], QUERY_TYPE_TXT)
    .required(QUERY_TYPE_TXT),
});

export const SignupForm = () => (
  <div className="form-container">
    <h1 className="form-container__heading">Contact Us</h1>

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        consent: false,
        queryType: "",
      }}
      validateOnMount
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
        try {
          await new Promise((r) => setTimeout(r, 1500));
          console.log(values);
          resetForm();
          setStatus("success");
        } finally {
          setSubmitting(false);
          await new Promise((r) => setTimeout(r, 5000));
          setStatus("");
        }
      }}>
      {({ errors, touched, isValid, dirty, isSubmitting, status }) => (
        <Form
          className="form"
          noValidate>
          {/* Global status (polite) */}
          <div
            aria-live="polite"
            className="sr-only"></div>
          {status === "success" && <Toast />}

          {/* First name */}
          <div
            className={`form-control ${
              errors.firstName && touched.firstName ? "form-control--error" : ""
            }`}>
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <Field
              id="firstName"
              name="firstName"
              className="input"
              required
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName && touched.firstName)}
              aria-describedby={
                errors.firstName && touched.firstName
                  ? "firstName-error"
                  : undefined
              }
            />
            <ErrorMessage name="firstName">
              {(msg) => (
                <div
                  id="firstName-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          {/* Last name */}
          <div
            className={`form-control ${
              errors.lastName && touched.lastName ? "form-control--error" : ""
            }`}>
            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <Field
              id="lastName"
              name="lastName"
              className="input"
              required
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName && touched.lastName)}
              aria-describedby={
                errors.lastName && touched.lastName
                  ? "lastName-error"
                  : undefined
              }
            />
            <ErrorMessage name="lastName">
              {(msg) => (
                <div
                  id="lastName-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          {/* Email */}
          <div
            className={`form-control form-control--full-width ${
              errors.email && touched.email ? "form-control--error" : ""
            }`}>
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="input"
              required
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email && touched.email)}
              aria-describedby={
                errors.email && touched.email ? "email-error" : undefined
              }
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div
                  id="email-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          {/* Radio group */}
          <div
            className="form-control form-control--full-width"
            aria-invalid={Boolean(errors.queryType && touched.queryType)}>
            <div
              id="queryTypeLegend"
              className="label">
              Query Type <span className="required">*</span>
            </div>

            <div
              className="query-type"
              role="radiogroup"
              aria-labelledby="queryTypeLegend">
              <label className="query-type__button">
                <Field
                  type="radio"
                  name="queryType"
                  value="General Enquiry"
                />
                General Enquiry
              </label>
              <label className="query-type__button">
                <Field
                  type="radio"
                  name="queryType"
                  value="Support Request"
                />
                Support Request
              </label>
            </div>

            <ErrorMessage name="queryType">
              {(msg) => (
                <div
                  id="queryType-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          {/* Message */}
          <div
            className={`form-control form-control--full-width ${
              errors.message && touched.message ? "form-control--error" : ""
            }`}>
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows="3"
              className="input"
              required
              aria-invalid={Boolean(errors.message && touched.message)}
              aria-describedby={
                errors.message && touched.message ? "message-error" : undefined
              }
            />
            <ErrorMessage name="message">
              {(msg) => (
                <div
                  id="message-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          {/* Consent */}
          <div
            className={`form-control form-control--full-width ${
              errors.consent && touched.consent ? "form-control--error" : ""
            }`}>
            <div className="flex">
              <Field
                id="consent"
                name="consent"
                type="checkbox"
                className="input"
                required
                aria-invalid={Boolean(errors.consent && touched.consent)}
                aria-describedby={
                  errors.consent && touched.consent
                    ? "consent-error"
                    : undefined
                }
              />
              <label htmlFor="consent">
                I consent to being contacted by the team{" "}
                <span className="required">*</span>
              </label>
            </div>
            <ErrorMessage name="consent">
              {(msg) => (
                <div
                  id="consent-error"
                  className="error"
                  role="alert">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={!(isValid && dirty) || isSubmitting}
            aria-busy={isSubmitting}>
            {isSubmitting ? <div className="loader"></div> : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
