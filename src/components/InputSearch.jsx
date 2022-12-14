import { InputSearchStyled } from "./Style.jsx";

export const InputSearch = ({ label, id, value, onChange }) => {
  return (
    <InputSearchStyled>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} value={value} onChange={onChange} />
    </InputSearchStyled>
  );
};
