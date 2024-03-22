import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Input,
  Text,
  Divider,
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from '@chakra-ui/react';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosAddCircle, IoMdAddCircle } from 'react-icons/io';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { getManageUsersAssignmentApiCall } from '../schoolAdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddClassModalPopup from './AddClassModalPopup';
import { setClasses, setSchools } from '../../../../teacher/teacherSlice';
import NegativeButton from '../../../../../components/NegativeButton';
import PositiveButton from '../../../../../components/PositiveButton';

import SaveManageSuccess from './SaveManageSuccess';
import DeleteModal from '../../../../../components/DeleteModal';
import DeleteModalManage from './DeleteModalManage';

const AdminPage = () => {
  return (
    <>
      <Flex className='justify-between mt-3'>
        <p className='text-primary'>John ,wick</p>
        <Flex className='gap-2 mt-1'>
          <p className='text-primary underline'>Edit</p>
          <FaRegEdit className='mt-[0.2rem] text-primary' />
          <p className='text-primary underline'>Delete</p>
          <RiDeleteBin6Line className='mt-1 text-primary' />
        </Flex>
      </Flex>
    </>
  );
};

const TabView = () => {
  return (
    <>
      <Tabs variant='unstyled'>
        <TabList>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
              borderLeftRadius: '15',
            }}
          >
            BASIC USER INFORMATION
          </Tab>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
              borderRightRadius: '15',
            }}
          >
            MANAGE USER"S ASSIGNMENTS
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GreenLiteSkelton />
          </TabPanel>
          <TabPanel>
            <ManageUSersView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const GreenLiteSkelton = () => {
  const location = useLocation();

  const classDataSchool = location?.state?.classDataSchool;

  console.log(classDataSchool, 'classDataSchool');

  const data = [
    {
      id: '1',
      head: 'Student ID:',
      placeholder: '',
      name: 'student_id',
    },
    {
      id: '2',
      head: 'First Name*:',
      placeholder: '',
      name: 'first_name',
    },
    {
      id: '3',
      head: 'Grade*:',
      placeholder: '',
      name: 'grade',
    },
    {
      id: '4',
      head: 'Student Email Address:',
      placeholder: '',
      name: 'email',
    },
    {
      id: '5',
      head: 'Username*:',
      placeholder: '',
      name: 'user_name',
    },
    {
      id: '6',
      head: 'Last Name*:',
      placeholder: '',
      name: 'last_name',
    },
    {
      id: '7',
      head: 'Birth Date*(mm/dd/yyyy)',
      placeholder: '',
      name: 'date_of_birth',
    },
    {
      id: '8',
      head: 'Parent Email Address 1:',
      placeholder: '',
      name: 'parent_email_2',
    },

    {
      id: '9',
      head: 'Middle initial',
      placeholder: '',
      name: 'middle_initial',
    },
    {
      id: '10',
      head: 'Race:',
      placeholder: '',
      name: 'race',
    },
    {
      id: '11',
      head: 'Parent Email Address 2:',
      placeholder: '',
      name: 'parent_email_2',
    },

    {
      id: '12',
      head: 'sex Assigned At Birth*',
      placeholder: '',
      name: '',
    },
    {
      id: '13',
      head: 'Ethnicity*',
      placeholder: '',
      name: 'ethnicity',
    },
    {
      id: '14',
      head: 'Phone*',
      placeholder: '',
      name: 'phone',
    },
  ];

  const dataTwo = [
    {
      id: '1',
      head: 'Print Body Composition',
      placeholder: '',
    },
    {
      id: '2',
      head: 'Print Reports in Spanish',
      placeholder: '',
    },
    {
      id: '3',
      head: 'Permanently Exempt',
      placeholder: '',
    },
  ];

  const [inputs, setInputs] = useState({
    first_name: classDataSchool.first_name,
    student_id: classDataSchool.student_id,
    grade: classDataSchool.grade,
    user_name: classDataSchool.user_name,
    middle_initial: classDataSchool.middle_initial,
    ethnicity: classDataSchool.ethnicity,
    phone: classDataSchool.phone,
    race: classDataSchool.race,
    address_2: classDataSchool.address_2,
    date_of_birth: classDataSchool.date_of_birth.split('T')[0],
    email: classDataSchool.email,
    address_1: classDataSchool.address_1,
    parent_email_1: classDataSchool.parent_email_1,
    parent_email_2: classDataSchool.parent_email_2,
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value, 'jjjjjjjjj');

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  console.log(inputs, 'inputr data');

  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt='4'>
        {data.map((item, index) => {
          return (
            <>
              <GridItem w='100%' h='10'>
                <Text>{item.head}</Text>
                {item.id === '12' ? (
                  <Select
                    bg='#ecf4ff'
                    border={'none'}
                    rounded={'2xl'}
                    placeholder='Select option below'
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                ) : (
                  <>
                    <Input
                      bg='#ECF4FF'
                      border={'none'}
                      rounded={'2xl'}
                      name={item?.name}
                      value={inputs[item?.name]}
                      onChange={handleChange}
                    />
                    <Flex></Flex>
                  </>
                )}
              </GridItem>
            </>
          );
        })}
      </Grid>

      <GridItem>
        <div className='mt-10 flex gap-10  items-center'>
          <div className=' '>
            <>
              {dataTwo.map((item, index) => {
                return (
                  <Flex gap='4'>
                    <input type='checkbox' />
                    <p>{item.head}</p>
                  </Flex>
                );
              })}
            </>
          </div>

          <Box>
            <Text>Login Status:</Text>
            <Flex gap='4'>
              <input type='radio' />
              <p>Active</p>
            </Flex>
            <Flex gap='4'>
              <input type='radio' />
              <p>InActive</p>
            </Flex>
          </Box>
        </div>
      </GridItem>

      <Flex justifyContent={'center'} mt='5' justify={'space-between'}>
        <Box className='mt-5 gap-2'>
          <Button className='rounded-2xl gap-1 '>Cancel</Button>
          <Button className='bg-green text-white rounded-2xl '>Save</Button>
        </Box>
      </Flex>
    </>
  );
};

