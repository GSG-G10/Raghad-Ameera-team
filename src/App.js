import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "chart",
      xValues: [0],
      yValues: [0],
    };
  }
  handleInputs = (event) => {
    if (event.target.name === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.name === "xValues") {
      this.setState({ xValues: event.target.value.split(",") });
    } else {
      this.setState({ yValues: event.target.value.split(",") });
    }
  };

  render() {
    return (
      <section>
        <label>
          Add the title of the chart
          <input
            type="text"
            onChange={this.handleInputs}
            value={this.state.title}
            placeholder="chart title"
            name="title"
          />
        </label>
        <label>
          Enter x-values seperated by a comma
          <input
            type="text"
            onChange={this.handleInputs}
            value={this.state.xValues}
            placeholder="num1,num2,num3, ..."
            name="xValues"
          />
        </label>
        <label>
          Enter y-values seperated by a comma
          <input
            type="text"
            onChange={this.handleInputs}
            value={this.state.yValues}
            placeholder="num1,num2,num3, ..."
            name="yValues"
          />
        </label>
      </section>
    );
  }
}
