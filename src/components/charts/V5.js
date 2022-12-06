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
            <p>In January 1998, the collaborative ice-drilling project between Russia, the United States, and France at the Russian Vostok station in East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 m (Petit et al. 1997, 1999). Ice cores are unique with their entrapped air inclusions enabling direct records of past changes in atmospheric trace-gas composition. Preliminary data indicate the Vostok ice-core record extends through four climate cycles, with ice slightly older than 400 kyr (Petit et al. 1997, 1999). There is a close correlation between Antarctic temperature and atmospheric concentrations of CO2 (Barnola et al. 1987). The extension of the Vostok CO2 record shows that the main trends of CO2 are similar for each glacial cycle. Major transitions from the lowest to the highest values are associated with glacial-interglacial transitions. During these transitions, the atmospheric concentrations of CO2 rises from 180 to 280-300 ppmv (Petit et al. 1999). The extension of the Vostok CO2 record shows the present-day levels of CO2 are unprecedented during the past 420 kyr. According to Barnola et al. (1991) and Petit et al. (1999) these measurements indicate that, at the beginning of the deglaciations, the CO2 increase either was in phase or lagged by less than ~1000 years with respect to the Antarctic temperature, whereas it clearly lagged behind the temperature at the onset of the glaciations.</p>
            Sources:
            <ul>
                <li><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">description</a></li>
                <li><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">data set</a></li>
            </ul>
        </div>
    );

}