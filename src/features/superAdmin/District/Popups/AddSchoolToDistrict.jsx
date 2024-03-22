import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPreviousPath } from "../../../../store/slices/profileSlice";
import { getSchool } from "../../../../store/slices/superAdminSlice/superAdminSlice";
import { validateFormData } from "../../../../Utilities/FormValidation";
import statesData from "../../json_files/states.json";

const AddSchoolToDistrict = (props) => {
  console.log("stateData in AddSchoolToDistrict", statesData);

  const districtID = props.DistrictID;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();

  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );
  const created_by = useSelector((state) => state?.profile?.userRole[0]);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const schoolResponse = useSelector((state) => state?.superAdmin?.addSchool);

  const [formData, setFormData] = useState({
    school_name: "",
  });
  const [errors, setErrors] = useState({});

  const schoolAdditionFields = [
    {
      id: "1",
      label: "Entity Name*:",
      placeholder: "",
      name: "school_name",
      inputType: "text",
    },
    {
      id: "2",
      label: "Local Identifier:",
      placeholder: "",
      name: "local_identifier",
      inputType: "text",
    },

    {
      id: "3",
      label: "Email:",
      placeholder: "",
      name: "email",
      inputType: "text",
    },

    {
      id: "4",
      label: "Phone 1:",
      placeholder: "",
      name: "phone1",
      inputType: "text",
    },
    {
      id: "5",
      label: "Phone 2:",
      placeholder: "",
      name: "phone2",
      inputType: "text",
    },
    {
      id: "6",
      label: "Address 1:",
      placeholder: "",
      name: "address_1",
      inputType: "text",
    },
    {
      id: "7",
      label: "Address 2:",
      placeholder: "",
      name: "address_2",
      inputType: "text",
    },
    {
      id: "8",
      label: "SSO ID:",
      placeholder: "",
      name: "sso_id",
      inputType: "text",
    },
    {
      id: "9",
      label: "City:",
      placeholder: "",
      name: "city",
      inputType: "text",
    },
    {
      id: "10",
      label: "State:",
      placeholder: "",
      name: "state",
      inputType: "select",
      options: statesData.states,
    },
    {
      id: "11",
      label: "Zip Code:",
      placeholder: "",
      name: "zipcode",
      inputType: "text",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSchool = () => {
    dispatch(setPreviousPath(location.pathname));
  };

  const validateData = (event) => {
    console.log("validate data");
    event.preventDefault();
    const { email, local_identifier, phone1, phone2, address_1, address_2,sso_id, city, state, zipcode, ...payload } = formData;
    let errorObj = validateFormData(payload);
    setErrors({ ...errorObj });

    const finalObj = {
      ...formData,
      district_uuid: distrcitIDForDistrict,
      created_by: created_by,
    };

    dispatch(getSchool({ body: finalObj }));
  };

  useEffect(() => {
    if (schoolResponse && schoolResponse?.data?.code === 200) {
      onClose();
    }
  }, [schoolResponse]);

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        <Button color="black" onClick={handleAddSchool}>
          Add School
        </Button>
      </Link>
      <AddIcon
        marginLeft="-0.4rem"
        backgroundColor="#0081c8"
        color="white"
        borderRadius="2rem"
        fontSize="1.1rem"
        p="0.3rem"
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="10">
            <Text size="md" color="#0081c8" textStyle="h4">
              Add School to District Name
            </Text>
            <Flex>
              <Spacer />
            </Flex>

            <form onSubmit={validateData}>
              <Grid templateColumns="repeat(2, 1fr)" gap="8" marginTop="5">
                {schoolAdditionFields?.map((item, index) => {
                  return (
                    <GridItem colSpan="1">
                      {item.inputType === "text" && (
                        <Box>
                          <Text mb="2">{item.label}</Text>
                          <Input
                            type="text"
                            border="0px"
                            bg="bg.100"
                            name={item?.name}
                            value={formData[item?.name]}
                            onChange={handleChange}
                          />
                          {errors?.[item?.name] && (
                            <Text color="red">{errors?.[item?.name]}</Text>
                          )}
                        </Box>
                      )}
                      {item.inputType === "select" && (
                        <Box>
                          <Text mb="2">{item.label}</Text>
                          <Select
                            type="select"
                            border="0px"
                            bg="bg.100"
                            name={item?.name}
                            value={formData[item?.name]}
                            onChange={handleChange}
                          >
                            <option value="all">All</option>
                            {item.options?.map((item, key) => (
                              <option value={item.value}>{item.label}</option>
                            ))}
                          </Select>
                          {errors?.[item?.name] && (
                            <Text color="red">{errors?.[item?.name]}</Text>
                          )}
                        </Box>
                      )}
                    </GridItem>
                  );
                })}
              </Grid>

              <Center>
                <Flex
                  minWidth="max-content"
                  alignItems="center"
                  className="mt-20 gap"
                >
                  <ButtonGroup gap="4">
                    <Link to={`/role/${selectedRole}/Districts/DistrictLookup`}>
                      <Button
                        color="black"
                        borderRadius="3xl"
                        backgroundColor="#EEEEEE"
                        width="7rem"
                      >
                        Cancel
                      </Button>
                    </Link>
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

export default AddSchoolToDistrict;
