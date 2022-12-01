import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import axios from "axios";

const URL = "http://localhost:8080/data/";

export default function V7Chart() {

    const [v7TemperatureRecords, setV7TemperatureRecords] = useState([]);
    const [v7Co2Measurements, setv7Co2Measurements] = useState([]);

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
                text: "V7: Evolution of Global Temperature Over the Past Two Million Years"
            },
            legend: {
                display: true,
                position: "bottom"
            },
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
            }
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            <h1></h1>
            <Line options={options} data={data} />
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
            Sources:
            <ul>
                <li><a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">description</a></li>
                <li><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">data set (figure 1)</a></li>
            </ul>
        </div>
    );

}