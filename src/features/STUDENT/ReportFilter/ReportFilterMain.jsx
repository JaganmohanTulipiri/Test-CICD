import {
  Box, Button,
  ButtonGroup,
  Center, Checkbox, Flex,
  Heading, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ReportFilterMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [viewLess, setViewLess] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        view More
      </Link>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent marginLeft="88rem" marginTop="0.1rem">
          <ModalCloseButton />
          <ModalBody p="5">
            <Heading size="md" color="#1890ff">
              Report Filters
            </Heading>

            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" marginTop="2rem">
              <Box marginBottom="1rem">
                <Text>SCHOOL YEAR</Text>
                <Select
                  placeholder="Select Below"
                  backgroundColor="#F5F9FF"
                  borderColor="gray"
                >
                  <option value="option1">Coach Steven 5th-6th</option>
                  <option value="option2">Get Started 5th-6th</option>
                  <option value="option3">PE Peroid 1b 2017-2018</option>
                </Select>
              </Box>
              <Box>
                <Text>SCHOOL</Text>
                <Select
                  placeholder="Select Below"
                  backgroundColor="#F5F9FF"
                  borderColor="gray"
                  marginBottom="1rem"
                >
                  <option value="option1">Coach Steven 5th-6th</option>
                  <option value="option2">Get Started 5th-6th</option>
                  <option value="option3">PE Peroid 1b 2017-2018</option>
                </Select>
              </Box>
              <Box>
                <Text>SELECT ASSESSMENTS</Text>
              </Box>
              <Flex>
                <Box>
                  <Button
                    backgroundColor="white"
                    h="2rem"
                    borderRadius="2xl"
                    border="2px solid rgb(134, 133, 133)"
                    marginRight="3"
                    w="8rem"
                  >
                    Last 30 Days
                  </Button>
                </Box>
                <Box>
                  <Button
                    backgroundColor="white"
                    h="2rem"
                    borderRadius="2xl"
                    border="2px solid rgb(134, 133, 133)"
                    marginRight="3"
                    w="8rem"
                  >
                    Last 3 months
                  </Button>
                </Box>
                <Box>
                  <Button
                    backgroundColor="white"
                    h="2rem"
                    borderRadius="2xl"
                    border="2px solid rgb(134, 133, 133)"
                    w="10rem"
                  >
                    Last 6 months
                  </Button>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Button
                    backgroundColor="white"
                    h="2rem"
                    borderRadius="2xl"
                    border="2px solid rgb(134, 133, 133)"
                    w="8rem"
                    marginBottom="1rem"
                  >
                    2022-2023
                  </Button>
                </Box>
              </Flex>
              <Spacer />

              <Box>
                <Text>TEACHER</Text>
                <Select
                  placeholder="Select Below"
                  backgroundColor="#F5F9FF"
                  marginBottom="1.5rem"
                  borderColor="gray"
                >
                  <option value="option1">Coach Steven 5th-6th</option>
                  <option value="option2">Get Started 5th-6th</option>
                  <option value="option3">PE Peroid 1b 2017-2018</option>
                </Select>

                <Text>TEST TYPE</Text>
                <Select
                  placeholder="Select Below"
                  backgroundColor="#F5F9FF"
                  marginBottom="1.5rem"
                  borderColor="gray"
                >
                  <option value="option1">Coach Steven 5th-6th</option>
                  <option value="option2">Get Started 5th-6th</option>
                  <option value="option3">PE Peroid 1b 2017-2018</option>
                </Select>

                <Text textStyle="h4">REPORT OPTIONS</Text>
                <Flex>
                  <Text marginTop="1" marginRight="2">
                    PRINT BODY COMPOSITION
                  </Text>
                  <Checkbox isChecked />
                </Flex>

                <Text marginTop="4" textStyle="h4">
                  REPORT OUTPUT
                </Text>
                <Flex marginTop="2">
                  <Box>
                    <Button
                      backgroundColor="white"
                      h="2rem"
                      border="2px solid rgb(134, 133, 133)"
                      marginRight="3"
                      w="8rem"
                    >
                      VIEW
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      backgroundColor="white"
                      h="2rem"
                      border="2px solid rgb(134, 133, 133)"
                      marginRight="3"
                      w="8rem"
                    >
                      EMAIL
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      backgroundColor="white"
                      h="2rem"
                      border="2px solid rgb(134, 133, 133)"
                      w="8rem"
                    >
                      SCHEDULE
                    </Button>
                  </Box>
                </Flex>
              </Box>

              <Link className="btn" onClick={() => setViewLess(!viewLess)}>
                {viewLess ? "View More" : "View Less"}
              </Link>

              <Center>
                <ButtonGroup gap="4">
                  <Link to="">
                    <Button
                      onClick={onClose}
                      backgroundColor="#EEEEEE"
                      borderRadius="2xl"
                      color="black"
                      width="7rem"
                    >
                      Reset
                    </Button>
                  </Link>
                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    borderRadius="3xl"
                  >
                    Run Report
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportFilterMain;
