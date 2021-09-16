import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "chart",
      xValues: [0],
      yValues: [0],
      type: "line",
      url: "http://www.letsracethailand.com/extensions/themes/gae_letracethailand101/staticfiles/images/placeholder-image.png"
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
      <section>
        <fieldset onChange={this.handleChange}>
          <label>
            Add the title of the chart
            <input
              type="text"
              value={this.state.title}
              placeholder="chart title"
              name="title"
            />
          </label>

          <label>
            Choose the chart type:
            <select name="type">
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
              value={this.state.xValues}
              placeholder="num1,num2,num3, ..."
              name="xValues"
            />
          </label>
          <label>
            Enter y-values seperated by a comma
            <input
              type="text"
              value={this.state.yValues}
              placeholder="num1,num2,num3, ..."
              name="yValues"
            />
          </label>
        </fieldset>
        <img src={this.state.url} alt="data chart" />
      </section>
    );
  }
}
