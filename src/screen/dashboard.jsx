
import React, { useState } from 'react';

import { Bar, Pie, Line, Doughnut, Radar, PolarArea, Scatter, Bubble } from "react-chartjs-2";
import "../style/dashboard.css"





import Chart from 'chart.js/auto';





const Dashboard = () => {




    const userdata = {


        labels: ["Olivia", "Hemani", "Dell", "grocery"],
        // labels: count.charts_data.brands_names,

        datasets: [{
            label: "brands", data: [2, 4, 6, 4], backgroundColor: ["orange", "lightsalmon", "lightgrey", "lightgreen"], barPercentage: 0.5,
            barThickness: 40,

            tension: 0.4,

        }]
    }


    const barData = {


        labels: ["Olivia", "Hemani", "Dell", "grocery"],
        // labels: count.charts_data.brands_names,

        datasets: [{
            label: "brands", data: [2, 4, 6, 4], backgroundColor: ["skyblue"], barPercentage: 0.5,
            barThickness: 40,

            tension: 0.4,

        }]
    }



    const [userdata1, setuserdata1] = useState({


        labels: [`mehdi`, "raza", "syed", "naqvi"],

        datasets: [{
            label: "brands", data: [3, 5, 6, 8], backgroundColor: ["orange", "rgb(255, 185, 56)", "rgb(255, 209, 124)", "rgb(255, 235, 198)"], barPercentage: 0.5,
            barThickness: 20,

            tension: 0.4,

        }]
    })


    return (

        <span className='dashboard_parent'>

            <div className='dashboard_base'>


                <span className="quarter quarter1">





                    {/* <Line
                        className="actual_bar"
                        data={userdata}


                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: {} }}


                    /> */}



                    <span className='quarter1_left'>

                        <Line
                            className="actual_bar"
                            data={userdata}


                            height='3rem'
                            width='5rem'
                            options={{ maintainAspectRatio: false, plugins: {} }}


                        />

                    </span>

                    <span className='quarter1_right'>


                        <Line
                            className="actual_bar"
                            data={userdata}


                            height='3rem'
                            width='5rem'
                            options={{ maintainAspectRatio: false, plugins: {} }}


                        />
                    </span>









                </span>



                <span className="quarter quarter2">

                    <Pie
                        className="actual_bar"
                        data={userdata1}



                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: {} }}


                    />
                </span>


                <span className="quarter quarter3">


                    3

                </span>


                <span className="quarter quarter4">
                    <Bar
                        className="actual_bar"
                        data={barData}



                        height='3rem'
                        width='5rem'
                        options={{ maintainAspectRatio: false, plugins: {} }}


                    />
                </span>

            </div>


            <span className="dashboard_stats">

                <span className="stats stats1">

                    <span className='stats-heading'>Planned</span>
                    <span className='stats-num'>100</span>

                </span>



                <span className="stats stats2">
                    <span className='stats-heading'>Actual</span>
                    <span className='stats-num'>78</span>
                </span>


                <span className="stats stats1">

                    <span className='stats-heading'>Direct-Ok</span>
                    <span className='stats-num'>50</span>

                </span>


                <span className="stats stats2">
                    <span className='stats-heading'>Rejection Rate</span>
                    <span className='stats-num'>5%</span>
                </span>

                <span className="stats stats1">
                    <span className='stats-heading'>Rework Rate</span>
                    <span className='stats-num'>78%</span>
                </span>

                <span className="stats stats2">

                    <span className='stats-heading'>Line Effeciency</span>
                    <span className='stats-num'>78%</span>

                </span>









            </span>


        </span>

    );
};

export default Dashboard;
