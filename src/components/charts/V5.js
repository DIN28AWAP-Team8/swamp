import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "../../App.css"

const URL = "http://localhost:8080/data/";

export default function V5() {

    const [v5Data, setV5Data] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "v5/vostok_ice_core_co2")
            .then(response => {
                setV5Data(response.data.reverse());
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        labels: v5Data.map(datapoint => datapoint.Mean_Air_Age),
        datasets: [
            {
                label: "CO2 Measurements",
                data: v5Data,
                parsing: {
                    xAxisKey: "Mean_Air_Age",
                    yAxisKey: "Co2_Concentration",
                },
                pointRadius: 1
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
                text: "V5: Vostok Ice Core CO2 Measurements"
            },
            subtitle: {
                display: true,
                text: "data from 417160 - 2342 years before present",
                padding: 10
            },
            legend: {
                display: true,
                position: "bottom"
            }
        },
        scales: {
            x: {
                type: "linear",
                reverse: true,
                title: {
                    display: true,
                    text: 'years before present'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'CO2 concentration in ppmv'
                }
            }
        }
    };

    return (
        <div style={{ min_width: "5px" }}>
            <h1></h1>
            <article className="canvas-container">
                <Line   options={options} data={data}/>
            </article>
            <p>TODO</p>
            Sources:
            <ul>
                <li><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">description</a></li>
                <li><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">data set</a></li>
            </ul>
        </div>
    );

}