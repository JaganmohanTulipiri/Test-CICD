import React from 'react';
import { Card, CardBody, Text } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { reportsObj } from './reportsdata';

const ActivityReports = () => {
  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const routingObj = {
    student: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/ActivityGramStudentReport`
        );
      },

      2: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/ActivityLogStudentReport`
        );
      },
    },

    teacher: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/ActivityGramStudentReport`
        );
      },

      2: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/ActivityGramStaticReport`
        );
      },

      3: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/ActivityLogStudentReport`
        );
      },
    },
  };

  const handleClick = (selectedCard) => {
    console.log(selectedCard.id, 'selectedCardselectedCard');

    routingObj[selectedRole][selectedCard.id]();
  };

  return (
    <>
      {reportsObj[selectedRole]['activityReports']?.map((each, index) => (
        <Card
          bg='#f5f5f5'
          boxShadow='sm'
          h='14'
          border='1'
          borderColor='yellow.600'
          key={index}
          cursor='pointer'
          onClick={() => handleClick(each)}
        >
          <CardBody
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
          >
            <Text
              //className='px-5'
              textStyle={'textHead'}
              whiteSpace={'nowrap'}
            >
              {each.text}
            </Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ActivityReports;
