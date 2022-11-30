import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const URL = "http://localhost:8080/data/v1/";

export default function V1Chart() {

    const [annuallyDataGlobal, setAnnuallyDataGlobal] = useState([]);
    const [annuallyDataNorthern, setAnnuallyDataNorthern] = useState([]);
    const [annuallyDataSouthern, setAnnuallyDataSouthern] = useState([]);
    const [monthlyDataGlobal, setMonthlyDataGlobal] = useState([]);
    const [monthlyDataNorthern, setMonthlyDataNorthern] = useState([]);
    const [monthlyDataSouthern, setMonthlyDataSouthern] = useState([]);

    useEffect(() => {
        axios
            .get(URL + "annually_global")
            .then(response => {
                setAnnuallyDataGlobal(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "annually_northern")
            .then(response => {
                setAnnuallyDataNorthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "annually_southern")
            .then(response => {
                setAnnuallyDataSouthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(URL + "monthly_global")
            .then(response => {
                setMonthlyDataGlobal(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "monthly_northern")
            .then(response => {
                setMonthlyDataNorthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(URL + "monthly_southern")
            .then(response => {
                setMonthlyDataSouthern(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        labels: monthlyDataGlobal.map(datapoint => datapoint.Date),
        datasets: [
            {
                label: "Annually Global",
                data: annuallyDataGlobal,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Annually Northern Hemisphere",
                data: annuallyDataNorthern,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Annually Southern Hemisphere",
                data: annuallyDataSouthern,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Global",
                data: monthlyDataGlobal,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Northern Hemisphere",
                data: monthlyDataNorthern,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1
            },
            {
                label: "Monthly Southern Hemisphere",
                data: monthlyDataSouthern,
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Date",
                    yAxisKey: "Anomaly",
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
                text: "V1: HadCRUT 5"
            },
            subtitle: {
                display: true,
                text: 'global historical surface temperature anomalies from January 1850 onwards'
            },
            legend: {
                display: true,
                position: "bottom"
            }
        },
        scales: {
            Anomaly: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            <h1></h1>
            <Line options={options} data={data} />
            <p>HadCRUT5 is a gridded dataset of global historical surface temperature anomalies relative to a 1961-1990 reference period. Data are available for each month from January 1850 onwards, on a 5 degree grid and as global and regional average time series. The dataset is a collaborative product of the Met Office Hadley Centre and the Climatic Research Unit at the University of East Anglia.</p>
            <p>Source: <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">metoffice.gov.uk</a></p>
        </div>
    );

}