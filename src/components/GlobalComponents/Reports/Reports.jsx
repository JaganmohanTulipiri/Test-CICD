import { CheckIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter, Icon } from '@chakra-ui/react';
import { VscFilePdf } from 'react-icons/vsc';
import { IoMdStarOutline } from 'react-icons/io';

import React, { useState } from 'react';
import ReportsTable from './ReportsTable';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Reports = () => {
  const [isButtonClicked, setIsButtonClicked] = useState({
    fitnessGramReports: true,
    activity: false,
    reportActivity: false,
  });

  const token = useSelector((state) => state?.profile?.token);
  const userId = useSelector((state) => state?.profile?.userId);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const logOutResponse = useSelector((state) => state?.profile?.logOutResponse);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRole = useSelector((state) => state?.profile?.userRole);

  const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);

  const fitnessGramReportsList = [
    {
      id: 1,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'FitnessGram Student Report',
    },

    {
      id: 2,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'FitnessGram Overview Report',
    },
    {
      id: 3,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'FitnessGram Completion Report',
    },
    {
      id: 4,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'FitnessGram Statistics Report',
    },
    {
      id: 5,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'FitnessGram Class Score(PYFA) Report',
    },
  ];

  // const reportsData = {
  //   teacher: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Student Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Overview Report',
  //     },
  //     {
  //       id: 3,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Completion Report',
  //     },
  //     {
  //       id: 4,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //     {
  //       id: 5,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Class Score(PYFA) Report',
  //     },
  //   ],
  //   student: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Student Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram History Report',
  //     },
  //   ],
  //   superAdmin: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Student Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Overview Report',
  //     },
  //     {
  //       id: 3,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Completion Report',
  //     },
  //     {
  //       id: 4,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //     {
  //       id: 5,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Class Score(PYFA) Report',
  //     },
  //     {
  //       id: 6,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Probability Report',
  //     },
  //   ],
  //   schoolAdmin: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Student Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Overview Report',
  //     },
  //     {
  //       id: 3,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Completion Report',
  //     },
  //     {
  //       id: 4,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //     {
  //       id: 5,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Class Score(PYFA) Report',
  //     },
  //     {
  //       id: 6,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Probability Report',
  //     },
  //   ],
  //   districtAdmin: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Student Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Overview Report',
  //     },
  //     {
  //       id: 3,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Completion Report',
  //     },
  //     {
  //       id: 4,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //     {
  //       id: 5,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Class Score(PYFA) Report',
  //     },
  //     {
  //       id: 6,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Probability Report',
  //     },
  //   ],
  //   stateAdmin: [
  //     {
  //       id: 1,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Overview Report',
  //     },

  //     {
  //       id: 2,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //     {
  //       id: 3,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Completion Report',
  //     },
  //     {
  //       id: 4,
  //       starIcon: IoMdStarOutline,
  //       pdfIcon: VscFilePdf,
  //       text: 'FitnessGram Statistics Report',
  //     },
  //   ],
  // };

  const activityList = [
    {
      id: 1,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Student Report',
    },

    {
      id: 2,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Overview Report',
    },
    {
      id: 3,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Completion Report',
    },
    {
      id: 4,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Statistics Report',
    },
    {
      id: 5,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Class Score(PYFA) Report',
    },
    {
      id: 6,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: 'Activity Probability Report',
    },
  ];

  const objectList = {
    fitnessGramReportsList,
    activityList,
  };

  let filteredOptions = fitnessGramReportsList.slice(0, 3);

  const [fullList, setFullList] = useState(filteredOptions);

  const toggleFunction = (event) => {
    setIsButtonClicked({
      [event.target.name]: true,
    });

    setIsSeeMoreClicked(false);

    const selectedList = `${event.target.name}List`;

    if (selectedList !== 'reportActivityList') {
      console.log(objectList[selectedList], 'objectList[selectedList]');

      setFullList(objectList[selectedList].slice(0, 3));
    }
  };

  const seeMoreButtonclicked = () => {
    for (let i in isButtonClicked) {
      if (isButtonClicked[i]) {
        const filteredOptions = objectList[`${i}List`]?.slice(
          0,
          objectList[`${i}List`]?.length
        );

        console.log(filteredOptions, 'filteredOptions');
        setFullList(filteredOptions);

        setIsSeeMoreClicked(true);
      }
    }
  };

  const redirectActivities = {
    'FitnessGram Student Report': () => {
      navigate(`/role/${userRole}/StudentReportsTableData`);
    },
    'Activity Student Report': () => {
      navigate(`/role/${userRole}/ActivityGramStudentReport`);
    },
    'Activity Overview Report': () => {
      navigate(`/role/${userRole}/ActivityLogStudentReport`);
    },
    'Activity Completion Report': () => {
      navigate(`/role/${userRole}/ActivityGramStaticReport`);
    },
    'FitnessGram Statistics Report': () => {
      navigate(`/role/${userRole}/FitnessGramStaticReport`);
    },
    'FitnessGram Class Score(PYFA) Report': () => {
      navigate(`/role/${userRole}/FitnessGramClassScoreReport`);
    },
    'FitnessGram Overview Report': () => {
      navigate(`/role/${userRole}/FitnessGramOverviewReport`);
    },
    'FitnessGram Completion Report': () => {
      navigate(`/role/${userRole}/FitnessGramCompletionReport`);
    },
  };

  const fitenssGramItemClicked = (selectedItem) => {
    redirectActivities[selectedItem]();
    console.log(selectedItem, 'selectedItem');
  };

  const handleFocus = (event) => {
    console.log('hii');
    console.log(event);

    setIsDropdownOpened(true);
  };

  const handleChange = (event) => {
    console.log(event, 'iam onChange');
    setSearchValue(event.target.value);
  };

  console.log(isButtonClicked, 'isbutton clicked');

  return (
    <>
      <div className='md:p-0 md:mt-10 md:w-[100%] bg-white lg:w-auto'>
        <h1 className='font-poppins-medium text-md mt-5 md:px-5 lg:px-10'>
          Available Resources
        </h1>
        <div className='flex justify-between items-center mt-5 md:px-5 lg:px-10'>
          <div className='flex justify-between'>
            <button
              name='fitnessGramReports'
              className={`${
                isButtonClicked && isButtonClicked?.fitnessGramReports
                  ? 'bg-primary text-white'
                  : 'bg-gray-1 text-black'
              } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small rounded-l-full`}
              onClick={toggleFunction}
            >
              FITNESSGRAM REPORTS
            </button>
            <button
              name='activity'
              className={`${
                isButtonClicked && isButtonClicked?.activity
                  ? 'bg-primary text-white'
                  : 'bg-gray-1 text-black'
              } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small `}
              onClick={toggleFunction}
            >
              ACTIVITY
            </button>
            <button
              name='reportActivity'
              className={`${
                isButtonClicked && isButtonClicked?.reportActivity
                  ? 'bg-primary text-white'
                  : 'bg-gray-1 text-black'
              } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small rounded-r-full`}
              onClick={toggleFunction}
            >
              REPORT ACTIVITY
            </button>
          </div>
        </div>
        <div className=''>
          {isButtonClicked && isButtonClicked?.reportActivity ? (
            <>
              <ReportsTable />
            </>
          ) : (
            <>
              {fullList &&
                fullList?.map((each) => (
                  <>
                    <div className=' mt-5 md:px-5 lg:px-10'>
                      <Card
                        bg='#f5f5f5'
                        boxShadow='sm'
                        h='14'
                        border='1'
                        borderColor='yellow.600'
                      >
                        <CardBody
                          display='flex'
                          alignItems='center'
                          justifyContent='flex-start'
                          cursor='pointer'
                          //onClick={() => fitenssGramItemClicked(each)}
                        >
                          <Text
                            className='px-5 cursor-pointer'
                            onClick={() => fitenssGramItemClicked(each.text)}
                          >
                            {each.text}
                          </Text>
                        </CardBody>
                      </Card>
                    </div>
                  </>
                ))}

              {isSeeMoreClicked ? (
                <p
                  className='text-primary underline font-poppins-thin px-10 mt-4 cursor-pointer'
                  onClick={() => {
                    setFullList(fullList.slice(0, 3));

                    setIsSeeMoreClicked(false);
                  }}
                >
                  See Less
                </p>
              ) : (
                <p
                  className='text-primary underline font-poppins-thin px-10 mt-4 cursor-pointer'
                  onClick={seeMoreButtonclicked}
                >
                  {' '}
                  See More
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Reports;
