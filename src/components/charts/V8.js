import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import axios from "axios";
import "../../App.css";

const URL = "http://localhost:8080/data/";

export default function V8() {

    const [v8Data, setV8Data] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "v8/territorial_emissions")
            .then(response => {
                setV8Data(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    var data = {
        labels: v8Data.map(datapoint => datapoint.Date),
        datasets: [],
    };

    for (let key in v8Data[0]) {
        if (key != "Date") {
            data.datasets.push({
                label: key,
                data: v8Data.map(datapoint => datapoint[key]),
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: key
                },
                pointRadius: 1
            });
        }
    }


    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "V8: CO2 Emissions by Country"
            },
            subtitle: {
                display: true,
                text: "data supplement to the Global Carbon Budget 2021",
                padding: 10
            },
            legend: {
                display: true,
                position: "bottom"
            }
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "year",
                },
                title: {
                    display: true,
                    text: 'year CE'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'million tons CO2 per year'
                }
            }
        },
    };

    return (
        <div style={{ min_width: "5px"}}>
            <h1></h1>
            <article className="canvas-container">
                <Line   options={options} data={data}/>
            </article>
            <div>
                <br></br>
            <p>Accurate assessment of anthropogenic carbon dioxide (CO2) emissions and their redistribution among the atmosphere, ocean, and terrestrial biosphere in a changing climate is critical to better understand the global carbon cycle, support the development of climate policies, and project future climate change. Here we describe and synthesize datasets and methodology to quantify the five major components of the global carbon budget and their uncertainties. Fossil CO2 emissions (EFOS) are based on energy statistics and cement production data, while emissions from land-use change (ELUC), mainly deforestation, are based on land use and land-use change data and bookkeeping models. Atmospheric CO2 concentration is measured directly, and its growth rate (GATM) is computed from the annual changes in concentration. The ocean CO2 sink (SOCEAN) is estimated with global ocean biogeochemistry models and observation-based data products. The terrestrial CO2 sink (SLAND) is estimated with dynamic global vegetation models. The resulting carbon budget imbalance (BIM), the difference between the estimated total emissions and the estimated changes in the atmosphere, ocean, and terrestrial biosphere, is a measure of imperfect data and understanding of the contemporary carbon cycle. All uncertainties are reported as ±1σ. For the first time, an approach is shown to reconcile the difference in our ELUC estimate with the one from national greenhouse gas inventories, supporting the assessment of collective countries' climate progress.</p>
            Sources:
            <ul>
                <li><a href="https://essd.copernicus.org/articles/14/1917/2022/">description</a></li>
                <li><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">data set</a></li>
            </ul>
            <p></p>
            </div>
        </div>
    );

}