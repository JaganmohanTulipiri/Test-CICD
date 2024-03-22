import React from "react";

import { Bar } from "react-chartjs-2";

import { Line } from "react-chartjs-2";


import Chart, { Colors, plugins } from "chart.js/auto";

const ActivityLogStudentReport = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
             
            },
            stacked:true,
          },
          y: {
            ticks: {
              steps: 2,
              stepSize: 10000,
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          
          },
        },
    
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 10,
           
              
            },
          },
          
        },
      };
    
      const data = {
        labels: [
          "10/07/2018",
          "10/08/2018",
          "10/09/2018",
          "10/10/2018",
          "10/11/2018",
          "10/12/2018",
          "10/13/2018",
        ],
        datasets: [
          {
            label: "Daily Steps",
            data: [30000, 30000, 1000, 15000, 28000, 25000, 10000],
            backgroundColor: "#4F81BD",
            barThickness:20,
          },
          {
            label: "Daily Goal",
            data: [20000,20000,20000,20000,20000,20000,2000],
            backgroundColor: "#BBBBBB",
            barThickness: 50,
            categoryPercentage:0.5
          },
        ],
      };
    
      const linear_chart = {
        labels: ["", "Non_School Day", "Non_School Day  1", "Non_School Day 2"],
        datasets: [
          {
            label: "Met or exceeded activity goal",
            data: [60, 60, 60, 60],
            backgroundColor: "#36B24A",
            borderColor: "#36B24A",
          },
          {
            label: "Additional Activity Needed to meet daily activity goal",
            data: [],
            backgroundColor: "#FDCC09",
          },
          {
            label: "Goal",
            data: [],
            backgroundColor: "#DE4D6B",
          },
        ],
      };
    
      const linear_options = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              beginAtZero: true,
              min: 0,
    
              max: 60,
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          },
        },
        elements: {
          point: {
            borderWidth: 0,
            radius: 0,
            backgroundColor: "#36B24A",
          },
        },
    
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      };
    
      const Non_School_Day_1 = {
        labels: [
          "07:00",
          "07:30",
          "08:00",
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
          "21:30",
          "22:00",
        ],
        datasets: [
          {
            label: "All of the time",
            data: [
              2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              3, 3, 3, 3, 3, 3, 3, 4,
            ],
            backgroundColor: (color) => {
              console.log(color);
              let colors = color.raw > 2 ? "#B7E4F9" : "#114A64";
              return colors;
            },
            barThickness: 10,
          },
          {
            label: "All of the time",
            data: [],
            backgroundColor: "#B7E4F9",
            barThickness: 50,
          },
    
          {
            label: "All of the time",
            data: [],
            backgroundColor: "#1F94C5",
            barThickness: 50,
          },
    
          {
            label: "All of the time",
            data: [],
            backgroundColor: "#A4A4A4",
            barThickness: 50,
          },
        ],
      };
      const yLabels = {
        1: "Rest",
        2: "Light",
        3: "Moderate",
        4: "Vigorous",
      };
      const options1 = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                // console.log(yLabels[value],";abelllllllll")
                return yLabels[value];
                // return 'Target'
              },
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      };
    
      const Non_School_Day = {
        labels: [
          "07:00",
          "07:30",
          "08:00",
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
          "21:30",
          "22:00",
        ],
        datasets: [
          {
            label: "All of the time",
            data: [
              4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
              4, 4, 4, 4, 4, 4, 4, 4,
            ],
            backgroundColor: (color) => {
              console.log(color);
              let colors = color.raw > 2 ? "#B7E4F9" : "#114A64";
              return colors;
            },
            barThickness: 10,
          },
          {
            label: "Daily Goal",
            data: [],
            backgroundColor: "#40D040",
            barThickness: 50,
          },
        ],
      };
      const Non_School_Day_Options = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                // console.log(yLabels[value],";abelllllllll")
                return yLabels[value];
                // return 'Target'
              },
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      };
    
      const Non_School_Day_Options_1 = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                // console.log(yLabels[value],";abelllllllll")
                return yLabels[value];
                // return 'Target'
              },
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      };
      const Non_School_Day_Options_2 = {
        responsive: true,
        maintainAspectRatio: false,
    
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                // console.log(yLabels[value],";abelllllllll")
                return yLabels[value];
                // return 'Target'
              },
            },
          },
        },
        layout: {
          padding: {
            left: 50,
            bottom: 50,
          },
        },
        plugins: {
          legend: {
            display: true,
            color: ["red", "black"],
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      };



  return (
    <>

    <>
        <div className="flex justify-between items-center px-[5rem]">
            <h1>ActivityLog Student Report </h1>
            <h1 className="text-green font-poppins-bold">ACTIVITY<span>LOG</span></h1>
        </div>
        <hr className="border-[0.15rem] border-black m-5"/>
        <div className="flex justify-around gap-[15]">
            <div>
                <h1>District</h1>
                <p>Test District </p>
            </div>
            <div>
                <h1>District</h1>
                <p>Test District </p>
            </div>
            <div>
                <h1>District</h1>
                <p>Test District </p>
            </div>

            <div>
                <h1>District</h1>
                <p>Test District </p>
            </div>

            <div>
                <h1>District</h1>
                <p>Test District </p>
            </div>





        </div>

        <div style={{ position: "relative", height: "50vh"}} className="">
      <Bar options={options} data={data} />
    
    </div>

    <div className=" border-black border-r border-b border-t-0 border-l mt-5">
        <table>
            <thead>
            <tr className="bg-primary text-white">
            <th className="py-2">Week</th>
            <th className="p-0">Sunday</th>
            <th className="p-0">Monday</th>
            <th className="p-0">Tuesday</th>
            <th className="p-0">Wednesday</th>
            <th className="p-0">Thursday</th>
            <th className="p-0">Friday</th>
            <th className="p-0">Saturday</th>
        </tr>
            </thead>
            <tbody>
                <tr>
                <td >Week</td>
            <td >Sunday</td>
            <td >Monday</td>
            <td >Tuesday</td>
            <td >Wednesday</td>
            <td >Tdursday</td>
            <td >Friday</td>
            <td >Saturday</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="border-black border-r border-b border-t-0 border-l mt-5">
        <h1 className="bg-primary text-white pl-4 py-[0.3rem]">Message</h1>
        <p className="pl-4">Your daily average steps: 7435</p>
        <p className="pl-4">Steps in green in the table indicates that you met your daily goal for that day.</p>
    </div>

    </>


      {/* <div style={{ position: "relative", height: "35vh", width: "60vw" }}>
        <Bar options={Non_School_Day_Options} data={Non_School_Day} />
        <Bar options={Non_School_Day_Options_1} data={Non_School_Day_1} />
        <Bar options={Non_School_Day_Options_2} data={Non_School_Day_1} />
      </div> */}



    </>
  )
}

export default ActivityLogStudentReport
