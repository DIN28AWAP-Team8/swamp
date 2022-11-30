import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/data/";

export default function V6() {

    const [v6Data, setV6Data] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "v6/ice_core_co2")
            .then(response => {
                setV6Data(response.data.reverse());
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        labels: v6Data.map(datapoint => datapoint.Gas_Age),
        datasets: [
            {
                label: "CO2 Measurements",
                data: v6Data,
                yAxisID: "Value",
                parsing: {
                    xAxisKey: "Gas_Age",
                    yAxisKey: "Co2_Concentration",
                },
                pointRadius: 1
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "V6: Ice Core 800k Year composite Study CO2 Measurements"
            },
            subtitle: {
                display: true,
                text: "atmospheric CO2 concentration by two complete glacial cycles to 800,000-years before present",
                padding: 10
            },
            legend: {
                display: true,
                position: "bottom"
            },
            scales: {
                x: {
                    type: "linear"
                }
            }
        }
    };

    return (
        <div style={{ width: "1000px" }}>
            <h1></h1>
            <Line options={options} data={data} />
            <p>The European Project for Ice Coring in Antarctica Dome ice core from Dome C (EDC) has allowed for the reconstruction of atmospheric CO2 concentrations for the last 800,000 years. Here we revisit the oldest part of the EDC CO2 record using different air extraction methods and sections of the core. For our established cracker system, we found an analytical artifact, which increases over the deepest 200 m and reaches 10.1 +/- 2.4 ppm in the oldest/deepest part. The governing mechanism is not yet fully understood, but it is related to insufficient gas extraction in combination with ice relaxation during storage and ice structure. The corrected record presented here resolves partly - but not completely - the issue with a different correlation between CO2 and Antarctic temperatures found in this oldest part of the records. In addition, we provide here an update of 800,000 years atmospheric CO2 history including recent studies covering the last glacial cycle.</p>
            Sources:
            <ul>
                <li><a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975">description</a></li>
                <li><a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">data set</a></li>
            </ul>
        </div>
    );

}