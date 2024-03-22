import React, { useEffect, useRef } from 'react';
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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

import { IoMdSchool, IoIosHelpCircle } from 'react-icons/io';
import { FaUserCog, FaUsers, FaUser } from 'react-icons/fa';
import { MdUpload, MdNotifications } from 'react-icons/md';
import { BiPowerOff } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setToken, setUser } from '../../store/slices/profileSlice';
import {
  setClassData,
  setPreviousValuesOfAddUser,
} from '../../features/authentication/components/schoolAdmin/schoolAdminSlice';
import { MdEmail, MdRestorePage } from 'react-icons/md';
import { GoClippy } from 'react-icons/go';
import { GiKeyLock } from 'react-icons/gi';
import { BsArrowBarUp } from 'react-icons/bs';
import { ImClipboard, ImUpload3 } from 'react-icons/im';
import {
  getManageClassesList,
  getSchoolsList,
} from '../../features/teacher/teacherSlice';

export const commonSettingsData = {
  id: '1',
  head: 'ACCOUNT SETTINGS',
  list: [
    { id: 1, icon: <FaUser size='14' />, name: 'MyAccount' },
    { id: 2, icon: <IoIosHelpCircle />, name: 'Help' },
    { id: 2, icon: <BiPowerOff />, name: 'Logout' },
  ],
};

export const settingsData = {
  teacher: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [{ id: 1, icon: <MdNotifications />, name: 'Notifications' }],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        { id: 1, icon: <FaUserCog />, name: 'Manage Classes' },
        { id: 2, icon: <FaUsers />, name: 'Manage Users' },
      ],
    },
  ],

  superAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Roles & Privileges',
          icon: <GiKeyLock />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Manage Users',
          icon: <MdNotifications />,
        },
      ],
    },
  ],

  student: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [{ id: 1, icon: <MdNotifications />, name: 'Notifications' }],
    },
  ],
  Parent: {},
  schoolAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Schools',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Import',
          icon: <MdUpload />,
        },
        {
          id: 2,
          icon: <FaUserCog />,
          name: 'Manage Classes',
        },
        {
          id: 3,
          icon: <FaUsers />,
          name: 'Manage Users',
        },
      ],
    },
  ],

  districtAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'District & Schools',
          icon: <IoMdSchool />,
        },
        // {
        //   id: 2,
        //   name: 'Email Settings',
        //   icon: <MdEmail />,
        // },
        {
          id: 3,
          name: 'Manage Mandates',
          icon: <GoClippy />,
        },
        {
          id: 4,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
        {
          id: 5,
          name: 'Roles & Privileges',
          icon: <GiKeyLock />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        // {
        //   id: 1,
        //   name: 'End Of Term Process',
        //   icon: <MdRestorePage />,
        // },
        {
          id: 2,
          name: 'Import',
          icon: <MdUpload />,
        },
        {
          id: 3,
          icon: <FaUsers />,
          name: 'Manage Classes',
        },
        {
          id: 4,
          icon: <FaUserCog />,
          name: 'Manage Users',
        },
      ],
    },
  ],
  stateAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Districts & Schools',
          icon: <IoMdSchool />,
        },

        {
          id: 2,
          name: 'Manage Mandates',
          icon: <ImClipboard />,
        },
        {
          id: 3,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
        {
          id: 4,
          name: 'Roles & Privileges',
          icon: <GiKeyLock />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Import',
          icon: <MdUpload />,
        },
      ],
    },
  ],
  partner: [
    {
      id: '2',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Districts & Schools',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
  ],
};

