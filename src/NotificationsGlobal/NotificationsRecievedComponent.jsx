import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Stack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EllipsisIcon from '../features/superAdmin/customIcons/ellipsisIcon.png';
import { UnCheckedNotifications } from '../features/superAdmin/json_files/NotificationsData.json';
import { getNotificationsRecievedApiCall } from '../DistrictAdminApis/districtAdminSlice';
import NotificationsManage from '../features/authentication/components/schoolAdmin/Notifications/Manage';

const NotificationsRecievedComponent = () => {
  const dispatch = useDispatch();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const token = useSelector((state) => state.profile.token);

  const notificationsRecievedList = useSelector(
    (state) => state?.districtAdmin?.notificationsRecievedList
  );

  console.log(
    notificationsRecievedList,
    'notificationsRecievedListk,jhkjbnknbm,knbk'
  );

  const [activeTab, setActiveTab] = useState(1);

  const [initialBGColor, setInitialBGColor] = useState(true);

  const [changeBGColor, setChangeBGColor] = useState('');

  const handleBGColor = (selectedItem) => {
    setChangeBGColor(selectedItem);
    setInitialBGColor(false);
  };

  useEffect(() => {
    dispatch(getNotificationsRecievedApiCall({ token }));
  }, []);

  return (
    <>
      <Flex h='full' direction='column'>
        <Flex>
          <Box>
            <Text textStyle={'text'} fontWeight='bold'>
              NOTIFICATIONS
            </Text>
          </Box>
        </Flex>

        {selectedRole !== 'student' ? (
          <Stack spacing='4' mt='6'>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Flex>
                <Button
                  textStyle={'textHead'}
                  color={activeTab == 1 ? 'white' : 'black-2'}
                  bgColor={activeTab == 1 ? 'primary' : 'gray-1'}
                  onClick={() => setActiveTab(1)}
                  borderLeftRadius='full'
                  borderRightWidth='1px'
                  borderColor='gray'
                  px='10'
                >
                  RECEIVED
                </Button>

                <Button
                  textStyle={'textHead'}
                  color={activeTab == 2 ? 'white' : 'black-2'}
                  bgColor={activeTab == 2 ? 'primary' : 'gray-1'}
                  onClick={() => setActiveTab(2)}
                  borderLeftRadius={0}
                  borderRightRadius='full'
                  px='10'
                >
                  Manage
                </Button>
              </Flex>
            </Flex>
          </Stack>
        ) : null}

        <Text textStyle={'textHead'} mt='6' mb='2'>
          Notifications will be displayed to user everytime they login, prior to
          accessing their dashboard.
        </Text>

        {activeTab === 1 ? (
          notificationsRecievedList?.length ? (
            notificationsRecievedList?.map(
              (each, index) =>
                index > 0 && (
                  <>
                    <Box w='full'>
                      <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        p='6'
                        bgColor={
                          initialBGColor
                            ? '#EBF8FF'
                            : changeBGColor === each?.uuid
                            ? '#FFFFFF'
                            : null
                        }
                        cursor={'pointer'}
                        onClick={() => {
                          handleBGColor(each?.uuid);
                        }}
                      >
                        <Box p={{ base: '0', md: '3', lg: '3' }}>
                          <Text textStyle={'textHead'}>
                            {each?.requestedFor?.first_name} Addition Request
                          </Text>
                          <Text textStyle={'textHead'}>
                            Student addition request has been sent by
                            {each?.requestedBy?.first_name}
                          </Text>
                          <Text textStyle={'textHead'}>
                            {each?.createdAt?.split('T')[0]}{' '}
                            {each?.createdAt?.split('T')[1]?.slice(0, 8)}
                          </Text>
                        </Box>
                        <Box>
                          <Image
                            src={EllipsisIcon}
                            boxSize={{ base: '1.5rem', md: '2rem', lg: '2rem' }}
                          ></Image>
                        </Box>
                      </Flex>
                      <Divider />
                    </Box>
                  </>
                )
            )
          ) : (
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg'
                alt='no-data'
              />
            </Box>
          )
        ) : (
          <NotificationsManage />
        )}
      </Flex>

      {/* {activeTab === 1 ? (
        <Box mt="8">
          {recommendedSmartCoachList !== undefined &&
          recommendedSmartCoachList?.length > 0 ? (
            recommendedSmartCoachList?.map((each) => (
              <Card
                bg="#f5f5f5"
                boxShadow="sm"
                h="14"
                border="1"
                borderColor="yellow.600" 
              >
                <CardBody
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start" 
                >
                  <Icon as={IoMdStarOutline} w={8} h={6} color="#FECE50" />
                  <Icon as={BsFileEarmark} w={6} h={6} color="#EE373E" />
                  <Text className="px-5">hello</Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
                alt="no-data"
              />
            </Box>
          )}
        </Box>
      ) : (
        <TestFieldSmart />
      )}


   









    <Flex>
      <Box>
        <Text textStyle="h1">NOTIFICATIONS</Text>
        <br></br>
      </Box>
    </Flex>
    <Flex className="mb-5">
      <ButtonGroup>
        <Button
          backgroundColor="primary"
          color="#ffffff"
          marginRight="-0.5rem"
          borderRadius="none"
          borderLeftRadius="1rem"
          width="10rem" 
        >
          RECEIVED
        </Button>
        <Button
         
          backgroundColor="#EEEEEE"
          color="black"
          borderRadius="none"
          borderRightRadius="1rem"
          width="10rem"
        >
          MANAGE
        </Button>
      </ButtonGroup>
    </Flex>
    <Text textStyle="h6">
      Notifications will be displayed to user everytime they login, prior to
      accessing their dashboard.
    </Text>

    {/* <Box marginTop="3">
      {UnCheckedMessages.map((item, key) => (
        <Flex
          onClick={() => setIsActive(key)}
          style={{
            backgroundColor: key === isActive ? "#FFFFFF" : "#EBF8FF",
          }}
        >
          <Box w="full">
            <Flex>
              <Box>
                <div className="w-2 h-2 bg-primary rounded-full mr-10 mt-12 ml-3"></div>
              </Box>
              <Box marginTop="3" p="3">
                <p>{item.Header}</p>
                <p>{item.Pending}</p>
                <p>{item.DateTime}</p>
              </Box>
            </Flex>
            <Divider />
          </Box>
          <Box>
            <Image src={EllipsisIcon} boxSize="2rem" marginTop="6"></Image>
          </Box>
        </Flex>
      ))}
    </Box> */}
    </>
  );
};

export default NotificationsRecievedComponent;
