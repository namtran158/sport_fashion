import React from "react";
import { IOptionSelect } from "src/pages/payment-check";
import Select from "react-select";

interface SelectProps {
  onChange: (option: any) => void;
  id: string;
  name: string;
  label: string;
  displayValue?: "vertical" | "horizontal";
  options: IOptionSelect[];
}

function SelectForm({
  id,
  name,
  onChange,
  label,
  options,
  displayValue,
}: SelectProps) {
  return (
    <div
      className={`${
        displayValue === "horizontal" && "flex gap-4 items-center"
      }`}
    >
      <label
        className={`capitalize block  pl-1 font-normal ${
          displayValue === "horizontal" ? "my-0" : "my-3"
        }`}
      >
        {label}
      </label>
      <Select
        className="flex-1"
        placeholder = "..."
        id={id}
        name={name}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}

export default SelectForm;
