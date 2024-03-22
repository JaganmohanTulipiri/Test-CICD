import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLicenseToSchool } from "../../../store/slices/superAdminSlice/superAdminSlice";

const AddingSchoolDatetime = (props) => {
  console.log("AddSchoolDateTime", props.schoolsList);

  const school_uuid = props.schoolsList;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const finalRef = React.useRef(null);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const funder_uuid = useSelector((state) => state?.superAdmin?.funderId);
  const token = useSelector((state) => state?.profile?.token);

  const payload = {
    license_start_date: "",
    license_end_date: "",
  };
  const fields = [
    {
      id: "1",
      label: "Start Date:",
      placeholder: "",
      name: "license_start_date",
      inputType: "date",
    },
    {
      id: "2",
      label: "End Date:",
      placeholder: "",
      name: "license_end_date",
      inputType: "date",
    },
  ];

  const [inputFields, setInputFields] = useState(payload);
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const validateData = (event) => {
    event.preventDefault();
    console.log("input fields", inputFields);
    const finalPayload = { school_uuid, funder_uuid, ...inputFields };
    console.log("finalPayload", finalPayload);
    dispatch(addLicenseToSchool({ body: finalPayload, token: token }));
  };

  return (
    <>
      <Button
        backgroundColor="#65a30d"
        width={{ base: "6rem", md: "10rem", lg: "14rem" }}
        color="white"
        borderRadius="3xl"
        type="submit"
        onClick={onOpen}
      >
        Adding 1/30 Schools
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={10}
        size="md"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Heading
              size="md"
              backgroundColor="#0081c8"
              height="4rem"
              color="white"
              p="5"
            >
              Adding 1 School
            </Heading>
            <br></br>
            <Flex>
              <Spacer />
            </Flex>
            <form onSubmit={validateData}>
              <Grid gap="2" marginTop="2" p="5">
                {fields?.map((item, index) => {
                  return (
                    <GridItem colSpan="1">
                      {item.inputType === "date" && (
                        <Box>
                          <Text mb="2" textStyle={"textHead"}>
                            {item.label}
                          </Text>
                          <Input
                            type="date"
                            border="0px"
                            bg="bg.100"
                            name={item?.name}
                            // value={inputFields[item?.name]?.split("T")[0]}
                            onChange={handleChange}
                            textStyle={"textHead"}
                          />
                        </Box>
                      )}
                    </GridItem>
                  );
                })}
              </Grid>

              <Center>
                <Flex minWidth="max-content" alignItems="center" padding="4">
                  <ButtonGroup gap="4">
                    <Button
                      color="black"
                      borderRadius="3xl"
                      backgroundColor="#EEEEEE"
                      width="7rem"
                      onClick={onClose}
                    >
                      Cancel
                    </Button>

                    <Button
                      color="#ffffff"
                      className="rounded-3xl"
                      backgroundColor="#65a30d"
                      borderRadius="3xl"
                      width="7rem"
                      type="submit"
                    >
                      Save
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Center>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddingSchoolDatetime;
