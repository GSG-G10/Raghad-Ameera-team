import React from "react";
import GenerateH3 from "../basicTags/GenerateH3";
import GenerateDiv from "../basicTags/GenerateDiv";
import GenerateImg from "../basicTags/GenerateImg";

export default function OutputSection({ hContent, imgUrl }) {
  return (
    <>
      <GenerateH3 hClass="output-title" content={hContent} />
      <GenerateDiv
        divClass="output-container"
        content={<GenerateImg url={imgUrl} alt="data chart" />}
      />
    </>
  );
}