const NavbarCardSkelton = (props) => {
  const { displayCard, setDisplayCard } = props;
  const wrapperRef = useRef(displayCard);
  useOutsideAlerter(wrapperRef);

  const token = useSelector((state) => state?.profile?.token);
  const userId = useSelector((state) => state?.profile?.userId);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const logOutResponse = useSelector((state) => state?.profile?.logOutResponse);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRole = useSelector((state) => state?.profile?.userRole);

  function useOutsideAlerter(ref) {
    const { handleClickNavCard, setDisplayCard, displayCard } = props;

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // console.log(ref.current.contains(event.target), "displayCarddisplayCarddisplayCard !ref.current.containsn event.target ")

          console.log(
            event.target,
            'displayCarddisplayCarddisplayCard else if condition'
          );

          setDisplayCard(false);

          // setDisplayCard(true);

          // handleClickNavCard(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        // handleClickNavCard(false);
        setDisplayCard(false);
        // document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [displayCard]);
  }

  console.log(logOutResponse, 'from logout responseee');

  // useEffect(() => {

  //   if (logOutResponse === 200) {
  //     dispatch(reset());

  //     navigate("/");
  //     dispatch(setLogOutResponse(''))

  //   }

  // }, [logOutResponse]);
  console.log('hello world');
  const settingCardRoutingObj = {
    MyAccount: () => {
      navigate(`/role/${userRole}/my-account`);
      setDisplayCard(false);
    },
    Help: () => {
      window.open('https://help.fitnessgram.net/', '_blank');
      setDisplayCard(false);
    },
    'Manage Classes': () => {
      let body = {
        user_uuid: userId,
        user_role: selectedRole,
      };

      console.log(body, 'iam body');

      // dispatch(getManageClassesList({ token, body }));

      // dispatch(getSchoolsList({ userId, token }));

      setDisplayCard(false);

      navigate(`/role/${userRole}/manage-classes`);
    },
    Logout: () => {
      // dispatch(logOut(token));

      dispatch(reset());

      navigate('/');
    },
    'Manage Users': () => {
      // dispatch(getSchoolsList({ userId, token }));

      setDisplayCard(false);
      navigate(`/role/${userRole}/manage-users`);
    },
    'District & Schools': () => {
      navigate(`/role/${userRole}/schools`);

      setDisplayCard(false);
    },
    Schools: () => {
      navigate(`/role/${userRole}/schools`);

      setDisplayCard(false);
    },
    Notifications: () => {
      navigate(`/role/${userRole}/Notifications`);
      setDisplayCard(false);
    },

    Import: () => {
      navigate(`/role/${userRole}/Import`);
      setDisplayCard(false);
    },
    'Roles & Privileges': () => {
      navigate(`/role/${userRole}/RolesPrevilages`);
      setDisplayCard(false);
    },

    'End Of Term Process': () => {
      navigate(`/role/${userRole}/EndOFTermProcess`);
      setDisplayCard(false);
    },

    'Manage Mandates': () => {
      navigate(`/role/${userRole}/manage-mandates`);
      setDisplayCard(false);
    },

    // 'Email Settings': () => {
    //   navigate(`/role/${userRole}/email-settings`);
    //   setDisplayCard(false);
    // },
  };

  const handleRouting = (item) => {
    settingCardRoutingObj[item]();
    console.log('in routing function');
  };

  useEffect(() => {
    dispatch(setPreviousValuesOfAddUser(null));
  }, []);

  const SettingsCard = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Card
        maxW='sm'
        overflow={'scroll'}
        h='auto'
        maxHeight='70vh'
        ref={wrapperRef}
        overflowY='auto'
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
        }}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size={'xs'} textTransform='uppercase' color={'primary'}>
                {commonSettingsData.head}
              </Heading>

              <Stack direction='row' h='1px' p={1} mt='1'>
                <Divider orientation='horizontal' border='1px solid #F4F4F4' />
              </Stack>

              {commonSettingsData.list.map((listItem) => {
                return (
                  <>
                    <Box
                      display={'flex'}
                      gap={'4'}
                      alignItems={'center'}
                      mt={3}
                    >
                      <Text textStyle='textHead'>{listItem.icon}</Text>
                      <Text
                        textStyle={'textHead'}
                        className='cursor-pointer'
                        onClick={() => handleRouting(listItem.name)}
                      >
                        {listItem.name}
                      </Text>
                    </Box>

                    {/* <hr className='bg-[#F4F4F4] text-[#F4F4F4] border border-[#F4F4F4]'/> */}

                    <Stack direction='row' h='1px' p={1} mt='1'>
                      <Divider
                        orientation='horizontal'
                        border='1px solid #F4F4F4'
                      />
                    </Stack>

                    {/* <Divider  orientation='horizontal' color={"red"} /> */}
                  </>
                );
              })}
            </Box>
          </Stack>
          {settingsData[userRole]?.map((item) => {
            return (
              <Stack
                key={item.id}
                divider={<StackDivider />}
                spacing='4'
                className='overflow-auto ...'
              >
                <Box>
                  <Heading
                    size='xs'
                    textTransform='uppercase'
                    mt='4'
                    mb='4'
                    color={'primary'}
                  >
                    {item.head}
                  </Heading>

                  <Stack direction='row' h='1px' p={1} mt='1'>
                    <Divider
                      orientation='horizontal'
                      border='1px solid #F4F4F4'
                    />
                  </Stack>

                  {item.list.map((listItem) => {
                    return (
                      <>
                        <Flex
                          gap='2'
                          key={listItem.id}
                          alignItems={'center'}
                          mt={3}
                        >
                          <Text className=''>{listItem.icon}</Text>
                          <Text
                            className=' cursor-pointer'
                            textStyle='h6'
                            onClick={() => handleRouting(listItem.name)}
                          >
                            {listItem.name}
                          </Text>
                        </Flex>

                        <Stack direction='row' h='1px' p={1} mt='1'>
                          <Divider
                            orientation='horizontal'
                            border='1px solid #F4F4F4'
                          />
                        </Stack>
                      </>
                    );
                  })}
                </Box>
              </Stack>
            );
          })}
        </CardBody>
      </Card>
    );
  };

  return (
    <div className=''>
      <Box
        zIndex='1000'
        position='fixed'
        top='5rem'
        right={{ base: '1', md: '1.5' }}
        border='2px solid white'

        // className=" z-[1000] fixed translate-x-[calc(104vw-20rem)] top-[4.5rem] border-2 border-white "
      >
        <SettingsCard />
      </Box>
    </div>
  );
};
export default NavbarCardSkelton;
