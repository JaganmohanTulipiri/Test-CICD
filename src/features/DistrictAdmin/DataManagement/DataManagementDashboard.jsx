import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Img,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataManagementData } from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  getManageClassesList,
  getSchoolsList,
} from '../../teacher/teacherSlice';
import DistrictStatistics from '../District Statistics/DistrictStatistics';
import SystemUsage from '../SystemUsage/SystemUsage';

const DataManagementDashboard = () => {
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const { title, subFields } = DataManagementData;

  const basepath = `/role/${selectedRole}`;
  const routingObj = {
    0: basepath + '/import',
    1: basepath + '/manage-classes',
    2: basepath + '/manage-users',
    3: basepath + '/end-of-term-process',
  };

  const navigate = useNavigate();

  const token = useSelector((state) => state?.profile?.token);
  const userId = useSelector((state) => state?.profile?.userId);

  const dispatch = useDispatch();

  return (
    <Flex direction='column' gap='4'>
      <Text textStyle={'text'} fontWeight='bold' color='black' mb='5'>
        {title}
      </Text>
      <HStack mb='10'>
        <Flex
          justify='space-between'
          gap={{ base: '3rem', lg: '10rem', md: '3rem' }}
        >
          {selectedRole === 'stateAdmin'
            ? subFields.map(
                (item, index) =>
                  index === 0 && (
                    <Flex direction={'column'}>
                      <Button
                        key={index}
                        rounded='full'
                        bg='primary'
                        w='15em'
                        size='sm'
                        color='white'
                        display='flex'
                        alignItems='center'
                        gap='2'
                        onClick={() => {
                          navigate(routingObj[index]);
                        }}
                      >
                        <Box boxSize='5'>
                          <img src={item.icon} />
                        </Box>
                        <Text textStyle='p'>{item.name}</Text>
                      </Button>

                      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem>
                          <DistrictStatistics />
                        </GridItem>
                        <GridItem>
                          <SystemUsage />
                        </GridItem>
                      </Grid>
                    </Flex>
                  )
              )
            : subFields.map((item, index) => {
                return (
                  <Button
                    key={index}
                    rounded='full'
                    bg='primary'
                    w={{ base: '6em', lg: '15em', md: '12em' }}
                    size='sm'
                    color='white'
                    display='flex'
                    alignItems='center'
                    gap='2'
                    onClick={() => {
                      navigate(routingObj[index]);
                    }}
                  >
                    <Box boxSize='5' w='5'>
                      <Img src={item.icon} />
                    </Box>
                    <Text
                      textStyle={'p'}
                      display={{ base: 'none', lg: 'block', md: 'block' }}
                    >
                      {item.name}
                    </Text>
                  </Button>
                );
              })}
        </Flex>
      </HStack>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={{ base: 2, lg: 6 }}
      >
        <GridItem>
          <DistrictStatistics />
        </GridItem>
        <GridItem>
          <SystemUsage />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default DataManagementDashboard;
