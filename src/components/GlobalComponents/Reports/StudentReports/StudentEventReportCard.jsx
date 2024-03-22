import React, { useEffect, useState } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { ImNotification } from 'react-icons/im';
import { IoIosWarning } from 'react-icons/io';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import girlImg from '../../../../assets/images/ReportCardImages/girlRunningImage.svg';
import bodyHealthCardImage from '../../../../assets/images/ReportCardImages/bodychildimage.svg';
import pushUpImage from '../../../../assets/images/ReportCardImages/pushupImage.svg';
import heartPulseImage from '../../../../assets/images/ReportCardImages/heart-pulse-icon.svg';
import muscleFitnessImage from '../../../../assets/images/ReportCardImages/musclefitnessImage.svg';
import healthRiskArrowImage from '../../../../assets/images/ReportCardImages/healthRiskArrowImage.svg';
import needsImprovementImage from '../../../../assets/images/ReportCardImages/needsImprovementImage.svg';
import healthyFinessZoneImage from '../../../../assets/images/ReportCardImages/healthyFinessZoneImage.svg';
import curlUpImg from '../../../../assets/images/ReportCardImages/curlUpImage.svg';

import trunkLiftImg from '../../../../assets/images/ReportCardImages/trunkLiftImage.svg';
import sitAndStretchImg from '../../../../assets/images/ReportCardImages/sitandStretchImage.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentReportApiCall } from '../../../../store/slices/profileSlice';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { setSelectedStudentUUIDForReport } from '../../../../DistrictAdminApis/districtAdminSlice';
import { useParams } from 'react-router-dom';
import ReportsOfStudents from './ReportsOfStudents';

