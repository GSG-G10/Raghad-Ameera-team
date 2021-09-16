import React from "react";
import GenerateLabelInput from "../basicTags/GenerateLabelInput";
import GenerateH3 from "../basicTags/GenerateH3";

export default function DataSection({
  firstInputValue,
  secondInputValue,
  thirdInputValue,
}) {
  return (
    <>
      <GenerateH3 hClass="fieldset-title" content="Chart Data" />
      <GenerateLabelInput
        inputName="title"
        inputType="text"
        inputValue={firstInputValue}
        inputPlaceholder="chart title"
      />
      <GenerateLabelInput
        inputName="xValues"
        inputType="text"
        inputValue={secondInputValue}
        inputPlaceholder="x-values seperated by (,)"
      />
      <GenerateLabelInput
        inputName="yValues"
        inputType="text"
        inputValue={thirdInputValue}
        inputPlaceholder="y-values seperated by (,)"
      />
    </>
  );
}
