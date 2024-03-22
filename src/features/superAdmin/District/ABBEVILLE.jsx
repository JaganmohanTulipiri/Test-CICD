import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserData, setManageUser } from "../../../store/slices/profileSlice";
import {
  getDistrictsAdminById,
  getTeachersAndSchoolsByDistrict,
  getUpdateDistrict,
  setDeletedAdminUser,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

import ParticipatingSchools from "./ParticipatingSchools";
import statesData from "../json_files/states.json";
import AddDistrictAdminPopup from "./AdminsCreation/AddDistrictAdminPopup";
import DistrictDeletion from "./Deletion/DistrictDeletion";
import DistrictAdminDeletion from "./Deletion/DistrictAdminDeletion";

const ABBEVILLE = () => {
  // const data = [
  //   "Jannu, srikant",
  //   "Townsend, Andy",
  //   "Basu Raj",
  //   "Chattapadya Sandipan",
  //   "Sahu Suvadeep",
  // ];

  const navigate = useNavigate();
  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);
  const districtInformation = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict
  );

  const getAdminUserAPIResponse = useSelector(
    (state) => state?.superAdmin?.addAdminUser
  );

  const TeachersAndSchoolsResponse = useSelector(
    (state) => state?.superAdmin?.TeachersAndSchoolsByDistricts
  );

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

  // const [districtData, setDistrictData] = useState(districtInformation);

  const [adminData, setAdminData] = useState([]);

  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );

  console.log("District Information======", districtInformation);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const districtHeader = districtInformation?.district_name;

  console.log("======DistrictName Header======", districtHeader);

  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const [enableSave, setEnableSave] = useState(true);

  const updateResponse = useSelector(
    (state) => state?.superAdmin?.updateDistrict
  );
  const getUpdatedAdminDetails = useSelector(
    (state) => state?.superAdmin?.updateAdminUsersResponse
  );

  const districtAdmin = useSelector(
    (state) => state?.superAdmin?.getAdminByDistrictResponse
  );

  console.log("districtAdmins", districtAdmin);

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

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isDeleteAdminClicked, setIsDeleteAdminClicked] = useState(false);

  const [isDeleteSucessModalOpen, setIsDeleteSucessModalOpen] = useState(false);
  const [isRemoveClicked, setIsRemovedClicked] = useState(true);

  const districtId = distrcitIDForDistrict;

  console.log(districtId, "iam  districtId");

  useEffect(() => {
    console.log(
      "districtInformation in ABBEVILLE Component===================",
      districtInformation
    );
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
  }, [getAdminUserAPIResponse]);

  useEffect(() => {
    setAdminData(districtsAdminResponse);
  }, [districtsAdminResponse]);

  useEffect(() => {
    dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
  }, [adminDeletionResponse]);

  useEffect(() => {
    dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
  }, [getUpdatedAdminDetails]);

  useEffect(() => {
    dispatch(getDistrictsAdminById({ districtId: districtId, token: token }));
  }, [assignAdminResponse]);

  console.log("=====districtsAdminResponse==========", districtsAdminResponse);
  const handleChange = (e) => {
    setEnableSave(false);
    setDistrictData({
      ...districtData,
      [e.target.name]: e.target.value,
      updater_role: userRole[0],
      updated_by: loginResponse?.response?.uuid,
    });
  };

  const uuid = districtData?.uuid;

  useEffect(() => {
    console.log("in AddDistrictAdminPopup================== useEffect");
    console.log("districtIDForDistrict========", distrcitIDForDistrict);
    dispatch(
      getTeachersAndSchoolsByDistrict({
        districtId: distrcitIDForDistrict,
        token: token,
      })
    );
  }, []);

  const handleCancel = () => {
    navigate("/role/SuperAdmin/Districts/DistrictLookup");
  };
  const handleEdit = (adminInfo) => {
    console.log("======handleEdit=========", adminInfo);

    dispatch(getUserData({ id: adminInfo?.uuid, token }));
    dispatch(
      setManageUser({
        formTitle: `Edit District Administrator`,
        userType: "districtAdmin",
        previousPath: location.pathname,
      })
    );
    navigate(`/role/${userRole}/edit/districtAdmin/${adminInfo?.uuid}`);
  };

  const validateData = () => {
    console.log("=====validate Data function========", districtData);
    try {
      dispatch(getUpdateDistrict({ body: districtData, token }));
      console.log("District Data=========", updateResponse);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("states data====", statesData?.states);
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

      <Flex marginTop="2rem">
        <Box flex="1">
          <Text className="color-black mr-20">District Name*:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="district_name"
            value={districtData?.district_name}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Internal ID*:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="internal_id"
            value={districtData?.internal_id}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">MDR ID*:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="mrd_id"
            value={districtData?.mrd_id}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">District Identifier:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="local_identifier"
            value={districtData?.local_identifier}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">SSO ID:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="sso_id"
            value={districtData?.sso_id}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">District SSO ID:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="district_sso_id"
            value={districtData?.district_sso_id}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Email:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="email"
            value={districtData?.email}
            onChange={handleChange}
          />
        </Box>

        <Box flex="1">
          <Text className="color-black mr-20">Address 1:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="address_1"
            value={districtData?.address_1}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Address 2:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="address_2"
            value={districtData?.address_2}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">City:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="city"
            value={districtData?.city}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">State:</Text>
          {/* <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="state"
            value={districtData?.state}
            onChange={handleChange}
          /> */}
          <Select
            w="20rem"
            border="none"
            backgroundColor="#F5F9FF"
            marginBottom="3"
            name="state"
            value={districtData?.state}
            onChange={handleChange}
          >
            {statesData?.states?.map((item, key) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Select>
          <Text className="color-black mr-20">Zip Code:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="zipcode"
            value={districtData?.zipcode}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Phone 1:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="phone_1"
            value={districtData?.phone_1}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Phone 2:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="phone_2"
            value={districtData?.phone_2}
            onChange={handleChange}
          />
        </Box>

        <Box flex="1">
          <Text className="color-black mr-20">SSO User ID Property:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            w="20rem"
            border="none"
            name="sso_user_id_property"
            value={districtData?.sso_user_id_property}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">SSO Identifying Field:</Text>
          <Select
            placeholder="Select"
            autoFocus
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
            name="identity_field"
            value={districtData?.sso_identifying_field}
            onChange={handleChange}
          >
            <option value="option1">Inherit from SSO Configuration</option>
            <option value="option1">Inherit from SSO Configuration</option>
            <option value="option1">Inherit from SSO Configuration</option>
          </Select>

          <Text className="color-black mr-20 mt-7">Expiry Date*:</Text>
          <Input
            placeholder="Select Date and Time"
            type="date"
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
            name="expiryDate"
            value={districtData?.expiryDate}
            onChange={handleChange}
          />

          <Text marginTop="2rem">Administrators</Text>
          {districtsAdminResponse?.length > 0 &&
            districtsAdminResponse?.map((item, key) => (
              <Flex>
                <Box>
                  <Text marginTop={2}>
                    {item.first_name},{item.last_name}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Button onClick={() => handleEdit(item)}>Edit</Button>
                  <EditIcon marginLeft="-3" />
                </Box>
                <Box
                  onClick={() => {
                    setIsDeleteAdminClicked(true);
                    // dispatch(setDeletedAdminUser(null));
                  }}
                >
                  <Box>
                    <DistrictAdminDeletion
                      card="removeDistrictAdmin"
                      districtId={districtId}
                      updated_by={loginResponse?.response?.uuid}
                      updater_role={userRole}
                      admin_uuid={item.uuid}
                    />
                  </Box>
                </Box>
              </Flex>
            ))}
        </Box>
      </Flex>
      <Center h="7rem">
        <Flex
          minWidth="max-content"
          alignItems="center"
          className="mt-3 ml-3 gap"
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
              color="white"
              borderRadius="3xl"
              backgroundColor="#65a30d"
              width="7rem"
              isDisabled={enableSave}
              onClick={validateData}
            >
              Save
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
      <Divider borderColor="gray" />
      <ParticipatingSchools districtId={state?.data?.uuid} />
    </div>
  );
};

export default ABBEVILLE;
