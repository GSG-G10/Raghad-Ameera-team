import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "chart",
      xValues: [0],
      yValues: [0],
      type: "line",
    };
  }
  handleChange = (event) => {
    if (event.target.name === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.name === "xValues") {
      this.setState({ xValues: event.target.value.split(",") });
    } else if (event.target.name === "yValues") {
      this.setState({ yValues: event.target.value.split(",") });
    } else {
      this.setState({ type: event.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  render() {
    return (
      <section>
        <label>
          Add the title of the chart
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="chart title"
            name="title"
          />
        </label>

        <label>
          Choose the chart type:
          <select name="type" onChange={this.handleChange}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="doughnut">Doughnut</option>
            <option value="pie">Pie</option>
            <option value="polarArea">Polar Area</option>
          </select>
        </label>

        <label>
          Enter x-values seperated by a comma
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.xValues}
            placeholder="num1,num2,num3, ..."
            name="xValues"
          />
        </label>
        <label>
          Enter y-values seperated by a comma
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.yValues}
            placeholder="num1,num2,num3, ..."
            name="yValues"
          />
        </label>
        <button type='button'>Submit</button>
      </section>
    );
  }
}
