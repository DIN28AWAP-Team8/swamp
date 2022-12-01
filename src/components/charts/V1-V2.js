import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import axios from "axios";

const URL = "http://localhost:8080/data/";

export default function V1V2Chart() {

    const [annuallyDataGlobal, setAnnuallyDataGlobal] = useState([]);
    const [annuallyDataNorthern, setAnnuallyDataNorthern] = useState([]);
    const [annuallyDataSouthern, setAnnuallyDataSouthern] = useState([]);
    const [monthlyDataGlobal, setMonthlyDataGlobal] = useState([]);
    const [monthlyDataNorthern, setMonthlyDataNorthern] = useState([]);
    const [monthlyDataSouthern, setMonthlyDataSouthern] = useState([]);

    const [temperatureReconstructionData, setTemperatureReconstructionData] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "v1/annually_global")
            .then(response => {
                setAnnuallyDataGlobal(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v1/annually_northern")
            .then(response => {
                setAnnuallyDataNorthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v1/annually_southern")
            .then(response => {
                setAnnuallyDataSouthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(URL + "v1/monthly_global")
            .then(response => {
                setMonthlyDataGlobal(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v1/monthly_northern")
            .then(response => {
                setMonthlyDataNorthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v1/monthly_southern")
            .then(response => {
                setMonthlyDataSouthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "v2/temperature_reconstruction")
            .then(response => {
                setTemperatureReconstructionData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        datasets: [
            {
                label: "Annually Global",
                data: annuallyDataGlobal,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Annually Northern Hemisphere",
                data: annuallyDataNorthern,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Annually Southern Hemisphere",
                data: annuallyDataSouthern,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Global",
                data: monthlyDataGlobal,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Northern Hemisphere",
                data: monthlyDataNorthern,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Southern Hemisphere",
                data: monthlyDataSouthern,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "2000-year temperature  reconstruction",
                data: temperatureReconstructionData,
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Full_Reconstruction",
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
                text: "V1 & V2: HadCRUT5 with Temperature Data"
            },
            subtitle: {
                display: true,
                text: 'global historical surface temperature anomalies from January 1850 onwards with reconstructed temperature data',
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
                    unit: "month",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'temperature anomalies in °C / K'
                }
            }
            /* distinguish Y-Axes and show titles (requires setting of yAxisID) */
            /*
            Anomaly: {
                title: {
                    display: true,
                    text: 'HadCRUT5 Anomaly'
                  },
                display: true,
                position: 'left',
            },
            Full_Reconstruction: {
                title: {
                    display: true,
                    text: 'Temperature Reconstruction'
                  },
                display: true,
                position: 'right',
            }
            */
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            <h1></h1>
            <Line options={options} data={data} />
            <p>HadCRUT5 is a gridded dataset of global historical surface temperature anomalies relative to a 1961-1990 reference period. Data are available for each month from January 1850 onwards, on a 5 degree grid and as global and regional average time series. The dataset is a collaborative product of the Met Office Hadley Centre and the Climatic Research Unit at the University of East Anglia.</p>
            <p>Northern Hemisphere temperature reconstruction for the past 2,000 years by combining low-resolution proxies with tree-ring data, using a wavelet transform technique to achieve timescale-dependent processing of the data.</p>
            Sources:
            <ul>
                <li><a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">HadCRUT5 description and data set</a></li>
                <li><a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">temperature reconstruction description</a></li>
                <li><a href="https://www.nature.com/articles/nature03265">temperature reconstruction description of data measurement</a></li>
                <li><a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">temperature reconstruction data set</a></li>
            </ul>
        </div>
    );

}