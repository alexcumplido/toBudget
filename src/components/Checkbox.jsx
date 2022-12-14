import { CheckboxForm } from "./Style.jsx";

export const Checkbox = ({ id, check, onChange, label }) => {
  return (
    <CheckboxForm>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={check}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxForm>
  );
};
