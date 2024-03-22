import React, { useState } from 'react';
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';

import { reportsObj } from './reportsdata';
import FitnessGramReports from './FitnessGramReports';
import ActivityReports from './ActivityReports';
import ReportsTable from '../ReportsTable';

const ReportsPage = () => {
  const { buttonsArray } = reportsObj;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Flex direction='column' gap='4'>
        <Text textStyle={'text'} fontWeight='bold'>
          REPORTS
        </Text>

        <Flex>
          {buttonsArray?.map((role, index) => {
            return (
              <Box
                key={index}
                color={activeTab == index ? 'white' : 'black-2'}
                bgColor={activeTab == index ? 'primary' : 'gray-1'}
                borderLeftRadius={index == 0 && 'full'}
                borderRightRadius={index == buttonsArray.length - 1 && 'full'}
                borderRightWidth={index != buttonsArray.length - 1 && '1px'}
                borderColor='gray'
                cursor={'pointer'}
                p='3'
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                <Text textStyle={'p'} textAlign='center'>
                  {role}
                </Text>
              </Box>
            );
          })}
        </Flex>

        {activeTab === 0 ? (
          <FitnessGramReports />
        ) : activeTab === 1 ? (
          <ActivityReports />
        ) : (
          <ReportsTable />
        )}
      </Flex>
    </>
  );
};

export default ReportsPage;
