import { EditIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getUserData,
  setManageUser,
  setPreviousPath,
} from "../../../store/slices/profileSlice";
import DistrictAdminDeletion from "./Deletion/DistrictAdminDeletion";

const Administrators = (props) => {
  const adminRole = props.adminRole;
  console.log("In Administrators component", props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const districtsAdminResponse = useSelector(
    (state) =>
      state?.superAdmin?.getAdminByDistrictResponse?.data?.response
        ?.AdminDistrict
  );

  const getSchoolAdminsResponse = useSelector(
    (state) => state?.superAdmin?.schoolAdminsResponse
  );

  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );
  const token = useSelector((state) => state?.profile?.token);

  const districtId = distrcitIDForDistrict;
  const loginResponse = useSelector((state) => state?.profile?.user);
  const userRole = useSelector((state) => state.profile.selectedRole);

  const handleEdit = (adminInfo) => {
    console.log("======handleEdit=========", adminInfo);

    dispatch(getUserData({ id: adminInfo?.uuid, token }));

    if (adminRole === "districtAdmin") {
      dispatch(
        setManageUser({
          formTitle: `Edit District Administrator`,
          userType: "districtAdmin",
          // previousPath: location.pathname,
        })
      );
      navigate(`/role/${userRole}/edit/districtAdmin/${adminInfo?.uuid}`);
      dispatch(setPreviousPath(location.pathname));
    } else {
      dispatch(
        setManageUser({
          formTitle: `Edit School Administrator`,
          userType: "schoolAdmin",
          // previousPath: location.pathname,
        })
      );
      navigate(`/role/${userRole}/edit/districtAdmin/${adminInfo?.uuid}`);
      dispatch(setPreviousPath(location.pathname));
    }
  };

  return (
    <div>
      {adminRole === "districtAdmin"
        ? districtsAdminResponse?.length > 0 &&
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
          ))
        : getSchoolAdminsResponse?.length > 0 ?
          getSchoolAdminsResponse?.map((item, key) => (
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
                }}
              >
                <Box>
                  <DistrictAdminDeletion
                    card="removeSchoolAdmin"
                    districtId={districtId}
                    updated_by={loginResponse?.response?.uuid}
                    updater_role={userRole}
                    admin_uuid={item.uuid}
                  />
                </Box>
              </Box>
            </Flex>
          )) : <Text>No Administrators Data Found</Text>}
    </div>
  );
};

export default Administrators;
