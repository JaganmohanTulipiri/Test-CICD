import React, { useState } from 'react';

import { useEffect } from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTestResultsData,
  getUpdateStudentData,
  setIsEditClicked,
} from '../../../../store/slices/studentSlice/studentSlice';
import DataSentForApproval from '../../Popups/DataSentForApproval';

const EnterStudentDataTable = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { onOpen } = useDisclosure();

  const loginResponse = useSelector((state) => state?.profile?.user);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const isEditClicked = useSelector((state) => state?.student?.isEditClicked);

  const enterTestResultsResponse = useSelector(
    (state) => state?.student?.enterTestResultsResponse?.response
  );

  const updateStudentResponse = useSelector(
    (state) => state?.student?.updateStudentResponse
  );

  const studentSelectedEventCard = useSelector(
    (state) => state?.student?.studentSelectedEventCard
  );

  console.log(studentSelectedEventCard, 'rom student data table');

  const tableColumn = [
    'Student Name',
    'Height',
    'Weight',
    '20M Pacer',
    'Percent Body Fat',
    'Abdominal Skin Fold',
    'Calf Skin Fold',
    'Tricep Skin Fold',
    'Curl-Up',
    'Trunk Lift',
    'Sit and Reach Left',
    'Sit and Reach Right',
    'Aerobic Activity',
    'Muscle-Strength',
    'Bone-Strength',
  ];

  const tableDataList = [
    {
      id: 1,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 2,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 3,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 4,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 5,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 6,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 7,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 8,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 9,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 10,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 11,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 12,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 13,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
    {
      id: 14,
      studentName: 'AStudent1, John',
      height: '5ft 6in',
      weight: '55.3lb',
      pacer: '',
      percentageBodyFat: '',
      abdominalSkinFold: '',
      calfSkinFold: '',
      tricepSkinFold: '',
      curlUp: '',
      trunkLift: '',
      sitAndReachLeft: '',
      sitAndReachRight: '',
      aerobicActivity: '',
      muscleStrength: '',
      boneStrength: '',
    },
  ];

  // const tableDataList = [studentSelectedEventCard];

  const [tableData, setTableData] = useState(tableDataList);

  const [nameErrorMsg, setNameErrorMsg] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(enterTestResultsResponse, 'enterTestResultsResponse from start');

  const [studentEnteredData, setStudentEnteredData] = useState(
    enterTestResultsResponse
  );

  console.log(studentEnteredData, 'studentEnteredDatastudentEnteredData');

  function tableResizing() {
    setIsSubmitted(false);

    const createResizableTable = function (table) {
      const cols = table.querySelectorAll('th');
      const updateTableWidth = () => {
        table.style.width =
          [].reduce.call(cols, (sum, col) => {
            sum + parseInt(col.style.width), 0;
          }) + 'px';

        console.log(table.style.width, 'table style width');
      };
      [].forEach.call(cols, function (col) {
        // Add a resizer element to the column
        const resizer = document.createElement('div');
        resizer.classList.add('resizer');

        // Set the height
        resizer.style.height = `${table.offsetHeight}px`;

        console.log(resizer, 'resizerresizer');

        col.appendChild(resizer);

        createResizableColumn(col, resizer, updateTableWidth);
      });
      updateTableWidth();
    };

    const createResizableColumn = function (col, resizer, updateTableWidth) {
      let x = 0;
      let w = parseInt(window.getComputedStyle(col).width, 10);

      col.style.width = `${w}px`;

      const mouseDownHandler = function (e) {
        x = e.clientX;

        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        resizer.classList.add('resizing');
      };

      const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        col.style.width = `${w + dx}px`;

        updateTableWidth();
      };

      const mouseUpHandler = function () {
        resizer.classList.remove('resizing');
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      resizer.addEventListener('mousedown', mouseDownHandler);
    };

    createResizableTable(document.getElementById('resizeMe'));
  }

  useEffect(() => {
    const userDetails = {
      user_uuid: loginResponse && loginResponse?.response?.uuid,
      event_uuid: studentSelectedEventCard && studentSelectedEventCard?.uuid,
    };

    console.log(userDetails, 'userDetails');

    dispatch(getTestResultsData({ body: userDetails, token }));

    dispatch(setIsEditClicked(studentSelectedEventCard?.results));
  }, []);





  console.log(studentEnteredData, studentEnteredData?.length, "studentEnteredDatastudentEnteredDatastudentEnteredData")



  useEffect(() => {
    studentEnteredData !== undefined && studentEnteredData !== null && Object.keys(studentEnteredData)?.length && tableResizing();
  }, [studentEnteredData]);

  useEffect(() => {
    setStudentEnteredData(enterTestResultsResponse);
  }, [enterTestResultsResponse]);

  const handleChange = (event) => {
    console.log(tableData, 'tabledata tabledata');

    console.log(
      event.target.value,
      event.target.name.split('-').join('_'),
      'iam evnet item'
    );

    setStudentEnteredData((prevState) => ({
      ...prevState,
      results: {
        ...prevState.results,
        [event.target.name]: event.target.value,
      },
    }));

    setNameErrorMsg(null);
  };

  const cancelButtonClicked = (event) => {
    event.stopPropagation();

    navigate(`/role/Student/EnterTestResults`);

    console.log('cancel clicked');
  };

  const formSubmitted = (event) => {
    event.preventDefault();

    console.log('form submitted');

    const eventfields = studentEnteredData?.results;

    console.log(eventfields, 'iam eventfields');

    const studentDetails = {
      student_data: [
        {
          user_uuid: loginResponse?.response?.uuid,
          event_uuid:
            studentSelectedEventCard && studentSelectedEventCard?.uuid,
          submitted_by: loginResponse?.response?.uuid,
          submitter_role: userRole,
          event_fields: eventfields,
        },
      ],
    };

    dispatch(getUpdateStudentData({ body: studentDetails, token }));

    console.log(studentDetails, 'after submission');

    setIsSubmitted(true);
  };

  console.log(studentEnteredData, 'studentEnteredDatastudentEnteredData');

  const flag = true;

  console.log(
    updateStudentResponse,
    'updateStudentResponseupdateStudentResponseupdateStudentResponseupdateStudentResponseupdateStudentResponseupdateStudentResponse'
  );

  // useEffect(() => {
  //   const userDetails = {
  //     user_uuid: loginResponse && loginResponse?.response?.uuid,
  //     event_uuid: studentSelectedEventCard && studentSelectedEventCard?.uuid,
  //   };

  //   console.log(userDetails, "userDetails");

  //   if (updateStudentResponse?.code === 200) {
  //     dispatch(getTestResultsData({ body: userDetails, token }));
  //   }
  // }, [updateStudentResponse])

  const nameErrorFunctionCall = (event) => {
    if (
      event.target.className !==
      'border-r-[#AFAFAF] border-b-[#AFAFAF] text-center border border-[#C6C7C7]  w-full rounded-md py-1'
    ) {
      setNameErrorMsg('');
    } else {
      setNameErrorMsg("You cant't change your name from here");
    }
  };

  return (
    <Box>
      <Box
        display={{ base: 'none', md: 'block', lg: 'block' }}
        onClick={nameErrorFunctionCall}
      >
        <>
          <h1 className='my-5'>
            {studentSelectedEventCard && studentSelectedEventCard?.event_name}
          </h1>

          {studentSelectedEventCard !== undefined &&
          Object.keys(studentSelectedEventCard)?.length > 0 &&
          studentSelectedEventCard?.test_items?.length === 0 ? (
            <div className='flex flex-col justify-center items-center '>
              <img src='https://www.onlineshopping17.com/products/no-record-found.png' />
            </div>
          ) : (
            <form onSubmit={formSubmitted}>
              <>
                <table id='resizeMe' className='table-1'>
                  <thead>
                    <tr>
                      <th style={{ width: 'auto', minWidth: 'auto' }}>
                        Student Name
                      </th>

                      {studentSelectedEventCard !== undefined &&
                        Object.keys(studentSelectedEventCard)?.length > 0 &&
                        studentSelectedEventCard?.test_items?.map((each) => (
                          <th style={{ width: 'auto', minWidth: 'auto' }}>
                            {each}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      key={studentEnteredData?.uuid}
                      onChange={(event) => handleChange(event)}
                    >
                      <td onClick={nameErrorFunctionCall}>
                        <p
                          className={
                            isEditClicked
                              ? 'bg-[#F4F8FF] border-[#F4F8FF] text-center w-full rounded-md py-1'
                              : 'border-r-[#AFAFAF] border-b-[#AFAFAF] text-center border border-[#C6C7C7]  w-full rounded-md py-1'
                          }
                        >{`${studentEnteredData?.last_name} ${studentEnteredData?.first_name}`}</p>
                        <p className='text-red'>
                          {nameErrorMsg && nameErrorMsg}
                        </p>
                      </td>

                      {studentEnteredData !== undefined &&
                        Object.keys(studentEnteredData)?.length > 0 &&
                        studentSelectedEventCard?.test_items?.map((each) => (
                          <td>
                            <input
                              type='text'
                              name={each.split(' ').join('_')}
                              value={
                                studentEnteredData?.results[
                                  each.split(' ').join('_')
                                ]
                              }
                              disabled={isEditClicked ? true : false}
                              className={
                                isEditClicked
                                  ? 'bg-[#F4F8FF] border-[#F4F8FF] text-center w-full rounded-md py-1'
                                  : ' border-r-[#AFAFAF] border-b-[#AFAFAF] text-center border border-[#C6C7C7] w-full rounded-md py-1'
                              }
                            />
                          </td>
                        ))}
                    </tr>
                  </tbody>
                </table>
              </>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap='5'
                mt='5'
              >
                <Button
                  fontSize='sm'
                  fontFamily='poppins'
                  color='#9D9C9C'
                  bgColor='#F5F4F4'
                  borderRadius='full'
                  borderRightWidth='1px'
                  borderColor='gray'
                  px='10'
                  type='button'
                  onClick={cancelButtonClicked}
                >
                  Cancel
                </Button>

                <DataSentForApproval />
              </Box>
            </form>
          )}
        </>
      </Box>
      <Box display={{ base: 'flex flex-col', md: 'none', lg: 'none' }}>
        <Text className='my-5' fontWeight={{ base: 'bold' }}>
          {studentSelectedEventCard && studentSelectedEventCard?.event_name}
        </Text>
        <Center>
          {studentSelectedEventCard !== undefined &&
          Object.keys(studentSelectedEventCard)?.length > 0 &&
          studentSelectedEventCard?.test_items?.length === 0 ? (
            <div className='flex flex-col justify-center items-center '>
              <img src='https://www.onlineshopping17.com/products/no-record-found.png' />
            </div>
          ) : (
            <form onSubmit={formSubmitted}>
              <>
                <Text>Student Name</Text>
                <Box onClick={nameErrorFunctionCall}>
                  <Text
                    className={
                      isEditClicked
                        ? 'bg-[#F4F8FF] border-[#F4F8FF] text-center w-full rounded-md py-1'
                        : 'border-r-[#AFAFAF] border-b-[#AFAFAF] text-center border border-[#C6C7C7]  w-full rounded-md py-1'
                    }
                  >{`${studentEnteredData?.last_name} ${studentEnteredData?.first_name}`}</Text>
                  <Text className='text-red'>
                    {nameErrorMsg && nameErrorMsg}
                  </Text>
                </Box>
              </>
              {studentSelectedEventCard !== undefined &&
                Object.keys(studentSelectedEventCard)?.length > 0 &&
                studentSelectedEventCard?.test_items?.map((each) => (
                  <Box>
                    <label>{each}</label>

                    <Input
                      type='text'
                      name={each.split(' ').join('_')}
                      value={
                        studentEnteredData?.results[each.split(' ').join('_')]
                      }
                      disabled={isEditClicked ? true : false}
                      className={
                        isEditClicked
                          ? 'bg-[#F4F8FF] border-[#F4F8FF] text-center w-full rounded-md py-1'
                          : ' border-r-[#AFAFAF] border-b-[#AFAFAF] text-center border border-[#C6C7C7] w-full rounded-md py-1'
                      }
                    />
                  </Box>
                ))}

              <Center>
                <Box
                  display='flex-col'
                  mb='5'
                  mt='5'
                  ml={{ base: '12', lg: '0', md: '0' }}
                >
                  <Button
                    fontSize='sm'
                    fontFamily='poppins'
                    color='#9D9C9C'
                    bgColor='#F5F4F4'
                    borderRadius='full'
                    borderRightWidth='1px'
                    borderColor='gray'
                    px='10'
                    type='button'
                    w='80%'
                    mb='2'
                    onClick={cancelButtonClicked}
                  >
                    Cancel
                  </Button>

                  <DataSentForApproval />
                </Box>
              </Center>
            </form>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default EnterStudentDataTable;
