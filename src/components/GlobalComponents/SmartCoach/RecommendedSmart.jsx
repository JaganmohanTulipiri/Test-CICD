import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

import { IoMdStarOutline } from 'react-icons/io';
import { BsFileEarmark, BsFilePdf } from 'react-icons/bs';
import {
  getRecommendedSmartCoachAPICall,
  setSmartCoachResponse,
  setTestSelectionButtonClicked,
} from '../../../store/slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import TestFieldSmart from './TestFieldSmart';

const RecommendedSmart = () => {
  const [activeTab, setActiveTab] = useState(2);

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const recommendedSmartCoachList = useSelector(
    (state) => state?.profile?.smartCoachResponse?.data?.response
  );

  useEffect(() => {
    const userDetails = {
      selected_primary_audience: userRole,
    };

    console.log(userDetails, 'userDetails');

    dispatch(getRecommendedSmartCoachAPICall({ userDetails, token }));
  }, []);

  return (
    <Flex h='full' direction='column'>
      <Text textStyle={'text'} fontWeight='bold'>
        {' '}
        Available Resources
      </Text>
      <Tabs variant='unstyled' mt='5' defaultIndex={1}>
        <TabList>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
            }}
            backgroundColor='#F5F5F5'
            w='9rem'
            roundedLeft='15'
            textStyle='p'
            onClick={() => setActiveTab(1)}
          >
            Recommended
          </Tab>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
            }}
            backgroundColor='#F5F5F5'
            w='9rem'
            roundedRight='15'
            textStyle='p'
            onClick={() => setActiveTab(2)}
          >
            Test Selection
          </Tab>
        </TabList>
      </Tabs>
      {/* <Stack spacing="4" mt="6">
        <Box
          display={{ base: "flex flex-row", md: "flex", lg: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex>
            <Button
              fontSize={{ base: "xs", md: "sm", lg: "sm" }}
              fontFamily="poppins"
              color={activeTab == 1 ? "white" : "black-2"}
              bgColor={activeTab == 1 ? "primary" : "gray-1"}
              onClick={() => setActiveTab(1)}
              borderLeftRadius="full"
              borderRightWidth="1px"
              borderColor="gray"
              px={{ base: "20px", md: "10px", lg: "10px" }}
            >
              Recommended
            </Button>

            <Button
              fontSize={{ base: "xs", md: "sm", lg: "sm" }}
              fontFamily="poppins"
              color={activeTab == 2 ? "white" : "black-2"}
              bgColor={activeTab == 2 ? "primary" : "gray-1"}
              onClick={() => setActiveTab(2)}
              borderLeftRadius={0}
              borderRightRadius="full"
              px={{ base: "20px", md: "10px", lg: "10px" }}
            >
              {" "}
              Test Selection
            </Button>
          </Flex>

          {activeTab === 1 ? (
            <Stack
              spacing={4}
              className=""
              width={["80vw", "40vw", "40vw", "40vw"]}
              mt={{ base: "25px" }}
            >
              <InputGroup className="border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none">
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="#C9C8C8" />}
                />
                <Input type="type" placeholder="Search" />
              </InputGroup>
            </Stack>
          ) : null}
        </Box>
      </Stack> */}

      {activeTab === 1 ? (
        <Box mt='8'>
          {recommendedSmartCoachList !== undefined &&
          recommendedSmartCoachList?.length > 0 ? (
            recommendedSmartCoachList?.map((each) => (
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
                >
                  <Icon as={IoMdStarOutline} w={8} h={6} color='#FECE50' />
                  <Icon as={BsFileEarmark} w={6} h={6} color='#EE373E' />
                  <Text className='px-5'>hello</Text>
                </CardBody>
              </Card>
            ))
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
          )}
        </Box>
      ) : (
        <TestFieldSmart />
      )}
    </Flex>
  );
};

export default RecommendedSmart;
