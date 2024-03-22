import React, { useEffect, useState } from 'react';
import play from '../../../../assets/images/Untitled design/play.png';
import fit from '../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FITNESSGRAM.png';
import { FcClearFilters } from 'react-icons/fc';
import emailImg from '../../../../assets/images/StudentReportTableImages/email.png';
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { BsChevronDown, BsChevronUp, BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { FaFileCsv, FaUser } from 'react-icons/fa';

import { Bar } from 'react-chartjs-2';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart, { Colors, plugins } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOverviewReportSummaryByClassApiCall,
  setRunReportButtonClicked,
} from '../../../../DistrictAdminApis/districtAdminSlice';

function MainRenderCard() {
  const line_data = {
    labels: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    datasets: [
      {
        label: 'Steps',
        data: [43, 43, 45, 47, 49, 50, 52, 53, 50, 53, 55, 57, 59, 60, 62],
        // backgroundColor: "rgba( 255, 63, 63, 0.1)",
        borderColor: '#FF9A46',
        borderWidth: 1,
        tension: 0.4,
        pointStyle: 'rect',
      },
      {
        label: 'Steps',
        data: [46, 47, 49, 50, 53, 54, 55, 56, 56, 57, 58, 58, 64, 65, 65],
        backgroundColor: 'rgba(255, 154, 70, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
        borderWidth: 1,
        pointStyle: 'rect',
      },
      {
        label: 'Steps',
        data: [48, 49, 52, 54, 55, 57, 59, 60, 62, 62, 62, 62, 66, 68, 68],
        backgroundColor: 'rgba(25, 166, 23, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
        borderWidth: 1,

        // fill: true,
        pointStyle: 'rect',
      },
    ],
  };

  const area_data = {
    labels: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    datasets: [
      {
        label: 'NI-HR',
        data: [41, 41, 42, 42, 42, 42, 42, 43, 45, 43, 43, 42, 42, 41, 40],
        backgroundColor: 'rgba( 255, 63, 63, 0.6)',
        borderColor: '#FF3F3F',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        pointStyle: 'rect',
      },
      {
        label: 'NI',
        data: [42, 45, 50, 53, 52, 50, 48, 35, 42, 45, 48, 50, 54, 55, 58],
        backgroundColor: ' rgba(255, 154, 70,0.6)',
        borderColor: '#FF9A46',
        fill: true,
        tension: 0.4,
        borderWidth: 1,
        pointStyle: 'rect',
      },
      {
        label: 'HFZ',
        data: [48, 49, 52, 54, 55, 57, 59, 60, 61, 63, 64, 66, 68, 70, 70],
        backgroundColor: 'rgba(25, 166, 23, 0.6)',
        borderColor: 'rgba(25, 166, 23, 0.6)',
        tension: 0.4,
        fill: true,
        borderWidth: 1,

        // fill: true,
        pointStyle: 'rect',
      },
    ],
  };
  const line_options = {
    plugins: {
      title: {
        display: true,
        text: 'Stacked Area Chart',
      },
      legend: {
        display: true,
      },
      labels: {
        boxHeight: 0,

        useLineStyle: true,
      },
    },

    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: '#36B24A',
      },
    },
    scales: {
      y: {
        // stacked: true,
        ticks: {
          ticks: {
            steps: 6,
            stepSize: 5,
          },
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  const area_options = {
    plugins: {
      title: {
        display: true,
        text: 'Stacked Area Chart',
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10,
        },
      },
    },

    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: '#36B24A',
      },
    },
    scales: {
      y: {
        // stacked: true,
        ticks: {
          ticks: {
            steps: 6,
            stepSize: 5,
          },
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  const data1 = [
    {
      id: '1',
      student: 'john',
      studentId: 'john123',
      class: 'fitness',
      school: 'GreenLightElementary',
      District: 'WA',
      Reportdate: '10/25/2023',
    },
  ];
  const data = [
    {
      id: '1',
      name: 'Student',
      val: 'john',
    },
    {
      id: '2',
      name: 'StudentId',
      val: `john123`,
    },
    {
      id: '3',
      name: 'Class',
      val: `fitness`,
    },
    {
      id: '4',
      name: 'School',
      val: `GreenLightElementary`,
    },

    {
      id: '5',
      name: 'District',
      val: `WA`,
    },
    {
      id: '6',
      name: 'Report Date',
      val: `10/25/2023`,
    },
  ];

  return (
    <div style={{ width: ' 20vw' }}>
      {/* <Line options={line_options} data={line_data} />
      <Line options={line_options} data={line_data} />

      <Line options={area_options} data={area_data} /> */}
      <Stack>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
          }}
          gap={'5'}
          mb='5'
        >
          <GridItem
            w={{ base: '95vw', md: '36vw', lg: '44vw' }}
            bg='whiteAlpha.900'
            shadow={'sm'}
            rounded='xl'
            border='1px solid gray'
          >
            <Box bg='primary' roundedTop={'lg'} p='5'></Box>

            {data.map((head, index) => {
              return (
                <Grid templateColumns='repeat(5, 1fr)' pt='4' px='2'>
                  <GridItem colSpan='2'>
                    <HStack>
                      <Text>{head.name}</Text>
                      <Spacer />
                      <Text>&#58;</Text>
                    </HStack>
                  </GridItem>
                  <GridItem colSpan='3'>
                    <Text pl='4'>{head.val}</Text>
                  </GridItem>
                </Grid>
              );
            })}
          </GridItem>
          <GridItem
            w={{ base: '95vw', md: '40vw', lg: '44vw' }}
            bg='whiteAlpha.900'
            shadow={'sm'}
            rounded='xl'
            border='1px solid gray'
          >
            <Box bg='primary' roundedTop={'lg'} p='2'>
              <Text
                className='text-white'
                fontFamily={'body'}
                fontWeight='bold'
                letterSpacing='px'
              >
                Aerobic Capacity
              </Text>
            </Box>
            <Line options={area_options} data={area_data} />
          </GridItem>
        </Grid>
        <Box
          bg='whiteAlpha.900'
          shadow={'sm'}
          rounded='xl'
          border='1px solid gray'
          w={{ base: '95vw', md: "'95rem'", lg: '89vw' }}
        >
          <Text
            bg='primary'
            p='2'
            roundedTop={'lg'}
            m='0'
            color={'white'}
            fontFamily='body'
            fontWeight={'bold'}
            letterSpacing='0.5px'
          >
            Aerobic Capacity
          </Text>
          <Grid
            templateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(2,1fr)',
              lg: 'repeat(2,1fr)',
            }}
            px='6'
          >
            <GridItem w={{ base: '95vw', md: '35vw', lg: '35vw' }}>
              <Line options={line_options} data={line_data} />
            </GridItem>
            <GridItem w={{ base: '95vw', md: '35vw', lg: '35vw' }}>
              <Line options={line_options} data={line_data} />
            </GridItem>
            <GridItem w={{ base: '95vw', md: '35vw', lg: '48vw' }}>
              <Line options={area_options} data={area_data} />
            </GridItem>
            <GridItem w={{ base: '95vw', md: '35vw', lg: '45vw' }}>
              <Line options={area_options} data={area_data} />
            </GridItem>
          </Grid>
        </Box>
        <Box display={{ base: 'none', lg: 'block', md: 'block' }}>
          <Text whiteSpace='nowrap'>
            *Reference: 2000 CDC Growth Charts of the United States
          </Text>
          <Text whiteSpace={'nowrap'}>
            HFZ: Healthy Fitness Zone; NI: Needs Improvement, NI-HR: Needs
            Improvement-Health Risk
          </Text>
          <HStack>
            <Flex gap='10'>
              <Text>
                <span className='text-primary text-bold'>X</span> Pre-test
              </Text>
              <Text>O Post-test, Other</Text>
            </Flex>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
}

