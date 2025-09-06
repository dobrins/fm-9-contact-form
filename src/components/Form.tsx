import { Formik, Form, Field } from "formik";
import { SignupSchema } from "../constants/schema";
import Toast from "./Toast";
import ErrorMsg from "./ErrorMsg";
import Label from "./Label";

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
          window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div
            aria-live="polite"
            className="sr-only"></div>
          {status === "success" && <Toast />}
          <div
            className={`form-control ${
              errors.firstName && touched.firstName ? "form-control--error" : ""
            }`}>
            <Label
              text="First Name"
              id="firstName"
            />
            <Field
              type="text"
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
            <ErrorMsg name="firstName" />
          </div>
          <div
            className={`form-control ${
              errors.lastName && touched.lastName ? "form-control--error" : ""
            }`}>
            <Label
              text="Last Name"
              id="lastName"
            />
            <Field
              type="text"
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
            <ErrorMsg name="lastName" />
          </div>
          <div
            className={`form-control form-control--full-width ${
              errors.email && touched.email ? "form-control--error" : ""
            }`}>
            <Label
              text="Email Address"
              id="email"
            />
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
            <ErrorMsg name="email" />
          </div>
          <div
            className="form-control form-control--full-width form-control--double-gap"
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
            <ErrorMsg name="queryType" />
          </div>
          <div
            className={`form-control form-control--full-width ${
              errors.message && touched.message ? "form-control--error" : ""
            }`}>
            <Label
              text="Message"
              id="message"
            />
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
            <ErrorMsg name="message" />
          </div>
          <div
            className={`form-control form-control--full-width ${
              errors.consent && touched.consent ? "form-control--error" : ""
            }`}>
            <div className="flex mb-200">
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
              <Label
                text="I consent to being contacted by the team"
                id="consent"
              />
            </div>
            <ErrorMsg name="consent" />
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
