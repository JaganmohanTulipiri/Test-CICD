import { Divider } from 'antd';
import React from 'react';
import { Flex, Spacer, Box, Text } from '@chakra-ui/react';
import play from '../../../../assets/images/Untitled design/play.png';

const ActivityLiteStudentReport = () => {
  const data = [
    {
      id: '1',
      student: 'Raj Basu',
      School: 'GreenLight Elementary',
      Event: 'Test AGLBP',
      date: '10/25/2023',
      des: 'The youth Activity Profile provides a summary of your involvement in physical activity (both at school and at home) as well as an indicator of your sedentary behavior. You may not be able to control the amount of physical activity that you get at school (Panel A) but you can try to be more active during your free time and when you are at home (Panel B). If your profile shows that you spend a lot of time being sedentary (Panel C) try to reduce this amount and add some activity to your day. Your activity levels will vary from week to week so ratings of your typical behavior are more important than what you did last week.',
    },
  ];
  const activity = [
    {
      id: '1',
      head: 'A. Activity Levels at School',
      activity: 'Activity to School',

      col1: 'Activity during Physical Education Class',
      col2: 'Activity during Recess',
      col3: 'Activity during Lunch',
      col4: 'Activity from School',
      desc: 'There are many opportunities to be active while at school. Physical education provides a structured time to be active but you can also be active on the way to school, during breaks and at lunch. The scores show your level of activity at different periods in the school day - a high score indicates a higher level of activity. If your score is low, you can try to be more active at school (and also at home).',
      desc2:
        'Your average activity score at school last week was 3.2 out of possible score of 5.',
    },
    {
      id: '1',
      head: 'B. Activity Levels at School',
      activity: 'Activity to School',

      col1: 'Activity during Physical Education Class',
      col2: 'Activity during Recess',
      col3: 'Activity during Lunch',
      col4: 'Activity from School',
      desc: 'There are many opportunities to be active while at school. Physical education provides a structured time to be active but you can also be active on the way to school, during breaks and at lunch. The scores show your level of activity at different periods in the school day - a high score indicates a higher level of activity. If your score is low, you can try to be more active at school (and also at home).',
      desc2:
        'Your average activity score at school last week was 3.2 out of possible score of 5.',
    },
    {
      id: '3',
      head: 'C. Activity Levels at School',
      activity: 'Activity to School',

      col1: 'Activity during Physical Education Class',
      col2: 'Activity during Recess',
      col3: 'Activity during Lunch',
      col4: 'Activity from School',
      desc: 'There are many opportunities to be active while at school. Physical education provides a structured time to be active but you can also be active on the way to school, during breaks and at lunch. The scores show your level of activity at different periods in the school day - a high score indicates a higher level of activity. If your score is low, you can try to be more active at school (and also at home).',
      desc2:
        'Your average activity score at school last week was 3.2 out of possible score of 5.',
    },
    {
      id: '4',
      head: 'D. Activity Levels at School',
      activity: 'Activity to School',

      col1: 'Activity during Physical Education Class',
      col2: 'Activity during Recess',
      col3: 'Activity during Lunch',
      col4: 'Activity from School',
      desc: 'There are many opportunities to be active while at school. Physical education provides a structured time to be active but you can also be active on the way to school, during breaks and at lunch. The scores show your level of activity at different periods in the school day - a high score indicates a higher level of activity. If your score is low, you can try to be more active at school (and also at home).',
      desc2:
        'Your average activity score at school last week was 3.2 out of possible score of 5.',
    },
  ];

  const SampleData = () => {
    return (
      <div className=''>
        {data.map((item, index) => {
          return (
            <div className=''>
              <Box>
                <Flex>
                  <Box w='150px' h='10' bg='red.500'>
                    <p>Student:{item.student}</p>
                    <p>Teacher:{item.student}</p>
                    <p>School:{item.student}</p>
                    <p>Event:{item.student}</p>
                    <p>Date:{item.student}</p>
                  </Box>

                  <Spacer />
                  <Box w='50rem' h='10' bg='red.500'>
                    <p>{item.des}</p>
                  </Box>
                </Flex>
              </Box>
            </div>
          );
        })}
      </div>
    );
  };

  const ActivityTable = () => {
    return (
      <>
        {activity.map((item, index) => {
          return (
            <section className='border-2 border-gray-2 mt-5'>
              <b className='font-poppins-medium m-4 text-bold '>{item.head}</b>

              <hr />
              <div className='flex justify-between'>
                <p className='font-poppins-medium m-4'>{item.activity}</p>
                <div className='flex m-5 '>
                  <p className='bg-green border-2 border-gray-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>

                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>
                </div>
              </div>
              <hr />

              <div className='flex justify-between'>
                <p className='font-poppins-medium m-4'>{item.col1}</p>
                <div className='flex m-5 '>
                  <p className='bg-green border-2 border-gray-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>

                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>
                </div>
              </div>
              <hr />
              <div className='flex justify-between'>
                <p className='font-poppins-medium m-4'>{item.col2}</p>
                <div className='flex m-5 '>
                  <p className='bg-green border-2 border-gray-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>

                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>
                </div>
              </div>
              <hr />
              <div className='flex justify-between'>
                <p className='font-poppins-medium m-4'>{item.col3}</p>
                <div className='flex m-5 '>
                  <p className='bg-green border-2 border-gray-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>

                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>
                </div>
              </div>
              <hr />

              <div className='flex justify-between'>
                <p className='font-poppins-medium m-4'>{item.col4}</p>
                <div className='flex m-5 '>
                  <p className='bg-green border-2 border-gray-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-green border-2 border-gray-1 p-1 w-[5rem]'></p>
                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>

                  <p className='bg-white border-2 border-gray-1 p-1 w-[5rem]'></p>
                </div>
              </div>

              <hr />
              <p className='font-poppins-medium m-4'>{item.desc}</p>
              <b className='font-poppins-medium m-4'>{item.desc2}</b>
            </section>
          );
        })}
      </>
    );
  };
  return (
    <div className='p-10'>
      <section className='flex justify-between'>
        <p className='text-black font-poppins-bold text-[1.2rem]'>
          {' '}
          ActivityGram Lite Student Report
        </p>
        <p className='text-green text-[1.2rem]'>
          <b className='text-green font-poppins-medium'>Activity </b>
          GRAM LITE
        </p>
      </section>

      <hr className='mt-5 border-[2px] border-back-color' />

      <div className=' mt-10 h-[30vh]'>
        <SampleData />
      </div>

      <div className=''>
        <ActivityTable />
      </div>

      <hr className='mt-8 border-[2px] border-back-color ' />
      <div className='flex float-right mt-5'>
        <p className='mt-3'>A PROGRAM OF</p>
        <img src={play} className='w-[5rem]' />
        <p className='mt-3'>THE NFL MOVEMENT FOR AN ACTIVE GENERATION</p>
      </div>
    </div>
  );
};

export default ActivityLiteStudentReport;
