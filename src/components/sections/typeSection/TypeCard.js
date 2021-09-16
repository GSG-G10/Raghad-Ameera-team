import React from "react";
import GenerateDiv from "../../basicTags/GenerateDiv";
import GenerateImg from "../../basicTags/GenerateImg";
import GenerateLabelInput from "../../basicTags/GenerateLabelInput";

export default function TypeCard({
  divClass,
  inputOnclick,
  inputValue,
  imgUrl,
}) {
  return (
    <GenerateDiv
      divClass={divClass}
      content={
        <GenerateLabelInput
          inputName="chart-type"
          inputType="radio"
          inputValue={inputValue}
          inputOnclick={inputOnclick}
          labelContent={
            <>
              <GenerateImg url={imgUrl} alt={`${inputValue} Chart`} />
              {inputValue}
            </>
          }
        />
      }
    />
  );
}
