import React from 'react';
import {
  Box,
  Text,
  Divider,
  Flex,
  Card,
  CardHeader,
  Heading,
  Stack,
  CardBody,
  StackDivider,
} from '@chakra-ui/react';

import { IoMdSchool, IoIosHelpCircle } from 'react-icons/io';
import { FaUserCog, FaUsers, FaUser } from 'react-icons/fa';
import { MdUpload, MdNotifications } from 'react-icons/md';
import { BiPowerOff } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../../store/slices/profileSlice';
import { settingsDataTeacher } from './settingsData';

const SettingScreen = (props) => {
  const { handleClickNavCard } = props;

  const userRole = useSelector((state) => state.profile.userRole);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = [
    {
      id: '1',
      head: 'ACCOUNT SETTINGS',
      list: [
        {
          name: 'MyAccount',
          icon: <IoMdSchool />,
        },
        {
          name: 'Help',
          icon: <IoIosHelpCircle />,
        },
        {
          name: 'Logout',
          icon: <BiPowerOff />,
        },
      ],
    },
  ];

  const SettingTeacher = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      list: [
        {
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
    {
      id: '3',
      head: 'DATA MANAGEMENT',
      list: [
        {
          name: 'Manage Classes',
          icon: <FaUserCog />,
        },
        {
          name: "'Manage Users'",
          icon: <FaUsers />,
        },
      ],
    },
  ];

  const settingsDataSchoolAdmin = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      list: [
        {
          name: 'Schools',
          icon: <IoMdSchool />,
        },
        {
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
    {
      id: '3',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: '11',
          name: 'Import',
          icon: <MdUpload />,
        },
        {
          id: '12',
          name: 'Manage Classes',
          icon: <FaUserCog />,
        },
        {
          name: 'Manage Users',
          icon: <FaUsers />,
        },
      ],
    },
  ];

  const settingsDataStudent = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: ['Notifications'],
      icon: [MdNotifications],
    },
    //   {
    //     id: '3',
    //     head: 'DATA MANAGEMENT',
    //     name: ['Import', 'Manage Classes', 'Manage Users'],
    //     icon: [<MdUpload />, <FaUserCog />, <FaUsers />],
    //   },
  ];

  const settingsSuperAdmin = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: ['Roles & Privileges'],
      icon: [IoMdSchool],
    },
    {
      id: '3',
      head: 'DATA MANAGEMENT',
      name: ['Manage Users'],
      icon: [FaUsers],
    },
  ];

  const settingsDataParent = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: ['Notifications'],
      icon: [MdNotifications],
    },
    //   {
    //     id: '3',
    //     head: 'DATA MANAGEMENT',
    //     name: ['Import', 'Manage Classes', 'Manage Users'],
    //     icon: [<MdUpload />, <FaUserCog />, <FaUsers />],
    //   },
  ];

  const settingsDataStateAdmin = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: [
        'Districts & Schools',
        'Manage Mandates',
        'Notifications',
        'Roles & Privileges',
      ],
      icon: [IoMdSchool, MdNotifications, MdNotifications, MdNotifications],
    },
    {
      id: '3',
      head: 'DATA MANAGEMENT',
      name: ['Import'],
      icon: [MdUpload],
    },
  ];

  const settingsDataDistrictAdmin = [
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: [
        'Schools',
        'Email Settings',
        'Manage Mandates',
        'Notifications',
        'Roles & Privileges',
      ],
      icon: [
        IoMdSchool,
        MdNotifications,
        IoMdSchool,
        MdNotifications,
        IoMdSchool,
      ],
    },
    {
      id: '3',
      head: 'DATA MANAGEMENT',
      name: ['End Of Term Process', 'Import', 'Manage Classes', 'Manage Users'],
      icon: [MdUpload, FaUserCog, FaUsers, MdUpload],
    },
  ];

  const settingsDataPartner = [
    {
      id: '1',
      head: 'ACCOUNT SETTINGS',
      name: ['MyAccount', 'Help', 'Logout'],
      icon: [FaUser, IoIosHelpCircle, BiPowerOff],
    },
    {
      id: '2',
      head: 'SYSTEM ADMINSTRATOR',
      name: ['Districts & Schools', 'Notifications'],
      icon: [IoMdSchool, MdNotifications],
    },
    //   {
    //     id: '3',
    //     head: 'DATA MANAGEMENT',
    //     name: ['Import', 'Manage Classes', 'Manage Users'],
    //     icon: [<MdUpload />, <FaUserCog />, <FaUsers />],
    //   },
  ];

  console.log('settingsDataTeacher', settingsDataTeacher);

  const location = useLocation();
  console.log('Location', location.pathname.split('/')[2]);

  const clickDataOfList = (item) => {
    console.log(item, 'item values in navbar');
    if (item === 'Manage Classes') {
      navigate(`/role/${userRole}/manage-classes`);
      handleClickNavCard(false);
    } else if (item === 'MyAccount') {
      navigate(`/role/${userRole}/MyAccount`);
      handleClickNavCard(false);
    } else if (item === 'Manage Users') {
      navigate(`/role/${userRole}/manage-users`);
      handleClickNavCard(false);
    } else if (item === 'Schools') {
      navigate(`/role/${userRole}/schools`);
      handleClickNavCard(false);
    } else if (item === 'Notifications') {
      navigate(`/role/${userRole}/Notifications`);
      handleClickNavCard(false);
    } else if (item === 'Import') {
      navigate(`/role/${userRole}/Import`);
      handleClickNavCard(false);
    } else if (item === 'Logout') {
      dispatch(setToken(''));

      dispatch(setUser(''));

      navigate('/');
    }
  };

  const locationSettings = (location) => {
    console.log('locationS', location);
  };

  return (
    <>
      {data.map((item, text) => {
        return (
          <>
            <Card maxW='sm'>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      {item.head}
                    </Heading>
                    <Box>
                      {item.list.map((val, index) => {
                        return (
                          <Flex gap={'2'}>
                            <>
                              <p className='mt-6 mb-2 cursor-pointer'>
                                {val.icon}
                              </p>{' '}
                              <p
                                className='mt-5 mb-1 cursor-pointer'
                                onClick={() => clickDataOfList(val.name)}
                              >
                                {val.name}
                              </p>
                            </>
                          </Flex>
                        );
                      })}

                      {/* <Flex gap={'2'}>
                          <p className='mt-6 mb-2 cursor-pointer'>
                            {item.icon[1]}
                          </p>
                          <p
                            className='mt-5 mb-1 cursor-pointer'
                            onClick={() => clickDataOfList(item.name[1])}
                          >
                            {' '}
                            {item.name[1]}
                          </p>
                        </Flex>

                        <Flex gap={'2'}>
                          <p className='mt-6 mb-2 cursor-pointer'>
                            {item.icon[2]}
                          </p>

                          <p
                            className='mt-5 mb-1 cursor-pointer'
                            onClick={() => clickDataOfList(item.name[2])}
                          >
                            {item.name[2]}
                          </p>
                        </Flex> */}
                    </Box>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </>
        );
      })}
      {/* {settingsDataTeacher.map((item, index) => {
          return (
            <div className='bg-white h-full'>
              <div className='flex gap-2 mt-4'>
                <img src={item.list[0]?.icon} />
                <p>{item?.list[0]?.name}</p>
              </div>
            </div>
          );
        })} */}
    </>
  );
};

export default SettingScreen;
