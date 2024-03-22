import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  Box,
  Checkbox,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [viewMore, setViewMore] = useState(false);
  return (
    <>
      <Link background='none' border='none' onClick={onOpen}>
        Report Filters
      </Link>
      <AddIcon
        marginLeft='0.4rem'
        backgroundColor='#0081c8'
        color='white'
        borderRadius='2rem'
        fontSize='1.1rem'
        p='0.3rem'
        marginTop='0.5'
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        size='lg'
      >
        <ModalOverlay />
        <ModalContent marginLeft='89rem' marginTop='0.1rem'>
          <ModalCloseButton />
          <ModalBody p='5'>
            <Heading size='md' color='black'>
              Report Filters
            </Heading>
            <br></br>
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing='2' marginTop='1'>
              <Text>SCHOOL YEAR</Text>
              <Select placeholder='Select Below' backgroundColor='#F5F9FF'>
                <option value='option1'>Coach Steven 5th-6th</option>
                <option value='option2'>Get Started 5th-6th</option>
                <option value='option3'>PE Peroid 1b 2017-2018</option>
              </Select>
              <Text>SCHOOL</Text>
              <Select placeholder='Select Below' backgroundColor='#F5F9FF'>
                <option value='option1'>Coach Steven 5th-6th</option>
                <option value='option2'>Get Started 5th-6th</option>
                <option value='option3'>PE Peroid 1b 2017-2018</option>
              </Select>

              <Text>SELECT ASSESSMENTS</Text>
              <Flex>
                <Box>
                  <Button
                    backgroundColor='white'
                    h='2rem'
                    borderRadius='2xl'
                    border='2px solid rgb(134, 133, 133)'
                    marginRight='3'
                    w='8rem'
                  >
                    Last 30 Days
                  </Button>
                </Box>
                <Box>
                  <Button
                    backgroundColor='white'
                    h='2rem'
                    borderRadius='2xl'
                    border='2px solid rgb(134, 133, 133)'
                    marginRight='3'
                    w='8rem'
                  >
                    Last 3 months
                  </Button>
                </Box>
                <Box>
                  <Button
                    backgroundColor='white'
                    h='2rem'
                    borderRadius='2xl'
                    border='2px solid rgb(134, 133, 133)'
                    w='10rem'
                  >
                    Last 6 months
                  </Button>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Button
                    backgroundColor='white'
                    h='2rem'
                    borderRadius='2xl'
                    border='2px solid rgb(134, 133, 133)'
                    w='8rem'
                  >
                    2022-2023
                  </Button>
                </Box>
              </Flex>
              <Spacer />

              {viewMore ? (
                <Box>
                  <Text>TEACHER</Text>
                  <Select
                    placeholder='Select Below'
                    backgroundColor='#F5F9FF'
                    marginBottom='3'
                  >
                    <option value='option1'>Coach Steven 5th-6th</option>
                    <option value='option2'>Get Started 5th-6th</option>
                    <option value='option3'>PE Peroid 1b 2017-2018</option>
                  </Select>

                  <Text>GRADE</Text>
                  <Select
                    placeholder='Select Below'
                    backgroundColor='#F5F9FF'
                    marginBottom='3'
                  >
                    <option value='option1'>Coach Steven 5th-6th</option>
                    <option value='option2'>Get Started 5th-6th</option>
                    <option value='option3'>PE Peroid 1b 2017-2018</option>
                  </Select>
                  <Text>SEX ASSIGNED AT BIRTH</Text>
                  <Select
                    placeholder='Select Below'
                    backgroundColor='#F5F9FF'
                    marginBottom='3'
                  >
                    <option value='option1'>Coach Steven 5th-6th</option>
                    <option value='option2'>Get Started 5th-6th</option>
                    <option value='option3'>PE Peroid 1b 2017-2018</option>
                  </Select>
                  {/* <Text>SELECT ASSESSMENTS</Text>
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
                      w="8rem"
                    >
                      Last 6 months
                    </Button>
                  </Box>
                </Flex> */}

                  <Text>TEST TYPE</Text>
                  <Select
                    placeholder='Select Below'
                    backgroundColor='#F5F9FF'
                    marginBottom='3'
                  >
                    <option value='option1'>Coach Steven 5th-6th</option>
                    <option value='option2'>Get Started 5th-6th</option>
                    <option value='option3'>PE Peroid 1b 2017-2018</option>
                  </Select>

                  <Text textStyle='h4'>REPORT OPTIONS</Text>
                  <Flex>
                    <Text marginTop='1' marginRight='2'>
                      PRINT BODY COMPOSITION
                    </Text>
                    <Checkbox isChecked />
                  </Flex>

                  <Text marginTop='4'>REPORT OUTPUT</Text>
                  <Flex>
                    <Box>
                      <Button
                        backgroundColor='white'
                        h='2rem'
                        border='2px solid rgb(134, 133, 133)'
                        marginRight='3'
                        w='8rem'
                      >
                        VIEW
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        backgroundColor='white'
                        h='2rem'
                        border='2px solid rgb(134, 133, 133)'
                        marginRight='3'
                        w='8rem'
                      >
                        EMAIL
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        backgroundColor='white'
                        h='2rem'
                        border='2px solid rgb(134, 133, 133)'
                        w='8rem'
                      >
                        SCHEDULE
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              ) : (
                ''
              )}

              <Center marginBottom='4'>
                <Link className='btn' onClick={() => setViewMore(!viewMore)}>
                  {viewMore ? 'View Less' : 'View More'}
                </Link>
              </Center>

              <Center>
                <ButtonGroup gap='4'>
                  <Link to=''>
                    <Button onClick={onClose}>Reset</Button>
                  </Link>
                  <Button
                    backgroundColor='#1890ff'
                    color='white'
                    borderRadius='3xl'
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

export default ReportFilter;
