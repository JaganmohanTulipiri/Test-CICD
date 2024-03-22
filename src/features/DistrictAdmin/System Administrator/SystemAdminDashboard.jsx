import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Img,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { systemAdminData } from './systemAdminData';
import DistrictStatistics from '../District Statistics/DistrictStatistics';
import SystemUsage from '../SystemUsage/SystemUsage';
import { useSelector } from 'react-redux';
const SystemAdminDashboard = () => {
  const { title, subFields } = systemAdminData;

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const basepath = `/role/${selectedRole}`;

  const routingObj = {
    0:
      basepath +
      `${
        selectedRole === 'stateAdmin' ? '/Districts/DistrictLookup' : '/schools'
      }`,
    1: basepath + '/manage-mandates',
    2: basepath + '/notifications',
    3: basepath + '/roles-privilages',
  };

  const navigate = useNavigate();

  return (
    <Flex direction='column' gap='4'>
      <Text textStyle={'text'} color='black' fontWeight='bold'>
        {title}
      </Text>
      <Flex justify='space-between'>
        {subFields.map((item, index) => {
          return (
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
                console.log(routingObj[index], 'route');
              }}
            >
              <Box boxSize='5'>
                <Img src={item.icon} maxH='full' maxW='full' m='auto' />
              </Box>
              <Text
                textStyle={'p'}
                display={{ base: 'none', lg: 'block', md: 'block' }}
              >
                {selectedRole === 'stateAdmin'
                  ? item?.stateAdminName
                  : item.name}
              </Text>
            </Button>
          );
        })}
      </Flex>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={6}
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

export default SystemAdminDashboard;
