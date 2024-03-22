import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';

import { reportsObj } from './reportsdata';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FitnessGramReports = () => {
  // const {fitnessGramReports} = reportsObj

  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const routingObj = {
    student: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/StudentReportsTableData`
        );
      },

      2: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramOverviewReport`
        );
      },
    },

    teacher: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/StudentReportsTableData`
        );
      },

      2: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramOverviewReport`
        );
      },

      3: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramCompletionReport`
        );
      },

      4: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramStaticReport`
        );
      },

      5: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramClassScoreReport`
        );
      },
    },

    districtAdmin: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/StudentReportsTableData`
        );
      },

      2: () => {
        navigate(`/role/${selectedRole}/reports/FitnessGramOverviewReport`);
      },

      3: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramCompletionReport`
        );
      },

      4: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramClassScoreReport`
        );
      },

      5: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramStaticReport`
        );
      },
    },

    schoolAdmin: {
      1: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/StudentReportsTableData`
        );
      },

      2: () => {
        navigate(`/role/${selectedRole}/reports/FitnessGramOverviewReport`);
      },

      3: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramCompletionReport`
        );
      },

      4: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramClassScoreReport`
        );
      },

      5: () => {
        navigate(
          `/role/${selectedRole}/reports/fitness/FitnessGramStaticReport`
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
      {reportsObj[selectedRole]['fitnessGramReports']?.map((each, index) => (
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
            >
              {each.text}
            </Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default FitnessGramReports;