const StudentReportsTableDataList = [
  {
    id: 1,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'AStudent1, John',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
  },

  {
    id: 2,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'B.kishore',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
  },

  {
    id: 3,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'k.JP',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
  },

  {
    id: 4,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'N.Mounika',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
  },

  {
    id: 5,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'Vijay',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
  },

  {
    id: 6,
    userIcon: <FaUser className='mr-2' size={20} />,
    studentName: 'M.Thrushitha',
    age: 'Age: 11',
    grade: 'Grade: VI',
    dob: 'DOB: 01/15/2011',
    teacherName: 'Teacher: Barb Benton',
    schoolName: 'School: Greenlight High School',
    isName: 'IS: Greenlight ISD',
    dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
    dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
  },
];

const RenderActivity = () => {
  return (
    <>
      <div className='flex gap-10 mt-5'>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>District</p>
          <p className='text-[0.9rem] mt-1'>
            {' '}
            Test District (The Cooper Institute)
          </p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>School</p>
          <p className='text-[0.9rem] mt-1'> New Test School</p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Teacher</p>
          <p className='text-[0.9rem] mt-1'> Fitness, Sheryl</p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Class</p>
          <p className='text-[0.9rem] mt-1'>
            Coach Sheryl MS Period 4 Fall 17 18{' '}
          </p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Report</p>
          <p className='text-[0.9rem] mt-1'>Report Date 10/11/2018</p>
        </div>
      </div>
    </>
  );
};

