import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Spacer,
  Text,
  Textarea
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  createLicenses,
  getFundersList
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import { validateFormData } from "../../../Utilities/FormValidation";

const CreateLicense = () => {
  const dispatch = useDispatch();

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
      {
        label: "Funder Name*",
        name: "funder_name",
        inputType: "select",
        placeholder: "Start Typing funder name",
        options:
          fundersList &&
          Object.entries(fundersList)?.map(
            ([key, value]) =>
              ({
                label: value.type,
                value: value.uuid,
              } || {})
          ),
      },

      {
        label: "Start Date*",
        name: "start_date",
        inputType: "date",
      },
      {
        label: "School Limit*",
        name: "school_limit",
        inputType: "text",
        placeholder: "",
      },

      {
        label: "Add New District/School",
        inputType: "link",
        to: "/role/SuperAdmin/Districts/AddNewDistrict",
      },
      {
        label: "End Date*",
        name: "end_date",
        inputType: "date",
      },
    ],
  };

  const licensesPayloadFields = {
    funder_name: "",
    start_date: "",
    end_date: "",
    school_limit: "",
  };

  const [inputFields, setInputFields] = useState(licensesPayloadFields);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log("handleChange function events", e.target.name, e.target.value);
    if (e.target.name === "funder_name") {
      console.log("funder value", e.target.value);
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
    console.log("validate data", inputFields);
    event.preventDefault();
    const { funder_type, ...payload } = inputFields;
    //console.log("payload for validation", payload);
    let errorObj = validateFormData(payload);
    setErrors({ ...errorObj });
    const finalPayload = {
      funder_type,
      ...inputFields,
    };
    //console.log("final payload", finalPayload);
    dispatch(createLicenses({ body: finalPayload, token: token }));
  };

  useEffect(() => {
    dispatch(getFundersList({ token: token }));
  }, []);

  const { title, LicenseFields } = CreateLicense;
  console.log("inputfields", inputFields);
  return (
    <div>
      <Flex>
        <Box>
          <Text textStyle="h4">{title}</Text>
        </Box>
        <Spacer />
      </Flex>
      <Divider marginTop="4" borderColor="gray" />
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
                      onChange={handleChange}
                    >
                      <option value="all">All</option>
                      {item.options?.map((item, key) => (
                        <option value={item.value + "." + item.label}>
                          {item.label}
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
                {item.inputType === "link" && (
                  <Box>
                    <Link to={item.to}>{item.label}</Link>
                  </Box>
                )}
                {item.inputType === "checkbox" && (
                  <Box>
                    <Text>{item.label}</Text>
                    <Flex marginLeft="3">
                      <Checkbox />
                      <Text marginLeft="2">{item.text}</Text>
                    </Flex>
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
          ></Textarea>
        </Box>

        <Center>
          <Flex
            minWidth="max-content"
            alignItems="center"
            className="mt-20 gap"
          >
            <Button
              backgroundColor="#54B435"
              color="white"
              borderRadius="3xl"
              onClick={validateData}
            >
              Create License
            </Button>
          </Flex>
        </Center>
      </form>
    </div>
  );
};

export default CreateLicense;
