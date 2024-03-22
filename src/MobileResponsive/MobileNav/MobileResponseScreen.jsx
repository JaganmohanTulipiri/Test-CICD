import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  Card,
  Select,
  InputGroup,
  InputLeftElement,
  Image,
  Img,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import logo from '../../assets/images/FITLOGO.jpg';
import { Outlet } from 'react-router-dom';

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {
  student,
  teacher_schoolAdministrator,
  parent,
  superAdmin,
  partner,
  districtAdmin,
  stateAdmin,
} from '../../assets/roles/rolebasedList';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BellIcon,
  PhoneIcon,
  QuestionIcon,
  SearchIcon,
  SettingsIcon,
} from '@chakra-ui/icons';

import { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavbarCardSkelton from '../../components/GlobalComponents/NavbarCardSkelton';
import SettingScreen from '../PopupMobile/SettingScreen';
import { useNavigate } from 'react-router-dom';
import {
  reset,
  setActivatingID,
  setHoveringID,
  setOpenSideBar,
  setSelectedRole,
} from '../../store/slices/profileSlice';
import { Space } from 'antd';
import SuccessResponse from '../../components/GlobalComponents/SuccessResponse';
import ErrorResponse from '../../components/GlobalComponents/ErrorResponse';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

export default function MobileResponseScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log('hello world');

  return (
    <Box
      minH='0vh'
      bg={useColorModeValue('gray.100', 'gray.900')}
      w='full'
      h='full'
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'none' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        // size="full"
        // w="20%"
        w={{ base: '80%', md: '25rem' }}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'></Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);

  const activatingID = useSelector((state) => state?.profile?.activatingID);
  const hoveringID = useSelector((state) => state?.profile?.hoveringID);

  const loginResponse = useSelector((state) => state?.profile?.user);

  console.log(loginResponse, 'login');
  const smartCoachResponse = useSelector(
    (state) => state?.profile?.smartCoachResponse
  );

  const activityGramResponse = useSelector(
    (state) => state?.profile?.activityGramEventsList
  );
  const activityLogResponse = useSelector(
    (state) => state?.profile?.getActivityLogEvents
  );

  const obj = {
    teacher: teacher_schoolAdministrator,
    schoolAdmin: teacher_schoolAdministrator,
    student: student,
    Parent: parent,
    districtAdmin: districtAdmin,
    StateAdmin: stateAdmin,
    superAdmin: superAdmin,
    Partner: partner,
  };

  const routingObj = {
    teacher: {
      1: () => {
        navigate('/role/teacher');
      },
      2: () => {
        navigate(`/role/${userRole}/adminTest`);
      },
      3: () => {
        navigate('/role/Teacher/SmartCoach');
      },
      4: () => {
        navigate('/role/Teacher/reports');
      },

      5: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      6: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },

    superAdmin: {
      1: () => {
        navigate('/role/SuperAdmin');
      },
      2: () => {
        navigate('/role/SuperAdmin/Districts/DistrictLookup');
      },
      3: () => {
        navigate('/role/SuperAdmin/Licenses');
      },
      4: () => {
        navigate('/role/SuperAdmin/Notifications/Received');
      },
      5: () => {
        navigate('/role/SuperAdmin/SSOConfigMain');
      },
      6: () => {
        navigate('/role/SuperAdmin/StatesPartners');
      },
    },
    student: {
      1: () => {
        navigate('/role/Student');
      },

      2: () => {
        navigate('/role/Student/EnterTestResults');
      },

      3: () => {
        navigate('/role/Student/SmartCoach');
      },
      4: () => {
        navigate('/role/Student/reports');
      },

      6: () => {
        navigate('/role/Student/ActivityGramEvent');
      },

      8: () => {
        navigate('/role/Student/ActivityLog');
      },

      7: () => {
        navigate('/role/Student/ActivityGramLiteTestEvents');
      },
    },
    Parent: {},
    schoolAdmin: {
      1: () => {
        navigate('/role/schoolAdmin');
      },

      2: () => {
        navigate(`/role/${userRole}/adminTest`);
      },

      3: () => {
        navigate('/role/schoolAdmin/SmartCoach');
      },
      4: () => {
        navigate('/role/schoolAdmin/reports');
      },

      5: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      6: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },
    districtAdmin: {
      1: () => {
        navigate('/role/districtAdmin/data-management');
      },
      2: () => {
        navigate('/role/districtAdmin/system-admin');
      },
      3: () => {
        navigate('/role/districtAdmin/reports');
      },
      4: () => {
        navigate('/role/districtAdmin/SmartCoach');
      },
      5: () => {
        navigate('/role/districtAdmin/district-statistics');
      },
      6: () => {
        navigate('/role/districtAdmin/system_usage');
      },

      7: () => {
        navigate('/role/districtAdmin/fitnessgram');
      },

      8: () => {
        navigate(`/role/${userRole}/adminTest`);
      },

      9: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      10: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },
    stateAdmin: {
      1: () => {
        navigate(`/role/${userRole}/data-management`);
      },
      2: () => {
        navigate('/role/StateAdmin/system-admin');
      },
      3: () => {
        navigate('/role/StateAdmin/reports');
      },
      4: () => {
        navigate('/role/StateAdmin/smart-coach');
      },
      5: () => {
        navigate('/role/StateAdmin/district-statistics');
      },
      6: () => {
        navigate('/role/StateAdmin/district-statistics');
      },
    },
    Partner: {
      1: () => {
        navigate('/role/Partner');
      },
      2: () => {
        navigate('/role/Partner/Reports');
      },
      3: () => {
        navigate('/role/Partner/SmartCoach');
      },
    },
  };

  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseIsActive, setCollapseIsActive] = useState(false);
  const [activeID, setActiveID] = useState(1);
  const [hoverdID, setHoveredID] = useState(null);

  const [sideNavId, setSideNavId] = useState(null);

  const sideNavRouting = (role, id, clickedNavItem) => {
    setSideNavId(id);
    routingObj[selectedRole][id]();
    console.log('id');
    onClose();
  };

  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      // w={{ base: "80%", md: "20rem" }}
      pos='fixed'
      h='full'
      mt='2'
      {...rest}
    >
      <Flex alignItems='center' mx='8' justifyContent='space-between'>
        <CloseButton
          display={{ base: 'flex', lg: 'none' }}
          onClick={onClose}
          color='black'
        />
      </Flex>
      {obj[selectedRole]?.map((link, id) => (
        <NavItem
          key={link.id}
          icon={activatingID == link.id ? link.img2 : link.img}
          py='2'
          mt='2'
          _hover={{ bg: 'primary' }}
          bg={activatingID == link.id || hoveringID == link.id ? 'primary' : ''}
          textColor={
            activatingID == link.id || hoveringID == link.id ? 'white' : 'black'
          }
          onClick={() => {
            console.log(link.id, link.name, 'item id+++++++******>');
            sideNavRouting(selectedRole, link.id, link);

            dispatch(setActivatingID(link.id));

            // if (link.id === "1") {
            //   navigate(`/role/${selectedRole}`);
            // } else if (link.name === "REPORTS") {
            //   navigate(`/role/${selectedRole}/reports`);
            // } else if (link.name === "SMART COACH") {
            //   navigate(`/role/${selectedRole}/SmartCoach`);
            // }
            // if (link.name === "OTHERS") {
            //   setOthersItemList(link);

            //   setActiveID(link.insideList[0].id);

            //   dispatch(setActivatingID(link.insideList[0].id));

            //   navigate("/role/Student/ActivityGramTestEvents");
            // } else {
            //   if (link.id === "1") {
            //     navigate(`/role/${selectedRole}`);
            //   }
            // }
          }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, id, ...rest }) => {
  return (
    <Box
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'white',
          color: 'black',
        }}
        color='black'
        {...rest}
      >
        {icon && <Img src={icon} className='w-5 h-5 ' mr='4' fontSize='16' />}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const [show, setShow] = useState(false);
  const code = useSelector((state) => state?.profile?.code);
  console.log(code, 'from 394');

  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = (event) => {
    dispatch(setSelectedRole(event.target.value));
    navigate(`/role/${event.target.value}`);
  };

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const userRole = useSelector((state) => state.profile.userRole);

  const userData = useSelector(
    (state) => state.profile.user?.response?.first_name
  );

  console.log(userData, userRole, 'userDatauserData');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const openSideBar = useSelector((state) => state?.profile?.openSideBar);

  console.log(userRole, 'userRoles');

  const ref = useRef(null);

  const [displayCard, setDisplayCard] = useState(false);

  const handleClickNavCard = (val) => {
    setDisplayCard(val);
  };

  const clearLogout = () => {
    dispatch(reset());

    navigate('/');
  };

  // console.log(displayCard, "displayCarddisplayCarddisplayCard")

  return (
    <Box w='100%' h='4.5rem'>
      {/* <Flex
        ml={{ base: 0, md: 0, lg: 20 }}
        px={{ base: 4, md: 4 }}
        height='20'
        alignItems='center'
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'space-between' }}
        {...rest}
        border='1px solid red'
      >
        <IconButton
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
          onClick={onOpen}
          variant='outline'
          border={'1px gray solid'}
          aria-label='open menu'
          icon={<FiMenu />}
        /> */}

      <Box
        display='flex'
        w='100%'
        ml={{ base: 0, md: 0, lg: 0 }}
        px={{ base: 4, md: 4, lg: 0 }}
        height='20'
        alignItems='center'
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'space-between' }}
        {...rest}
      >
        <IconButton
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
          onClick={onOpen}
          variant='outline'
          border={'1px gray solid'}
          aria-label='open menu'
          icon={<FiMenu />}
        />

        <Box
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          justifyContent={'center'}
          alignItems={'center'}
          w='5.2rem'
          mt={{ md: '0px' }}
          h='7.2rem'
          bg='white'
      
          // shadow="sm"

          cursor='pointer'
          
        >
          <Box onClick={() => {
            dispatch(setOpenSideBar(!openSideBar));
          }}>
  <HamburgerIcon boxSize={25} />


          </Box>
        
        </Box>

        <Flex
          gap='8'
          w='60%'
          // ml={{ base: 0, md: 0, lg: 0 }}
          // px={{ base: 4, md: 4 }}
          height='20'
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          alignItems='center'
        >
          <Image
            inlineSize='10rem'
            // w={['10rem', '5rem', '8rem', '8rem']}
            // h={['2rem', '2rem', '2rem', '2rem']}
            mt={{ base: '0', md: '1', lg: '1' }}
            aspect='auto'
            src={logo}
            alt='FitnessGram'
          />

          <Box display='flex' gap='2'>
            <Text
              display={{ base: 'none', md: 'none', lg: 'block' }}
              color='black'
              mt='3'
              textStyle={'textHead'}
              whiteSpace='nowrap'
            >
              Welcome {userData} !
            </Text>
            <Select
              value={selectedRole}
              onChange={handleChange}
              //width={['0', '0', '8rem', '10rem']}
              bg='primary'
              borderColor='primary'
              color='white'
              rounded='full'
              size='sm'
              mt='1'
              display={{ base: 'none', md: 'none', lg: 'block' }}
            >
              {userRole?.map((role, index) => (
                <option id={role + index} value={role}>
                  {role}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>

        <HStack
          spacing={{ base: '0', md: '6' }}
          w={{ base: '10%', lg: '40%' }}
          display='flex'
          justifyContent='flex-end'
        >
          <Box
            display={{ base: 'none', md: 'none', lg: 'flex' }}
            justifyContent='center'
            alignItems='center'
            gap={{ base: '0', lg: '2' }}
          >
            <Box mt='2'>
              {/* <InputGroup inlineSize='sm' size='sm'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<SearchIcon color='gray-3' />}
                      ml={{ base: 'none', md: 'none', lg: '1rem' }}
                    />
                    <Input
                      borderColor='gray-3'
                      rounded='full'
                      size='sm'
                      type='text'
                      placeholder='Search'
                      width={[
                        '10%', // 0-30em
                        '50%', // 30em-48em
                        '55%', // 48em-62em
                        '60%', // 62em+
                        '80%',
                        '100%',
                      ]}
                      ml={{ base: 'none', md: 'none', lg: '1rem' }}
                    />
                  </InputGroup> */}
            </Box>
            <Box
              display='flex'
              gap='5'
              justifyContent='center'
              alignItems='center'
              mt='1'
            >
              {/* <InputGroup inlineSize='sm' size='sm'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<SearchIcon color='gray-3' />}
                      ml={{ base: 'none', md: 'none', lg: '1rem' }}
                    />
                 <Input
                      borderColor='gray-3'
                      rounded='full'
                      size='sm'
                      type='text'
                      placeholder='Search'
                      // width={[
                      //   '10%', // 0-30em
                      //   '50%', // 30em-48em
                      //   '55%', // 48em-62em
                      //   '60%', // 62em+
                      //   '80%',
                      //   '100%',
                      // ]}
                      ml={{ base: 'none', md: 'none', lg: '1rem' }}

                           
                    />

                      <Input type="text"/>



                  </InputGroup> */}
              {/* <Input type="text" /> */}
              <InputGroup inlineSize='12rem' size='sm'>
                <InputLeftElement
                  pointerEvents='none'
                  children={<SearchIcon color='gray-3' />}
                />
                <Input
                  borderColor='gray-3'
                  rounded='full'
                  size='sm'
                  type='text'
                  placeholder='Search'
                />
              </InputGroup>

              <FaUser
                boxSize='5'
                cursor='pointer'
                onClick={() => {
                  navigate(`/role/${selectedRole}/my-account`);
                }}
              />
              <BellIcon
                boxSize='5'
                cursor='pointer'
                ml='2'
                onClick={() => {
                  navigate(`/role/${selectedRole}/Notifications`);
                }}
              />

              <Box
                id='settingsIconElement'
                onClick={() => {
                  handleClickNavCard(!displayCard);
                }}
              >
                <SettingsIcon cursor='pointer' boxSize='5' ref={ref} ml='2' />
              </Box>
            </Box>
          </Box>

          <Menu>
            <MenuButton
              py={6}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <VStack
                  display={{ sm: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                ></VStack>
                <Box display={{ sm: 'flex', md: 'flex', lg: 'none' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <BellIcon boxSize={'5'} />
                <Text pl='4'>Help</Text>
              </MenuItem>

              <MenuItem>
                <QuestionIcon />
                <Text pl='4'>Notifications</Text>
              </MenuItem>
              <MenuItem>
                <SettingsIcon
                  onClick={() => handleClickNavCard(!displayCard)}
                />
                <Text pl='4' onClick={() => handleClickNavCard(!displayCard)}>
                  Settings
                </Text>
              </MenuItem>

              <MenuDivider />
              <MenuItem onClick={clearLogout}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
      {/* </Flex> */}
      {displayCard ? (
        <NavbarCardSkelton
          handleClickNavCard={handleClickNavCard}
          setDisplayCard={setDisplayCard}
          displayCard={displayCard}
        />
      ) : null}
      {code && code === 200 ? <SuccessResponse /> : <ErrorResponse />}
    </Box>
  );
};
