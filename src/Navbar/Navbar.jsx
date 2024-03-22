import React, { useContext, useRef, useState, useEffect } from 'react';
// import logo from '../../assets/images/Logo_FitnessGram@2x.png';

import logo from '../assets/images/FITNESSGRAMLOGO.png';

import { useDispatch, useSelector } from 'react-redux';
import {
  SettingOutlined,
  QuestionCircleFilled,
  BellFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Box,
  Flex,
  Grid,
  Image,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { Link, useNavigate } from 'react-router-dom';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import {
  BellIcon,
  PhoneIcon,
  QuestionIcon,
  SearchIcon,
  SettingsIcon,
} from '@chakra-ui/icons';

import { setSelectedRole } from '../store/slices/profileSlice';

import NavbarCardSkelton from '../components/GlobalComponents/NavbarCardSkelton';
import DeleteModal from '../components/DeleteModal';

// let useOutsideClick = (handler) => {
//   let domNode = useRef();
//   const useEffect = () => {
//     let handler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => {
//       document.removeEventListener(MouseEvent, handler);
//     };
//   };
//   return domNode;
// };

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const userRole = useSelector((state) => state.profile.userRole);
  console.log(userRole, 'userRoles');

  const [displayCard, setDisplayCard] = useState(false);

  const handleClickNavCard = (val) => {
    setDisplayCard(val);
  };

  console.log(userRole, 'from navbar');

  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const userData = useSelector((state) => state.profile.user);

  console.log(userData,"userDatauserData")

  console.log(selectedRole, 'in navbar==========>');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatch(setSelectedRole(event.target.value));
    navigate(`/role/${event.target.value}`);
  };
  const handleButtonClick = () => {
    navigate(`/role/${selectedRole}/Notifications/Received`);
  };
  const storageList = {
    1: 'Teacher',
    2: 'SuperAdmin',
    3: 'Student',
    4: 'Parent',
    5: 'SchoolAdministrator',
    6: 'DistrictAdmin',
    7: 'StateAdmin',
    8: 'Partner',
  };

  // let domNode = useOutsideClick(() => {
  //   setDisplayCard(false);
  // });
  return (
    <>
      <Grid
        as='nav'
        position='fixed'
        top='0'
        left='0'
        zIndex='3'
        gridTemplateColumns='repeat(2,1fr)'
        px='6'
        shadow='md'
        w='100%'
        bg='white'
        h='4.5rem'
        border='1px solid red'
      >
        <Flex colSpan='1' align='center' gap='8'>
          <Image
            inlineSize='10rem'
            aspect='auto'
            src={logo}
            alt='FitnessGram'
          />
          <Text textStyle='h3'>Welcome Raj!</Text>
          <Select
            value={selectedRole}
            onChange={handleChange}
            width={'7rem'}
            bg='primary'
            borderColor='primary'
            color='white'
            rounded='full'
            size='sm'
          >
            {userRole?.map((role, index) => (
              <option id={role + index} value={role}>
                {role}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex colSpan='1' justify='flex-end' align='center' gap='8'>
          <InputGroup inlineSize='sm' size='sm'>
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
          <QuestionIcon
            className='cursor-pointer'
            boxSize='5'
            onClick={() => {
              window.open('https://help.fitnessgram.net/', '_blank');
            }}
          />
          <BellIcon
            boxSize='6'
            onClick={handleButtonClick}
            className='cursor-pointer '
          />
          <SettingsIcon
            boxSize='5'
            onClick={() => handleClickNavCard(!displayCard)}
            className='cursor-pointer '
          />
        </Flex>
      </Grid>
      {displayCard ? (
        <NavbarCardSkelton
          handleClickNavCard={handleClickNavCard}
          setDisplayCard={setDisplayCard}
          displayCard={displayCard}
        />
      ) : null}
      <DeleteModal />
     
    </>
  );
};

export default Navbar;
