import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addCircleIcon from '../../../assets/customIcons/Icon ionic-ios-add-circle.svg';
import { ManageUsersData } from '../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUsersData';
import ManageUsersTable from '../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUserTable';

import {
  Button,
  ButtonGroup,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GridProvider from '../../GridProvider';

const ManageUsers = () => {
  const [currentAction, setCurrentAction] = useState('');
  const {
    title,
    userDetails,
    tableName,
    searchPlaceholder,
    actionPlaceholder,
    actionOptions,
    addStudent,
    exportUsers,
    tableColumns,
    rows,
  } = ManageUsersData;

  const navigate = useNavigate();

  const [isPopUPShow, setIsPopUPShow] = useState(false);

  //console.log(currentAction, actionOptions);

  const handleActionSelect = () => {
    console.log('HandleActionSelect', currentAction);
  };

  //===========================================================================================
  let { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = React.useRef(null);

  const [modalTitle, setModalTitle] = useState('');

  const assignStudents = {
    ModalTitle: modalTitle,

    assignStudentsFields: [
      {
        lable: 'Schools',
        inputType: 'select',
        options: [
          'All Schools',
          'Greenlight Elementary',
          'Greenlight HighSchool',
        ],
      },
      {
        lable: 'Class',
        inputType: 'select',
        options: [
          'All Schools',
          'Greenlight Elementary',
          'Greenlight HighSchool',
        ],
      },
      {
        lable: 'Assignment Type',
        inputType: 'radio',
        options: [
          'Remove current class assignments',
          'keep current class assignments',
        ],
      },
    ],
  };
  const { ModalTitle, assignStudentsFields } = assignStudents;
  return (
    <Flex gap='4' direction='column'>
      <Text textStyle='textHead'>{title}</Text>
      <Grid templateColumns='repeat(3, 1fr)' gap='8'>
        {userDetails.map((item, index) => {
          return (
            <GridItem colSpan='1'>
              {item.inputType == 'select' ? (
                <Box inlineSize='sm'>
                  <Text mb='2'>{item.lable}</Text>
                  <Select bg='bg.100' borderColor='bg.100'>
                    {item.options.map((value, i) => {
                      return (
                        <option key={i} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              ) : (
                <Box inlineSize='sm'>
                  <Text mb='2'>{item.lable}</Text>
                  <Input type='date' border='0px' bg='bg.100' />
                </Box>
              )}
            </GridItem>
          );
        })}
      </Grid>
      <Divider />
      <Text textStyle='textHead'>{tableName}</Text>
      <HStack>
        <HStack spacing='8'>
          <Box inlineSize='sm'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
              />
              <Input
                rounded='full'
                type='text'
                placeholder={searchPlaceholder}
              />
            </InputGroup>
          </Box>
          <Box inlineSize='10em'>
            <Select
              rounded='full'
              bg='primary'
              borderColor='primary'
              color='white'
              onChange={(e) => {
                setCurrentAction(e);
                setModalTitle(e.target.value);
                onOpen();
              }}
            >
              {actionOptions?.map((action, index) => {
                return (
                  <option key={index} value={action}>
                    {action}
                  </option>
                );
              })}
            </Select>
          </Box>
        </HStack>

        <Spacer />
        <HStack spacing='8'>
          <HStack
            cursor='pointer'
            onClick={() => navigate('/role/DistrictAdmin/add-user')}
          >
            <Text
              textStyle='h3'
              as='span'
              textDecoration='underline'
              color='black-2'
            >
              {addStudent}
            </Text>
            <Box width='6' height='6'>
              <img w='full' h='full' src={addCircleIcon} />
            </Box>
          </HStack>
          <HStack
            cursor='pointer'
            // onClick={() => navigate("/role/DistrictAdmin/add-user")}
          >
            <Text
              textStyle='h3'
              as='span'
              textDecoration='underline'
              color='black-2'
            >
              {exportUsers}
            </Text>
            <Box width='6' height='6'>
              <img w='full' h='full' src={addCircleIcon} />
            </Box>
          </HStack>
        </HStack>
      </HStack>

      <ManageUsersTable />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p='9'>
            <Stack spacing='2'>
              <Center color=''>
                <Text textStyle='h4' marginRight='1' color='#1890ff'>
                  {ModalTitle} Students
                </Text>
              </Center>

              <Grid templateColumns='repeat(1, 1fr)' gap='8' marginTop='8'>
                <GridProvider data={assignStudentsFields} />
              </Grid>

              <Center>
                <ButtonGroup gap='4' marginTop='3'>
                  <Button
                    color='black'
                    borderRadius='3xl'
                    backgroundColor='#EEEEEE'
                    width='7rem'
                    onClick={onClose}
                  >
                    Cancel
                  </Button>

                  <Button
                    backgroundColor='#1890ff'
                    color='white'
                    borderRadius='3xl'
                    w='8rem'
                  >
                    Submit
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ManageUsers;
