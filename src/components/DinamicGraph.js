import React, { useState, useEffect } from "react";
import { groupedData, labelsDate } from "./MockData/mockGraph.js";
import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Chart from "chart.js/auto";
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);




const DinamicGraph = () => {
    const { t } = useTranslation("global");
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(143);
    useEffect(() => {

        setData(groupedData);
        setLabels(labelsDate);

    }, []);

    const filteredData = data.slice(startTime, endTime + 1);
    const filteredLabels = labels.slice(startTime, endTime + 1);

    const handleStartTimeChange = (value) => {
        if (value <= endTime) {
            setStartTime(value);
        }
    };

    const handleEndTimeChange = (value) => {
        if (value >= startTime) {
            setEndTime(value);
        }
    };

    const eventCountChart = (
        <div style={{ width: "100%", height: "100%" }}>
            <Line
                data={{
                    labels: filteredLabels,
                    datasets: [
                        {
                            data: filteredData,
                            label: t("DynamicGraph.YourData"),
                            borderColor: "rgb(0, 217, 255)",
                            fill: true,
                        },
                    ],
                }}
            />
        </div>
    );

    return (
        <div>
            <div>
                <label htmlFor="startTime">{t("DynamicGraph.StartTime")}</label>
                <input
                    type="range"
                    id="startTime"
                    value={startTime}
                    min={0}
                    max={endTime}
                    onChange={(e) => handleStartTimeChange(Number(e.target.value))}
                />
                <span>{labels[startTime]}</span>
            </div>
            <div>
                <label htmlFor="endTime">{t("DynamicGraph.EndTime")}</label>
                <input
                    type="range"
                    id="endTime"
                    value={endTime}
                    min={startTime}
                    max={143}
                    onChange={(e) => handleEndTimeChange(Number(e.target.value))}
                />
                <span>{labels[endTime]}</span>
            </div>
            <div>{eventCountChart}</div>
        </div>
    );
};

export default DinamicGraph;