const dataOne = [
  {
    id: '1',
    name: 'Push-Up - Male',
  },
  {
    id: '2',
    name: 'Body Composition',
  },
  {
    id: '3',
    name: 'Upper Body Strength/Endurance',
  },
  {
    id: '4',
    name: 'Abd S/E',
  },
  {
    id: '5',
    name: 'Trunk Ext Str',
  },
  {
    id: '6',
    name: 'Flexibility',
  },
];

const dataTwo = [
  {
    id: '1',
    TestName: 'ESNew43, Vicky (Student ID: ESNew43)',
    TestDate: '',
    Age: '',
    Grade: '',
    Height: '',
    Weight: '',
    Pacer: '',
    MileWalk: '',
    MileRun: '',
    BMI: '',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '',
  },
  {
    id: '2',
    TestName: '2nd Smoke Test 8-3-17 GV prod',
    TestDate: '07/21/17',
    Age: '10',
    Grade: '6',
    Height: '72',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'VL',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '1/2',
  },
  {
    id: '3',
    TestName: 'ESNew43, Vicky (Student ID: ESNew43)',
    TestDate: '',
    Age: '',
    Grade: '',
    Height: '',
    Weight: '',
    Pacer: '',
    MileWalk: '',
    MileRun: '',
    BMI: '',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '',
  },
  {
    id: '2',
    TestName: 'KA Test 11.22.2017',
    TestDate: '04/24/18',
    Age: '11',
    Grade: '5',
    Height: '8',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'NI-HR',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: 'HFZ',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '2/2',
  },
  {
    id: '2',
    TestName: 'KA Test 11.22.2017',
    TestDate: '04/24/18',
    Age: '11',
    Grade: '5',
    Height: '8',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'NI-HR',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: 'HFZ',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '2/2',
  },
  {
    id: '3',
    TestName: 'KA Test 11.22.2017',
    TestDate: '04/24/18',
    Age: '11',
    Grade: '5',
    Height: '8',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'NI-HR',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: 'HFZ',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '2/2',
  },
  {
    id: '4',
    TestName: 'KA Test 11.22.2017',
    TestDate: '04/24/18',
    Age: '11',
    Grade: '5',
    Height: '8',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',

    BMI: 'NI-HR',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: 'HFZ',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '2/2',
  },
  {
    id: '7',
    TestName: 'ESNew43, Vicky (Student ID: ESNew43)',
    TestDate: '',
    Age: '',
    Grade: '',
    Height: '',
    Weight: '',
    Pacer: '',
    MileRun: '',
    MileWalk: '',
    BMI: '',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '',
  },
  {
    id: '8',
    TestName: '2nd Smoke Test 8-3-17 GV prod',
    TestDate: '07/21/17',
    Age: '10',
    Grade: '6',
    Height: '72',
    Weight: '20',
    Pacer: 'NI-HR',
    MileWalk: '',
    BMI: 'VL',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '1/2',
  },
  {
    id: '8',
    TestName: '2nd Smoke Test 8-3-17 GV prod',
    TestDate: '07/21/17',
    Age: '10',
    Grade: '6',
    Height: '72',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'VL',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '1/2',
  },
  {
    id: '10',
    TestName: 'ESNew43, Vicky (Student ID: ESNew43)',
    TestDate: '',
    Age: '',
    Grade: '',
    Height: '',
    Weight: '',
    Pacer: '',
    MileRun: '',
    MileWalk: '',
    BMI: '',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',
    ShoulderStretch: '',
    PYFA: '',
  },
  {
    id: '11',
    TestName: '2nd Smoke Test 8-3-17 GV prod',
    TestDate: '07/21/17',
    Age: '10',
    Grade: '6',
    Height: '72',
    Weight: '20',
    Pacer: 'NI-HR',
    MileRun: '',
    MileWalk: '',
    BMI: 'VL',
    PercentBodyFat: '',
    PushUp: '',
    ModifiedPullUp: '',
    FlexedArmHang: '',
    CurlUp: '',
    TrunkLift: '',
    SitAndReach: '',

    ShoulderStretch: '',
    PYFA: '1/2',
  },
];

