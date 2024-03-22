import React from 'react';
import play from '../../../../assets/images/Untitled design/play.png';
import fit from '../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FITNESSGRAM.png';
import { FcClearFilters } from 'react-icons/fc';
import emailImg from '../../../../assets/images/StudentReportTableImages/email.png';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { FaFileCsv } from 'react-icons/fa';

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

const FitnessGramClassScoreReport = () => {
  return (
    <>
     
      <div className='p-10'>
        <section className='flex justify-between'>
          <p className='text-black font-poppins-bold text-[1.2rem]'>
            {' '}
            FitnessGram Class Score (PYFA) Report{' '}
          </p>
          <img src={fit} className='w-[10rem]' />
        </section>
        <hr className='mt-5 border-[2px] border-back-color' />
        <RenderActivity />
        <div className='mt-10'>
          <p className='mt-2 mb-2'>Assessment by Activity Level</p>
          <div className='bg-[#58C2EB] text-white flex justify-between translate-x-[82%] p-2 w-[40rem] gap-3 mb-[-40px]'>
            {dataOne.map((item, index) => {
              return (
                <ul className=''>
                  <li className='text-sm whitespace-nowrap'>{item.name}</li>
                </ul>
              );
            })}
          </div>
          <FitnessGramReport />
        </div>

        <hr className='mt-8 border-[2px] border-back-color ' />
        <div className='flex float-right mt-5'>
          <p className='mt-3'>A PROGRAM OF</p>
          <img src={play} className='w-[5rem]' />
          <p className='mt-3'>THE NFL MOVEMENT FOR AN ACTIVE GENERATION</p>
        </div>
      </div>
    </>
  );
};

export default FitnessGramClassScoreReport;