const ManageUSersView = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const classDataSchool = location?.state?.classDataSchool;

  console.log(classDataSchool, 'classDataSchool');

  const token = useSelector((state) => state?.profile?.token);

  const manageUsersAssignmentApiResponse = useSelector(
    (state) =>
      state?.schoolAdmin?.manageUsersAssignmentApiResponse?.data?.response
  );

  console.log(
    manageUsersAssignmentApiResponse,
    'manageUsersAssignmentApiResponsemanageUsersAssignmentApiResponse'
  );

  const [classListShow, setClassListShow] = useState(false);

  const [manualClassListShow, setManualClassListShow] = useState(false);

  const [dropdownContent, setDropdownContent] = useState(null);

  const [manualDropdownContent, setManualDropdownContent] = useState(null);

  const [addClassModalShow, setAddClassModalShow] = useState(false);

  const classListItemClicked = (selectedItem) => {
    console.log(selectedItem, 'iam selectedItem');

    const filteredList = manageUsersAssignmentApiResponse?.UserClass?.filter(
      (each) => each?.uuid === selectedItem?.uuid
    );

    setDropdownContent(filteredList);

    setClassListShow(!classListShow);

    console.log(filteredList, 'filteredListfilteredList');
  };

  const [schoolClassListItems, setSchoolClassListItems] = useState([]);

  const classListArrayItemClicked = (selectedItem) => {
    console.log(selectedItem, 'sele');

    const filteredList = schoolClassListItems?.map((each) =>
      each?.schools?.filter((each) => each?.uuid === each?.uuid)
    );

    console.log(filteredList, 'from manual');

    setManualDropdownContent(filteredList);

    setManualClassListShow(!manualClassListShow);
  };

  useEffect(() => {
    let userUUID = classDataSchool?.uuid;

    dispatch(getManageUsersAssignmentApiCall({ userUUID, token }));

    dispatch(setSchools([]));

    dispatch(setClasses([]));
  }, []);

  console.log(dropdownContent, 'dropdown content');

  console.log(schoolClassListItems, 'schoolClassListItemsschoolClassListItems');

  return (
    <>
      <div className='flex justify-between'>
        <Flex gap='3'>
          <Text>Schools</Text>
        </Flex>
        <Flex gap='3'>
          {/* <Text textDecoration={'underline'}>Add To School</Text>

          <IoMdAddCircle className='' fill='#0081c8' size={25} /> */}

          <Text
            textDecoration={'underline'}
            cursor='pointer'
            onClick={() => setAddClassModalShow(true)}
          >
            Add To Class
          </Text>

          <IoMdAddCircle className='' fill='#0081c8' size={25} />
        </Flex>
      </div>
      <Divider mt='5' />
      <div className='mt-5'>
        <Text className='mb-5'>School/Class</Text>
        {/* <Select placeholder='Select option' border={'none'} bg='#'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select> */}

        {manageUsersAssignmentApiResponse !== undefined &&
          Object.keys(manageUsersAssignmentApiResponse)?.length > 0 &&
          manageUsersAssignmentApiResponse?.UserClass?.map((each) => (
            <div className='flex flex-col border border-[#F4F8FF] px-3 py-3 bg-[#F4F8FF] rounded-lg mb-2'>
              <div
                className='flex items-center gap-8  rounded-lg cursor-pointer mb-2 mt-2'
                onClick={() => classListItemClicked(each)}
              >
                <p>{each?.school?.school_name}</p>
                {classListShow &&
                dropdownContent &&
                each?.uuid === dropdownContent?.[0].uuid ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
              {classListShow &&
              dropdownContent &&
              each?.uuid === dropdownContent?.[0].uuid ? (
                <div className='left-[5rem] mt-1 px-2 flex gap-[65%] items-center'>
                  <p>{each?.class_name}</p>
                  {/* <RiDeleteBinLine
                    size={25}
                    fill='#0180C8'
                    cursor={'pointer'}
                  /> */}
                  <DeleteModalManage />
                </div>
              ) : null}
            </div>
          ))}

        {schoolClassListItems?.length > 0 &&
          schoolClassListItems?.map((each) => (
            <div className='flex flex-col border border-[#F4F8FF] px-3 py-3 bg-[#F4F8FF] rounded-lg mb-2'>
              <div
                className='flex items-center gap-8  rounded-lg cursor-pointer mb-2 mt-2'
                onClick={() => classListArrayItemClicked(each)}
              >
                {each?.schools?.map((item) => (
                  <>
                    <p>{item?.school_name}</p>
                    {manualClassListShow &&
                    manualDropdownContent &&
                    each.uuid === manualDropdownContent?.[0].uuid ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </>
                ))}
              </div>
              {manualClassListShow &&
              manualDropdownContent &&
              each.uuid === manualDropdownContent?.[0].uuid ? (
                <div className='left-[5rem] mt-1 px-2 flex gap-[65%] items-center'>
                  {each?.classes?.map((item) => (
                    <>
                      <p>{item?.class_name}</p>
                      {/* <RiDeleteBinLine
                        size={25}
                        fill='#0180C8'
                        cursor={'pointer'}
                      /> */}
                      <DeleteModalManage />
                    </>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

        {schoolClassListItems?.length > 0 && (
          <Flex justify='center' gap='8' mt='5rem'>
            <Box>
              {/* <button className='bg-[#F5F4F4] text-[#343435] rounded-full py-1 px-6 '>
                Cancel
              </button> */}
            </Box>
            <Box>
              {/* <button className='bg-green text-white rounded-full py-1 px-6 '>
                Save
              </button> */}
              <SaveManageSuccess />
            </Box>
          </Flex>
        )}
      </div>

      <AddClassModalPopup
        schoolClassListItems={schoolClassListItems}
        setSchoolClassListItems={setSchoolClassListItems}
        addClassModalShow={addClassModalShow}
        setAddClassModalShow={setAddClassModalShow}
      />
    </>
  );
};

const Teachers = () => {
  return (
    <Box mt={'5'}>
      <Text>TEACHERS</Text>
      <Flex justify='space-between' mt='5'>
        <Input
          placeholder='Search  by name or user id'
          w='100'
          borderRadius={'30'}
        />

        <Flex className='' mt-2>
          {/* <Text className='underline'>Add Teacher</Text> */}
          {/* <AddTeacherPop /> */}
          <IoIosAddCircle size={25} fill={'#0081c8'} className='mt-2' />
        </Flex>
      </Flex>
    </Box>
  );
};

const EditStudentInformation = () => {
  const location = useLocation();

  const classDataSchool = location?.state?.classDataSchool;

  console.log(classDataSchool, 'classDataSchoolnknkkjnkjnjknj');
  return (
    <div>
      <Text fontWeight={'bold'} mb='3'>
        Edit Student Information
      </Text>
      <TabView mt='10' />
    </div>
  );
};

export default EditStudentInformation;
