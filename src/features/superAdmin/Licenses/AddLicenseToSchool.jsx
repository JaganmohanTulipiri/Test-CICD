import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import collapasableIcon from "../customIcons/Polygon3.svg";
import collapasableIcon1 from "../customIcons/Polygon7.svg";
import AddSchoolToDistrict from "../District/Popups/AddSchoolToDistrict";
import AddingSchoolDatetime from "../Popups/AddingSchoolDatetime";

const AddLicenseToSchool = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const funderId = useSelector((state) => state?.superAdmin?.funderId);
  const token = useSelector((state) => state?.profile?.token);
  const schoolsList = useSelector(
    (state) => state?.superAdmin?.schoolsToAddLicense?.data?.response
  );
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  console.log("funder ID", funderId);
  console.log("schools list", schoolsList);

  const tableHeaders = [
    "School",
    "District",
    "State",
    "Status",
    "Start Date",
    "End Date",
    "Delete",
  ];

  const [data, setData] = useState([]);
  const [isCollapseOpen, setIsCollapseOpen] = useState(true);
  const [selectedSchools, setSelectedSchools] = useState([]);

  const handleToggle = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const getCheckedValue = (schoolUUID) => {
    setSelectedSchools((selectedSchools) => [...selectedSchools, schoolUUID]);
  };
  useEffect(() => {
    setData(schoolsList);
  }, [schoolsList]);

  console.log("table data", data[0]?.district_name);
  return (
    <>
      <Box onClick={onOpen}>
        <Button marginRight="-3">Add School to License</Button>
        <AddIcon
          backgroundColor="#0081c8"
          color="white"
          borderRadius="2rem"
          fontSize="1.1rem"
          p="0.3rem"
        />
      </Box>

      <Box>
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p="5">
              <Text textStyle="h3">Add School To District Name</Text>
              <Flex marginTop="12">
                <Box color="white" borderRadius="3xl" backgroundColor="#65a30d">
                  <AddingSchoolDatetime schoolsList={selectedSchools} />
                </Box>
                <Spacer />
                <Box>
                  <AddSchoolToDistrict />
                </Box>
              </Flex>

              <Box marginTop="4">
                <TableContainer
                  p="4"
                  overflow="hidden"
                  className="SuperAdminTables"
                >
                  <Table>
                    <Tbody>
                      <Thead>
                        <Tr>
                          {tableHeaders.map((item, key) => (
                            <Th>
                              <Text textStyle="h6">{item}</Text>
                            </Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Flex marginTop="3">
                        <Box>
                          <IconButton
                            icon={
                              isCollapseOpen ? (
                                <Image src={collapasableIcon1} />
                              ) : (
                                <Image src={collapasableIcon} />
                              )
                            }
                            variant="ghost"
                            onClick={handleToggle}
                            aria-label={
                              isCollapseOpen ? "Hide data" : "Show data"
                            }
                          />
                        </Box>
                        <Box marginTop="2" marginLeft="-2">
                          <Text textStyle="h4">
                            District : {data[0]?.district_name}
                          </Text>
                        </Box>
                      </Flex>
                      <Divider className="mt-1" borderColor="gray" />
                      {data?.length > 0 &&
                        data?.map((item, index) => (
                          <Collapse in={!isCollapseOpen}>
                            {item?.schools?.map((school, index) => (
                              <Tr key={index}>
                                <Td>
                                  <Checkbox
                                    marginRight="2"
                                    onChange={() =>
                                      getCheckedValue(school?.uuid)
                                    }
                                  />
                                  {school.school_name}
                                </Td>
                                <Td>{item?.district_name}</Td>
                                <Td>NA</Td>
                                <Td>{school?.status}</Td>
                                <Td>{school?.license_start_date}</Td>
                                <Td>{school?.license_end_date}</Td>
                                <Td>
                                  <DeleteIcon
                                    color="red"
                                    cursor="pointer"
                                    // onClick={handleSchoolLicenseDeletion(
                                    //   item.schools?.map((key, value) => key.uuid)
                                    // )}
                                  />
                                </Td>
                              </Tr>
                            ))}
                          </Collapse>
                        ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default AddLicenseToSchool;
