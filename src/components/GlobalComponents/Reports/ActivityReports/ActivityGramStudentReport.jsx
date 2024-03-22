import React from 'react';

import { Bar } from 'react-chartjs-2';

import { Line } from 'react-chartjs-2';

import Chart, { Colors, plugins } from 'chart.js/auto';
import { Box, Text } from '@chakra-ui/react';

const ActivityGramStudentReport = () => {
  const linear_chart = {
    labels: ['Non_School Day', 'Non_School Day  1', 'Non_School Day 2'],
    datasets: [
      {
        label: 'Met or exceeded activity goal',
        data: [60, 60, 60, 60],
        backgroundColor: '#36B24A',
        borderColor: '#36B24A',
      },
      {
        label: 'Additional Activity Needed to meet daily activity goal',
        data: [],
        backgroundColor: '#FDCC09',
      },
      {
        label: 'Goal',
        data: [],
        backgroundColor: '#DE4D6B',
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
        left: 2,
        bottom: 50,
      },
    },
    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: '#36B24A',
      },
    },

    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 10,
        },
      },
    },
  };

  const Non_School_Day_1 = {
    labels: [
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
    ],
    datasets: [
      {
        label: 'All of the time',
        data: [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
          3, 3, 3, 3, 3, 3, 3, 4,
        ],
        backgroundColor: (color) => {
          console.log(color);
          let colors = color.raw > 2 ? '#B7E4F9' : '#114A64';
          return colors;
        },
        barThickness: 20,
      },
      {
        label: 'All of the time',
        data: [],
        backgroundColor: '#B7E4F9',
        barThickness: 20,
      },

      {
        label: 'All of the time',
        data: [],
        backgroundColor: '#1F94C5',
        barThickness: 20,
      },

      {
        label: 'All of the time',
        data: [],
        backgroundColor: '#A4A4A4',
        barThickness: 20,
      },
    ],
  };
  const yLabels = {
    1: 'Rest',
    2: 'Light',
    3: 'Moderate',
    4: 'Vigorous',
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
        position: 'bottom',
        labels: {
          boxWidth: 10,
        },
      },
    },
  };

  const Non_School_Day = {
    labels: [
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
    ],
    datasets: [
      {
        label: 'All of the time',
        data: [
          1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1,
        ],
        backgroundColor: (color) => {
          console.log(color);
          //   let colors = color.raw > 2 ? "#B7E4F9" : "#114A64";
          let colors = '#B7E4F9';
          return colors;
        },
        barThickness: 20,
      },
      {
        label: 'Daily Goal',
        data: [],
        backgroundColor: '#40D040',
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
        position: 'bottom',
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
        position: 'bottom',
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
        color: ['red', 'black'],
        position: 'bottom',
        labels: {
          boxWidth: 10,
        },
      },
    },
  };

  return (
    <>
      <div className='h-auto p-5'>
        {/* <div className=' mt-2 mb-2  flex justify-between md:px-[1rem] lg:px-[5rem] xl:px-[10rem]'>
          <h1>ActivityGram Student Report</h1>
          <h1>ACTIVITY GRAM</h1>
        </div> */}
        <Box display={'flex'} justifyContent='space-between'>
          <Text
            textStyle={'textHead'}
          >
            ActivityGram Student Report
          </Text>
          <Text
           textStyle={'textHead'}
          >
            Activity Gram
          </Text>
        </Box>

        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-2 gap-3'>
            <div className='border-r border-l border-b  border-[#DCDDDC]'>
              <div className='py-1 border border-green bg-green text-white px-[5rem]'>
                <h1>AAStudent4, usan (ID: AAs00004)</h1>
              </div>
              <div className='mx-5 px-5 md:w-[70%] lg:w-[50%]  leading-7 '>
                <div className='flex justify-around items-center mt-5'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>

                <div className='flex justify-around items-center mt-3'>
                  <h1>Grade </h1>
                  <p>: 7 (Age:13)</p>
                </div>
              </div>
            </div>
            <div className='border-r border-l border-b  border-[#DCDDDC]'>
              <div className='py-1 border border-green bg-green text-white px-[5rem]'>
                <h1>Minutes of Activity</h1>
              </div>
              <div className=' grid grid-cols-2 gap-5'>
                <div
                  className='p-0'
                  style={{ position: 'relative', height: '60vh' }}
                >
                  <Line options={linear_options} data={linear_chart} />
                </div>
                <div className='p-2 leading-8'>
                  <p>
                    Chart.js is a powerful data visualization library, but I
                    know from experience that it can be tricky to just get
                    started and get a graph to show up. There are all sorts of
                    things that can wrong, and I often just want to have
                    something working so I can start tweaking it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-r border-l border-b  border-[#DCDDDC]'>
            <div className='py-1  bg-green text-white'>
              <h1>Time Profile</h1>
            </div>

            <div class='grid grid-cols-3 gap-4'>
              <div class='col-span-2 border-r border-[#DCDDDC] pr-3'>
                <div
                  style={{ position: 'relative', height: '20vh' }}
                  className='mt-5'
                >
                  <h1>Non school day</h1>
                  <Bar options={Non_School_Day_Options} data={Non_School_Day} />
                </div>
                <div
                  style={{ position: 'relative', height: '20vh' }}
                  className='mt-5'
                >
                  <h1>Non school day</h1>

                  <Bar
                    options={Non_School_Day_Options_1}
                    data={Non_School_Day_1}
                  />
                </div>

                <div
                  style={{ position: 'relative', height: '20vh' }}
                  className='mt-5'
                >
                  <h1>Non school day</h1>

                  <Bar
                    options={Non_School_Day_Options_2}
                    data={Non_School_Day_1}
                  />
                </div>
              </div>

              <div className='p-2 leading-8'>
                <p>
                  Chart.js is a powerful data visualization library, but I know
                  from experience that it can be tricky to just get started and
                  get a graph to show up. There are all sorts of things that can
                  wrong, and I often just want to have something working so I
                  can start tweaking it.
                </p>
              </div>
            </div>
          </div>
          <div className='border-r border-l border-b  border-[#DCDDDC]'>
            <div className='py-1 bg-green text-white'>
              <h1>Time Profile</h1>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='col-span-2 flex flex-col justify-center items-center'>
                    <div className='mt-2 w-full flex justify-center gap-2'>
                      <button className='md:px-[2rem] py-2 bg-primary border border-primary text-white'>
                        Rest
                      </button>
                    </div>
                    <div className='flex justify-center gap-2  mt-2  w-full'>
                      <button className='md:px-[2rem] lg:px-[4rem] xl:px-[5rem] py-2 bg-[#DCDDDC] border border-[#DCDDDC]'>
                        Rest
                      </button>

                      <button className='md:px-[2rem] lg:px-[4rem] xl:px-[5rem] py-2 bg-[#DCDDDC] border border-[#DCDDDC]'>
                        Rest
                      </button>
                    </div>

                    <div className='flex justify-center gap-2  mt-2  w-full'>
                      <button className='md:px-[2rem] lg:px-[4rem]  xl:px-[9rem] py-2 bg-[#DCDDDC] border border-[#DCDDDC]'>
                        Rest
                      </button>

                      <button className='md:px-[2rem] lg:px-[4rem]  xl:px-[9rem] py-2 bg-[#DCDDDC] border border-[#DCDDDC]'>
                        Rest
                      </button>
                    </div>
                    <div className='flex justify-center gap-2  mt-2  w-full'>
                      <button className='md:px-[2rem] lg:px-[4rem]  xl:px-[19.5rem] py-2 bg-[#DCDDDC] border border-[#DCDDDC]'>
                        Rest
                      </button>
                    </div>
                  </div>

                  <div className=' border-r border-[#DCDDDC] p-2'>
                    <h1>Legend</h1>
                    <div className='flex gap-3 mt-2'>
                      <button className='px-6 py-6 border border-primary bg-primary' />
                      <p>Participates in these type of activities</p>
                    </div>
                    <div className='flex gap-3 mt-2'>
                      <button className='px-6 py-6 bg-[#DCDDDC] border border-[#DCDDDC]' />
                      <p>Did not particpate in these type of activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' p-2 leading-8'>
                <p className='text-md'>
                  Chart.js is a powerful data visualization library, but I know
                  from experience that it can be tricky to just get started and
                  get a graph to show up. There are all sorts of things that can
                  wrong, and I often just want to have something working so I
                  can start tweaking it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityGramStudentReport;
