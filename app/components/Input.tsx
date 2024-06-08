import React, { ChangeEvent, FC } from "react";
import "../styles/input.css";
interface InputProps {
  label: React.ReactNode;
  type: string;
  value: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        name={name}
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
