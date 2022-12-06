import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import axios from "axios";
import "../../App.css"

const URL = "http://localhost:8080/data/";

export default function V7V10Chart() {

    const [v7TemperatureRecords, setV7TemperatureRecords] = useState([]);
    const [v7Co2Measurements, setv7Co2Measurements] = useState([]);

    const [v10Data, setV10Data] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "v7/temperature_records")
            .then(response => {
                setV7TemperatureRecords(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v7/co2_measurements")
            .then(response => {
                setv7Co2Measurements(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v10/human_history_2m")
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
                label: "Temperature Records",
                data: v7TemperatureRecords,
                yAxisID: "Temperature",
                parsing: {
                    xAxisKey: "Years_Before_Present",
                    yAxisKey: "Temperature_Record",
                },
                pointRadius: 1
            },
            {
                label: "CO2 Measurements",
                data: v7Co2Measurements,
                yAxisID: "CO2",
                parsing: {
                    xAxisKey: "Years_Before_Present",
                    yAxisKey: "Carbon_Dioxide",
                },
                pointRadius: 1
            },
            {
                label: "Human History Milestones",
                data: v10Data,
                yAxisID: "Events",
                parsing: {
                    xAxisKey: "Years_Before_Present",
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
                text: "V7 & V10: Evolution of Global Temperature Over the Past Two Million Years with Human History Milestones"
            },
            legend: {
                display: true,
                position: "bottom"
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        if (context.datasetIndex === 2) {
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
                type: "linear",
                reverse: true,
                title: {
                    display: true,
                    text: 'years before present'
                }
            },
            Temperature: {
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: '50% change in global average surface temperature from present'
                }
            },
            CO2: {
                display: true,
                position: "left",
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
            <p>Reconstructions of Earth’s past climate strongly influence our
                understanding of the dynamics and sensitivity of the climate
                system. Yet global temperature has been reconstructed for only a few
                isolated windows of time1,2
                , and continuous reconstructions across
                glacial cycles remain elusive. Here I present a spatially weighted
                proxy reconstruction of global temperature over the past 2 million
                years estimated from a multi-proxy database of over 20,000 sea
                surface temperature point reconstructions. Global temperature
                gradually cooled until roughly 1.2 million years ago and cooling
                then stalled until the present. The cooling trend probably stalled
                before the beginning of the mid-Pleistocene transition 3
                , and pre-
                dated the increase in the maximum size of ice sheets around 0.9
                million years ago 4–6 . Thus, global cooling may have been a pre-
                condition for, but probably is not the sole causal mechanism of,
                the shift to quasi-100,000-year glacial cycles at the mid-Pleistocene
                transition. Over the past 800,000 years, polar amplification
                (the amplification of temperature change at the poles relative to
                global temperature change) has been stable over time, and global
                temperature and atmospheric greenhouse gas concentrations have
                been closely coupled across glacial cycles. A comparison of the new
                temperature reconstruction with radiative forcing from greenhouse
                gases estimates an Earth system sensitivity of 9 degrees Celsius
                (range 7 to 13 degrees Celsius, 95 per cent credible interval) change
                in global average surface temperature per doubling of atmospheric
                carbon dioxide over millennium timescales. This result suggests that
                stabilization at today’s greenhouse gas levels may already commit
                Earth to an eventual total warming of 5 degrees Celsius (range 3 to
                7 degrees Celsius, 95 per cent credible interval) over the next few
                millennia as ice sheets, vegetation and atmospheric dust continue
                to respond to global warming.</p>
            <p>The human condition, in which we thrive on vast knowledge of our place in the cosmos and our influence on Earth, and on profound understanding of our body plan and its origins, and the unique traits of our intelligence, of spirit, imagination and heart, fostered amongst societies with customs and tolerances adapted to divergent ecological and historical contexts, driving cultural developments and technological innovations that mould fabulously wealthy and powerful civilisations; in which our adventurous sociality builds cooperative networks to engineer expansions into every habitable region of the world and to exploit Earth’s resources ever more efficiently, until our insatiable growth exhausts ecosystems and destabilises climate, straining the integrity of our interdependencies amongst each other, and with nature, to breaking point and beyond, and in which our collective decisions to take responsibility for the wellbeing of future generations hang on a golden thread.</p>
            Sources:
            <ul>
                <li><a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">temperature evolution description</a></li>
                <li><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">temperature evolution data set (figure 1)</a></li>
                <li><a href="https://www.southampton.ac.uk/~cpd/history-synopsis.html">human history milestones description</a></li>
                <li><a href="https://www.southampton.ac.uk/~cpd/history.html">human history milestones data set</a></li>
            </ul>
        </div>
    );

}