import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaFileExport } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setManageUser } from "../../../store/slices/profileSlice";
import {
  getDeletedAdminOrHelpDeskData,
  getSuperAdmins,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import CustomDeleteIcon from "../customIcons/DeleteIcon.png";
import Ellipses from "../customIcons/Ellipse 277.svg";

const ManageUserAdminTable = () => {
  const assignSelectOptions = [
    {
      value: "active_login",
      label: "Active Login",
      placeholder: "Active Login",
    },
    {
      value: "deactivate_login",
      label: "Deactivate Login",
      placeholder: "Deactivate Login",
    },
    {
      value: "delete_user",
      label: "Delete User",
      placeholder: "Delete User",
    },
    {
      value: "merge_user",
      label: "Merge Users",
      placeholder: "Merge Users",
    },
  ];

  const tableHeaders = [
    "Administrator Name",
    "Administrator ID",
    "Login Status",
  ];

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = useSelector((state) => state?.profile?.token);
  const getUsersData = useSelector(
    (state) => state?.superAdmin?.ManageUsersResponse
  );

  const getDeletedAdminUserResponse = useSelector(
    (state) => state?.superAdmin?.deleteAdminOrHelpDesk
  );

  const getSuperAdminData = useSelector(
    (state) => state?.superAdmin?.superAdmins?.data?.response
  );

  const navigate = useNavigate();
  const [enablePopup, setEnablePopup] = useState(false);

  const userRole = useSelector((state) => state.profile.selectedRole);
  const [data, setData] = useState([]);

  const [checkedAdmin, setCheckedAdmin] = useState(false);

  const [enableDelete, setEnableDelete] = useState(false);

  const handleSuperAdminAddition = () => {
    dispatch(
      setManageUser({
        userType: "admin",
        formTitle: `Add Administrator`,
        previousPath: location.pathname,
      })
    );
    navigate("/role/SuperAdmin/AddUser", { state: { role: "admin" } });
  };

  useEffect(() => {
    dispatch(getSuperAdmins({ token: token }));
  }, []);

  useEffect(() => {
    setData(getSuperAdminData);
  }, [getSuperAdminData]);

  const RedirectToEditAdminUser = (adminInfo) => {
    console.log("Admin Information from Manage Users Component", adminInfo);
    dispatch(
      setManageUser({
        formTitle: `Edit Help Desk Administrator`,
        userType: "admin",
        previousPath: location.pathname,
      })
    );
    navigate(`/role/${userRole}/edit/admin/${adminInfo?.uuid}`);
  };

  console.log("superAdmins Data", getSuperAdminData);

  console.log("assignSelectedOptions", assignSelectOptions);

  const [deleteData, setDeleteData] = useState({
    uuid: "",
    action: "",
  });

  console.log("getUsersData == ", getUsersData);

  const handleCheckedItem = (checkedData) => {
    setCheckedAdmin(true);
    setDeleteData({ ...deleteData, uuid: checkedData.uuid });
  };

  const handleChange = (e) => {
    setDeleteData({ ...deleteData, action: e.target.value });
    const action = e.target.value;
    console.log("action in handleChange", action);
    if (action === "delete_user") {
      setEnableDelete(true);
      onOpen();
      // handleDelete(action);
    }
  };

  const handleRemove = () => {
    console.log("Data required for Delete", deleteData);
    dispatch(
      getDeletedAdminOrHelpDeskData({ uuid: deleteData?.uuid, token: token })
    );
    onClose();
  };

  // const handleDelete = () => {
  //   console.log("Data required for Delete", deleteData);
  //   dispatch(
  //     getDeletedAdminOrHelpDeskData({ uuid: deleteData.uuid, token: token })
  //   );
  // };

  console.log("getDeletedAdminUserResponse", getDeletedAdminUserResponse);

  useEffect(() => {
    console.log(
      "getDeletedAdminUserResponse in useEffect()",
      getDeletedAdminUserResponse?.data?.status
    );
    if (getDeletedAdminUserResponse?.data?.status === "success") {
      setCheckedAdmin(false);
      console.log(
        "getDeletedAdminUserResponse",
        getDeletedAdminUserResponse?.data?.status
      );
      setDeleteData({ ...deleteData, action: "" });

      setEnablePopup(true);
      dispatch(getSuperAdmins({ token: token }));
    }
  }, [getDeletedAdminUserResponse]);

  console.log("checked admin status", checkedAdmin);

  return (
    <>
      <Text textStyle="h3" marginTop="3">
        ADMIN
      </Text>
      <Flex>
        <Box>
          <InputGroup marginTop="4">
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input
              type="Search"
              autoFocus
              borderRadius="3xl"
              w="27rem"
              placeholder="Search By Alphabet, Names or UserID"
            />

            <Box maxW="100%">
              <Select
                onChange={(e) => handleChange(e)}
                bg="bg.100"
                borderColor="bg.100"
                marginLeft="5"
                borderRadius="3xl"
                name="action"
                value={deleteData.action}
              >
                {assignSelectOptions.map((option, i) => {
                  return <option value={option.value}>{option.label}</option>;
                })}
              </Select>
            </Box>
            <Spacer />
          </InputGroup>
        </Box>
        <Spacer />
        <Flex p="3">
          <Box>
            <Button
              color="black"
              marginRight="-0.5rem"
              onClick={handleSuperAdminAddition}
            >
              Add Admin
            </Button>
            <AddIcon
              backgroundColor="#0081c8"
              color="white"
              borderRadius="2rem"
              fontSize="1.3rem"
              p="0.3rem"
              marginRight="4"
            />
          </Box>
          <Spacer />
          <Flex marginRight="-1rem">
            <Box>
              <Link to="">
                <Button color="black" marginRight="-0.5rem">
                  Export Users
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
      </Flex>

      <TableContainer marginTop="10" className="SuperAdminTables">
        <Table variant="stripped" color="">
          <Thead>
            <Tr>
              {tableHeaders?.map((item, key) => (
                <Th>
                  <Text textStyle={"h4"}>{item}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {getSuperAdminData?.map((item, key) => (
              <Tr>
                <Td color="#1890ff">
                  <Checkbox
                    marginRight="2"
                    marginTop="3"
                    checked={checkedAdmin}
                    onChange={() => handleCheckedItem(item)}
                  />

                  <Button onClick={() => RedirectToEditAdminUser(item)}>
                    {item.user_name}
                  </Button>
                </Td>
                <Td>{}</Td>
                <Td>{item.login_status === "1" ? "Active" : "InActive"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {enableDelete === true ? (
        // <ManageUsersDeletePopup data={deleteData} isOpen="true"/>
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

export default ManageUserAdminTable;