const StudentEventReportCard = () => {
  const dispatch = useDispatch();

  const params = useParams();


  console.log(params, "iam  ")

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const reportFilterDataObject = useSelector(
    (state) => state?.districtAdmin?.reportFilterDataObject
  );

  const selectedStudentUUIDForReport = useSelector(
    (state) => state?.districtAdmin?.selectedStudentUUIDForReport
  );

  const loggedInUserDetails = useSelector(
    (state) => state?.profile?.loggedInUserDetails
  );

  const token = useSelector((state) => state?.profile?.token);

  const loggedInUserReportDetails = useSelector(
    (state) => state?.profile?.loggedInUserReportDetails
  );

  console.log(loggedInUserReportDetails, 'loggedInUserReportDetails');

  const [reportDataObject, setReportDataObject] = useState({
    heartHelathCard: {
      headingsList: [
        {
          heading: 'HEART HEALTH',
          image: heartPulseImage,
        },

        {
          heading: 'Aerobic Capacity (V02MAX)',
          image: <ImNotification fill='#434942' />,
        },
      ],

      riskFactorData: {
        riskList: [
          {
            id: 1,
            title: 'Health Risk',
          },

          {
            id: 2,
            title: 'Needs Improvement',
          },

          {
            id: 3,
            title: 'Healthy Fitness Zone',
          },
        ],

        aerobicCapacity: [],
      },

      goal: 'GOAL: AT LEAST 44.1VO2 MAX',

      M15_pacer: [],
      M20_pacer: [],
    },

    bodyHealthCard: {
      headingsList: [
        {
          heading: 'BODY HEALTH',
          image: bodyHealthCardImage,
        },

        {
          heading: 'Body Mass Index',
          image: <ImNotification fill='#434942' />,
        },
      ],

      riskFactorData: {
        riskList: [
          {
            id: 1,
            title: 'Health Risk',
          },

          {
            id: 2,
            title: 'Needs Improvement',
          },

          {
            id: 3,
            title: 'Healthy Fitness Zone',
          },

          {
            id: 4,
            title: 'Very Lean',
          },
        ],

        bmiCategories: [],
      },

      height: '',

      weight: '',
    },

    muscleFitnessCard: {
      headingsList: [
        {
          heading: 'Push Ups',
          image: pushUpImage,
        },

        {
          heading: 'Curl-Ups',
          image: curlUpImg,
        },

        {
          heading: 'Trunk Lift',
          image: trunkLiftImg,
        },

        {
          heading: 'Sit and Stretch',
          image: sitAndStretchImg,
        },
      ],

      riskFactorData: {
        riskList: [
          {
            id: 1,
            title: 'Needs Improvement',
          },

          {
            id: 2,
            title: 'Healthy Fitness Zone',
          },
        ],

        muscleFitnessData: [],
      },

      goal: 'GOAL: AT LEAST 44.1VO2 MAX',
    },

    date_of_birth: '',
    first_name: '',
    gender: '',
    last_name: '',
  });

  useEffect(() => {
    if (selectedRole === 'student') {
      const schools = loggedInUserDetails?.UserClass?.map(
        (item) => item?.school_uuid
      );

      console.log(loggedInUserDetails, 'loggedInUserDetails lisy');

      const classes = loggedInUserDetails?.UserClass?.map((item) => item?.uuid);

      const finalObj = {
        school_uuids: schools,
        class_uuid: classes,
        grade: loggedInUserDetails?.grade,
        gender: loggedInUserDetails?.gender,
        student_uuid: loggedInUserDetails?.uuid,
        start_date: '2023-04-02',
        end_date: '2023-04-20',
      };

      dispatch(getStudentReportApiCall({ body: finalObj, token }));
    }
  }, []);




  useEffect(() => {
    if (selectedRole !== 'student') {

      if (params?.studentUUID?.length > 0) {


        const finalObj = {
          school_uuids: reportFilterDataObject?.school_uuids,
          class_uuid: reportFilterDataObject?.class_name,
          grade: '',
          gender: '',
          student_uuid: params?.studentUUID,
          start_date: '2023-04-02',
          end_date: '2023-04-20',
        };

        console.log(finalObj, 'for particular student');

        dispatch(getStudentReportApiCall({ body: finalObj, token }));


      }
    }
  }, [params?.studentUUID]);

  useEffect(() => {
    setReportDataObject((prevState) => ({
      ...prevState,

      heartHelathCard: {
        ...prevState.heartHelathCard,

        riskFactorData: {
          ...prevState?.heartHelathCard?.riskFactorData,

          riskList: [
            {
              id: 1,
              title: 'Health Risk',
            },

            {
              id: 2,
              title: 'Needs Improvement',
            },

            {
              id: 3,
              title: 'Healthy Fitness Zone',
            },
          ],

          aerobicCapacity: loggedInUserReportDetails?.aerobicCapacity?.slice(
            0,
            3
          ),
        },

        M15_pacer: loggedInUserReportDetails?.M15_pacer?.slice(0, 3),
        M20_pacer: loggedInUserReportDetails?.M20_pacer?.slice(0, 3),
      },

      bodyHealthCard: {
        ...prevState.bodyHealthCard,

        riskFactorData: {
          riskList: [
            {
              id: 1,
              title: 'Health Risk',
            },

            {
              id: 2,
              title: 'Needs Improvement',
            },

            {
              id: 3,
              title: 'Healthy Fitness Zone',
            },

            {
              id: 4,
              title: 'Very Lean',
            },
          ],

          bmiCategories: loggedInUserReportDetails?.bmiCategories?.slice(0, 3),
        },

        height: loggedInUserReportDetails?.height,

        weight: loggedInUserReportDetails?.weight,
      },

      muscleFitnessCard: {
        ...prevState.muscleFitnessCard,

        riskFactorData: {
          ...prevState?.muscleFitnessCard?.riskFactorData,

          riskList: [
            {
              id: 1,
              title: 'Needs Improvement',
            },

            {
              id: 2,
              title: 'Healthy Fitness Zone',
            },
          ],

          muscleFitnessData:
            loggedInUserReportDetails?.muscleFitnessData?.slice(0, 3),
        },
      },
    }));
  }, [loggedInUserReportDetails,dispatch, params?.studentUUID]);

  console.log(reportDataObject, 'report data object');

  return (
    <>
 
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        autoFlow={{ base: 'row', md: 'column' }}
      >
        <Box>
          <Box w='full' border={'1px solid #E0E0E1'}>
            {reportDataObject?.heartHelathCard?.headingsList?.map(
              (item, index) => (
                <Box
                  display={'flex'}
                  justifyContent={index === 0 ? 'space-between' : 'flex-start'}
                  px={index === 0 ? '5' : '0'}
                  gap={3}
                  alignItems={'center'}
                >
                  {index === 0 ? (
                    <>
                      <Text
                        textStyle={'h3'}
                        fontWeight={'bold'}
                        fontFamily={'body'}
                      >
                        {item?.heading}
                      </Text>
                      <Image
                        src={item?.image}
                        alt='heart-image'
                        h={'2rem'}
                        w={'2rem'}
                      />
                    </>
                  ) : (
                    <>
                      <Text>{item?.heading}</Text>
                    </>
                  )}
                </Box>
              )
            )}

            <SimpleGrid
              columns={
                reportDataObject?.heartHelathCard?.riskFactorData
                  ?.aerobicCapacity?.length > 0 &&
                reportDataObject?.heartHelathCard?.riskFactorData
                  ?.aerobicCapacity?.length === 1
                  ? 1
                  : reportDataObject?.heartHelathCard?.riskFactorData
                      ?.aerobicCapacity?.length === 2
                  ? 2
                  : reportDataObject?.heartHelathCard?.riskFactorData
                      ?.aerobicCapacity?.length >= 3
                  ? 3
                  : 0
              }
              gap={1}
              mt={{ base: '5rem' }}
              position={'relative'}
            >
              {reportDataObject?.heartHelathCard?.riskFactorData
                ?.aerobicCapacity?.length > 0 ? (
                reportDataObject?.heartHelathCard?.riskFactorData?.aerobicCapacity?.map(
                  (item, index) => (
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      bg={
                        item?.aerobic_capacity_classification === 'HFZ'
                          ? 'fit'
                          : item?.aerobic_capacity_classification === 'NI'
                          ? 'improvement'
                          : item?.aerobic_capacity_classification === 'HR'
                          ? 'risk'
                          : 'lean'
                      }
                      py={{ base: '1', md: '1', lg: '3' }}
                    >
                      <Text
                        whiteSpace={{ base: 'wrap', md: 'wrap', lg: 'nowrap' }}
                        fontSize={{ base: '11px', md: '14px' }}
                        textColor={'white'}
                        textAlign={'center'}
                      >
                        {item?.aerobic_capacity_classification === 'HFZ'
                          ? 'Healthy Fitness Zone'
                          : item?.aerobic_capacity_classification === 'NI'
                          ? 'Needs Improvement'
                          : item?.aerobic_capacity_classification === 'HR'
                          ? 'Health Risk' :  item?.aerobic_capacity_classification === 'N/A' ? 'N/A'
                          : 'No Data'}
                      </Text>

                      <Box
                        position={'absolute'}
                        translateY={'-50%'}
                        top={
                          reportDataObject?.heartHelathCard?.riskFactorData
                            ?.bmiCategories?.length > 0
                            ? '-3.5rem'
                            : '-4.2rem'
                        }
                      >
                        <Box>
                          <Text
                            textStyle={'h3'}
                            fontWeight={'bold'}
                            fontFamily={'body'}
                            textColor={'primary'}
                          >
                            {Math.round(item?.aerobic_capacity * 100) / 100}
                          </Text>
                          <Text fontSize={{ base: '12px' }}>
                            {item?.start_date?.split('T')?.[0]}
                          </Text>
                          <Image
                            src={needsImprovementImage}
                            alt='arrow-image'
                            h={'3.2rem'}
                          />
                        </Box>
                      </Box>
                    </Box>
                  )
                )
              ) : (
                <Text>No Data</Text>
              )}
            </SimpleGrid>

            <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
              <Text
                textColor={'#0081C8'}
                textStyle={'h6'}
                fontFamily={'poppins-bold'}
              >
                {reportDataObject?.heartHelathCard?.goal}
              </Text>
            </Box>

            <Divider w='full' />

            <Box
              display={'flex'}
              justifyContent={{
                base: 'space-between',
                md: 'space-between',
                lg: 'space-between',
              }}
              gap={10}
              alignItems={'center'}
              p='2'
            >
              <Box>
                <Box>
                  <Text
                    fontFamily={'body'}
                    fontSize={{ base: 'xl', lg: 'md', md: 'md' }}
                  >
                    M15_Pacer
                  </Text>

                  <Flex
                    direction={{ base: 'column', md: 'row', lg: 'row' }}
                    gap={2}
                  >
                    {reportDataObject?.heartHelathCard?.M15_pacer?.length >
                    0 ? (
                      reportDataObject?.heartHelathCard?.M15_pacer?.map(
                        (each, index) =>
                          index < 3 && (
                            <>
                              <Text
                                fontSize={{ base: 'xl', lg: 'md', md: 'md' }}
                                fontWeight={'bold'}
                                fontFamily={'body'}
                                textColor={'primary'}
                              >
                                {each?.pacer_laps} Laps
                              </Text>
                              <Text textStyle={'h6'} mt={1}>
                                {each?.start_date?.split('T')?.[0]}
                              </Text>

                              <Divider
                                orientation='vertical'
                                color={'primary'}
                                h='40px'
                                display={{
                                  base: 'none',
                                  md: 'flex',
                                  lg: 'flex',
                                }}
                              />
                            </>
                          )
                      )
                    ) : (
                      <Text>No Data</Text>
                    )}
                  </Flex>
                </Box>
                <Box>
                  <Text fontSize={{ base: 'xl', lg: 'md', md: 'md' }}>
                    M20_Pacer
                  </Text>

                  {/* <Flex
                    direction={{ base: 'column', md: 'row', lg: 'row' }}
                    alignItems={'center'}
                    gap={2}
                  >
                    {reportDataObject?.heartHelathCard?.M20_pacer?.length >
                    0 ? (
                      reportDataObject?.heartHelathCard?.M20_pacer?.map(
                        (each, index) =>
                          index < 3 && (
                            <>
                              <Box>
                                <Text
                                  fontWeight={'bold'}
                                  fontFamily={'body'}
                                  textColor={'primary'}
                                  fontSize={{ base: '2xl', lg: 'md', md: 'md' }}
                                >
                                  {each?.pacer_laps} Laps
                                </Text>
                                <Text textStyle={'h6'} mt={1}>
                                  {each?.start_date?.split('T')?.[0]}
                                </Text>
                              </Box>

                              <Divider
                                orientation='vertical'
                                color={'primary'}
                                h='30px'
                                display={{
                                  base: 'none',
                                  md: 'flex',
                                  lg: 'flex',
                                }}
                              />
                            </>
                          )
                      )
                    ) : (
                      <Text>No Data</Text>
                    )}
                  </Flex> */}
                  <Flex
                    direction={{ base: 'column', md: 'row', lg: 'row' }}
                    gap={2}
                  >
                    {reportDataObject?.heartHelathCard?.M20_pacer?.length >
                    0 ? (
                      reportDataObject?.heartHelathCard?.M20_pacer?.map(
                        (each, index) =>
                          index < 3 && (
                            <>
                              <Text
                                fontSize={{ base: 'xl', lg: 'md', md: 'md' }}
                                fontWeight={'bold'}
                                fontFamily={'body'}
                                textColor={'primary'}
                              >
                                {each?.pacer_laps} Laps
                              </Text>
                              <Text textStyle={'h6'} mt={1}>
                                {each?.start_date?.split('T')?.[0]}
                              </Text>

                              <Divider
                                orientation='vertical'
                                color={'primary'}
                                h='40px'
                                display={{
                                  base: 'none',
                                  md: 'flex',
                                  lg: 'flex',
                                }}
                              />
                            </>
                          )
                      )
                    ) : (
                      <Text>No Data</Text>
                    )}
                  </Flex>
                </Box>
              </Box>

              <Box>
                <Image src={girlImg} alt='' />
              </Box>
            </Box>

            <Box pt='2' pb='2'>
              <Text
                fontFamily={'body'}
                fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
                p='2'
              >
                Aerobic capacity (VO2man) s the abilty to use your heart lungs,
                and muscies to be. physicaly actve, Asrabic capacity nthe
                Heatthy Fitass o s the goal to eckuce heaithisks Tha moro active
                you are, the ighar your asrobic capaciy wilbe.
              </Text>
            </Box>
          </Box>

          <Box w='full' border={'1px solid #E0E0E1'}>
            {reportDataObject?.bodyHealthCard?.headingsList?.map(
              (item, index) => (
                <Box
                  display={'flex'}
                  justifyContent={index === 0 ? 'space-between' : 'flex-start'}
                  px={index === 0 ? '5' : '0'}
                  gap={3}
                  alignItems={'center'}
                >
                  {index === 0 ? (
                    <>
                      <Text>{item?.heading}</Text>
                      <Image
                        src={item?.image}
                        alt='heart-image'
                        h={'2rem'}
                        w={'2rem'}
                      />
                    </>
                  ) : (
                    <>
                      <Text>{item?.heading}</Text>
                    </>
                  )}
                </Box>
              )
            )}

            <SimpleGrid
              columns={
                reportDataObject?.bodyHealthCard?.riskFactorData?.bmiCategories
                  ?.length > 0 &&
                reportDataObject?.bodyHealthCard?.riskFactorData?.bmiCategories
                  ?.length === 1
                  ? 1
                  : reportDataObject?.bodyHealthCard?.riskFactorData
                      ?.bmiCategories?.length === 2
                  ? 2
                  : reportDataObject?.bodyHealthCard?.riskFactorData
                      ?.bmiCategories?.length === 3
                  ? 3
                  : reportDataObject?.bodyHealthCard?.riskFactorData
                      ?.bmiCategories?.length >= 4
                  ? 4
                  : 0
              }
              gap={1}
              mt={{ base: '5rem' }}
              position={'relative'}
            >
              {reportDataObject?.bodyHealthCard?.riskFactorData?.bmiCategories
                ?.length > 0 &&
                reportDataObject?.bodyHealthCard?.riskFactorData?.bmiCategories?.map(
                  (item, index) => (
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      bg={
                        item?.bmiCategories === 'HFZ'
                          ? 'fit'
                          : item?.bmiCategories === 'NI'
                          ? 'improvement'
                          : item?.bmiCategories === 'HR'
                          ? 'risk'
                          : 'lean'
                      }
                      py={{ base: '1', md: '1', lg: '3' }}
                    >
                      <Text
                        whiteSpace={{ base: 'wrap', md: 'wrap', lg: 'nowrap' }}
                        fontSize={{ base: '11px', md: '14px' }}
                        textColor={'white'}
                        textAlign={'center'}
                      >
                        {item?.bmiCategory}
                      </Text>

                      <Box
                        position={'absolute'}
                        translateY={'-50%'}
                        top={
                          reportDataObject?.heartHelathCard?.riskFactorData
                            ?.bmiCategories?.length > 0
                            ? '-4.2rem'
                            : '-3.5rem'
                        }
                      >
                        <Box>
                          <Text
                            textStyle={'h3'}
                            fontWeight={'bold'}
                            fontFamily={'body'}
                            textColor={'primary'}
                          >
                            {Math.round(item?.bmi * 100) / 100}
                          </Text>

                          <Text fontSize={{ base: '12px' }}>
                            {item?.start_date?.split('T')?.[0]}
                          </Text>
                          <Image
                            src={needsImprovementImage}
                            alt='arrow-image'
                            h={'2.5rem'}
                          />
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
            </SimpleGrid>

            <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
              <Text
                textColor={'#0081C8'}
                textStyle={'h6'}
                fontFamily={'poppins-bold'}
              >
                {reportDataObject?.heartHelathCard?.goal}
              </Text>
            </Box>

            <Divider w='full' />

            <Box>
              <Flex alignItems={'center'} gap={4}>
                <Box p='2'>
                  <Text textStyle={'h2'}>Height</Text>

                  <Text textStyle={'h1'} textColor={'primary'}>
                    {reportDataObject?.bodyHealthCard?.height !== undefined &&
                    reportDataObject?.bodyHealthCard?.height !== null &&
                    reportDataObject?.bodyHealthCard?.height !== ''
                      ? reportDataObject?.bodyHealthCard?.height
                      : 'No data'}
                  </Text>
                </Box>

                <Box>
                  <Text textStyle={'h2'}>Weight</Text>

                  <Text textStyle={'h1'} textColor={'primary'}>
                    {reportDataObject?.bodyHealthCard?.weight !== undefined &&
                    reportDataObject?.bodyHealthCard?.weight !== null &&
                    reportDataObject?.bodyHealthCard?.weight !== ''
                      ? reportDataObject?.bodyHealthCard?.weight
                      : 'No data'}
                  </Text>
                </Box>
              </Flex>

              <Box p='2'>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
                >
                  Body mass index (BMI) describes your weight compared to how
                  tll you ae.fyour weightisigh orlow foryour high tcould Iead t
                  heathproblem. Py 60 minues doy,limit scroen ime, and maks
                  healthy food choices for a healny body.
                </Text>

                <Text
                  pt='2'
                  pb='2'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
                >
                  Most people have a healthy weight f ther BMI s inthe Healthy
                  Fitness Zons?,but svery. oy is diferan. Talk ith your dostor
                  abou B for more nformation.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box pt='3' border='1px solid #E4E5E5' shadow={'md'}>
          <>
            <Flex justifyContent={'space-between'} alignItems={'center'} pr={3}>
              <Text textStyle={'h5'} fontFamily={'poppins-bold'}>
                MUSCLE FITNESS
              </Text>
              <Image src={muscleFitnessImage} alt='muscle image' />
            </Flex>
          </>

          <>
            <>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                px={3}
                gap={3}
                alignItems={'center'}
              >
                <>
                  <Image
                    src={pushUpImage}
                    alt='heart-image'
                    h={'4rem'}
                    w={'4rem'}
                  />
                  <Text>Push Ups</Text>
                </>
              </Box>

              <SimpleGrid
                columns={
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length > 0 &&
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length === 1
                    ? 1
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length === 2
                    ? 2
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length >= 3
                    ? 3
                    : 0
                }
                gap={1}
                mt={{ base: '5rem' }}
                position={'relative'}
              >
                {reportDataObject?.muscleFitnessCard?.riskFactorData
                  ?.muscleFitnessData?.length > 0 ? (
                  reportDataObject?.muscleFitnessCard?.riskFactorData?.muscleFitnessData?.map(
                    (item, index) => (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bg={
                          item?.pusp_up_classification === 'HFZ'
                            ? 'fit'
                            : item?.pusp_up_classification === 'NI'
                            ? 'improvement'
                            : item?.pusp_up_classification === 'HR'
                            ? 'risk'
                            : 'lean'
                        }
                        py={{ base: '1', md: '1', lg: '3' }}
                      >
                        <Text
                          whiteSpace={{
                            base: 'wrap',
                            md: 'wrap',
                            lg: 'nowrap',
                          }}
                          fontSize={{ base: '11px', md: '14px' }}
                          textColor={'white'}
                          textAlign={'center'}
                        >
                          {item?.pusp_up_classification === 'HFZ'
                            ? 'Healthy Fitness Zone'
                            : item?.pusp_up_classification === 'NI'
                            ? 'Needs Improvement'
                            : item?.pusp_up_classification === 'HR'
                            ? 'Health Risk' : item?.pusp_up_classification === 'N/A' ? 'N/A'
                            : 'No Data'}
                        </Text>

                        <Box
                          position={'absolute'}
                          translateY={'-50%'}
                          top={
                            reportDataObject?.muscleFitnessCard?.riskFactorData
                              ?.muscleFitnessData?.length > 0
                              ? '-4.2rem'
                              : '-3.5rem'
                          }
                        >
                          <Box>
                            <Text
                              textStyle={'h3'}
                              fontWeight={'bold'}
                              fontFamily={'body'}
                              textColor={'primary'}
                            >
                              {item?.push_up}
                            </Text>
                            <Text fontSize={{ base: '12px' }}>
                              {item?.start_date?.split('T')?.[0]}
                            </Text>
                            <Image
                              src={needsImprovementImage}
                              alt='arrow-image'
                              h={'3.2rem'}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <Text>No Data</Text>
                )}
              </SimpleGrid>

              <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
                <Text
                  textColor={'#0081C8'}
                  textStyle={'h6'}
                  fontFamily={'poppins-bold'}
                >
                  {reportDataObject?.heartHelathCard?.goal}
                </Text>
              </Box>
            </>

            <>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                px={3}
                gap={3}
                alignItems={'center'}
              >
                <>
                  <Image
                    src={curlUpImg}
                    alt='heart-image'
                    h={'4rem'}
                    w={'4rem'}
                  />
                  <Text>Curl-Ups</Text>
                </>
              </Box>

              <SimpleGrid
                columns={
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length > 0 &&
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length === 1
                    ? 1
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length === 2
                    ? 2
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length >= 3
                    ? 3
                    : 0
                }
                gap={1}
                mt={{ base: '5rem' }}
                position={'relative'}
              >
                {reportDataObject?.muscleFitnessCard?.riskFactorData
                  ?.muscleFitnessData?.length > 0 ? (
                  reportDataObject?.muscleFitnessCard?.riskFactorData?.muscleFitnessData?.map(
                    (item, index) => (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bg={
                          item?.curl_up_classification === 'HFZ'
                            ? 'fit'
                            : item?.curl_up_classification === 'NI'
                            ? 'improvement'
                            : item?.curl_up_classification === 'HR'
                            ? 'risk'
                            : 'lean'
                        }
                        py={{ base: '1', md: '1', lg: '3' }}
                      >
                        <Text
                          whiteSpace={{
                            base: 'wrap',
                            md: 'wrap',
                            lg: 'nowrap',
                          }}
                          fontSize={{ base: '11px', md: '14px' }}
                          textColor={'white'}
                          textAlign={'center'}
                        >
                          {item?.curl_up_classification === 'HFZ'
                            ? 'Healthy Fitness Zone'
                            : item?.curl_up_classification === 'NI'
                            ? 'Needs Improvement'
                            : item?.curl_up_classification === 'HR'
                            ? 'Health Risk' :  item?.curl_up_classification === 'N/A' ? 'N/A'
                            : 'No Data'}
                        </Text>

                        <Box
                          position={'absolute'}
                          translateY={'-50%'}
                          top={
                            reportDataObject?.muscleFitnessCard?.riskFactorData
                              ?.muscleFitnessData?.length > 0
                              ? '-4.2rem'
                              : '-3.5rem'
                          }
                        >
                          <Box>
                            <Text
                              textStyle={'h3'}
                              fontWeight={'bold'}
                              fontFamily={'body'}
                              textColor={'primary'}
                            >
                              {item?.curl_up}
                            </Text>
                            <Text fontSize={{ base: '12px' }}>
                              {item?.start_date?.split('T')?.[0]}
                            </Text>
                            <Image
                              src={needsImprovementImage}
                              alt='arrow-image'
                              h={'3.2rem'}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <Text>No Data</Text>
                )}
              </SimpleGrid>

              <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
                <Text
                  textColor={'#0081C8'}
                  textStyle={'h6'}
                  fontFamily={'poppins-bold'}
                >
                  {reportDataObject?.heartHelathCard?.goal}
                </Text>
              </Box>
            </>

            <>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                px={3}
                gap={3}
                alignItems={'center'}
              >
                <>
                  <Image
                    src={trunkLiftImg}
                    alt='heart-image'
                    h={'4rem'}
                    w={'4rem'}
                  />
                  <Text>Trunk Lift</Text>
                </>
              </Box>

              <SimpleGrid
                columns={
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length > 0 &&
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length === 1
                    ? 1
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length === 2
                    ? 2
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length >= 3
                    ? 3
                    : 0
                }
                gap={1}
                mt={{ base: '5rem' }}
                position={'relative'}
              >
                {reportDataObject?.muscleFitnessCard?.riskFactorData
                  ?.muscleFitnessData?.length > 0 ? (
                  reportDataObject?.muscleFitnessCard?.riskFactorData?.muscleFitnessData?.map(
                    (item, index) => (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bg={
                          item?.trunk_lift_classification === 'HFZ'
                            ? 'fit'
                            : item?.trunk_lift_classification === 'NI'
                            ? 'improvement'
                            : item?.trunk_lift_classification === 'HR'
                            ? 'risk'
                            : 'lean'
                        }
                        py={{ base: '1', md: '1', lg: '3' }}
                      >
                        <Text
                          whiteSpace={{
                            base: 'wrap',
                            md: 'wrap',
                            lg: 'nowrap',
                          }}
                          fontSize={{ base: '11px', md: '14px' }}
                          textColor={'white'}
                          textAlign={'center'}
                        >
                          {item?.trunk_lift_classification === 'HFZ'
                            ? 'Healthy Fitness Zone'
                            : item?.trunk_lift_classification === 'NI'
                            ? 'Needs Improvement'
                            : item?.trunk_lift_classification === 'HR'
                            ? 'Health Risk' : item?.trunk_lift_classification === 'N/A' ? 'N/A'
                            : 'No Data'}
                        </Text>

                        <Box
                          position={'absolute'}
                          translateY={'-50%'}
                          top={
                            reportDataObject?.muscleFitnessCard?.riskFactorData
                              ?.muscleFitnessData?.length > 0
                              ? '-4.2rem'
                              : '-3.5rem'
                          }
                        >
                          <Box>
                            <Text
                              textStyle={'h3'}
                              fontWeight={'bold'}
                              fontFamily={'body'}
                              textColor={'primary'}
                            >
                              {item?.trunk_lift}
                            </Text>
                            <Text fontSize={{ base: '12px' }}>
                              {item?.start_date?.split('T')?.[0]}
                            </Text>
                            <Image
                              src={needsImprovementImage}
                              alt='arrow-image'
                              h={'3.2rem'}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <Text>No Data</Text>
                )}
              </SimpleGrid>

              <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
                <Text
                  textColor={'#0081C8'}
                  textStyle={'h6'}
                  fontFamily={'poppins-bold'}
                >
                  {reportDataObject?.heartHelathCard?.goal}
                </Text>
              </Box>
            </>

            <>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                px={3}
                gap={3}
                alignItems={'center'}
              >
                <>
                  <Image
                    src={sitAndStretchImg}
                    alt='heart-image'
                    h={'4rem'}
                    w={'4rem'}
                  />
                  <Text>Sit and Reach left</Text>
                </>
              </Box>

              <SimpleGrid
                columns={
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length > 0 &&
                  reportDataObject?.muscleFitnessCard?.riskFactorData
                    ?.muscleFitnessData?.length === 1
                    ? 1
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length === 2
                    ? 2
                    : reportDataObject?.muscleFitnessCard?.riskFactorData
                        ?.muscleFitnessData?.length >= 3
                    ? 3
                    : 0
                }
                gap={1}
                mt={{ base: '5rem' }}
                position={'relative'}
              >
                {reportDataObject?.muscleFitnessCard?.riskFactorData
                  ?.muscleFitnessData?.length > 0 ? (
                  reportDataObject?.muscleFitnessCard?.riskFactorData?.muscleFitnessData?.map(
                    (item, index) => (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bg={
                          item?.sit_and_reach_left_classification === 'HFZ'
                            ? 'fit'
                            : item?.sit_and_reach_left_classification === 'NI'
                            ? 'improvement'
                            : item?.sit_and_reach_left_classification === 'HR'
                            ? 'risk'
                            : 'lean'
                        }
                        py={{ base: '1', md: '1', lg: '3' }}
                      >
                        <Text
                          whiteSpace={{
                            base: 'wrap',
                            md: 'wrap',
                            lg: 'nowrap',
                          }}
                          fontSize={{ base: '11px', md: '14px' }}
                          textColor={'white'}
                          textAlign={'center'}
                        >
                          {item?.sit_and_reach_left_classification === 'HFZ'
                            ? 'Healthy Fitness Zone'
                            : item?.sit_and_reach_left_classification === 'NI'
                            ? 'Needs Improvement'
                            : item?.sit_and_reach_left_classification === 'HR'
                            ? 'Health Risk' : item?.sit_and_reach_left_classification === 'N/A' ? 'N/A'
                            : 'No Data'}
                        </Text>

                        <Box
                          position={'absolute'}
                          translateY={'-50%'}
                          top={
                            reportDataObject?.muscleFitnessCard?.riskFactorData
                              ?.muscleFitnessData?.length > 0
                              ? '-4.2rem'
                              : '-3.5rem'
                          }
                        >
                          <Box>
                            <Text
                              textStyle={'h3'}
                              fontWeight={'bold'}
                              fontFamily={'body'}
                              textColor={'primary'}
                            >
                              {item?.sit_and_reach_left}
                            </Text>
                            <Text fontSize={{ base: '12px' }}>
                              {item?.start_date?.split('T')?.[0]}
                            </Text>
                            <Image
                              src={needsImprovementImage}
                              alt='arrow-image'
                              h={'3.2rem'}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <Text>No Data</Text>
                )}
              </SimpleGrid>

              <Box px={{ base: '1', md: '2', lg: '2' }} pt='2' pb='2'>
                <Text
                  textColor={'#0081C8'}
                  textStyle={'h6'}
                  fontFamily={'poppins-bold'}
                >
                  {reportDataObject?.heartHelathCard?.goal}
                </Text>
              </Box>
            </>
          </>
        </Box>
      </Grid>
    </>
  );
};

export default StudentEventReportCard;
