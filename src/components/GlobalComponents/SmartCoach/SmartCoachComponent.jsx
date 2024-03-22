import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Card, CardHeader, CardBody, CardFooter, Icon } from "@chakra-ui/react";
import { VscFilePdf } from "react-icons/vsc";
import { IoMdStarOutline } from "react-icons/io";
import { BsFileEarmark, BsFilePdf } from "react-icons/bs";

import loadingGif from "../../../assets/images/LoadingGIF/loading2.gif";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SmartTestFieldComponent from "./SmartTestFieldComponent";
import {
  getRecommendedSmartCoachAPICall,
  getSmartCoach,
  getTestSelection,
  setTestSelectionButtonClicked,
} from "../../../store/slices/profileSlice";
import { Rings } from "react-loader-spinner";

const SmartCoachComponent = () => {


  const dispatch = useDispatch();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const [isSelectDropDownClicked, setIsSelectDropDownClicked] = useState(false);

  const token = useSelector((state) => state?.profile?.token);



  const userRole = useSelector((state) => state.profile.selectedRole);


  const recommendedSmartCoachResponse = useSelector((state) => state?.profile?.smartCoachResponse?.data?.response)


  console.log(recommendedSmartCoachResponse, "recommendedSmartCoachResponse")


  const testSelectionResponseList = useSelector(
    (state) => state?.profile?.testSelectionResponse?.response
  );

  // const testSelectionResponse = useSelector(
  // 	(state) => state?.profile?.testSelectionResponse?.response,
  // );

  const isLoading = useSelector((state) => state?.profile?.loading);

  const testSelectionButtonClickedVal = useSelector(
    (state) => state?.profile?.testSelectionButtonClicked
  );

  console.log(
    testSelectionButtonClickedVal,
    "testSelectionButtonClickedRes from smart coaching"
  );

  console.log(testSelectionResponseList, "testSelectionResponseList");

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const recommendedList = [
    {
      id: 1,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Top Smart Coach Resources",
    },

    {
      id: 2,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "15M PACER (no music) (English)",
    },
    {
      id: 3,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Top Smart Coach Resources",
    },
    {
      id: 4,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "FitnessGram In-School Recomendations",
    },
    {
      id: 5,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Top Smart Coach Resources",
    },
    {
      id: 6,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "FitnessGram In-School Recomendations",
    },
  ];

  const handleFocus = (event) => {
    event.stopPropagation();
    setIsDropdownOpened(true);
  };

  const handleChange = (event) => {
    event.stopPropagation();
    setSearchValue(event.target.value);
  };

  const testSelectionButtonClicked = () => {
    dispatch(setTestSelectionButtonClicked(true));

    dispatch(getTestSelection(token));

    setSearchValue("");
    setIsDropdownOpened(false);
  };

  const outSideClicked = (event) => {
    if (event.target.className !== "chakra-input css-qtvzvp") {
      setIsDropdownOpened(false);
    }
  };

  console.log(isButtonClicked, "isbutton clicked");

  const filteredOptions =
  testSelectionResponseList?.length &&
  testSelectionResponseList?.filter((option) =>
      option?.title?.toLowerCase().includes(searchValue.toLowerCase())
    );

  console.log(filteredOptions, "filteredOptions clicked");





  useEffect(() => {



    const userDetails = {

      selected_primary_audience: userRole,
      

    };

    console.log(userDetails, "userDetails")

    dispatch(getRecommendedSmartCoachAPICall({ userDetails, token }));

    dispatch(setTestSelectionButtonClicked(false));



  }, []);














  

  return (
    <>
      <div
        className="md:p-0 md:mt-10 md:w-[100%]  bg-white lg:w-auto h-full"
        onClick={outSideClicked}
      >
        {isLoading ? (
          <div className=" w-full h-full bg-white flex justify-center items-center">
            <Rings height={150} width={150} colors="#00BFFF" />{" "}
          </div>
        ) : (
          <>
            <h1 className="font-poppins-medium text-md mt-5 md:px-5 lg:px-10">
              Available Resources
            </h1>
            <div className="flex justify-between items-center mt-5 md:px-5 lg:px-10">
              <div className="flex justify-between">
                <button
                  className={`${
                    testSelectionButtonClickedVal === false
                      ? "bg-primary text-white"
                      : "bg-gray-1 text-black"
                  } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small rounded-l-lg`}
                  onClick={() => {
                    dispatch(setTestSelectionButtonClicked(false));
                  }}
                >
                  Recommended
                </button>
                <button
                  className={`${
                    testSelectionButtonClickedVal
                      ? "bg-primary text-white"
                      : "bg-gray-1 text-black"
                  } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small rounded-r-lg`}
                  onClick={testSelectionButtonClicked}
                >
                  Test Selection
                </button>
              </div>

              {!testSelectionButtonClickedVal && (
                <div className="relative border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none">
                  <>
                    <Stack
                      spacing={4}
                      className=""
                      width={["30vw", "40vw", "40vw", "40vw"]}
                    >
                      <InputGroup className="border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Search2Icon color="#C9C8C8" />}
                        />
                        {isDropdownOpened ? (
                          <Input
                            type="type"
                            placeholder="Search"
                            onChange={handleChange}
                            value={searchValue}
                          />
                        ) : (
                          <Input
                            type="type"
                            placeholder="Search"
                            onFocus={handleFocus}
                            value={searchValue}
                          />
                        )}
                      </InputGroup>
                    </Stack>

                    {isDropdownOpened && (
                      <>
                        <div className="border-[#C9C8C8]  focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none bg-white rounded-sm absolute top-11 z-30 w-full shadow-lg  ">
                          {filteredOptions &&
                            filteredOptions?.map((each) => (
                              <p
                                className="bg-gray-1 p-2 m-2 mb-3 border-[#C9C8C8]  focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none rounded-md hover:bg-primary hover:text-white text-[1rem] "
                                onClick={(event) => {
                                  console.log(event.target.textContent);
                                  setSearchValue(
                                    event?.target?.textContent?.trim()
                                  );
                                  setIsDropdownOpened(false);
                                }}
                              >
                                {each?.title?.charAt(0)?.toUpperCase() +
                                  each?.title?.slice(1)}{" "}
                              </p>
                            ))}
                        </div>
                      </>
                    )}
                  </>
                </div>
              )}
            </div>

            {testSelectionButtonClickedVal ? (
              <SmartTestFieldComponent
                isDropdownOpened={isDropdownOpened}
                setIsDropdownOpened={setIsDropdownOpened}
                isSelectDropDownClicked={isSelectDropDownClicked}
                setIsSelectDropDownClicked={setIsSelectDropDownClicked}
              />
            ) : null}
            <>
              {isDropdownOpened ? (
                filteredOptions &&
                filteredOptions?.map((each) => (
                  <>
                    <div className=" mt-5 md:px-5 lg:px-10">
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
                          <Icon
                            as={IoMdStarOutline}
                            w={8}
                            h={6}
                            color="#FECE50"
                          />
                          <Icon
                            as={BsFileEarmark}
                            w={6}
                            h={6}
                            color="#EE373E"
                          />
                          <Text className="px-5">
                            {each?.title?.charAt(0)?.toUpperCase() +
                              each?.title?.slice(1)}
                          </Text>
                        </CardBody>
                      </Card>
                    </div>
                  </>
                ))
              ) : (
                <>
                  {recommendedSmartCoachResponse !== undefined && recommendedSmartCoachResponse?.length > 0 ?
                    recommendedSmartCoachResponse?.map((each) => (
                      <>
                        <div className=" mt-5 md:px-5 lg:px-10">
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
                              {each.media_type?.length > 0 && (
                                <Box>
                                  <Icon
                                    as={IoMdStarOutline}
                                    w={8}
                                    h={6}
                                    color="#FECE50"
                                  />
                                  <Icon
                                    as={BsFileEarmark}
                                    w={6}
                                    h={6}
                                    color="#EE373E"
                                  />
                                </Box>
                              )}
                              <Text className="px-5">
                                {each?.title?.charAt(0)?.toUpperCase() +
                                  each?.title?.slice(1)}
                              </Text>
                            </CardBody>
                          </Card>
                        </div>
                      </>
                    )) : <div className="flex flex-col justify-center items-center">
                      <img src = "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg" alt = "no-data"/>
                    </div>
                  
                  
                  }
                </>
              )}
            </>
          </>
        )}
      </div>
    </>
  );
};

export default SmartCoachComponent;
