import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import JoditEditor from 'jodit-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import DoneModal from "../Popups/DonePopup";

import { useDispatch, useSelector } from 'react-redux';
import { getAccouncementData } from '../schoolAdminSlice';
import AddAnnouncementSuccessModal from './AnnouncementSuccessModal';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsPlusCircleFill } from 'react-icons/bs';
import ErrorResponse from '../../../../../components/GlobalComponents/ErrorResponse';
import { setAddAnnouncementData } from '../schoolAdminSlice';

const AddAnnouncement = (props) => {
  const status = props?.dropdownText;

  const { addModal, setAddModal } = props;

  const dispatch = useDispatch();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);
  const token = useSelector((state) => state?.profile?.token);
  const AddAnnouncementData = useSelector(
    (state) => state?.schoolAdmin?.AddAnnouncementData
  );

  const code = useSelector((state) => state?.profile?.code);

  console.log('AddAnnouncementData', AddAnnouncementData?.data?.code);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const [members, setMembers] = useState([]);

  const [checkboxes, setCheckboxes] = useState({
    student: false,
    parent: false,
    teacher: false,
    helpDesk: false,
    schoolAdmin: false,
    districtAdmin: false,
    stateAdmin: false,
    superAdmin: false,
  });

  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);

  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [finalSet, setFinalSet] = useState('');

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const [data, setData] = useState({
    announcementTitle: '',
    descriptionData: '',
    startDate: '',
    endDate: '',
    state: '',
    district: '',
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const allDistricts = useSelector(
    (state) => state?.superAdmin?.getDistricts?.data?.response
  );

  const handleCheckBoxes = (event) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [event.target.name]: !prevState[event.target.name],
    }));
  };

  console.log(checkboxes, 'checkboxessssssssssssssssssss');

  const handleSelectAllCheckBox = (event) => {
    console.log(event.target.checked, 'event target chekeddd');

    if (event.target.checked) {
      setCheckboxes({
        student: true,
        parent: true,
        teacher: true,
        helpDesk: true,
        schoolAdmin: true,
        districtAdmin: true,
        stateAdmin: true,
        superAdmin: true,
      });
    } else {
      setCheckboxes({
        student: false,
        parent: false,
        teacher: false,
        helpDesk: false,
        schoolAdmin: false,
        districtAdmin: false,
        stateAdmin: false,
        superAdmin: false,
      });
    }
  };
  const clickToOpen = () => {
    setData({
      announcementTitle: '',
      descriptionData: '',
      startDate: '',
      endDate: '',
      state: '',
      district: '',
    });
    setCheckboxes({
      student: false,
      parent: false,
      teacher: false,
      helpDesk: false,
      schoolAdmin: false,
      districtAdmin: false,
      stateAdmin: false,
      superAdmin: false,
    });
    setAddModal(true);
    dispatch(setAddAnnouncementData(null));
  };
  const onSubmit = () => {
    console.log('checkedItems----->', finalSet);

    const checkboxArray = [];

    const checkBoxList = Object.keys(checkboxes);

    checkBoxList.forEach((val) => {
      if (checkboxes[val]) {
        checkboxArray.push(val);
      }
    });

    console.log(checkboxArray, 'checkboxArraycheckboxArray');

    const finalObj = {
      announcement_title: data.announcementTitle,
      desc: data.descriptionData,
      start_date: data.startDate,
      end_date: data.endDate,
      audience: checkboxArray.toString(),
      creater_role: selectedRole,
      created_by: userUUID,
      state: '',
      district: '7e5e6cdb-78f8-43c7-8256-d1102caab1fa',
    };

    console.log('data from announcement------', finalObj);

    dispatch(getAccouncementData({ finalObj, token }));
  };

  useEffect(() => {
    const checkBoxList = Object.keys(checkboxes).filter(
      (each) => checkboxes[each]
    );

    console.log(checkBoxList, 'checkBoxList from use effect');

    if (checkBoxList?.length === 8) {
      setSelectAllCheckBox(true);
    } else {
      setSelectAllCheckBox(false);
    }
  }, [checkboxes]);

  useEffect(() => {
    if (code === 200) {
      setAddModal(false);
    }
  }, [code]);

  return (
    <>
      {/* <Box>
        <Link background="none" border="none" onClick={clickToOpen}>
          <Button color="black">Add Announcement</Button>
        </Link>
        <AddIcon
          marginLeft="-0.4rem"
          backgroundColor="#0081c8"
          color="white"
          borderRadius="2rem"
          fontSize="1.1rem"
          p="0.3rem"
        />
      </Box> */}
      <Modal
        finalFocusRef={finalRef}
        onClose={() => {
          setAddModal(false);

          onClose;
        }}
        isOpen={clickToOpen}
        borderRadius={4}
        size='6xl'
      >
        <ModalOverlay />
        <ModalContent p='5'>
          <ModalCloseButton onClick={() => setAddModal(false)} />
          <ModalBody marginTop='8'>
            <Box p='2'>
              <Text
                fontFamily={'body'}
                fontSize={{ base: 'md', md: 'sm', lg: 'sm' }}
                fontWeight={'bold'}
              >
                ADD ANNOUNCEMENT
              </Text>
              <Text marginTop='3'>Annoucement Title*</Text>
              <Input
                placeholder='Write your title here'
                width='15rem'
                height='3rem'
                borderColor='gray'
                name='announcementTitle'
                value={data.announcementTitle}
                onChange={(e) => onChange(e)}
              ></Input>
            </Box>
            {/* <Box p='2'>
              <Text
                fontFamily={'body'}
                fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
              >
                Description
              </Text>
              <Box height='12.5rem'>
                <JoditEditor
                  disabled={true}
                  setReadonly={true}
                  className='text-start content-start h-[100vh]'
                  name='descriptionData'
                  value={data.descriptionData}
                  onChange={(e) => {
                    setData({
                      ...data,
                      descriptionData: e,
                    });
                  }}
                />
              </Box>
            </Box> */}
            <HStack
              marginTop='5'
              display={{ base: 'flex flex-row', md: 'flex', lg: 'flex' }}
            >
              <Box p='2'>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
                >
                  When would you like the announcement to be displayed?
                </Text>
                <Text
                  p='3'
                  marginRight='10rem'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'md' }}
                  whiteSpace='nowrap'
                >
                  Start Date*:
                  <Input
                    type='date'
                    name='startDate'
                    width='200px'
                    className='ml-[12px]'
                    value={data.startDate}
                    onChange={(e) => onChange(e)}
                  />
                </Text>
                <br></br>
                <Text p='3'>
                  End Date*:
                  <Input
                    type='date'
                    name='endDate'
                    width='200px'
                    className='ml-[12px]'
                    value={data.endDate}
                    onChange={(e) => onChange(e)}
                  />
                </Text>
              </Box>

              {/* {selectedRole === "superAdmin" ? ( */}
              <Box>
                <Text p='2'>Announcement Intended Audience*:</Text>
                {/* <Box>
                    <Text>State</Text>
                    <Select
                      p="1"
                      placeholder="Select"
                      backgroundColor="#F5F9FF"
                      w="20rem"
                      border="none"
                    >
                      <option value="alabama">Alabama</option>
                      <option value="california">California</option>
                      <option value="newyork">New York</option>
                    </Select>
                  </Box> */}
                <Box marginTop='1rem'>
                  {/* <Text>District</Text> */}
                  {/* <Select
                    p="1"
                    placeholder="Select"
                    backgroundColor="#F5F9FF"
                    w="20rem"
                    border="none"
                    name="district"
                    value={data.district}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="option1">
                      Inherit from SSO Configuration
                    </option>
                    <option value="option2">
                      Inherit from SSO Configuration
                    </option>
                    <option value="option3">
                      Inherit from SSO Configuration
                    </option>
                  </Select> */}
                </Box>
                <Flex color='white' marginTop='2rem'>
                  <Center onChange={handleSelectAllCheckBox}>
                    <Checkbox color='black' isChecked={selectAllCheckBox}>
                      Select All
                    </Checkbox>
                  </Center>
                  <Box marginLeft='3rem'>
                    <Grid>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='student'
                          isChecked={checkboxes['student']}
                          onChange={handleCheckBoxes}
                        >
                          Student
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='parent'
                          isChecked={checkboxes['parent']}
                          onChange={handleCheckBoxes}
                        >
                          Parent
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='teacher'
                          isChecked={checkboxes['teacher']}
                          onChange={handleCheckBoxes}
                        >
                          Teacher
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='helpDesk'
                          isChecked={checkboxes['helpDesk']}
                          onChange={handleCheckBoxes}
                        >
                          Help Desk
                        </Checkbox>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box flex='1' marginLeft={'3rem'}>
                    <Grid>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='schoolAdmin'
                          isChecked={checkboxes['schoolAdmin']}
                          onChange={handleCheckBoxes}
                        >
                          School Admin
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='districtAdmin'
                          isChecked={checkboxes['districtAdmin']}
                          onChange={handleCheckBoxes}
                        >
                          District Admin
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='stateAdmin'
                          isChecked={checkboxes['stateAdmin']}
                          onChange={handleCheckBoxes}
                        >
                          State Admin
                        </Checkbox>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          color='black'
                          name='superAdmin'
                          isChecked={checkboxes['superAdmin']}
                          onChange={handleCheckBoxes}
                        >
                          Super Admin
                        </Checkbox>
                      </GridItem>
                    </Grid>
                  </Box>
                </Flex>
              </Box>
            </HStack>
            <Center h='10rem'>
              <Flex
                minWidth='max-content'
                alignItems='center'
                className='mt-3 ml-3 gap'
              >
                <ButtonGroup gap='4'>
                  <Button
                    width='7rem'
                    color='black'
                    borderRadius='3xl'
                    backgroundColor='#EEEEEE'
                    onClick={() => {
                      setAddModal(false);
                      dispatch(setAddAnnouncementData(null));
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    backgroundColor='#0081C8'
                    width='7rem'
                    color='white'
                    borderRadius='3xl'
                    onClick={onSubmit}
                  >
                    Save
                  </Button>
                </ButtonGroup>
              </Flex>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <AddAnnouncementSuccessModal message="Annoucement Created successfully" setAddModal={setAddModal}/> */}
    </>
  );
};

export default AddAnnouncement;
