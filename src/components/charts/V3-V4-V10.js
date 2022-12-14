import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import axios from "axios";
import "../../App.css"

export default function V3V4V10() {

    const [v3Annually, setV3Annually] = useState([]);
    const [v3Monthly, setV3Monthly] = useState([]);
    const [v4DE08, setV4DE08] = useState([]);
    const [v4DE08_2, setV4DE08_2] = useState([]);
    const [v4DSS, setV4DSS] = useState([]);

    const [v10Data, setV10Data] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v3/annually_mean")
            .then(response => {
                setV3Annually(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v3/monthly_mean")
            .then(response => {
                setV3Monthly(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v4/de08")
            .then(response => {
                setV4DE08(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v4/de08_2")
            .then(response => {
                setV4DE08_2(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v4/dss")
            .then(response => {
                setV4DSS(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.REACT_APP_API_ADDRESS + "/data/v10/human_history_1k")
            .then(response => {
                setV10Data(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        datasets: [
            {
                label: "Annual CO2 Measurements",
                data: v3Annually,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Annual_Mean",
                },
                pointRadius: 1
            },
            {
                label: "Monthly CO2 Measurements",
                data: v3Monthly,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Average",
                },
                pointRadius: 1
            },
            {
                label: "Ice Core DE08 Measurements",
                data: v4DE08,
                parsing: {
                    xAxisKey: "Mean_Air_Age",
                    yAxisKey: "Co2_Mixing_Ratio",
                },
                pointRadius: 1
            },
            {
                label: "Ice Core DE08-02 Measurements",
                data: v4DE08_2,
                parsing: {
                    xAxisKey: "Mean_Air_Age",
                    yAxisKey: "Co2_Mixing_Ratio",
                },
                pointRadius: 1
            },
            {
                label: "Ice Core DSS Measurements",
                data: v4DSS,
                parsing: {
                    xAxisKey: "Mean_Air_Age",
                    yAxisKey: "Co2_Mixing_Ratio",
                },
                pointRadius: 1
            },
            {
                label: "Human History Milestones",
                data: v10Data,
                yAxisID: "Events",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Static_Value",
                },
                pointRadius: 3,
                showLine: false
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
                text: "V3, V4 & V10: Hawaii CO2 Measurements with Ice Core Measurements and Human History Milestones"
            },
            subtitle: {
                display: true,
                text: "atmospheric CO2 concentrations from Mauna Loa measurements starting 1958 with Antarctic ice core records of atmospheric CO2 ratios",
                padding: 10
            },
            legend: {
                display: true,
                position: "bottom"
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        if (context.datasetIndex === 5) {
                            return context.raw.Event;
                        } else {
                            return " " + context.dataset.label + ": " + context.formattedValue;
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "month",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'CO2 concentration in ppm'
                }
            },
            Events: {
                display: false,
                position: "left",
                beginAtZero: true,
            }
        },
    };

    return (
        <div style={{ min_width: "5px" }}>
            <h1></h1>
            <article className="canvas-container">
                <Line options={options} data={data} />
            </article>
            <p>The graphs show monthly mean carbon dioxide measured at Mauna Loa Observatory, Hawaii. The carbon dioxide data on Mauna Loa constitute the longest record of direct measurements of CO2 in the atmosphere.</p>
            <p>The CO2 records presented here are derived from three ice cores obtained at Law Dome, East Antarctica from 1987 to 1993. The Law Dome site satisfies many of the desirable characteristics of an ideal ice core site for atmospheric CO2 reconstructions including negligible melting of the ice sheet surface, low concentrations of impurities, regular stratigraphic layering undisturbed at the surface by wind or at depth by ice flow, and high snow accumulation rate.</p>
            <p>The human condition, in which we thrive on vast knowledge of our place in the cosmos and our influence on Earth, and on profound understanding of our body plan and its origins, and the unique traits of our intelligence, of spirit, imagination and heart, fostered amongst societies with customs and tolerances adapted to divergent ecological and historical contexts, driving cultural developments and technological innovations that mould fabulously wealthy and powerful civilisations; in which our adventurous sociality builds cooperative networks to engineer expansions into every habitable region of the world and to exploit Earth???s resources ever more efficiently, until our insatiable growth exhausts ecosystems and destabilises climate, straining the integrity of our interdependencies amongst each other, and with nature, to breaking point and beyond, and in which our collective decisions to take responsibility for the wellbeing of future generations hang on a golden thread.</p>
            Sources:
            <ul>
                <li><a href="https://gml.noaa.gov/ccgg/trends/">Hawaii CO2 measurements description and data set</a></li>
                <li><a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">Hawaii CO2 description of data measurement</a></li>
                <li><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">ice core CO2 measurements data set</a></li>
                <li><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">ice core CO2 Measurements description</a></li>
                <li><a href="https://www.southampton.ac.uk/~cpd/history-synopsis.html">human history milestones description</a></li>
                <li><a href="https://www.southampton.ac.uk/~cpd/history.html">human history milestones data set</a></li>
            </ul>
        </div>
    );

}