import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Select,
  Card,
  Image,
  Text,
  CardBody,
  Box,
} from '@chakra-ui/react';
import { useToken } from '@chakra-ui/react';
import { CheckIcon, Search2Icon } from '@chakra-ui/icons';
import {
  fgStoreStudentData,
  getEventDataById,
  getEventStudentList,
  setEventStudentList,
} from '../../../features/teacher/teacherSlice';

import { Button } from 'antd';
import WarningPop from '../Popups/WarningPop';
import ClipBoard from '../Popups/ClipBoardPop';
import AdminTableMain from './AdminTableMain';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import activityGram from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityGram.svg';
import activityLog from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityLogo.svg';
import { setActivatingID } from '../../../store/slices/profileSlice';

const AdminTestResultSkelton = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const [type, setType] = useState('');

  // const event = location.state.event;

  const eventId = params?.eventId;

  const eventStudentList = useSelector(
    (state) => state?.teacher?.eventStudentList
  );

  const userId = useSelector((state) => state?.profile?.userId);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);
  const eventData = useSelector((state) => state?.teacher?.eventDataById);
  console.log(userId, token, eventData);

  // const eventId = location?.state?.event.uuid;

  useEffect(() => {
    dispatch(getEventDataById({ eventId, token }));
  }, []);

  useEffect(() => {
    let body = {
      accesser_uuid: userId,
      accesser_role: selectedRole,
    };
    dispatch(getEventStudentList({ token, body, eventId }));
  }, []);

  useEffect(() => {
    if (!params?.eventId?.length) {
      console.log('from 332');

      dispatch(setActivatingID('2'));
      if (selectedRole === 'districtAdmin') {
        dispatch(setActivatingID('6'));
      }
    }
  }, [eventId]);

  // 	useEffect(()=>{
  // 		let body ={

  // 		}
  // dispatch(fgStoreStudentData({token,}))
  // 	},[])

  const data = [
    {
      id: '1',
      sn: 'Randi',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '2',
      sn: 'Martin',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '3',
      sn: 'Wick',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '4',
      sn: 'Rambo',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '5',
      sn: 'Patrick',
      height: '5ft',
      weight: '55lb',
    },
  ];

  return (
    <Box>
      <>
        <Box>
          <Text margin='5' textStyle='text'>
            ADMINISTER TEST
          </Text>
        </Box>
        <Tabs variant='unstyled'>
          {type != 'By Class' ? (
            <TabList>
              <Tab
                _selected={{
                  color: 'white',
                  bg: 'blue.500',
                }}
                backgroundColor='#F5F5F5'
                w='8rem'
                roundedLeft='15'
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
              >
                FitnessGram
              </Tab>
              <Tab
                _selected={{
                  color: 'white',
                  bg: 'blue.500',
                }}
                backgroundColor='#F5F5F5'
                w='9rem'
                roundedRight='15'
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
              >
                Other
              </Tab>
            </TabList>
          ) : null}

          <TabPanels>
            <TabPanel>
              {' '}
              <AdminTableMain
                event={eventData}
                setType={setType}
                type={type}
              />{' '}
            </TabPanel>
            <TabPanel>
              <Card
                bg='#f5f5f5'
                boxShadow='sm'
                border='1'
                mt='4'
                height='14'
                justifyContent='center'
                onClick={() => {
                  navigate(`/role/${selectedRole}/ActivityGramEvent`);
                  dispatch(setActivatingID(5));
                  if (selectedRole === 'districtAdmin') {
                    dispatch(setActivatingID(9));
                  }
                }}
              >
                <CardBody
                  display='flex'
                  alignItems='center'
                  justifyContent='flex-start'
                  cursor={'pointer'}
                >
                  <Image src={activityGram} width='7' />

                  <Text className='px-5' textStyle='textHead'>
                    Activity Gram{' '}
                  </Text>
                </CardBody>
              </Card>{' '}
              <Card
                bg='#f5f5f5'
                boxShadow='sm'
                border='1'
                mt='4'
                height='14'
                justifyContent='center'
                onClick={() => {
                  navigate('/role/Teacher/ActivityLog');
                  dispatch(setActivatingID(6));
                  if (selectedRole === 'districtAdmin') {
                    dispatch(setActivatingID(9));
                  }
                }}
              >
                <CardBody
                  display='flex'
                  alignItems='center'
                  justifyContent='flex-start'
                  cursor={'pointer'}
                >
                  <Image src={activityLog} width='7' />

                  <Text className='px-5' textStyle='textHead'>
                    Activity Log{' '}
                  </Text>
                </CardBody>
              </Card>{' '}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    </Box>
  );
};

export default AdminTestResultSkelton;
