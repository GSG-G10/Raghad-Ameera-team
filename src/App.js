import React, { Component } from "react";
import "./App.css";
import Pie from "./images/pie-chart.png";
import Bar from "./images/bar-chart.png";
import Line from "./images/line-chart.png";
import Doughnut from "./images/doughnut.png";
import Radar from "./images/radar-chart.png";
import Polar from "./images/polar.png";
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
        <section className="fieldset-container">
          <h1>Create your chart now!</h1>

          <fieldset onChange={this.handleChange}>
            <section className="type-section">
              <h3 className="fieldset-title">Chart Type</h3>
              <div className="cards-container">
                <div
                  className={`card-type ${
                    this.state.type === "line" ? "active" : ""
                  }`}
                >
                  <label className="type-label">
                    <img src={Line} alt="line chart" />
                    <input
                      onClick={this.changeCard}
                      defaultChecked
                      type="radio"
                      value="line"
                      name="chart-type"
                    />
                    Line
                  </label>
                </div>

                <div
                  className={`card-type ${
                    this.state.type === "pie" ? "active" : ""
                  }`}
                >
                  {" "}
                  <label className="type-label">
                    <img src={Pie} alt="pie chart" />
                    <input type="radio" value="pie" name="chart-type" />
                    Pie
                  </label>
                </div>
                <div
                  className={`card-type ${
                    this.state.type === "bar" ? "active" : ""
                  }`}
                >
                  {" "}
                  <label className="type-label">
                    <img src={Bar} alt="bar chart" />
                    <input type="radio" value="bar" name="chart-type" />
                    Bar
                  </label>
                </div>
                <div
                  className={`card-type ${
                    this.state.type === "doughnut" ? "active" : ""
                  }`}
                >
                  {" "}
                  <label className="type-label">
                    <img src={Doughnut} alt="doughnut chart" />
                    <input type="radio" value="doughnut" name="chart-type" />
                    Doughnut
                  </label>
                </div>
                <div
                  className={`card-type ${
                    this.state.type === "radar" ? "active" : ""
                  }`}
                >
                  {" "}
                  <label className="type-label">
                    <img src={Radar} alt="radar chart" />
                    <input type="radio" value="radar" name="chart-type" />
                    Radar
                  </label>
                </div>
                <div
                  className={`card-type ${
                    this.state.type === "polarArea" ? "active" : ""
                  }`}
                >
                  {" "}
                  <label className="type-label">
                    <img src={Polar} alt="polar chart" />
                    <input type="radio" value="polarArea" name="chart-type" />
                    Polar
                  </label>
                </div>
              </div>
            </section>

            <section className="data-section">
              <h3 className="fieldset-title">Chart Data</h3>

              <label>
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="chart title"
                  name="title"
                />
              </label>

              <label>
                <input
                  type="text"
                  value={this.state.xValues}
                  placeholder="x-values seperated by (,)"
                  name="xValues"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.yValues}
                  placeholder="y-values seperated by (,)"
                  name="yValues"
                />
              </label>
            </section>
          </fieldset>
        </section>
        <section className="output-section">
          <h3 className="output-title">{`${this.state.type} Chart`}</h3>
          <div className="output-container">
            <img src={this.state.url} alt="data chart" />
          </div>
        </section>
      </main>
    );
  }
}
