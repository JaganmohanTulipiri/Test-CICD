import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  Table,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  TableContainer,
  Tbody,
  Thead,
  useDisclosure,
  Tr,
  Td,
  Th,
  Input,
  Text,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const AddNewLicenseContacts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const tableHeaders = ["First Name", "Last Name", "E-Mail", "role", "Delete"];
  const LicenseData = [
    {
      firstName: "Test Name",
      lastName: "Test Last Name",
      email: "testme@gmail.com",
      role: [
        "Select",
        "State Administrator",
        "District Administrator",
        "School Administrator",
      ],
    },
    {
      firstName: "Test Name",
      lastName: "Test Last Name",
      email: "testme@gmail.com",
      role: [
        "Select",
        "State Administrator",
        "District Administrator",
        "School Administrator",
      ],
    },
    {
      firstName: "Test Name",
      lastName: "Test Last Name",
      email: "testme@gmail.com",
      role: [
        "Select",
        "State Administrator",
        "District Administrator",
        "School Administrator",
      ],
    },
  ];
  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        <Button color="black">Add Contacts</Button>
        <AddIcon
                marginLeft="-0.7rem"
                backgroundColor="#0081c8"
                color="white"
                marginBottom="0.1rem"
                borderRadius="2rem"
                fontSize="1.1rem"
                p={"0.3rem"}
              />
      </Link>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={10}
        size="7xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Heading
              size="md"
              backgroundColor="#0081c8"
              height="4rem"
              color="white"
              p="5"
            >
              Add New License Contacts
            </Heading>
            <br></br>
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" p="4">
              <TableContainer className="SuperAdminTables">
                <Table variant="stripped">
                  <Thead>
                    <Tr>
                      {tableHeaders.map((item) => (
                        <Th>
                          <Text textStyle="h4">{item}</Text>
                        </Th>
                      ))}
                    </Tr>
                  </Thead>

                  <Tbody>
                    {LicenseData.map((item, key) => (
                      <Tr>
                        <Td>
                          <Input type="text" value={item.firstName}></Input>
                        </Td>
                        <Td>
                          <Input type="text" value={item.lastName}></Input>
                        </Td>
                        <Td>
                          <Input type="text" value={item.email}></Input>
                        </Td>
                        <Td>
                          <Select width="14rem">
                            {item.role.map((value, i) => {
                              return (
                                <option key={i} value={value}>
                                  {value}
                                </option>
                              );
                            })}
                          </Select>
                        </Td>
                        <Td>
                          <DeleteIcon marginLeft="2rem" color="red" />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

             
                <Button marginRight="-0.5rem" color="black">
                  Add Row
                </Button>
                <AddIcon
                  backgroundColor="#0081c8"
                  color="white"
                  borderRadius="2rem"
                  fontSize="1.0rem"
                  p={"0.2rem"}
                />
             

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
                      onClick={onClose}
                    >
                      Cancel
                    </Button>

                    <Button
                      color="#ffffff"
                      className="rounded-3xl"
                      backgroundColor="#65a30d"
                      onClick={onClose}
                      borderRadius="3xl"
                      width="7rem"
                    >
                      Save
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewLicenseContacts;
