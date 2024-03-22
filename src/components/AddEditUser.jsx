import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AddEditUserBasicInfo from "./AddEditUserBasicInfo";
// import ManageUserAssignments from "./ManageUserAssignments";
import NegativeButton from "./NegativeButton";
import PositiveButton from "./PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import ManageUserAssignments from "../features/DistrictAdmin/DataManagement/ManageUsers/ManageUserAssignments";
import { getCreateSchoolAdmin } from "../features/authentication/components/schoolAdmin/schoolAdminSlice";

const AddEditUser = () => {
  const location = useLocation();
  const userData = location.state.userData;
  const { title, userDetails, buttonsList } = userData;
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const districtForDistrictAdmin = useSelector(
    (state) => state?.districtAdmin?.getDistrictForDistrictAdminResponse
  );


  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);


  const addDistrictAdminResponse = useSelector((state) => state?.schoolAdmin?.CreateSchoolAdmin)


  console.log(addDistrictAdminResponse, "addDistrictAdminResponse")

  const token = useSelector((state) => state?.profile?.token);



  const [addDistrictAdmin, setAddDistrictAdmin] = useState({
    first_name: "",
    last_name: "",
    middle_initial: "",
    user_name: "",
    email: "",
    password: "",
    login_status: true,
    teacher_role: false,
    school_admin_role: false,
    district_admin_role: true,
    email_1: "",
    email_2: "",
    phone: "",
    district_administrator_id: "",
    districts: [districtForDistrictAdmin?.uuid],
    sso_id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.elements, "event target elements");

    const finalObj = {
      districts: addDistrictAdmin?.districts,
      district_admin_role: true,
      teacher_role: addDistrictAdmin?.teacher_role,
      school_admin_role: addDistrictAdmin?.school_admin_role,

      created_by:userUUID,
    };







	const errorsObj = {}

    for (let i of event.target.elements) {
      if (i.name !== "reenterpassword" || i.name !== "search_name_input") {
        console.log(i.name, i.value, "iam i");

          finalObj[i.name] = i.value;
        

        

      }

      if(i.value === ""){
        errorsObj[i.name] = "*Required"

      }






    }

    delete finalObj[""]

    delete finalObj["reenterpassword"];
    delete finalObj["selectedRole_input"];

    delete errorsObj["reenterpassword"];
    delete errorsObj["selectedRole_input"];

   delete errorsObj[""];





   if(Object.keys(errorsObj)?.length > 0){


    console.log("form not submitted")



   }else{

    console.log("form submitted")




    const reqBody = finalObj

    console.log(reqBody, "reqBody")

     dispatch(getCreateSchoolAdmin({ token , reqBody}));



   }


    









   console.log(finalObj)


  };



  return (
    <>
    <Flex gap="4" direction="column">
      <Text textStyle={'textHead'}>{title}</Text>
      <Flex>
        {buttonsList.map((role, index) => {
          return (
            <Button
              key={index}
              color={activeTab == index ? "white" : "black-2"}
              bgColor={activeTab == index ? "primary" : "gray-1"}
              py="1"
              borderLeftRadius={index == 0 && "full"}
              borderRightRadius={index == buttonsList.length - 1 && "full"}
              borderRightWidth={index != buttonsList.length - 1 && "1px"}
              rounded="none"
              borderColor="gray"
              w="15em"
              onClick={() => setActiveTab(index)}
            >
              <Text textStyle="h6">{role}</Text>
            </Button>
          );
        })}
      </Flex>

      <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(3,1fr)" gap="4">
          {activeTab == 0 && (
            <AddEditUserBasicInfo
              activeTab={activeTab}
              userDetails={userDetails}
              addDistrictAdmin={addDistrictAdmin}
              setAddDistrictAdmin={setAddDistrictAdmin}
            />
          )}
        </Grid>

		{activeTab == 0 && (
          <Flex mt="8" justify="center" gap="8">
            <Box onClick = {() => navigate('/role/DistrictAdmin/district')}>
              <NegativeButton text={"Cancel"} type="button" />
            </Box>
            <Box >
              <PositiveButton text={"Save"} type="submit" />
            </Box>
          </Flex>
        )}
        {/* {activeTab == 1 && (
          <Flex mt="8" justify="center" gap="8">
            <Box>
              <NegativeButton text={"Cancel"} type="button"/>
            </Box>
            <Box>
              <PositiveButton text={"Save"} type="submit"/>
            </Box>
          </Flex>
        )} */}
      </form>
    </Flex>
    </>
  );
};

export default AddEditUser;
