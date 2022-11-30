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
    const [monthlyData, setMonthlyData] = useState([]);

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
    }, []);

    useEffect(() => {
        axios
            .get(URL + "monthly_global")
            .then(response => {
                setMonthlyData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const data = {
        labels: annuallyDataGlobal.map(datapoint => datapoint.Date),
        datasets: [
            {
                label: "Annually Global",
                data: annuallyDataGlobal.map(datapoint => datapoint.Anomaly),
                pointRadius: 1
            },
            {
                label: "Monthly Global",
                data: annuallyDataNorthern.map(datapoint => datapoint.Anomaly),
                pointRadius: 1
            },
            {
                label: "Monthly Global",
                data: annuallyDataSouthern.map(datapoint => datapoint.Anomaly),
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
                text: "Demo V1 Chart",
            },
        },
        scales: {
            co2: {
                type: "linear",
                display: true,
                position: "right",
            },
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            <h1>Demo Chart</h1>
            <Line options={options} data={data} />
        </div>
    );

}