const FitnessGramReport = () => {
  return (
    <div className='mt-10 '>
      <table class='table-auto text-xs'>
        <thead className='bg-primary text-white '>
          <tr>
            <th>Test Name</th>
            <th> Test Date</th>
            <th>Age </th>
            <th>Grade</th>
            <th> Height (in) </th>
            <th> Weight (lb) </th>
            <th>Pacer </th>
            <th> Mile Run </th>

            <th> Mile Walk </th>
            <th> BMI </th>
            <th> Percent Body Fat </th>
            <th> Push Up </th>
            <th> Modified Pull Up </th>
            <th> Flexed Arm Hang </th>
            <th> Curl Up </th>
            <th> Trunk Lift </th>
            <th> Sit and Reach </th>

            <th> Shoulder Stretch </th>
            <th> PYFA* </th>
          </tr>
        </thead>
        <tbody>
          {dataTwo.map((item, index) => {
            return (
              <>
                <tr className='text-left'>
                  <td className='whitespace-nowrap text-left font-poppins-bold'>
                    {item.TestName}
                  </td>

                  <td>{item.TestDate}</td>
                  <td>{item.Age}</td>
                  <td>{item.Grade}</td>
                  <td>{item.Height}</td>
                  <td>{item.Weight}</td>

                  <td>{item.Pacer}</td>
                  <td>{item.MileRun}</td>
                  <td>{item.MileWalk}</td>
                  <td>{item.BMI}</td>
                  <td>{item.PercentBodyFat}</td>
                  <td>{item.PushUp}</td>
                  <td>{item.ModifiedPullUp}</td>
                  <td>{item.FlexedArmHang}</td>
                  <td>{item.CurlUp}</td>
                  <td>{item.TrunkLift}</td>
                  <td>{item.SitAndReach}</td>
                  <td>{item.ShoulderStretch}</td>
                  <td>{item.PYFA}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const HisoryStudentReport = () => {
  // const dispatch = useDispatch()

  // const reportFilterDataObject = useSelector((state) => state?.districtAdmin?.reportFilterDataObject)

  // const runReportButtonClicked = useSelector((state) => state?.districtAdmin?.runReportButtonClicked)

  // const token = useSelector((state) => state?.profile?.token);

  // const [initialCall, setInitialCall] = useState(true)

  const overviewReportSummaryByClass = useSelector(
    (state) => state?.districtAdmin?.overviewReportSummaryByClass
  );

  const horizontal_bar_data = {
    labels: ['Boys', 'Girls', 'Total'],
    datasets: [
      {
        label: 'Visit',
        data: [25, 25, 35],
        backgroundColor: ['#46A2D5', '#80BCAC', '#5CA547'],
        barThickness: 20,
      },
    ],
  };

  const horizontal_bar_data2 = {
    labels: [
      'Boys',
      'Girls',
      'Total',
      'Boys',
      'Girls',
      'Total',
      'Boys',
      'Girls',
      'Total',
      'Boys',
      'Girls',
      'Total',
    ],
    datasets: [
      {
        label: 'Visit',
        data: [25, 25, 35, 25, 25, 35, 25, 25, 35, 25, 15, 18],
        backgroundColor: ['#46A2D5', '#80BCAC', '#5CA547'],
        barThickness: 20,
      },
    ],
  };

  const horizontal_bar_options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          dash: [2, 4],
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          steps: 10,

          callback: (value, index, values) => {
            console.log(value);
            return `${value} %`;
          },
        },
      },
    },

    layout: {
      padding: {
        left: 1,
        right: 10,
      },
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        labels: {
          value: {
            color: 'black',
          },
        },
      },
      legend: {
        display: false,
        position: 'bottom',
        // labels: {
        //   boxWidth: 10,
        // },
        toolTip: {
          enabled: false,
        },
      },
    },
  };

  const horizontal_bar_options2 = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          dash: [2, 4],
        },
      },
      y: {
        display: false,
        ticks: {
          steps: 10,
          // stepSize: 100,

          callback: (value, index, values) => {
            console.log(value);
            return `${value} %`;
          },
        },
      },
    },
    layout: {
      padding: {
        left: 1,
        right: 10,
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        labels: {
          value: {
            color: 'black',
          },
        },
      },
      legend: {
        display: false,
        position: 'bottom',
        // labels: {
        //   boxWidth: 10,
        // },
        toolTip: {
          enabled: false,
        },
      },
    },
  };

  const [isSelectedStudentitem, setIsSelectedStudentitem] = useState(null);
  const [isSelectedStudentID, setIsSelectedStudentID] = useState(null);

  const studentDataItemClicked = (selectedItem) => {
    setIsSelectedStudentitem(!isSelectedStudentitem);

    console.log(selectedItem);

    setIsSelectedStudentID(selectedItem);
  };

  // useEffect(() => {

  //   console.log(reportFilterDataObject, "reportFilterDataObject objjjjjjjjjj from 885555")

  //   const finalObj = {

  //     school_uuids: reportFilterDataObject?.school_uuids,
  //     class_uuid: reportFilterDataObject?.class_name,
  //     grade: reportFilterDataObject?.grade,
  //     gender: reportFilterDataObject?.gender,
  //     start_date: reportFilterDataObject?.start_date,
  //     end_date: reportFilterDataObject?.end_date,

  //   }

  //   console.log(finalObj, "fitnessgram overview reporttt not from use effect")

  //   if(runReportButtonClicked && reportFilterDataObject?.school_uuids?.length > 0 && reportFilterDataObject?.class_name?.length > 0 || initialCall && reportFilterDataObject?.school_uuids?.length > 0 && reportFilterDataObject?.class_name?.length > 0){

  //     console.log(finalObj, "fitnessgram overview reporttt")

  //      dispatch(getOverviewReportSummaryByClassApiCall({finalObj, token}))

  //   dispatch(setRunReportButtonClicked(false))
  //   setInitialCall(false)

  //   }

  // }, [reportFilterDataObject, runReportButtonClicked])

  console.log(
    overviewReportSummaryByClass,
    'overviewReportSummaryByClassoverviewReportSummaryByClass'
  );

  return (
    // <>
    //   <div className='flex justify-between items-center mt-5 mx-3'>
    //     <h1 className='text-[#282828] text-[1.2rem] font-poppins-bold'>
    //       FitnessGram Overview Report
    //     </h1>
    //     <div className='flex px-4 py-2 bg-[#19A617] text-white font-poppins-medium rounded-full'>
    //       <FcClearFilters className='mr-2' size={20} />
    //       <button>Report Filters</button>
    //     </div>
    //   </div>
    //   <div className='flex justify-between items-center mx-3 pr-3 mt-2'>
    //     <>
    //       <Stack
    //         spacing={4}
    //         className=''
    //         width={['10vw', '10vw', '25vw', '20vw']}
    //       >
    //         <InputGroup>
    //           <InputLeftElement
    //             pointerEvents='none'
    //             children={<Search2Icon color='gray.300' />}
    //           />

    //           <Input
    //             type='type'
    //             borderRadius='25'
    //             placeholder='Search Student here'
    //           />
    //         </InputGroup>
    //       </Stack>
    //     </>
    //     <div className='flex justify-center items-center'>
    //       <BsPrinter className='mr-2' size={25} />
    //       <p>Print</p>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //       <img src={emailImg} className='mr-2  w-5 h-5' />
    //       <p>Email</p>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //       <VscFilePdf className='mr-2' size={25} />
    //       <p>PDF Download</p>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //       <FaFileCsv className='mr-2' size={25} />
    //       <p>CSV Download</p>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //       <FaFileCsv className='mr-2' size={25} />
    //       <p>XPS Download</p>
    //     </div>
    //   </div>
    //   {isSelectedStudentitem &&
    //   isSelectedStudentID &&
    //   isSelectedStudentID?.id ? (
    //     <>
    //       <div
    //         className={`${
    //           isSelectedStudentitem &&
    //           isSelectedStudentID &&
    //           isSelectedStudentID?.id === isSelectedStudentID.id
    //             ? ' text-white border-4 border-primary bg-primary rounded-t-3xl text-left'
    //             : 'border-4 border-[#F5F9FF] bg-[#F5F9FF]  rounded-lg'
    //         }  mt-3 font-poppins-thin text-[1rem]  mx-3 px-3 pr-3  py-3
    //      cursor-pointer text-left`}
    //         onClick={() => studentDataItemClicked(isSelectedStudentID)}
    //         key={isSelectedStudentID.id}
    //       >
    //         <div className='flex justify-between items-center gap-12 mx-3 pr-3 mt-2'>
    //           <>
    //             <div className='flex items-center w-[10rem]'>
    //               <p>{isSelectedStudentID.userIcon}</p>
    //               <p className='ml-2'>{isSelectedStudentID.studentName}</p>
    //             </div>
    //           </>

    //           <div className='flex justify-center items-center'>
    //             <p>{isSelectedStudentID.grade}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{isSelectedStudentID.dob}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{isSelectedStudentID.teacherName}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{isSelectedStudentID.schoolName}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{isSelectedStudentID.dropDownIconUp}</p>
    //           </div>
    //         </div>
    //       </div>

    //       <>
    //         <div className='h-full mx-1 mt-2 px-3'>
    //           <div className='p-10'>
    //             <section className='flex justify-between'>
    //               <p className='text-black font-poppins-bold text-[1.2rem]'>
    //                 {' '}
    //                 FitnessGram Overview Report{' '}
    //               </p>
    //               <img src={fit} className='w-[10rem]' />
    //             </section>
    //             <hr className='mt-5 border-[2px] border-back-color' />
    //             {/* <RenderActivity /> */}

    //             <hr className='mt-8 border-[2px] border-back-color ' />
    //             <div className='flex float-right mt-5'>
    //               <p className='mt-3'>A PROGRAM OF</p>
    //               <img src={play} className='w-[5rem]' />
    //               <p className='mt-3'>
    //                 THE NFL MOVEMENT FOR AN ACTIVE GENERATION
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </>
    //     </>
    //   ) : (
    //     StudentReportsTableDataList?.map((each) => (
    //       <div
    //         className={`${
    //           isSelectedStudentitem &&
    //           isSelectedStudentID &&
    //           isSelectedStudentID?.id === each.id
    //             ? ' text-white border-4 border-primary bg-primary rounded-t-3xl text-left'
    //             : 'border-4 border-[#F5F9FF] bg-[#F5F9FF]  rounded-lg'
    //         }  font-poppins-thin text-[1rem] my-3 mx-3 px-3 pr-3  py-3
    //      cursor-pointer   `}
    //         onClick={() => studentDataItemClicked(each)}
    //         key={each.id}
    //       >
    //         <div className='flex justify-between items-center mx-3 pr-3 mt-2'>
    //           <>
    //             <div className='flex items-center w-[10rem]'>
    //               <p>{each.userIcon}</p>
    //               <p className='ml-2'>{each.studentName}</p>
    //             </div>
    //           </>

    //           <div className='flex justify-center items-center'>
    //             <p>{each.grade}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{each.dob}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{each.teacherName}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{each.schoolName}</p>
    //           </div>

    //           <div className='flex justify-center items-center'>
    //             <p>{each.dropDownIcon}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))
    //   )}
    // </>

    <>
      <Box
        h='full'
        mt='2'
        className='example border-2 border-green'
        overflowY={'scroll'}
        px={5}
      >
        <MainRenderCard />

        <HStack className='border-2 border-primary'>
          <Box
            style={{
              position: 'relative',
              height: '35vh',
              width: '20%',
              display: 'flex',
              margin: '5px',
            }}
            className='border-2 border-red'
          >
            <Bar
              data={horizontal_bar_data}
              options={horizontal_bar_options}
              style={{
                display: 'flex',
              }}
              className='border-2 border-primary'
            />
          </Box>

          <Box
            style={{
              position: 'relative',
              height: '35vh',
              width: '20%',
              display: 'flex',
              margin: '5px',
            }}
            className='border-2 border-red'
          >
            <Bar
              data={horizontal_bar_data}
              options={horizontal_bar_options2}
              style={{
                display: 'flex',
              }}
            />
          </Box>

          <Box
            w='20%'
            height='35vh'
            position='relative'
            display='flex'
            margin='5px'
            className='border-2 border-red'
          >
            <Bar
              data={horizontal_bar_data}
              options={horizontal_bar_options2}
              style={{
                display: 'flex',
              }}
            />
          </Box>

          <Box
            position='relative'
            height='35vh'
            width='20%'
            display='flex'
            margin='5px'
            className='border-2 border-red'
          >
            <Bar
              data={horizontal_bar_data}
              options={horizontal_bar_options2}
              style={{
                display: 'flex',
              }}
            />
          </Box>

          <Box
            position='relative'
            height='35vh'
            width='60%'
            display='flex'
            margin='5px'
            className='border-2 border-red'
          >
            <Bar
              data={horizontal_bar_data2}
              options={horizontal_bar_options2}
              style={{
                display: 'flex',
              }}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default HisoryStudentReport;
