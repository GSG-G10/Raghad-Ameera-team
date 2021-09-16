import React from "react";
import GenerateDiv from "../../basicTags/GenerateDiv";
import GenerateH3 from "../../basicTags/GenerateH3";
import TypeCard from "../../sections/typeSection/TypeCard";
import Pie from "../../../images/pie-chart.png";
import Bar from "../../../images/bar-chart.png";
import Line from "../../../images/line-chart.png";
import Doughnut from "../../../images/doughnut.png";
import Radar from "../../../images/radar-chart.png";
import Polar from "../../../images/polar.png";

export default function TypeSection({
  divClass1,
  divClass2,
  divClass3,
  divClass4,
  divClass5,
  divClass6,
  inputOnclick,
}) {
  return (
    <>
      <GenerateH3 hClass="fieldset-title" content="Chart Type" />
      <GenerateDiv
        divClass="cards-container"
        content={
          <>
            <TypeCard
              divClass={divClass1}
              imgUrl={Line}
              inputOnclick={inputOnclick}
              inputValue="line"
            />
            <TypeCard
              divClass={divClass2}
              imgUrl={Pie}
              inputOnclick={inputOnclick}
              inputValue="pie"
            />
            <TypeCard
              divClass={divClass3}
              imgUrl={Bar}
              inputOnclick={inputOnclick}
              inputValue="bar"
            />
            <TypeCard
              divClass={divClass4}
              imgUrl={Radar}
              inputOnclick={inputOnclick}
              inputValue="radar"
            />
            <TypeCard
              divClass={divClass5}
              imgUrl={Doughnut}
              inputOnclick={inputOnclick}
              inputValue="doughnut"
            />
            <TypeCard
              divClass={divClass6}
              imgUrl={Polar}
              inputOnclick={inputOnclick}
              inputValue="polarArea"
            />
          </>
        }
      />
    </>
  );
}
