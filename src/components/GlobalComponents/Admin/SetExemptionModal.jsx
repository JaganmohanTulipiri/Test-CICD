import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Input,
  Box,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { Select as TestSelect } from "chakra-react-select";
import NegativeButton from "../../NegativeButton";
import PositiveButton from "../../PositiveButton";
import { useSelector } from "react-redux";

function SetExemptionPop(props) {
  const {
    openModal,
    setOpenModal,
    userData,
    testItems,
    testItemObj,
    dataToSend,
    setDataToSend,
  } = props;

  const [testItemsOptions, setTestItemsOptions] = useState([]);

  const [exemptionDetails, setExemptionDetails] = useState({
    studentName: "",
    testItem: "",
    reason: "",
    uuid: "",
  });

  console.log(dataToSend, "dataToSend");

  const exemptionCode = [
    { label: "Absent", value: "Absent" },
    { label: "Medical", value: "Medical" },
    { label: "Moved", value: "Moved" },
    { label: "Parents opt out", value: "Parents opt out" },
    {
      label: "Didn't participate for other reasons",
      value: "Didn't participate for other reasons",
    },
  ];

  const handleExemption = (e) => {
    setExemptionDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const studentIndex = dataToSend.findIndex(
      (student) => student.user_uuid === exemptionDetails.uuid
    );
    const testItemIndex = dataToSend[studentIndex]?.event_fields?.findIndex(
      (field) => Object.keys(field).includes(exemptionDetails.testItem)
    );
    const modifiedData = dataToSend.slice();

    console.log("modifiedData",modifiedData)

    modifiedData[studentIndex].event_fields[testItemIndex].is_exempted = true;
    modifiedData[studentIndex].event_fields[testItemIndex].exemption_reason = exemptionDetails.reason;

    setDataToSend(modifiedData);
    setOpenModal(false);
  };

  useEffect(() => {
    setExemptionDetails((prevState) => ({
      ...prevState,
      studentName: userData?.first_name,
      uuid: userData?.uuid,
    }));
    let options = testItems.map((item) => ({
      label: item,
      value: testItemObj[item],
    }));
    setTestItemsOptions(options);
  }, [openModal]);

  return (
    <>
      <Modal
        size="md"
        onClose={() => {
          setOpenModal(false);
        }}
        isOpen={openModal}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4">
          <ModalBody>
            <Stack spacing="4">
              <Text textStyle="h4">Set Exemptions</Text>
              <FormControl>
                <FormLabel>Student Name</FormLabel>

                <Input value={exemptionDetails.studentName} isDisabled />
              </FormControl>
              <FormControl>
                <FormLabel>Test Event</FormLabel>
                <Input value="Test Event Name" isDisabled />
              </FormControl>
              <FormControl>
                <FormLabel>Test(s)</FormLabel>
                <TestSelect
                  mb="8px"
                  useBasicStyles
                  name="tests"
                  onChange={(e) => {
                    setExemptionDetails((prevState) => ({
                      ...prevState,
                      testItem: e.value,
                    }));
                  }}
                  options={testItemsOptions}
                ></TestSelect>
              </FormControl>
              <FormControl>
                <FormLabel>Exemption Code</FormLabel>
                <Select
                  bg="bg.100"
                  borderColor="bg.100"
                  onChange={handleExemption}
                  name="reason"
                  placeholder="select"
                  value={exemptionDetails.reason}
                  textStyle={'textHead'}
                >
                  {exemptionCode?.map((value, i) => {
                    return (
                      <option key={i} value={value.value}>
                        {value.label}
                      </option>
                    );
                  })}
                </Select>
                {/* <Select
                  mb="8px"
                  useBasicStyles
                  name="user_uuid"
                  //   onChange={handleChange}
                  options={exemptionCode}
                ></Select> */}
              </FormControl>
              <Flex justify="center" gap="8">
                <Box
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  <NegativeButton text={"Cancel"} />
                </Box>
                <Box>
                  <PositiveButton text={"Submit"} onClick={handleSubmit} />
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SetExemptionPop;
