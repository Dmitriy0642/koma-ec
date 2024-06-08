import React, { ChangeEvent, FC } from "react";
import "../styles/input.css";

interface TextAreaProps {
  label: React.ReactNode;
  value: string;
  name: string | undefined;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <div className="textarea-container">
      <label className="textarea-label">{label}</label>
      <textarea
        name={name}
        className="textarea-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
