import React, { useState } from 'react';
import play from '../../../../assets/images/Untitled design/play.png';
import fit from '../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FITNESSGRAM.png';
import { FcClearFilters } from 'react-icons/fc';
import emailImg from '../../../../assets/images/StudentReportTableImages/email.png';
import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';
import { BsChevronDown, BsChevronUp, BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { FaFileCsv, FaUser } from 'react-icons/fa';

import { Bar } from 'react-chartjs-2';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart, { Colors, plugins } from 'chart.js/auto';

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

  return (
    <div style={{ width: '50vw' }}>
      <Line options={line_options} data={line_data} />
      <Line options={line_options} data={line_data} />

      <Line options={area_options} data={area_data} />
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
  const data = [
    {
      id: '1',
      workout: 'Aerobic capacity',
      per: '90%',
      status: 'Completed',
      tot: '99 Complete',
      pending: '10 InComplete',
    },
    {
      id: '2',
      workout: 'Body Composition',
      per: '90%',
      status: 'Completed',
      tot: '99 Complete',
      pending: '10 InComplete',
    },
    {
      id: '3',
      workout: 'UpperBody Strength/ Endurance',
      per: '89%',
      status: 'Completed',
      tot: '85 Complete',
      pending: '10 InComplete',
    },
    {
      id: '4',
      workout: 'UpperBody Strength/ Endurance',
      per: '89%',
      status: 'Completed',
      tot: '85 Complete',
      pending: '10 InComplete',
    },
    {
      id: '5',
      workout: 'UpperBody Strength/ Endurance',
      per: '89%',
      status: 'Completed',
      tot: '85 Complete',
      pending: '10 InComplete',
    },
    {
      id: '6',
      workout: 'UpperBody Strength/ Endurance',
      per: '89%',
      status: 'Completed',
      tot: '85 Complete',
      pending: '10 InComplete',
    },
  ];
  return (
    <>
      <Box>
        <Box
          display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}
          justifyContent='space-between'
          mt='5'
        >
          <Text className='text-[2rem]'>
            THE DISTRICT (THE COOPER INSTITUTE)
          </Text>
          <Text>10/18/2023</Text>
        </Box>

        <>
          <Text>Average Completion: 90%</Text>
        </>
        <Divider orientation='horizontal' mt='5' />
      </Box>

      <Box textAlign={'center'}>
        <Center gap={'2'} mt='2'>
          <Box border='1px solid gray' display={'flex'} gap='2' p='2' mt='2'>
            <Text>
              <>10/18/2023</>
            </Text>
            <Text>
              <>to</>
            </Text>
            <Text>
              <>10/18/2023</>
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Grid templateColumns='repeat(6, 2fr)' gap={2} mt='10'>
          {data.map((item, index) => {
            return (
              <>
                <GridItem
                  w='60%'
                  h={'10rem'}
                  bg='blue.500'
                  textAlign={'center'}
                >
                  <Flex
                    flexDirection={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                    mt='10'
                  >
                    <Text fontSize={'2rem'}>{item.per}</Text>
                    <Text>{item.status}</Text>
                  </Flex>
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Box>
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
  const data2 = [
    {
      id: 1,
      per: '90%',
      name: '  FG EXAMPLE SCHOOL A',
      tot: '99 Complete',
      pending: '10 InComplete',
    },
    {
      id: '2',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
    {
      id: '3',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
    {
      id: '3',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
    {
      id: '3',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
    {
      id: '3',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
    {
      id: '3',
      per: '90%',
      name: 'FG EXAMPLE SCHOOL A',
      stu: '52',
      per1: '100%',
      per2: '100%',
      max: 'N/A',
      per3: '100%',
      per4: '100%',
    },
  ];
  const data = [
    {
      id: '1',
      workout: '',
    },
    {
      id: '1',
      workout: 'Aerobic capacity',
    },
    {
      id: '2',
      workout: 'Body Composition',
    },
    {
      id: '3',
      workout: 'UpperBody Strength/ Endurance',
    },
    {
      id: '4',
      workout: 'Trunk Extensor Strength',
    },
    {
      id: '5',
      workout: 'Flexibility',
    },
    {
      id: '6',
      workout: 'Average',
    },
  ];
  return (
    <div className='mt-10 '>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              {data.map((item, index) => {
                return (
                  <>
                    <Th>{item.workout}</Th>
                  </>
                );
              })}
            </Tr>
          </Thead>

          <>
            <Tbody>
              <Tr>
                <Td>FG EXAMPLE SCHOOL A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> N/A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
              </Tr>
              <Tr>
                <Td>FG EXAMPLE SCHOOL A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> N/A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
              </Tr>
              <Tr>
                <Td>FG EXAMPLE SCHOOL A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> N/A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
              </Tr>
              <Tr>
                <Td>FG EXAMPLE SCHOOL A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
                <Td> N/A</Td>
                <Td> 100%</Td>
                <Td> 100%</Td>
              </Tr>
            </Tbody>
          </>
        </Table>
      </TableContainer>
    </div>
  );
};

const FitnessGramCompletionReport = () => {
  const [isSelectedStudentitem, setIsSelectedStudentitem] = useState(null);
  const [isSelectedStudentID, setIsSelectedStudentID] = useState(null);

  const studentDataItemClicked = (selectedItem) => {
    setIsSelectedStudentitem(!isSelectedStudentitem);

    console.log(selectedItem);

    setIsSelectedStudentID(selectedItem);
  };
  return (
    // <>
    //   <div className='flex justify-between items-center mt-5 mx-3'>
    //     <h1 className='text-[#282828] text-[1.2rem] font-poppins-bold'>
    //       FitnessGram Completion Report
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
    //                 FitnessGram Completion Report{' '}
    //               </p>
    //               <img src={fit} className='w-[10rem]' />
    //             </section>
    //             <hr className='mt-5 border-[2px] border-back-color' />
    //             <RenderActivity />
    //             <div className='mt-10' p='10'>
    //               <FitnessGramReport />
    //             </div>

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
      <div className='h-full mx-1 mt-2 px-3'>
        <div className='p-10'>
          <section className='flex justify-between'>
            <p className='text-black font-poppins-bold text-[1.2rem]'>
              {' '}
              FitnessGram Completion Report
            </p>
            <img src={fit} className='w-[10rem]' />
          </section>
          <hr className='mt-5 border-[2px] border-back-color' />
          <RenderActivity />
          <div className='mt-10' p='10'>
            <FitnessGramReport />
          </div>

          <hr className='mt-8 border-[2px] border-back-color ' />
          <div className='flex float-right mt-5'>
            <p className='mt-3'>A PROGRAM OF</p>
            <img src={play} className='w-[5rem]' />
            <p className='mt-3'>THE NFL MOVEMENT FOR AN ACTIVE GENERATION</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessGramCompletionReport;
