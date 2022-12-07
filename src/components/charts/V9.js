import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "../../App.css"

export default function V9Chart() {

    const [v9SectorEmissions, setV9SectorEmissions] = useState([]);
    const [v9SubSectorEmissions, setV9SubSectorEmissions] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v9/sector_co2_emissions")
            .then(response => {
                setV9SectorEmissions(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v9/sub_sector_co2_emissions")
            .then(response => {
                setV9SubSectorEmissions(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        labels: v9SectorEmissions.map(datapoint => datapoint.Sector),
        datasets: [
            {
                data: v9SectorEmissions.map(datapoint => datapoint.Data),
                pointRadius: 1,
                backgroundColor: [
                    "#22cfcf",
                    "#059bff",
                    "#ff4069",
                    "#ffc234"
                ],
            }
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "V9: CO2 Emissions by Sectors"
            },
            legend: {
                display: true,
                position: "bottom"
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label;
                        let value = context.formattedValue;

                        let sum = 0;
                        let dataArr = context.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += Number(data);
                        });

                        let text = [" " + (value * 100 / sum).toFixed(2) + '%'];
                        text.push("");
                        text.push("comprises: ");

                        v9SubSectorEmissions.forEach(datapoint => {
                            if (datapoint.Sector === label) {
                                text.push((datapoint.Data >= 10 ? "" : "  ") + datapoint.Data.toFixed(1) + "% " + datapoint.Sub_Sector);
                            }
                        })

                        return text;
                    }
                }
            }
        }
    };

    return (
        <div style={{ min_width: "5px" }}>
            <h1></h1>
            <article className="canvas-container">
                <Pie options={options} data={data} />
            </article>
            <p>The above charts looked total greenhouse gas emissions – this included other gases such as methane, nitrous oxide, and smaller trace gases. How does this breakdown look if we focus only on carbon dioxide (CO2) emissions? Where does our CO2 come from? This chart shows the distribution of CO2 emissions across sectors.</p>
            Sources:
            <ul>
                <li><a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector">description</a></li>
                <li><a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">data set</a></li>
            </ul>
        </div>
    );

}