import React, { Component } from "react";
import GenerateSection from "./components/basicTags/GenerateSection";
import OutputSection from "./components/sections/OutputSection";
import TypeSection from "./components/sections/typeSection/TypeSection";
import DataSection from "./components/sections/DataSection";
import "./App.css";
import GenerateDiv from "./components/basicTags/GenerateDiv";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Chart Title",
      xValues: [],
      yValues: [],
      type: "line",
      url: "http://www.letsracethailand.com/extensions/themes/gae_letracethailand101/staticfiles/images/placeholder-image.png",
    };
  }

  handleChange = (event) => {
    if (event.target.name === "title") {
      this.setState({ title: event.target.value }, () => {
        this.fetchChart();
      });
    } else if (event.target.name === "xValues") {
      this.setState(
        {
          xValues: event.target.value.split(","),
        },
        () => {
          this.fetchChart();
        }
      );
    } else if (event.target.name === "yValues") {
      this.setState(
        {
          yValues: event.target.value.split(","),
        },
        () => {
          this.fetchChart();
        }
      );
    } else {
      this.setState({ type: event.target.value }, () => {
        this.fetchChart();
      });
    }
  };

  fetchChart = () => {
    const { title, xValues, yValues, type } = this.state;
    const dataObj = {
      type: type,
      data: {
        labels: xValues,
        datasets: [
          {
            label: title,
            data: yValues,
          },
        ],
      },
    };
    fetch(`https://quickchart.io/chart?c=${JSON.stringify(dataObj)}`).then(
      ({ url }) => this.setState({ url: url })
    );
  };

  render() {
    return (
      <main className="chart-page-container">
        <GenerateSection
          sectionClass="fieldset-container"
          content={
            <>
              <h1>Create your chart now!</h1>
              <GenerateDiv
                divClass="container"
                content={
                  <>
                    <fieldset onChange={this.handleChange}>
                      <GenerateSection
                        sectionClass="type-section"
                        content={
                          <TypeSection
                            divClass1={`card-type ${
                              this.state.type === "line" ? "active" : ""
                            }`}
                            divClass2={`card-type ${
                              this.state.type === "pie" ? "active" : ""
                            }`}
                            divClass3={`card-type ${
                              this.state.type === "bar" ? "active" : ""
                            }`}
                            divClass4={`card-type ${
                              this.state.type === "radar" ? "active" : ""
                            }`}
                            divClass5={`card-type ${
                              this.state.type === "doughnut" ? "active" : ""
                            }`}
                            divClass6={`card-type ${
                              this.state.type === "polar" ? "active" : ""
                            }`}
                            inputOnclick={this.changeCard}
                          />
                        }
                      />
                      <GenerateSection
                        sectionClass="data-section"
                        content={
                          <DataSection
                            firstInputValue={this.state.title}
                            secondInputValue={this.state.xValues}
                            thirdInputValue={this.state.yValues}
                          />
                        }
                      />
                    </fieldset>
                  </>
                }
              />
            </>
          }
        />
        <GenerateSection
          sectionClass="output-section"
          content={
            <OutputSection
              hContent={`${this.state.type} Chart`}
              imgUrl={this.state.url}
            />
          }
        />
      </main>
    );
  }
}
