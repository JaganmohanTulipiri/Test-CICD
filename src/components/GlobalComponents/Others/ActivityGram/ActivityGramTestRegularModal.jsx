import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import clockStartImage from "../../../../assets/images/OthersSectionImages/stopwatchImage1.svg";

import clockStopImage from "../../../../assets/images/OthersSectionImages/stopwatchImage2.svg";

const ActivityGramTestRegularModal = (props) => {
  const { isRowItemClicked, changingBooleanRowItemFunction } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [firstTimerClicked, setFirstTimerClicked] = useState(false);

  const [secondTimerClicked, setSecondTimerClicked] = useState(false);

  const firstTimerList = [
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",

    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",

    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",

    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",

    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
  ];

//   const secondTimerList = [
//     "7:30 AM",
//     "8:00 AM",
//     "8:30 AM",
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",

//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "1:00 PM",
//     "1:30 PM",

//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",

//     "6:00 PM",
//     "6:30 PM",
//     "7:00 PM",
//     "7:30 PM",
//     "8:00 PM",
//     "8:30 PM",
//     "9:00 PM",
//     "9:30 PM",

//     "10:00 PM",
//     "10:30 PM",
//     "11:00 PM",
//   ];

  const [timerValues, setTimerValues] = useState({
    firstTimer: "",
    secondTimer: "",
    activityType: '',
    activityLevelOne: '',
    activityLevelTwo: '',

  });

  const [errors, setErrors] = useState({})

  const firstTimerFunction = () => {
    setFirstTimerClicked(!firstTimerClicked);
  };

  const secondTimerFunction = () => {
    setSecondTimerClicked(!secondTimerClicked);
  };

  const firstTimerSelected = (selectedTime) => {





    const secondTimerValueIndex = firstTimerList?.indexOf(selectedTime) + 1



    console.log(secondTimerValueIndex, "secondTimerValueIndexsecondTimerValueIndexsecondTimerValueIndex")






    const secondTimerValue = firstTimerList[secondTimerValueIndex]


    setTimerValues({
        ...timerValues,
        firstTimer: selectedTime,
        secondTimer:secondTimerValue
       
    })

    setFirstTimerClicked(!firstTimerClicked);

    delete errors.firstTimer



  };

  const secondTimerSelected = (selectedTime) => {

    setTimerValues({
        ...timerValues,
      
        secondTimer:selectedTime
       
    })

    setSecondTimerClicked(!secondTimerClicked)

    delete errors.secondTimer





  }


  

  const firstTimerEnteredValue = (event) => {

    console.log(event.target.value)

    setTimerValues({

        ...timerValues,
        [event.target.name]: event.target.value

    })


    setFirstTimerClicked(false);

    const newVal = firstTimerList.find(item => event.target.value.toLowerCase().includes(item.toLowerCase()))

    console.log(newVal, "newval")


    if(newVal !== undefined){

       


        const secondValIndexNum = firstTimerList?.indexOf(newVal) + 1

        console.log(secondValIndexNum, "secondValIndexNum")


        const secondVal =  firstTimerList[secondValIndexNum]

        console.log(secondVal, "secondVal")

        console.log("yes found")



        setTimerValues({
            ...timerValues,
            firstTimer: newVal,
            secondTimer: secondVal
        })


        delete errors.firstTimer
        delete errors.secondTimer



    }else{

        console.log("not found")

        setErrors({
            ...errors,
            firstTimer: 'That"s not a correct time'
        })
    }
  


  }




  const secondTimerEnteredValue = (event) => {

    console.log(event.target.value)

    setSecondTimerClicked(false)

    setTimerValues({

        ...timerValues,
        [event.target.name]: event.target.value

    })

    const newVal = firstTimerList.find(item => event.target.value.toLowerCase().includes(item.toLowerCase()))

    console.log(newVal, "newval")


    if(newVal !== undefined){

       


        const secondValIndexNum = firstTimerList?.indexOf(newVal)

        console.log(secondValIndexNum, "secondValIndexNum")


        const secondVal =  firstTimerList[secondValIndexNum]

        console.log(secondVal, "secondVal")

        console.log("yes found")



        setTimerValues({
            ...timerValues,
            secondTimer: secondVal
        })


        delete errors.secondTimer



    }else{

        console.log("not found")

        setErrors({
            ...errors,
            secondTimer: 'That"s not a correct time'
        })
    }
  


  }




  const setField = (field, value) => {


setTimerValues({
            ...timerValues,
            [field]: value
        })


        setErrors({
            ...errors,
            [field] : null
        })

  }


  const handleSubmit = (event) => {


    setField(event.target.name, event.target.value)


  }


  const validate = () => {

    let errors = {}

    const { firstTimer, secondTimer, activityType, activityLevelOne, activityLevelTwo,} = timerValues


    if(!firstTimer || firstTimer === "" ){

        errors.firstTimer = "*Required"
    }

    if(!secondTimer || secondTimer === "" ){

        errors.secondTimer = "*Required"
    }

    if(!activityType || activityType === "" ){

        errors.activityType = "*Required"
    }
    if(!activityLevelOne || activityLevelOne === "" ){

        errors.activityLevelOne = "*Required"
    }
    if(!activityLevelTwo || activityLevelTwo === "" ){

        errors.activityLevelTwo = "*Required"
    }

    return errors



  }







  const formSubmitted = (event) => {

        event.preventDefault()

        const errorsObj = validate()

        console.log(errorsObj, "errors obj")

        if(Object.keys(errorsObj).length > 0){

            console.log("form not submitted")

            setErrors(errorsObj)
        }
        else{

            console.log("successfully submirttted")


            console.log(errorsObj, "errorsObj")

            changingBooleanRowItemFunction(false)


        }

        

  }





  console.log(timerValues, "timer values")



console.log("errors obj", errors)


  return (
    <>
      <Modal onClose={onClose} isOpen={isRowItemClicked} isCentered size="sm">
        <ModalOverlay />
        <ModalContent shadow={'lg'} p={0}>
          <ModalHeader p="0" pl="2rem" bgColor={"primary"} borderTopLeftRadius={7} borderTopRightRadius={7} py="2" color="white" fontSize={'md'}>
            Add ActivityGram Activity
          </ModalHeader>

          <ModalBody w="full">
            <form onSubmit = {formSubmitted}>
              <Flex alignItems="center">
                <Box className="mr-2">
                  <Text textStyle="h6" color="black-2">Start Time:</Text>
                  <Box className="relative" _focus={{ border:"1px solid #f5f5f5",
                        bg : "#EDF4FE" ,type : "text",
                        borderRadius:'15',}}>
                    <Box>

              
                    <InputGroup>
                      <Input
                        border="1px solid #f5f5f5"
                        bg="#EDF4FE" type = "text" name = "firstTimer"
                        borderRadius={15} value = {timerValues?.firstTimer} onChange = {firstTimerEnteredValue}
                      />

                      <InputRightElement
                        children={
                          <Image
                            src={clockStartImage}
                            alt="clock-image"
                            className="w-5 h-5"
                            onClick={firstTimerFunction}
                          />
                        }
                      />
                    </InputGroup>
                    {errors && errors?.firstTimer !== "" && <Text color={'red'}  pl={2} pt={2}>{errors.firstTimer}</Text>}
                    </Box>
                    {firstTimerClicked ? (
                      <Box
                        className="absolute w-full z-10 h-[20vh] bg-white ease-in duration-700 overflow-scroll example border-2 border-white shadow-lg rounded-xl"
                        textAlign="center"
                      >
                        {firstTimerList?.map((each, index) => {
                          if (index < firstTimerList.length - 1) {
                            return (
                              <Text
                                mt="2"
                                _hover={{
                                  bg: "primary",
                                  color: "white",
                                  borderRadius: "7",
                                  cursor: "pointer",
                                }}
                                key={index}
                                onClick={() => firstTimerSelected(each)}
                              >
                                {each}
                              </Text>
                            );
                          }
                        })}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box className="ml-2">
                  <Text textStyle="h6" color="black-2">End Time:</Text>
                  <Box className="relative">
                    <Box>

                   
                    <InputGroup>
                      <Input border="1px solid #f5f5f5"
                        bg="#EDF4FE"
                        borderRadius={15} type = "text" name = "secondTimer" value = {timerValues?.secondTimer} onChange = {secondTimerEnteredValue} />
                      <InputRightElement
                        children={
                          <Image
                            src={clockStopImage}
                            alt="clock-image"
                            className="w-5 h-5"
                            onClick={secondTimerFunction}
                          />
                        }
                      />
                    </InputGroup>

                    {errors && errors?.secondTimer !== "" && <Text color={'red'}  pl={2}  pt={2}>{errors.secondTimer}</Text>}

                    </Box>
                    {secondTimerClicked ? (
                      <Box
                        className="absolute w-full z-10 h-[20vh] bg-white ease-in duration-700 overflow-scroll example border-2 border-white shadow-lg rounded-xl"
                        textAlign="center"
                      >
                        {firstTimerList?.map((each, index) => {
                          if (index >= 1 && index < firstTimerList.length) {
                            return (
                              <Text
                                mt="2"
                                _hover={{
                                  bg: "primary",
                                  color: "white",
                                  borderRadius: "7",
                                  cursor: "pointer",
                                }}
                                key={index}
                                onClick={() => secondTimerSelected(each)}
                              >
                                {each}
                              </Text>
                            );
                          }
                        })}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
              </Flex>

              <Box mt="3" display = "flex" alignItems={'center'} gap = {2}>
                <Text fontSize = {'h2'}  color="black-2" >Duration :  </Text>
                <Text fontSize = 'h2' color="black-2" >30 minutes</Text>
              </Box>

              <hr className="border border-[#f5f5f5] mt-3 mb-3"/>

              <Box mt="3">
                <h1>Type of Activity: </h1>

                <Select
                  placeholder="Select option"
                  size="md"
                  variant="filled"
                  border="1px solid #f5f5f5" name = "activityType"
                  bg="#EDF4FE"
                  borderRadius="15" onChange = {handleSubmit} value = {timerValues?.activityType}
                >
                  <option value="Rest">Rest</option>
                  <option value="Playing">Playing</option>
                  <option value="Studying">Studying</option>
                </Select>

                
                {errors && errors?.activityType && <Text color={'red'}  pl={2}  pt={2}>{errors.activityType}</Text>}


              </Box>

              <Box>
                <h1>My Activity Level was: </h1>
                <Select
                  placeholder="Select option"
                  size="md"
                  variant="filled"
                  border="1px solid #f5f5f5"  name = "activityLevelOne"
                  bg="#EDF4FE"
                  borderRadius="15" onChange = {handleSubmit} value = {timerValues?.activityLevelOne}
                >
                  <option value="levelOne -- one">levelOne -- one</option>
                  <option value="levelOne -- two">levelOne -- two</option>
                  <option value="levelOne -- three">levelOne -- three</option>
                </Select>
                {errors && errors?.activityLevelOne && <Text color={'red'}  pt={2}  pl={2}>{errors.activityLevelOne}</Text>}

              </Box>
              <Box>

           
              <Box
                mt="2"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Select
                  placeholder="Select option"
                  size="md"
                  w={60}
                  variant="filled"
                  border="1px solid #f5f5f5" name = "activityLevelTwo"
                  bg="#EDF4FE"
                  borderRadius="15" onChange = {handleSubmit} value = {timerValues?.activityLevelTwo}
                > 
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <h1>of the time</h1>
                </Box>
                {errors && errors?.activityLevelOne && <Text color={'red'}  pt={2} pl={2}>{errors.activityLevelOne}</Text>}

              </Box>

              <Box
                display="flex"
                justifyContent="center"
                gap={5}
                alignItems="center"
                mt="5"
                mb="3"
              >
                <Button
                  bgColor="#F5F4F4"
                  textColor="black"
                  fontSize="small"
                  borderRadius={50} type = "button"
                  px={12}
                  py={0}

                  onClick = {() =>  changingBooleanRowItemFunction(false)}
                >
                  Cancel



                </Button>
                <Button
                  bgColor="green"
                  textColor="white"
                  fontSize="small"
                  borderRadius={50} type = "submit"
                  px={9}
                >
                  Save & Next
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivityGramTestRegularModal;
