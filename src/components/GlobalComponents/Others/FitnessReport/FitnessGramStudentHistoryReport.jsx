import React, { useState } from 'react';
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
import { BsChevronDown, BsChevronUp, BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { FaFileCsv, FaUser } from 'react-icons/fa';

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

const FitnessGramStudentHistoryReport = () => {
  const [isSelectedStudentitem, setIsSelectedStudentitem] = useState(null);
  const [isSelectedStudentID, setIsSelectedStudentID] = useState(null);

  const studentDataItemClicked = (selectedItem) => {
    setIsSelectedStudentitem(!isSelectedStudentitem);

    console.log(selectedItem);

    setIsSelectedStudentID(selectedItem);
  };
  return (
    <>
      <div className='flex justify-between items-center mt-5 mx-3'>
        <h1 className='text-[#282828] text-[1.2rem] font-poppins-bold'>
          FitnessGram Student
        </h1>
        <div className='flex px-4 py-2 bg-[#19A617] text-white font-poppins-medium rounded-full'>
          <FcClearFilters className='mr-2' size={20} />
          <button>Report Filters</button>
        </div>
      </div>
      <div className='flex justify-between items-center mx-3 pr-3 mt-2'>
        <>
          <Stack
            spacing={4}
            className=''
            width={['10vw', '10vw', '25vw', '20vw']}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
              />

              <Input
                type='type'
                borderRadius='25'
                placeholder='Search Student here'
              />
            </InputGroup>
          </Stack>
        </>
        <div className='flex justify-center items-center'>
          <BsPrinter className='mr-2' size={25} />
          <p>Print</p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={emailImg} className='mr-2  w-5 h-5' />
          <p>Email</p>
        </div>
        <div className='flex justify-center items-center'>
          <VscFilePdf className='mr-2' size={25} />
          <p>PDF Download</p>
        </div>
        <div className='flex justify-center items-center'>
          <FaFileCsv className='mr-2' size={25} />
          <p>CSV Download</p>
        </div>https://vscode.com/github.com/Vali-Xelp/fitnessgream_website/tree/demo_16/src/features/DistrictAdmin
        <div className='flex justify-center items-center'>
          <FaFileCsv className='mr-2' size={25} />
          <p>XPS Download</p>
        </div>
      </div>
      {isSelectedStudentitem &&
      isSelectedStudentID &&
      isSelectedStudentID?.id ? (
        <>
          <div
            className={`${
              isSelectedStudentitem &&
              isSelectedStudentID &&
              isSelectedStudentID?.id === isSelectedStudentID.id
                ? ' text-white border-4 border-primary bg-primary rounded-t-3xl text-left'
                : 'border-4 border-[#F5F9FF] bg-[#F5F9FF]  rounded-lg'
            }  mt-3 font-poppins-thin text-[1rem]  mx-3 px-3 pr-3  py-3 
         cursor-pointer text-left`}
            onClick={() => studentDataItemClicked(isSelectedStudentID)}
            key={isSelectedStudentID.id}
          >
            <div className='flex justify-between items-center gap-12 mx-3 pr-3 mt-2'>
              <>
                <div className='flex items-center w-[10rem]'>
                  <p>{isSelectedStudentID.userIcon}</p>
                  <p className='ml-2'>{isSelectedStudentID.studentName}</p>
                </div>
              </>

              <div className='flex justify-center items-center'>
                <p>{isSelectedStudentID.grade}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{isSelectedStudentID.dob}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{isSelectedStudentID.teacherName}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{isSelectedStudentID.schoolName}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{isSelectedStudentID.dropDownIconUp}</p>
              </div>
            </div>
          </div>

          <>
            <div className='h-full mx-1 mt-2 px-3'>
              <div className='p-10'>
                <section className='flex justify-between'>
                  <p className='text-black font-poppins-bold text-[1.2rem]'>
                    {' '}
                    FitnessGram Overview Report{' '}
                  </p>
                  <img src={fit} className='w-[10rem]' />
                </section>
                <hr className='mt-5 border-[2px] border-back-color' />
                {/* <RenderActivity /> */}
                <div className='mt-10'></div>

                <hr className='mt-8 border-[2px] border-back-color ' />
                <div className='flex float-right mt-5'>
                  <p className='mt-3'>A PROGRAM OF</p>
                  <img src={play} className='w-[5rem]' />
                  <p className='mt-3'>
                    THE NFL MOVEMENT FOR AN ACTIVE GENERATION
                  </p>
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        StudentReportsTableDataList?.map((each) => (
          <div
            className={`${
              isSelectedStudentitem &&
              isSelectedStudentID &&
              isSelectedStudentID?.id === each.id
                ? ' text-white border-4 border-primary bg-primary rounded-t-3xl text-left'
                : 'border-4 border-[#F5F9FF] bg-[#F5F9FF]  rounded-lg'
            }  font-poppins-thin text-[1rem] my-3 mx-3 px-3 pr-3  py-3 
         cursor-pointer   `}
            onClick={() => studentDataItemClicked(each)}
            key={each.id}
          >
            <div className='flex justify-between items-center mx-3 pr-3 mt-2'>
              <>
                <div className='flex items-center w-[10rem]'>
                  <p>{each.userIcon}</p>
                  <p className='ml-2'>{each.studentName}</p>
                </div>
              </>

              <div className='flex justify-center items-center'>
                <p>{each.grade}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{each.dob}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{each.teacherName}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{each.schoolName}</p>
              </div>

              <div className='flex justify-center items-center'>
                <p>{each.dropDownIcon}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default FitnessGramStudentHistoryReport;
