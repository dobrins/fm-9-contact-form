interface PassedProps {
  id: string;
  text: string;
}

export default function Label({ id, text }: PassedProps) {
  return (
    <label
      htmlFor={id}
      className="form-control__label">
      {text} <span className="required">*</span>
    </label>
  );
}
