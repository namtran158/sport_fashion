import React from "react";

export interface InputData {
  name: string;
  label: string;
  type: string;
  onChange: any;
  value: string;
}

function InputForm({ name, label, type, onChange, value }: InputData) {
  return (
    <>
      <label htmlFor={name} className="capitalize block my-3 pl-1 font-normal">
        {label}
      </label>
      <input
        className="w-full h-10 p-3 border rounded-md focus:outline-0 "
        id={name}
        name={name}
        type={type}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputForm;
