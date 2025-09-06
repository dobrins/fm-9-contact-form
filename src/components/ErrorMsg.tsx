import { ErrorMessage } from "formik";

interface PassedProps {
  name: string;
}

export default function ErrorMsg({ name }: PassedProps) {
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <div
          id={`${name}-error`}
          className="error"
          role="alert">
          {msg}
        </div>
      )}
    </ErrorMessage>
  );
}
