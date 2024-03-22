import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getUserData,
  setManageUser,
  setPreviousPath,
} from "../../../store/slices/profileSlice";
import {
  getDistrictsAdminById,
  getTeachersAndSchoolsByDistrict,
  getUpdateDistrict,
  setDeletedAdminUser,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import DistrictDeletion from "./Deletion/DistrictDeletion";
import Administrators from "./Administrators";
import AddDistrictAdminPopup from "./AdminsCreation/AddDistrictAdminPopup";
import ParticipatingSchools from "./ParticipatingSchools";

const ShowUpdateDistrict = () => {
  const editObjectFields = [
    {
      id: "1",
      label: "District Name*:",
      placeholder: "",
      name: "district_name",
      inputType: "text",
    },
    {
      id: "2",
      label: "Internal ID*:",
      placeholder: "",
      name: "internal_id",
      inputType: "text",
    },
    {
      id: "3",
      label: "MDR ID*:",
      placeholder: "",
      name: "mdr_id",
      inputType: "text",
    },
    {
      id: "4",
      label: "District Identifier*:",
      placeholder: "",
      name: "district_identifier",
      inputType: "text",
    },
    {
      id: "5",
      label: "SSO ID*:",
      placeholder: "",
      name: "sso_id",
      inputType: "text",
    },
    {
      id: "6",
      label: "District SSO ID*:",
      placeholder: "",
      name: "district_sso_id",
      inputType: "text",
    },
    {
      id: "7",
      label: "Email:",
      placeholder: "",
      name: "email",
      inputType: "text",
    },
    {
      id: "8",
      label: "Address 1:",
      placeholder: "",
      name: "address1",
      inputType: "text",
    },
    {
      id: "9",
      label: "Address 2:",
      placeholder: "",
      name: "address2",
      inputType: "text",
    },
    {
      id: "10",
      label: "City:",
      placeholder: "",
      name: "city",
      inputType: "text",
    },
    {
      id: "11",
      label: "State:",
      placeholder: "",
      name: "state",
      inputType: "text",
    },
    {
      id: "12",
      label: "Zip Code:",
      placeholder: "",
      name: "zipcode",
      inputType: "text",
    },

    {
      id: "13",
      label: "Phone 1:",
      placeholder: "",
      name: "phone1",
      inputType: "text",
    },
    {
      id: "14",
      label: "Phone 2:",
      placeholder: "",
      name: "phone2",
      inputType: "text",
    },
    {
      id: "15",
      label: "SSO User ID Property:",
      placeholder: "",
      name: "sso_uder_id_property",
      inputType: "text",
    },
    {
      id: "16",
      label: "SSO Identifying Field:",
      placeholder: "",
      name: "sso_identifying_field",
      inputType: "text",
    },
    {
      id: "17",
      label: "Expiry Date:",
      placeholder: "",
      name: "expiry_date",
      inputType: "date",
    },
    { id: "18", label: "Administrators" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const districtInformation = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict
  );

  const getAdminUserAPIResponse = useSelector(
    (state) => state?.superAdmin?.addAdminUser
  );

  const TeachersAndSchoolsResponse = useSelector(
    (state) => state?.superAdmin?.TeachersAndSchoolsByDistricts
  );

  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );

  const updateResponse = useSelector(
    (state) => state?.superAdmin?.updateDistrict
  );
  const getUpdatedAdminDetails = useSelector(
    (state) => state?.superAdmin?.updateAdminUsersResponse
  );

  const districtAdmin = useSelector(
    (state) => state?.superAdmin?.getAdminByDistrictResponse
  );

  const districtsAdminResponse = useSelector(
    (state) =>
      state?.superAdmin?.getAdminByDistrictResponse?.data?.response
        ?.AdminDistrict
  );
  const assignAdminResponse = useSelector(
    (state) => state?.superAdmin?.assignAdminToDistrictResponse
  );

  const adminDeletionResponse = useSelector(
    (state) => state.superAdmin?.deleteAdminUserResponse
  );

  const manageUsersAddUsersResponse = useSelector(
    (state) => state?.schoolAdmin?.addUsersResponse
  );

  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);

  const [districtData, setDistrictData] = useState({
    district_name: "",
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
    expiryDate: "",
    internal_id: "",
    district_sso_id: "",
    sso_user_id_property: "",
    sso_identifying_field: "",
    updater_role: "",
    updated_by: "",
    uuid: "",
  });

  const districtHeader = districtInformation?.district_name;

  const [enableSave, setEnableSave] = useState(true);

  const districtId = distrcitIDForDistrict;

  const handleChange = (e) => {
    setEnableSave(false);
    setDistrictData({
      ...districtData,
      [e.target.name]: e.target.value,
      updater_role: userRole[0],
      updated_by: loginResponse?.response?.uuid,
    });
  };

  const validateData = (event) => {
    event.preventDefault();
    dispatch(getUpdateDistrict({ body: districtData, token }));
  };

  const handleCancel = () => {
    navigate(`/role/${selectedRole}/Districts/DistrictLookup`);
  };

  useEffect(() => {
    dispatch(
      getTeachersAndSchoolsByDistrict({
        districtId: distrcitIDForDistrict,
        token: token,
      })
    );
  }, []);

  useEffect(() => {
    setDistrictData(districtInformation);
    dispatch(setDeletedAdminUser(null));
  }, [districtInformation]);

  useEffect(() => {
    dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
  }, []);

  console.log(manageUsersAddUsersResponse, "from super adminnnnnnn");

  useEffect(() => {
    if (manageUsersAddUsersResponse?.data?.code === 200) {
      dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
    }
  }, [manageUsersAddUsersResponse]);

  useEffect(() => {
    dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
  }, [
    getAdminUserAPIResponse,
    adminDeletionResponse,
    getUpdatedAdminDetails,
    assignAdminResponse,
  ]);

  return (
    <div className="example">
      <Flex>
        <Box>
          <Text textStyle="h1">{districtHeader}</Text>
        </Box>
        <Spacer />

        {userRole !== "stateAdmin" && (
          <DistrictDeletion
            card="removeDistrict"
            districtId={districtId}
            updated_by={loginResponse?.response?.uuid}
            updater_role={userRole}
          />
        )}

        <Box>
          <Box>
            <AddDistrictAdminPopup
              districtName={districtInformation?.district_name}
              districtId={districtInformation?.uuid}
            />
          </Box>
        </Box>
      </Flex>

      <form onSubmit={validateData}>
        <Grid templateColumns="repeat(3, 1fr)" gap="6" marginTop="5">
          {editObjectFields?.map((item, index) => {
            return (
              <GridItem colSpan="1">
                <Box>
                  <Text mb="2">{item.label}</Text>
                  {item.id === "18" ? (
                    <Administrators adminRole="districtAdmin" />
                  ) : (
                    <Input
                      type="text"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={districtData[item?.name]}
                      onChange={handleChange}
                    />
                  )}
                </Box>
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

      <ParticipatingSchools districtId={state?.data?.uuid} />
    </div>
  );
};

export default ShowUpdateDistrict;
