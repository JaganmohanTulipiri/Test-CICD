import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getSchoolAdmins,
  getUpdatedSchoolById,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import { setRemoveSchoolAdminFromSchool } from "../../authentication/components/schoolAdmin/schoolAdminSlice";
import Administrators from "./Administrators";
import AddSchoolAdminPopup from "./AdminsCreation/AddSchoolAdminPopup";
import SchoolDeletion from "./Deletion/SchoolDeletion";
import TeacherList from "./TeacherList";
import statesData from "../json_files/states.json";

const ShowUpdateSchoolDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editObjectFields = [
    {
      id: "1",
      label: "School Name*:",
      placeholder: "",
      name: "school_name",
      inputType: "text",
    },
    {
      id: "2",
      label: "School ID*:",
      placeholder: "",
      name: "school_id",
      inputType: "text",
    },
    {
      id: "3",
      label: "Local Identifier:",
      placeholder: "",
      name: "local_identifier",
      inputType: "text",
    },
    {
      id: "4",
      label: "SSO Id*:",
      placeholder: "",
      name: "sso_id",
      inputType: "text",
    },
    {
      id: "5",
      label: "Address 1:",
      placeholder: "",
      name: "address_1",
      inputType: "text",
    },
    {
      id: "6",
      label: "Address 2:",
      placeholder: "",
      name: "address_2",
      inputType: "text",
    },

    {
      id: "7",
      label: "City:",
      placeholder: "",
      name: "city",
      inputType: "text",
    },
    {
      id: "8",
      label: "State:",
      placeholder: "",
      name: "state",
      inputType: "select",
      options: statesData.states,
    },
    {
      id: "9",
      label: "Zip Code:",
      placeholder: "",
      name: "zipcode",
      inputType: "text",
    },

    {
      id: "10",
      label: "Phone 1:",
      placeholder: "",
      name: "phone1",
      inputType: "text",
    },
    {
      id: "11",
      label: "Phone 2:",
      placeholder: "",
      name: "phone2",
      inputType: "text",
    },
    {
      id: "12",
      label: "Email:",
      placeholder: "",
      name: "email",
      inputType: "text",
    },
    { id: "13", label: "Administrators" },
  ];

  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const getSchoolDataBySchoolID = useSelector(
    (state) => state?.superAdmin?.schoolBySchoolId
  );
  const removeSchoolAdminFromSchoolDeleteResponse = useSelector(
    (state) => state?.schoolAdmin?.removeSchoolAdminFromSchool
  );

  const schoolHeader = getSchoolDataBySchoolID?.school_name;

  const [schoolData, setSchoolData] = useState({
    school_name: "",
    school_id: "",
    mrd_id: "",
    local_identifier: "",
    sso_id: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    phone_1: "",
    phone_2: "",
  });
  const [enableSave, setEnableSave] = useState(true);

  const handleChange = (e) => {
    setEnableSave(false);
    setSchoolData({
      ...schoolData,
      [e.target.name]: e.target.value,
      updated_by: loginResponse?.response?.uuid,
    });
  };

  const schoolId = getSchoolDataBySchoolID?.uuid;

  const validateData = (event) => {
    event.preventDefault();
    dispatch(getUpdatedSchoolById({ body: schoolData, token: token }));
  };
  const handleCancel = () => {
    navigate(`/role/${selectedRole}/Districts/DistrictDetails`);
  };

  useEffect(() => {
    dispatch(setRemoveSchoolAdminFromSchool(null));
    dispatch(getSchoolAdmins({ schoolId: schoolId, token: token }));
  }, [getSchoolDataBySchoolID, removeSchoolAdminFromSchoolDeleteResponse]);

  useEffect(() => {
    setSchoolData(getSchoolDataBySchoolID);
  }, [getSchoolDataBySchoolID]);

  return (
    <div className="example">
      <Flex marginRight="2">
        <Box>
          <Text textStyle="h1">{schoolHeader}</Text>
        </Box>
        <Spacer />

        {userRole !== "stateAdmin" && (
          <Box>
            <SchoolDeletion
              card="removeSchool"
              id={schoolId}
              updated_by={loginResponse?.response?.uuid}
              updater_role={userRole}
            />
          </Box>
        )}

        <Box marginLeft="7">
          <Box>
            <AddSchoolAdminPopup schoolData={schoolData} />
          </Box>
        </Box>
      </Flex>

      <form onSubmit={validateData}>
        <Grid templateColumns="repeat(3, 1fr)" gap="6" marginTop="5">
          {editObjectFields?.map((item, index) => {
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
                      value={schoolData[item?.name]}
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
                      value={schoolData[item?.name]}
                      onChange={handleChange}
                    >
                      <option value="all">All</option>
                      {item.options?.map((item, key) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Select>
                  </Box>
                )}
                {item.id === "13" && (
                  <>
                    <Box>
                      <Administrators adminRole="schoolAdmin" />
                    </Box>
                  </>
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
              <Button
                color="black"
                borderRadius="3xl"
                backgroundColor="#EEEEEE"
                width="7rem"
                onClick={handleCancel}
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
                isDisabled={enableSave}
              >
                Save
              </Button>
            </ButtonGroup>
          </Flex>
        </Center>
      </form>

      <Divider borderColor="gray" marginTop="4" />
      <TeacherList schoolId={schoolData?.uuid} />
    </div>
  );
};

export default ShowUpdateSchoolDetails;
