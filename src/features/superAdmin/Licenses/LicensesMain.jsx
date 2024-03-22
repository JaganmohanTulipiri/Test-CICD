import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Spacer,
  Text,
  Radio,
  RadioGroup,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFileExport } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setPreviousPath } from "../../../store/slices/profileSlice";
import { getLicenseList } from "../../../store/slices/superAdminSlice/superAdminSlice";
import LicenseTable from "./LicenseTable";

const LicenseMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);

  const filterFields = [
    {
      id: "1",
      name: "funder_name",
      label: "Funder Name",
      inputType: "text",
      placeholder: "Enter Funder Name",
    },
    {
      id: "2",
      name: "funder_type",
      label: "Funder Type",
      inputType: "select",
      placeholder: "Enter Funder Type",
      options: [
        { value: "state", label: "State" },
        { value: "district", label: "District" },
        { value: "partner", label: "Partner" },
      ],
    },
    {
      id: "3",
      name: "district_name",
      label: "District Name",
      inputType: "text",
      placeholder: "Enter District Name",
    },
  ];

  const [filters, setFilters] = useState({
    funder_name: "",
    funder_type: "",
    district_name: "",
    login_status: "",
  });

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name, e.target.value);
    if (e.target.name === "radio-:r9:") {
      setFilters({ ...filters, login_status: e.target.value });
    } else {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    }
  };

  console.log("filters", filters);
  const handleClear = () => {
    setFilters({
      ...filters,
      funder_name: "",
      funder_type: "",
      district_name: "",
      login_status: "",
    });
    dispatch(getLicenseList({ token: token }));
  };

  const validateData = (event) => {
    event.preventDefault();
    dispatch(getLicenseList({ body: filters, token: token }));
  };

  const licenseCreation = () => {
    navigate(`/role/${selectedRole}/Licenses/CreateNewLicense`);
    dispatch(setPreviousPath(location.pathname));
  };

  return (
    <>
      <div>
        <Flex>
          <Box>
            <Text textStyle="text">LICENSE</Text>
          </Box>
          <Spacer />
          <Box mt={{ base: "-10px", md: "0", lg: "0" }}>
            <Button color="black" onClick={licenseCreation}>
              <Text textStyle="text">Create New License</Text>
            </Button>
            <AddIcon
              marginLeft="-0.4rem"
              backgroundColor="#0081c8"
              color="white"
              marginBottom="0.1rem"
              borderRadius="2rem"
              fontSize="1.1rem"
              p={"0.3rem"}
            />
          </Box>
        </Flex>
        <Divider className="mt-1" borderColor="gray" />

        <form onSubmit={validateData}>
          <Grid templateColumns="repeat(3, 1fr)" gap="6" marginTop="5">
            {filterFields?.map((item, index) => {
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
                        placeholder={item.placeholder}
                        value={filters[item?.name]}
                        onChange={handleChange}
                      />
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
                        value={filters[item?.name]}
                        onChange={handleChange}
                      >
                        <option value="all">All</option>
                        {item.options?.map((item, key) => (
                          <option value={item.value}>{item.label}</option>
                        ))}
                      </Select>
                    </Box>
                  )}
                </GridItem>
              );
            })}
          </Grid>

          <Text mb="2" mt="10">
            Login Status
          </Text>
          <Box onChange={handleChange}>
          <RadioGroup defaultValue="1" onChange={handleChange}>
            <Stack>
              <Radio value="pending" name="login_status">Pending</Radio>
              <Radio value="active" name="login_status">Active</Radio>
              <Radio value="inactive" name="login_status">InActive</Radio>
            </Stack>
          </RadioGroup>
          </Box>
          <Center>
            <Flex minWidth="max-content" alignItems="center">
              <ButtonGroup gap={{ base: "1", md: "4", lg: "4" }}>
                <Button
                  color="black"
                  borderRadius="3xl"
                  backgroundColor="#EEEEEE"
                  type="button"
                  width={{ base: "6rem", md: "9rem", lg: "9rem" }}
                  onClick={handleClear}
                  textStyle={"textHead"}
                >
                  <Text textStyle={"textHead"}> Clear</Text>
                </Button>

                <Button
                  backgroundColor="#65a30d"
                  width={{ base: "6rem", md: "10rem", lg: "10rem" }}
                  color="white"
                  borderRadius="3xl"
                  type="submit"
                >
                  <Text textStyle={"textHead"}>Apply</Text>
                </Button>
              </ButtonGroup>
            </Flex>
          </Center>
        </form>
        <Divider borderColor="gray" mt="5" />
        <Flex p="3">
          <Box>
            <Text textStyle="h4">Districts</Text>
          </Box>
          <Spacer />
          <Flex marginRight="-1rem">
            <Box>
              <Link to="">
                <Button color="black" marginRight="-0.5rem">
                  Export License
                </Button>
              </Link>
            </Box>
            <Box marginTop="2">
              <FaFileExport
                marginLeft="-1.4rem"
                backgroundColor="#0081c8"
                borderRadius="2rem"
                fontSize="1.3rem"
                p="0.3rem"
                color="#1890ff"
              />
            </Box>
          </Flex>
        </Flex>
        <LicenseTable />
      </div>
    </>
  );
};

export default LicenseMain;
