import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLicenseById,
  setFunderId,
  setFunderTypeID,
  updateLicenseById,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import { validateFormData } from "../../../Utilities/FormValidation";
import CustomDeleteIcon from "../customIcons/DeleteIcon.png";
import Ellipses from "../customIcons/Ellipse 277.svg";

const UpdateLicense = (props) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = useSelector((state) => state?.profile?.token);
  const fundersList = useSelector(
    (state) => state?.superAdmin?.fundersList?.data?.response
  );
  const licenseByIdData = useSelector(
    (state) => state?.superAdmin?.licenseData?.data?.response
  );

  const CreateLicense = {
    title: "CREATE LICENSE",

    LicenseFields: [
      { label: "ID", name: "id", inputType: "text", isDisabled: "true" },
      {
        label: "Funder Name*",
        name: "funder_name",
        inputType: "select",
        placeholder: "Start Typing funder name",
        isrequired: "true",
        options:
          fundersList &&
          Object.entries(fundersList)?.map(
            ([key, value]) =>
              ({
                label: value.type,
                value: value.uuid,
              } || {})
          ),
        isDisabled: "true",
      },

      {
        label: "Start Date*",
        name: "start_date",
        inputType: "date",
        isrequired: "true",
      },
      {
        label: "School Limit*",
        name: "school_limit",
        inputType: "text",
        placeholder: "",
        isrequired: "true",
      },
      {
        label: "End Date*",
        name: "end_date",
        inputType: "date",
        isrequired: "true",
      },
    ],
  };

  const licensesPayloadFields = {
    funder_name: "",
    start_date: "",
    end_date: "",
    school_limit: "",
    notes: "",
  };

  console.log("license by id data", licenseByIdData);

  const updateLicenseByIdFields = {
    end_date: licenseByIdData?.end_date?.split("T")[0],
    start_date: licenseByIdData?.start_date?.split("T")[0],
    funder_uuid: licenseByIdData?.funder_name,
    school_limit: licenseByIdData?.school_limit,
    status: licenseByIdData?.status,
    id: licenseByIdData?.license_id,
    uuid: licenseByIdData?.uuid,
    notes: licenseByIdData?.notes,
  };

  const [inputFields, setInputFields] = useState({});
  const [errors, setErrors] = useState({});
  const [enableDelete, setEnableDelete] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "funder_name") {
      // console.log("e.target.valuee.target.valuee.target.valuee.target.valuee.target.valuee.target.value",e.target.value);
      // dispatch(setFunderTypeID(e.target.value.split(".")[1]));
      setInputFields({
        ...inputFields,
        funder_name: e.target.value.split(".")[0],
        funder_type: e.target.value.split(".")[1],
      });
    } else {
      setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }
  };

  const validateData = (event) => {
    console.log("inputfields", inputFields);
    const { id, uuid, funder_uuid, notes, ...payload } = inputFields;
    let errors = validateFormData(payload);
    console.log("errors from formdata", errors);
    const finalPayload = { uuid, notes, ...payload };
    console.log("final payload", finalPayload);
    dispatch(updateLicenseById({ body: finalPayload, token: token }));
  };

  const handleLicenseDelete = () => {
    console.log("handleDelete");
    setEnableDelete(true);
  };

  const handleRemove = () => {
    dispatch(deleteLicenseById());
  };

  useEffect(() => {
    setInputFields(updateLicenseByIdFields);
  }, [licenseByIdData]);

  console.log("enable delete", enableDelete);

  return (
    <>
      <Flex>
        <Box>
          <Flex>
            <Box>
              <Text textStyle="h1" marginRight="2">
                {props.title}
              </Text>
            </Box>
            <Box>
              <Text textStyle="h4" marginTop="1" color="#0081C8">
                ({props.subtitle})
              </Text>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box onClick={handleLicenseDelete}>
          <Button onClick={onOpen}>Delete</Button>
          <DeleteIcon marginBottom="1" color="red" />
        </Box>
      </Flex>
      <Divider borderColor="gray" />

      <form>
        <Grid templateColumns="repeat(3, 1fr)" gap="6" marginTop="5">
          {CreateLicense.LicenseFields?.map((item, index) => {
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
                      value={inputFields[item?.name]}
                      onChange={handleChange}
                      isDisabled={item.isDisabled}
                    />
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}
                {item?.inputType === "select" && (
                  <Box>
                    <Text mb="2">{item.label}</Text>
                    <Select
                      type="select"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={inputFields[item?.name]}
                      onChange={handleChange}
                      defaultValue="all"
                      isDisabled={item?.isDisabled}
                    >
                      <option value="all">All</option>
                      {item.options?.map((item, key) => (
                        <option value={item.value + "." + item.label}>
                          {item?.label || "N/A"}
                        </option>
                      ))}
                    </Select>
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}
                {item.inputType === "date" && (
                  <Box>
                    <Text mb="2">{item.label}</Text>

                    <Input
                      type="date"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={inputFields[item?.name]}
                      onChange={handleChange}
                    />

                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}
              </GridItem>
            );
          })}
        </Grid>

        <Box marginTop="6">
          <Textarea
            backgroundColor="#F5F9FF"
            h="10rem"
            w="80vw"
            border="none"
            name="notes"
            onChange={handleChange}
            value={inputFields?.notes}
          ></Textarea>
        </Box>

        <Center>
          <Flex minWidth="max-content" alignItems="center" padding="4">
            <Button
              backgroundColor="#54B435"
              color="white"
              borderRadius="3xl"
              onClick={validateData}
            >
              Update License
            </Button>
          </Flex>
        </Center>
      </form>

      <Divider borderColor="gray" />
      {enableDelete === true ? (
        <Modal isOpen={isOpen} onClose={onClose} borderRadius={10} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalBody p="0">
              <Flex>
                <Spacer />
              </Flex>
              <Stack spacing="2" p="4">
                <Box>
                  <Center>
                    <Image src={Ellipses} boxSize="6rem"></Image>
                  </Center>
                  <Center>
                    <Image src={CustomDeleteIcon} marginTop={-20}></Image>
                  </Center>
                  <Center marginTop="6">
                    <Text alignContent="space-around" textStyle="h4">
                      Do you want to Delete?
                    </Text>
                  </Center>
                </Box>
                <Center>
                  <ButtonGroup gap="4" p="3" marginTop={4}>
                    <Button onClick={onClose}>Cancel</Button>

                    <Button
                      backgroundColor="#FF4040"
                      color="white"
                      onClick={() => {
                        handleRemove();
                      }}
                    >
                      Remove
                    </Button>
                  </ButtonGroup>
                </Center>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default UpdateLicense;
