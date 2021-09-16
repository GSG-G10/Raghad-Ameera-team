import React from "react";

export default function GenerateSection({ sectionClass, content }) {
  return <section className={sectionClass}>{content}</section>;
}
