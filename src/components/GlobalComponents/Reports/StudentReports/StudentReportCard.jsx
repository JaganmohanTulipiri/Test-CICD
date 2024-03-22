import React, { useEffect } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { ImNotification } from "react-icons/im";
import { IoIosWarning } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import girlImg from "../../../../assets/images/ReportCardImages/girlRunningImage.svg";
import pushUpImage from "../../../../assets/images/ReportCardImages/pushupImage.svg";
import heartPulseImage from "../../../../assets/images/ReportCardImages/heart-pulse-icon.svg";
import muscleFitnessImage from "../../../../assets/images/ReportCardImages/musclefitnessImage.svg";
import healthRiskArrowImage from "../../../../assets/images/ReportCardImages/healthRiskArrowImage.svg";
import needsImprovementImage from "../../../../assets/images/ReportCardImages/needsImprovementImage.svg";
import healthyFinessZoneImage from "../../../../assets/images/ReportCardImages/healthyFinessZoneImage.svg";
import curlUpImg from "../../../../assets/images/ReportCardImages/curlUpImage.svg";

import trunkLiftImg from "../../../../assets/images/ReportCardImages/trunkLiftImage.svg";
import sitAndStretchImg from "../../../../assets/images/ReportCardImages/sitandStretchImage.svg";
import { useDispatch, useSelector } from "react-redux";
import { getStudentReportApiCall } from "../../../../store/slices/profileSlice";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const StudentReportCard = () => {
  const dispatch = useDispatch();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const loggedInUserDetails = useSelector(
    (state) => state?.profile?.loggedInUserDetails
  );

  const token = useSelector((state) => state?.profile?.token);

  const loggedInUserReportDetails = useSelector(
    (state) => state?.profile?.loggedInUserReportDetails
  );

  console.log(loggedInUserReportDetails, "loggedInUserReportDetails");

  const heartHealthCard = [
    {
      id: 1,
      title: "HEART HEALTH",
      heartImage: heartPulseImage,
      capacity: "Aerobic Capacity (V02MAX)",
      capacityIcon: <ImNotification fill="#434942" />,

      riskList: [
        {
          id: 1,
          icon: <IoIosWarning fill="#FFEE13" size="20" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          date: loggedInUserReportDetails?.aerobicCapacity?.[0]?.end_date?.split("T")[0],
          arrowIconPosition:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          arrowIcon: <TbTriangleInvertedFilled size="20" className="" />,
          title: "Health Risk",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          date: loggedInUserReportDetails?.aerobicCapacity?.[0]?.end_date?.split("T")[0],
          arrowIconPosition:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 3,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          date: loggedInUserReportDetails?.aerobicCapacity?.[0]?.end_date?.split("T")[0],
          arrowIconPosition:
            Math.round(
              loggedInUserReportDetails?.aerobicCapacity?.[0]
                ?.aerobic_capacity * 100
            ) / 100,
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",
      readings: "23M Pacer",
      pacerIcon: <ImNotification fill="#434942" />,
      lapsList: [
        {
          id: 1,
          numOfLaps: "24 Laps",
          date: "1/06/23",
        },

        {
          id: 2,
          numOfLaps: "52 Laps",
          date: "11/24/22",
        },

        {
          id: 3,
          numOfLaps: "190 Laps",
          date: "10/29/22",
        },
      ],

      image: girlImg,
    },

    {
      id: 2,
      title: "BODY HEALTH",
      heartImage: "",
      capacity: "Body Mass Index",
      capacityIcon: <ImNotification fill="#434942" size={19} />,

      riskList: [
        {
          id: 1,
          icon: <IoIosWarning fill="#FFEE13" size="20" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.bmiCategories?.[0]?.bmi * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: `left-[36.62%]`,
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Health Risk",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.bmiCategories?.[1]?.bmi * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[86.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 3,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.bmiCategories?.[0]?.bmi * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[80.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
        {
          id: 4,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.bmiCategories?.[1]?.bmi * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[66.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",

      heightName: "Height",
      height: "5ft 11 in",
      weightName: "Weight",
      weight: "85 lbs",
      content:
        "Body mass index (BMI) describes your weight compared to how tall you are. If your weight is high or low for your height, it could lead to health problems. Play 60 minutes a day, limit screen time, and make healthy food choices for a healthy body. Most people have a healthy weight if their BMI is in the Healthy Fitness Zone®, but every body is different. Talk with your doctor about BMI for more information.",
    },
  ];

  const muscleFitnessCard = [
    {
      id: 1,
      image: pushUpImage,
      title: "Push Ups",
      capacityIcon: <ImNotification fill="#434942" />,

      fitnessList: [
        {
          id: 1,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.push_up * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[86.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="10" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1.5rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.push_up * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[80.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",
    },

    {
      id: 2,
      image: curlUpImg,
      title: "Curl-Ups",
      capacityIcon: <ImNotification fill="#434942" />,

      fitnessList: [
        {
          id: 1,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.curl_up * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[86.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1rem" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1.5rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.curl_up * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[80.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",
    },

    {
      id: 3,
      image: trunkLiftImg,
      title: "Trunk Lift",
      capacityIcon: <ImNotification fill="#434942" />,

      fitnessList: [
        {
          id: 1,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.trunk_lift *
                100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[86.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1rem" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1.5rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]?.trunk_lift *
                100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[80.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",
    },

    {
      id: 4,
      image: sitAndStretchImg,
      title: "Sit and Stretch",
      capacityIcon: <ImNotification fill="#434942" />,

      fitnessList: [
        {
          id: 1,
          icon: "",
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]
                ?.sit_and_reach_left * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[86.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1rem" className="" />,
          title: "Needs Improvement",
          arrowImg: needsImprovementImage,
        },

        {
          id: 2,
          icon: <BsFillCheckCircleFill fill="#19A617" size="1.5rem" />,
          rate:
            Math.round(
              loggedInUserReportDetails?.muscleFitnessData?.[0]
                ?.sit_and_reach_right * 100
            ) / 100,
          date: "01/06/23",
          arrowIconPosition: "left-[80.62%]",
          arrowIcon: <TbTriangleInvertedFilled size="1.8rem" className="" />,
          title: "Healthy Fitness Zone",
          arrowImg: needsImprovementImage,
        },
      ],

      goal: "GOAL: AT LEAST 44.1VO2 MAX",
    },
  ];

  useEffect(() => {
    const schools = loggedInUserDetails?.UserClass?.map(
      (item) => item?.school_uuid
    );

    const classes = loggedInUserDetails?.UserClass?.map((item) => item?.uuid);

    const finalObj = {
      school_uuids: schools,
      class_uuid: classes,
      grade: loggedInUserDetails?.grade,
      gender: loggedInUserDetails?.gender,
      student_uuid: loggedInUserDetails?.uuid,
      start_date: "2023-04-02",
      end_date: "2023-04-20",
    };

    dispatch(getStudentReportApiCall({ body: finalObj, token }));
  }, []);

  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        autoFlow={{ base: "row", md: "column" }}
      >
        <Box>
          <Flex direction={"column"} gap="2" flexGrow={"1"} flexWrap={"wrap"}>
            {heartHealthCard &&
              heartHealthCard?.map((each, index) => (
                <Box
                  pt="3"
                  border="1px solid #E4E5E5"
                  shadow={"md"}
                  // className='pt-3 border border-[#E4E5E5] shadow-md shadow-t-2xl'
                  key={each.id}
                >
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px="3"
                  >
                    <Text textStyle={"h4"}>{each.title}</Text>
                    {each.heartImage && (
                      <Image src={each.heartImage} alt="heartpulse" />
                    )}
                  </Flex>

                  <Flex gap="3" alignItems={"center"} px="2">
                    <Text>{each.capacity}</Text>
                    <Text>{each.capacityIcon}</Text>
                  </Flex>

                  <Grid
                    templateColumns={
                      each.id === 1 ? "repeat(3, 1fr)" : "repeat(4, 1fr)"
                    }
                    gap="1"
                    mt={{ base: "5rem" }}
                  >
                    {each.riskList?.map((item) => (
                      <Flex direction={"column"} justifyContent={"flex-end"}>
                        <Flex
                          justifyContent={"center"}
                          alignItems={"center"}
                          bg={
                            item.id === 1
                              ? "risk"
                              : item.id === 2
                              ? "improvement"
                              : item.id === 3
                              ? "fit"
                              : "lean"
                          }
                          position={"relative"}
                          h={{ base: "3.5rem", md: "3rem", lg: "3rem" }}
                        >
                          <Text px="2" textColor={"white"} textStyle={"h6"}>
                            {item.title}
                          </Text>
                          <Box
                            position={"absolute"}
                            top={item.id === 1 ? "-4.2rem" : "-3.8rem"}
                            zIndex={"5rem"}
                            translateX={"-35%"}

                            //className="text-[#0081C8] mt-2 font-poppins-bold text-sm"  className={`absolute ${item.id === 1? "top-[-4.2rem]" : "top-[-3.8rem]"} ${item?.arrowIconPosition} mt-0  translate-x-[-35%]`}
                          >
                            <>
                              <Flex alignItems={"center"}>
                                <Text mr="1">{item.icon}</Text>
                                <Text textColor={"#0081C8"} textStyle={"h4"}>
                                   {isNaN(item?.rate) ? 0 : item?.rate}
                                </Text>
                              </Flex>
                              <Text>{item.date}</Text>
                            </>

                            <Box>
                              <Image
                                src={item.arrowImg}
                                alt=""
                                h={item.id === 1 ? "3.6rem" : "2.5rem"}
                                mt="-0.5rem"
                              />
                            </Box>
                          </Box>
                        </Flex>
                      </Flex>
                    ))}
                  </Grid>

                  <Box px="4" pt="2" pb="2">
                    <Text
                      textColor={"#0081C8"}
                      textStyle={"h6"}
                      fontFamily={"poppins-bold"}
                    >
                      {each.goal}
                    </Text>
                  </Box>

                  <hr />

                  {

                    index === 0 && (

                      <Box
                      
                      display={"flex"}
                      gap="5"
                      alignItems={"center"}
                    >
                      <Flex direction={"column"}>
                        {index === 0 && (
                          <>
                            <Flex
                              justifyContent={"space-around"}
                              alignItems={"center"}
                            >
                              <Flex direction={"column"}>
                                <Flex
                                  alignItems={"center"}
                                  w={{ base: "full", md: "4/5" }}
                                  gap="4"
                                >
                                  <Text textStyle={"h3"}>M15_PACER</Text>
                                  <Text>
                                    <ImNotification fill="#434942" />
                                  </Text>
                                </Flex>
  
                                <Flex
                                  justifyContent={"space-between"}
                                  alignItems={"center"}
                                  w={{ base: "full", md: "4/5" }}
                                >
                                  <Grid
                                    templateColumns={{
                                      base: "repeat(1, 1fr)",
                                      md: "repeat(1, 1fr)",
                                      lg: "repeat(3, 1fr)",
                                    }}
                                  >
                                  
  
                                    {loggedInUserReportDetails?.M15_pacer?.map(
                                      (each) =>
                                        each ? (
                                          <Flex
                                            gap="5"
                                            alignItems="center"
                                            key={each?.event_uuid}
                                         
                                          >
                                            <Text
                               
                                            >
                                              {each?.pacer_laps} Laps
                                            </Text>
                                            <Text>20/11/2022</Text>
                                          </Flex>
                                        ) : (
                                          <Flex
                                            gap="5"
                                            alignItems="center"
  
                                           
                                          >
                                            <Text
                                           
                                            >
                                              No Data Found
                                            </Text>
                                            {/* <Text>20/11/2022</Text> */}
                                          </Flex>
                                        )
                                    )}
                                  </Grid>
                                </Flex>
                              </Flex>
                            </Flex>
  
                            <Flex
                              justifyContent={"space-around"}
                              alignItems={"center"}
                            >
                              <Flex direction={"column"}>
                                <Flex
                                  alignItems={"center"}
                                  w={{ base: "full", md: "4/5" }}
                                  gap="4"
                                >
                                  <Text textStyle={"h3"}>M20_PACER</Text>
                                  <Text>
                                    <ImNotification fill="#434942" />
                                  </Text>
                                </Flex>
  
                                <Flex
                                  justifyContent={"space-between"}
                                  alignItems={"center"}
                                  w={{ base: "full", md: "4/5" }}
                                >
                                  <Grid
                                    templateColumns={{
                                      base: "repeat(1, 1fr)",
                                      md: "repeat(1, 1fr)",
                                      lg: "repeat(3, 1fr)",
                                    }}
                                  >
                                    {loggedInUserReportDetails?.M20_pacer?.map(
                                      (each) =>
                                        each ? (
                                          <Flex
                                            gap="5"
                                            alignItems="center"
                                            key={each?.event_uuid}
                                           
                                          >
                                            <Text
                                            
                                            >
                                              {each?.pacer_laps} Laps
                                            </Text>
                                            <Text>20/11/2022</Text>
                                          </Flex>
                                        ) : (
                                          <Flex
                                            gap="5"
                                            alignItems="center"
  
                                            
                                          >
                                            <Text
                                           
                                            >
                                              No Data Found
                                            </Text>
                                            {/* <Text>20/11/2022</Text> */}
                                          </Flex>
                                        )
                                    )}
                                  </Grid>
                                </Flex>
                              </Flex>
                            </Flex>
                          </>
                        )}
                      </Flex>
  
                      <>
                        {each.image && (
                          <Box pt="1rem">
                            <Image
                              src={each.image && each.image}
                              alt="Girlimage"
                              w={{ base: "7rem", md: "5rem", lg: "5rem" }}
                              h={{ base: "8rem", md: "8rem", lg: "5rem" }}
                            />
                          </Box>
                        )}
                      </>
                    </Box>


                    )
                  }

                

                  <Flex>
                    {index === 1 &&
                      Object.keys(loggedInUserReportDetails)?.map(
                        (each) =>
                          each === "height" ||
                          (each === "weight" && (
                            <>
                              <div className="m-4">
                                <div className="flex gap-14">
                                  <div className="">
                                    <h1 className="text-[16px] font-poppins-semibold ">
                                      Height
                                    </h1>
                                    <h1 className="text-[20px] font-poppins-bold text-primary">
                                      {loggedInUserReportDetails["height"]}
                                    </h1>
                                  </div>

                                  <div>
                                    <h1 className="text-[16px] font-poppins-semibold ">
                                      Weight
                                    </h1>
                                    <h1 className="text-[20px] font-poppins-bold text-primary">
                                      {loggedInUserReportDetails["weight"]}
                                    </h1>
                                  </div>
                                </div>
                                <div>
                                  <h1 className="text-sm text-black font-poppins-semibold">
                                    Body mass index (BMI) describes your weight
                                    compared to how tall you are. If your weight
                                    is high or low for your height, it could
                                    lead to health problems. Play 60 minutes a
                                    day, limit screen time, and make healthy
                                    food choices for a healthy body. Most people
                                    have a healthy weight if their BMI is in the
                                    Healthy Fitness Zone®, but every body is
                                    different. Talk with your doctor about BMI
                                    for more information.
                                  </h1>
                                </div>
                              </div>
                            </>
                          ))
                      )}
                  </Flex>

                  {/* <div
                    className={`grid ${
                      each.id === 1
                        ? " grid-cols-3  gap-1"
                        : " grid-cols-4  gap-1"
                    } ml-2 mr-2 md:h-[20vw]  lg:h-[13vw] xl:h-[9vw] 2xl:h-[7vw]`}
                  >
                    {each.riskList?.map((item) => (
                      <div className="flex flex-col justify-end">
                        <div className="">
                          <div
                            className={`flex justify-center items-center ${
                              item.id === 1
                                ? "border border-risk bg-risk"
                                : item.id === 2
                                ? "border border-improvement bg-improvement"
                                : item.id === 3
                                ? "border border-fit bg-fit"
                                : "border border-lean bg-lean"
                            } relative h-[3rem]`}
                          >
                            <p className="text-white text-sm p-2 font-poppins-regular  px-2">
                              {item.title}
                            </p>
                            <div
                              className={`absolute ${
                                item.id === 1
                                  ? "top-[-4.2rem]"
                                  : "top-[-3.8rem]"
                              } ${
                                item?.arrowIconPosition
                              } mt-0  translate-x-[-35%]`}
                            >
                              <div className={``}>
                                <div className="flex items-center">
                                  <p className="mr-1">{item.icon}</p>
                                  <p className="text-[#0081C8] mt-2 font-poppins-bold text-sm">
                                    {item.rate}
                                  </p>
                                </div>
                                <p className="text-xs">{item.date}</p>
                              </div>
                              <img
                                src={item.arrowImg}
                                alt=""
                                className={`${
                                  item.id === 1 ? "h-[3.6rem]" : "h-[2.5rem]"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pt-2 pb-2">
                    <p className="text-[#0081C8] font-poppins-bold text-[0.8rem]">
                      {each.goal}
                    </p>
                  </div>

                  <hr />

                  <div className="flex justify-between items-center px-4">
                    <div className="flex flex-col w-4/5">
                      <div className="flex items-center gap-2">
                        <p className="text-[18px] text-black font-poppins-semibold">
                          {each.readings && each.readings}
                        </p>
                        <p>{each.pacerIcon && each.pacerIcon}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {each &&
                          each.lapsList &&
                          each?.lapsList.map((item) => (
                            <div
                              key={item.id}
                              className={`flex justify-start items-end gap-5 py-2 ${
                                item.id !== 3 && "border-r-2 border-[#E4E5E5]"
                              } `}
                            >
                              <p
                                className={`${
                                  item.id === 1
                                    ? "text-[#0081C8] font-poppins-semibold text-md"
                                    : "text-black font-poppins-semibold text-xs"
                                }`}
                              >
                                {item.numOfLaps}
                              </p>
                              <p className="text-xs">{item.date}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                    {each.image && (
                      <div className=" pt-[1rem]">
                        <img
                          src={each.image && each.image}
                          alt="Girlimage"
                          className="w-[5rem] h-[5rem]"
                        />
                      </div>
                    )}
                  </div> */}

                  {/* {each.heightName && each.weightName && (
                  <>
                    <div className='m-4'>
                      <div className='flex gap-14'>
                        <div className=''>
                          <h1 className='text-[16px] font-poppins-semibold '>
                            {each.heightName}
                          </h1>
                          <h1 className='text-[20px] font-poppins-bold text-primary'>
                            {each.height}
                          </h1>
                        </div>

                        <div>
                          <h1 className='text-[16px] font-poppins-semibold '>
                            {each.weightName}
                          </h1>
                          <h1 className='text-[20px] font-poppins-bold text-primary'>
                            {each.weight}
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1 className='text-sm text-black font-poppins-semibold'>
                          {each.content}
                        </h1>
                      </div>
                    </div>
                  </>
                )} */}
                </Box>
              ))}
          </Flex>
        </Box>

        <Box pt="3" border="1px solid #E4E5E5" shadow={"md"}>
          <>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              pl="6"
              pr="2"
            >
              <Text textStyle={"h5"} fontFamily={"poppins-bold"}>
                MUSCLE FITNESS
              </Text>
              <Image src={muscleFitnessImage} alt="muscle image" />
            </Flex>
            {muscleFitnessCard &&
              muscleFitnessCard?.map((each) => (
                <>
                  <Flex gap="2" alignItems={"center"}>
                    <Image
                      src={each.image}
                      alt="pushup"
                      h={each.id === 3 ? "6rem" : "5rem"}
                      w={each.id === 3 ? "4rem" : "3rem"}
                    />
                    <Text textStyle={"h5"}>{each.title}</Text>
                    <Text>
                      <ImNotification fill="#434942" />
                    </Text>
                  </Flex>

                  <Grid
                    templateColumns={"repeat(2, 1fr)"}
                    mt="4rem"
                    gap="1"
                    ml="2"
                    mr="2"
                    // className={`grid grid-cols-2 gap-1 ml-2 mr-2  md:h-[20vw]  lg:h-[10vw] xl:h-[6vw] 2xl:h-[3vw]`}
                  >
                    {each.fitnessList?.map((item) => (
                      <Flex direction={"column"} justifyContent={"flex-end"}>
                        <Flex
                          direction={"column"}
                          justifyContent={"flex-end"}
                          alignItems={"center"}
                          border={
                            item.id === 1 ? "1px improvement" : "1px fit bg-fit"
                          }
                          bgColor={item.id === 1 ? "improvement" : "fit"}
                          position={"relative"}
                          h="2.8rem"
                          // className={`flex flex-col justify-end items-center ${
                          //   item.id === 1
                          //     ? "border border-improvement bg-improvement"
                          //     : "border border-fit bg-fit"
                          // } relative h-[2.8rem]`}
                        >
                          <Text textStyle={"h5"} textColor={"white"}>
                            {item.title}
                          </Text>

                          <Box
                            position={"absolute"}
                            top={item.id === 2 ? "-5.2rem" : "-4.3rem"}
                            mt="0"
                            translateX={"-35%"}
                            // className={`absolute ${
                            //   item.id === 2 ? "top-[-5.2rem]" : "top-[-4.3rem]"
                            // } ${
                            //   item?.arrowIconPosition
                            // } mt-0 translate-x-[-35%]`}

                            left={item?.arrowIconPosition}
                          >
                            <div className="flex items-center">
                              <p className="mr-1">{item.icon}</p>
                              <p
                                className={`${
                                  item.id === 1
                                    ? "text-black mt-2 font-poppins-bold text-[13px]"
                                    : "text-[#0081C8] mt-2 font-poppins-bold text-[16px]"
                                } `}
                              >
                               

                                {item.rate}
                              </p>
                            </div>
                            <p>{item.date}</p>

                            <Image
                              src={item.arrowImg}
                              alt=""
                              h={item.id === 2 ? "3.6rem" : "2.5rem"}
                              mt="-1.6"
                            />
                          </Box>
                        </Flex>
                      </Flex>
                    ))}
                  </Grid>
                  <Box px="4" pt="2" pb="2">
                    <Text
                      textColor={"#0081C8"}
                      textStyle={"h4"}
                      fontFamily={"poppins-bold"}
                    >
                      {each.goal}
                    </Text>
                  </Box>

                  {each.id !== muscleFitnessCard.length && <hr />}
                </>
              ))}
          </>
        </Box>
      </Grid>

      {/* <div className="border-2 border-transparent grid grid-cols-2 gap-1">
        <div className="flex flex-col gap-4 flex-1 flex-wrap">
          {heartHealthCard &&
            heartHealthCard?.map((each) => (
              <div
                className="pt-3 border border-[#E4E5E5] shadow-md shadow-t-2xl"
                key={each.id}
              >
                <div className="flex justify-between items-center pl-6 pr-2">
                  <p className="text-black font-poppins-bold text-md">
                    {each.title}
                  </p>
                  {each.heartImage && (
                    <img src={each.heartImage} alt="heartpulse" />
                  )}
                </div>
                <div className="flex gap-2 items-center text-[1.2rem] px-2 text-black font-poppins-semibold">
                  <p className="text-[17px] font-poppins-medium mt-2 mb-2">
                    {each.capacity}
                  </p>
                  <p>{each.capacityIcon}</p>
                </div>

                <div
                  className={`grid ${
                    each.id === 1
                      ? " grid-cols-3  gap-1"
                      : " grid-cols-4  gap-1"
                  } ml-2 mr-2 md:h-[20vw]  lg:h-[13vw] xl:h-[9vw] 2xl:h-[7vw]`}
                >
                  {each.riskList?.map((item) => (
                    <div className="flex flex-col justify-end">
                      <div className="">
                        <div
                          className={`flex justify-center items-center ${
                            item.id === 1
                              ? "border border-risk bg-risk"
                              : item.id === 2
                              ? "border border-improvement bg-improvement"
                              : item.id === 3
                              ? "border border-fit bg-fit"
                              : "border border-lean bg-lean"
                          } relative h-[3rem]`}
                        >
                          <p className="text-white text-sm p-2 font-poppins-regular  px-2">
                            {item.title}
                          </p>
                          <div
                            className={`absolute ${
                              item.id === 1 ? "top-[-4.2rem]" : "top-[-3.8rem]"
                            } ${
                              item?.arrowIconPosition
                            } mt-0  translate-x-[-35%]`}
                          >
                            <div className={``}>
                              <div className="flex items-center">
                                <p className="mr-1">{item.icon}</p>
                                <p className="text-[#0081C8] mt-2 font-poppins-bold text-sm">
                                  {item.rate}
                                </p>
                              </div>
                              <p className="text-xs">{item.date}</p>
                            </div>
                            <img
                              src={item.arrowImg}
                              alt=""
                              className={`${
                                item.id === 1 ? "h-[3.6rem]" : "h-[2.5rem]"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 pt-2 pb-2">
                  <p className="text-[#0081C8] font-poppins-bold text-[0.8rem]">
                    {each.goal}
                  </p>
                </div>

                <hr />

                <div className="flex justify-between items-center px-4">
                  <div className="flex flex-col w-4/5">
                    <div className="flex items-center gap-2">
                      <p className="text-[18px] text-black font-poppins-semibold">
                        {each.readings && each.readings}
                      </p>
                      <p>{each.pacerIcon && each.pacerIcon}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {each &&
                        each.lapsList &&
                        each?.lapsList.map((item) => (
                          <div
                            key={item.id}
                            className={`flex justify-start items-end gap-5 py-2 ${
                              item.id !== 3 && "border-r-2 border-[#E4E5E5]"
                            } `}
                          >
                            <p
                              className={`${
                                item.id === 1
                                  ? "text-[#0081C8] font-poppins-semibold text-md"
                                  : "text-black font-poppins-semibold text-xs"
                              }`}
                            >
                              {item.numOfLaps}
                            </p>
                            <p className="text-xs">{item.date}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  {each.image && (
                    <div className=" pt-[1rem]">
                      <img
                        src={each.image && each.image}
                        alt="Girlimage"
                        className="w-[5rem] h-[5rem]"
                      />
                    </div>
                  )}
                </div>

                {each.heightName && each.weightName && (
                  <>
                    <div className="m-4">
                      <div className="flex gap-14">
                        <div className="">
                          <h1 className="text-[16px] font-poppins-semibold ">
                            {each.heightName}
                          </h1>
                          <h1 className="text-[20px] font-poppins-bold text-primary">
                            {each.height}
                          </h1>
                        </div>

                        <div>
                          <h1 className="text-[16px] font-poppins-semibold ">
                            {each.weightName}
                          </h1>
                          <h1 className="text-[20px] font-poppins-bold text-primary">
                            {each.weight}
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-sm text-black font-poppins-semibold">
                          {each.content}
                        </h1>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>

        <div className="pt-3 border border-[#E4E5E5] shadow-md shadow-t-2xl">
          <div className="flex justify-between items-center pl-6 pr-2">
            <p className="text-black font-poppins-bold text-[0.9rem]">
              MUSCLE FITNESS
            </p>
            <img src={muscleFitnessImage} alt="muscle image" />
          </div>
          {muscleFitnessCard &&
            muscleFitnessCard?.map((each) => (
              <>
                <div className="flex gap-2 items-center text-[1.2rem] px-2 text-black font-poppins-semibold">
                  <img
                    src={each.image}
                    alt="pushup"
                    className={`${
                      each.id === 3 ? "h-[6rem] w-[4rem]" : "h-[5rem] w-[3rem]"
                    } `}
                  />
                  <p>{each.title}</p>
                  <p>
                    <ImNotification fill="#434942" />
                  </p>
                </div>

                <div
                  className={`grid grid-cols-2 gap-1 ml-2 mr-2  md:h-[20vw]  lg:h-[10vw] xl:h-[6vw] 2xl:h-[3vw]`}
                >
                  {each.fitnessList?.map((item) => (
                    <div className="flex flex-col justify-end">
                      <div className="">
                        <div
                          className={`flex flex-col justify-end items-center ${
                            item.id === 1
                              ? "border border-improvement bg-improvement"
                              : "border border-fit bg-fit"
                          } relative h-[2.8rem]`}
                        >
                          <p className="text-white">{item.title}</p>
                          <div
                            className={`absolute ${
                              item.id === 2 ? "top-[-5.2rem]" : "top-[-4.3rem]"
                            } ${
                              item?.arrowIconPosition
                            } mt-0 translate-x-[-35%]`}
                          >
                            <div className={``}>
                              <div className="flex items-center">
                                <p className="mr-1">{item.icon}</p>
                                <p
                                  className={`${
                                    item.id === 1
                                      ? "text-black mt-2 font-poppins-bold text-[13px]"
                                      : "text-[#0081C8] mt-2 font-poppins-bold text-[16px]"
                                  } `}
                                >
                                  {item.rate}
                                </p>
                              </div>
                              <p>{item.date}</p>
                            </div>
                         
                            <img
                              src={item.arrowImg}
                              alt=""
                              className={`${
                                item.id === 2 ? "h-[3.6rem]" : "h-[2.5rem]"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 pt-2 pb-2">
                  <p className="text-[#0081C8] font-poppins-bold text-[0.8rem]">
                    {each.goal}
                  </p>
                </div>

                {each.id !== muscleFitnessCard.length && <hr />}
              </>
            ))}
        </div>
      </div> */}
    </>
  );
};

export default StudentReportCard;
