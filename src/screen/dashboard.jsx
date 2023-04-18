
import React, { useEffect, useState } from 'react';

import { Bar, Pie, Line, Doughnut, Radar, PolarArea, Scatter, Bubble } from "react-chartjs-2";
import "../style/dashboard.css"
import { PieChart } from 'react-minimal-pie-chart';

import { Pie3D } from 'react-pie3d'


import Chart from 'chart.js/auto';

import rh from "../config/rh.json"
import rc from "../config/rc.json"
import rb from "../config/rb.json"
import lh from "../config/lh.json"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";





const Dashboard = () => {


    Chart.register(ArcElement, Tooltip, Legend);

    // const [data, setData] = useState({ ShiftName: "", PlannedVsActual: {}, ReworkPieValues: [], ReworkPieKeys: [], ReworkRejectActualTrend: {}, ReworkZone: {}, ShiftName: "", VariantBars: {}, SummaryTable: {} })
    const [data, setData] = useState(rb)








    const Line2data = {


        labels: ["", "", "", "", "", "", "", "", "", "", ""],
        // labels: count.charts_data.brands_names,

        datasets: [{
            label: "Actual", data: data?.PlannedVsActual?.actual, backgroundColor: "purple", barPercentage: 0.5,
            barThickness: 40,
            borderColor: "purple",

            tension: 0.4,

        },

        {
            label: "Planned", data: data.PlannedVsActual?.planned, backgroundColor: "skyblue", barPercentage: 0.5,
            barThickness: 40,
            borderColor: "skyblue",

            tension: 0.4,

        }]
    }

    const Line3data = {


        labels: ["", "", "", "", "", "", "", "", "", "", ""],
        // labels: count.charts_data.brands_names,

        datasets: [{
            label: "Rework", data: data?.ReworkRejectActualTrend?.rework, backgroundColor: "purple", barPercentage: 0.5,
            barThickness: 40,
            borderColor: "purple",

            tension: 0.4,

        },

        {
            label: "Reject", data: data.ReworkRejectActualTrend?.reject, backgroundColor: "rgb(223, 246, 255)", barPercentage: 0.5,
            barThickness: 40,
            borderColor: "skyblue",

            tension: 0.4,

        },
        {
            label: "Actual", data: data.ReworkRejectActualTrend?.actual, backgroundColor: "skyblue", barPercentage: 0.5,
            barThickness: 40,
            borderColor: "skyblue",

            tension: 0.4,

        },

        ]
    }


    const barData = {


        labels: Object.keys(data?.ReworkZone),
        // labels: count.charts_data.brands_names,

        datasets: [{

            label: "Product by Varient", data: Object.values(data?.ReworkZone), backgroundColor: ["skyblue"], barPercentage: 0.5,
            barThickness: 20,

            tension: 0.1,

        }]
    }




    // const [userdata1, setuserdata1] = useState({


    //     labels: data.ReworkPieKeys,

    //     datasets: [{
    //         data: data.ReworkPieValues, backgroundColor: ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], barPercentage: 0.5,
    //         // barThickness: 20,

    //         tension: 0.4,

    //     }]
    // })




    let count = 0

    const jsonFiles = [rh, rc, lh, rh];

    useEffect(() => {


        // setInterval(() => switchToJsonFile(), 10000) 

    }, [0])




    const switchToJsonFile = () => {



        if (count > 3) {
            return count = 0
        }
        else {
            setData(jsonFiles[count])

            count = count + 1
        }




    }





    return (

        <span className='dashboard_parent'>


            <div className="dashboard_title_bar">
                <span className='title_bar_date title_bar_subhead1'>05YA</span>
                <span className='title_bar_head title_bar_mainhead'>SEAT ASSEMBLY LINE - {data.LineName}</span>

                <span className='title_bar_date_box title_bar_subhead2'>
                    <span className='title_bar_date'>06-02-2023</span>
                    <span className='title_bar_date'>{data.ShiftName}</span>
                </span>

            </div>


            <div className='dashboard_base'>



                <span className="quarter quarter1">

                    <Line
                        className="actual_bar"
                        data={Line2data}


                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: {} }}

                    />




                </span>

                <span className="quarter quarter1">


                    <Line
                        className="actual_bar"
                        data={Line3data}


                        height='3rem'
                        width='10rem'
                        options={{ maintainAspectRatio: false, plugins: {} }}


                    />



                </span>



                <span className="quarter quarter2 pie_quarter">

                    {/* <Pie

                        className="actual_bar"
                        data={{

                            labels: data.ReworkPieValues,
                            datasets: [{
                                data: data.ReworkPieValues, backgroundColor: ["orange", "rgb(255, 185, 56)", "rgb(255, 209, 124)", "rgb(255, 235, 198)"], barPercentage: 0.5,
                                // barThickness: 20,

                                tension: 0.4,

                            }]

                        }}



                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
                    /> */}



                    <Pie3D config={{ moveDistance: 0.35, showLabels: true, showTooltips: true, textSize: 12, showLabelPercentage: false }} data={data.ReworkPie} />



                </span>



            </div>


            <div className='dashboard_base dashboard_base_row2'>


                <span className="quarter quarter3">


                    <img className='seat_img' src="https://img-new.cgtrader.com/items/2134357/15ec4d9555/car-seat-3d-model-obj-mtl-fbx-blend.jpg" />
                    <img className='seat_img' src="https://img2.cgtrader.com/items/2134357/e981eb8d6f/car-seat-3d-model-obj-mtl-fbx-blend.jpg" />


                </span>


                <span className="quarter quarter4">

                    <Bar
                        className="actual_bar"
                        data={barData}



                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}


                    />

                </span>



            </div>


            <span className="dashboard_stats">

                <span className="stats stats1">

                    <span className='stats-heading'>Planned</span>
                    <span className='stats-num'>{data.SummaryTable.Planned}</span>

                </span>



                <span className="stats stats2">
                    <span className='stats-heading'>Actual</span>
                    <span className='stats-num'>{data.SummaryTable.Actual}</span>
                </span>


                <span className="stats stats1">

                    <span className='stats-heading'>Direct-Ok</span>
                    <span className='stats-num'>{data.SummaryTable.DirectOK}</span>

                </span>


                <span className="stats stats2">
                    <span className='stats-heading'>Rejection Rate</span>
                    <span className='stats-num'>{data.SummaryTable.RejectionRate} %</span>
                </span>



                <span className="stats stats1">
                    <span className='stats-heading'>Rework Rate</span>
                    <span className='stats-num'>{data.SummaryTable.ReworkRate} %</span>
                </span>



                <span className="stats stats2">

                    <span className='stats-heading'>Line Effeciency</span>
                    <span className='stats-num'>{data.SummaryTable.LineEfficiency} %</span>

                </span>









            </span>



        </span>

    );
};

export default Dashboard;
