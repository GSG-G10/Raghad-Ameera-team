import React from "react";

export default function GenerateLabelInput({
  inputName,
  inputType,
  inputPlaceholder,
  inputValue,
  labelContent,
  labelClass,
  onClick,
}) {
  return (
    <label className={labelClass}>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onClick={onClick}
      />
      {labelContent}
    </label>
  );
}
