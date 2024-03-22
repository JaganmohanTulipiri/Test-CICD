import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  HStack,
  Center,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import ChangeUsername from '../../components/GlobalComponents/SuperAdmin/Account/ChangeUsername';
import ChangePassword from '../../components/GlobalComponents/SuperAdmin/Account/ChangePassword';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserRole, reset } from '../../store/slices/profileSlice';
import { validateFormData } from '../../Utilities/FormValidation';
import { getEditUserProfileApiCall } from '../authentication/components/schoolAdmin/schoolAdminSlice';
import { useEffect } from 'react';

const inputFieldsDataList = [
  {
    id: 1,
    name: 'first_name',
    label: 'First Name',
    type: 'text',
  },

  {
    id: 2,
    name: 'middle_initial',
    label: 'Middle Name',
    type: 'text',
  },

  {
    id: 3,
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
  },

  {
    id: 4,
    name: 'email',
    label: 'Email',
    type: 'text',
  },
];

const Myaccount = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [editClicked, setEditClicked] = useState(true);

  const user = useSelector((state) => state?.profile?.user?.response);

  const token = useSelector((state) => state?.profile?.token);

  const userId = useSelector((state) => state.profile.userId);

  const code = useSelector((state) => state?.profile?.code);

  const loggedInUserDetails = useSelector(
    (state) => state?.profile?.loggedInUserDetails
  );

  const editUserResponse = useSelector(
    (state) => state?.schoolAdmin?.editUserResponse
  );

  const [userDetails, setUserDetails] = useState({
    first_name: loggedInUserDetails?.first_name,
    middle_initial: loggedInUserDetails?.middle_initial,
    last_name: loggedInUserDetails?.last_name,
    email: loggedInUserDetails?.email,
  });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  console.log(user);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e);

    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { ...payload } = userDetails;

    const errorsObj = validateFormData(payload);

    console.log(errorsObj, 'iam errorsObjerrorsObj');

    if (Object.keys(errorsObj)?.length > 0) {
      setErrors(errorsObj);
    } else {
      setErrors({});

      console.log('form submitted');

      const finalBody = {
        first_name: userDetails?.first_name,
        middle_initial: userDetails?.middle_initial,
        last_name: userDetails?.last_name,
        email: userDetails?.email,
      };

      const userID = loggedInUserDetails?.uuid;

      dispatch(getEditUserProfileApiCall({ userID, finalBody, token }));
    }
  };

  useEffect(() => {
    if (code === 200) {
      setEditClicked(true);
      dispatch(getUserRole({ id: userId, token }));
    }
  }, [code]);

  useEffect(() => {
    console.log(
      loggedInUserDetails,
      'loggedInUserDetailsloggedInUserDetailsloggedInUserDetails'
    );

    console.log(
      user,
      'loggedInUserDetailsloggedInUserDetailsloggedInUserDetails i am user'
    );

    setUserDetails({
      first_name: loggedInUserDetails?.first_name,
      middle_initial: loggedInUserDetails?.middle_initial,
      last_name: loggedInUserDetails?.last_name,
      email: loggedInUserDetails?.email,
    });
  }, [loggedInUserDetails]);

  return (
    <Box>
      <Text mb='5' textStyle={'text'}>
        <>MY ACCOUNT</>
      </Text>

      <HStack
        display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}
        direction='row'
        justifyContent='flex-start'
        gap='2'
      >
        <Box>
          <Text textStyle={'textHead'}>UserName</Text>
          <Input
            disabled
            type='text'
            autoFocus
            bg='#F5F9FF'
            border='none'
            mt='2'
            value={user?.user_name}
          />{' '}
          <ChangeUsername />
        </Box>

        <Box>
          <Text textStyle={'textHead'}>Password</Text>
          <InputGroup size='md'>
            <Input
              type={show ? 'text' : 'password'}
              placeholder=''
              autoFocus
              value='***************'
              bg='#F5F9FF'
              border='none'
            />
          </InputGroup>

          <ChangePassword />
        </Box>

        {/* <Box>
          <Text textStyle={"textHead"} display={"none"}>
            Password
          </Text>
          <InputGroup size="md" display={"none"}>
            <Input
              type={show ? "text" : "password"}
              placeholder=""
              autoFocus
              value="***************"
              bg="#F5F9FF"
              border="none"
            />
          </InputGroup>

          <Text
            textStyle={"h3"}
            color="primary"
            textDecoration={"underline"}
            mt="5rem"
            ml="5"
            cursor="pointer"
            onClick={() => {
              dispatch(reset());

              navigate("/");
            }}
          >
            Logout
          </Text>
        </Box> */}
      </HStack>
      <Divider size='lg' borderColor='gray' mt='3' mb='3' />

      <Box display='flex' gap={{ base: '1rem', md: '3rem', lg: '5rem' }}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap='6'
          w='90%'
        >
          {inputFieldsDataList?.map((each) => (
            <GridItem>
              <Box>
                <Text textStyle={'textHead'}>{each?.label}</Text>
                <Input
                  type='text'
                  autoFocus
                  bg='#F5F9FF'
                  border={editClicked ? '1px solid black' : 'none'}
                  mt='2'
                  name={each?.name}
                  value={userDetails?.[each?.name]}
                  onChange={handleChange}
                  disabled={editClicked ? true : false}
                />
                {errors?.[each?.name] && (
                  <Text color='red'>{errors?.[each?.name]}</Text>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>

        <Box
          //display={!editClicked ? 'none' : 'flex'}
          display={{
            base: 'none',
            lg: !editClicked ? 'none' : 'flex',
            md: !editClicked ? 'none' : 'flex',
          }}
          onClick={() => setEditClicked(false)}
        >
          <Text
            marginRight='0.5rem'
            textDecoration='underline'
            cursor='pointer'
          >
            Edit
          </Text>
          <FiEdit className='mt-1 text-[#0081c8]' cursor='pointer' />
        </Box>
      </Box>
      <Box display={{ base: 'flex' }}>
        <Box
          //display={!editClicked ? 'none' : 'flex'}
          display={{
            md: 'none',
            base: !editClicked ? 'none' : 'flex',
            lg: 'none',
          }}
          mt='1rem'
          onClick={() => setEditClicked(false)}
        >
          <Text
            marginRight='0.5rem'
            textDecoration='underline'
            cursor='pointer'
            textStyle={'textHead'}
          >
            Edit
          </Text>
          <FiEdit className='mt-1 text-[#0081c8]' cursor='pointer' size='12' />
        </Box>
        <Box>
          <Text textStyle={'textHead'} display={'none'}>
            Password
          </Text>
          <InputGroup size='md' display={'none'}>
            <Input
              type={show ? 'text' : 'password'}
              placeholder=''
              autoFocus
              value='***************'
              bg='#F5F9FF'
              border='none'
            />
          </InputGroup>

          <Text
            textStyle={'h3'}
            color='primary'
            textDecoration={'underline'}
            mt='1rem'
            ml='5'
            cursor='pointer'
            onClick={() => {
              dispatch(reset());

              navigate('/');
            }}
            display={{ base: 'none', lg: 'block', md: 'block' }}
          >
            Logout
          </Text>
        </Box>
      </Box>
      {editClicked ? null : (
        <>
          <Box>
            {!editClicked ? (
              <Center gap='2rem' mt='2'>
                <Box rounded='lg' bg='red' p='2' textAlign={'center'} display={{base:"flex",md:"none",lg:"none"}}>
                  <Text
                    textStyle={'h3'}
                    color='white'
                    textAlign={'left'}
                    px='-5rem'
                    mt='0rem'
                    cursor='pointer'
                    onClick={() => {
                      dispatch(reset());

                      navigate('/');
                    }}
                  >
                    Logout
                  </Text>
                </Box>
                <Button
                  className='bg-white text-black text-sm shadow-2xl px-4 gap-6 rounded-md'
                  onClick={() => {
                    setEditClicked(true);
                  }}
                >
                  <Text textStyle={'textHead'}> Cancel </Text>
                </Button>

                <div className='text-center'>
                  <Button
                    className=' bg-green px-4 text-white rounded-2xl'
                    onClick={handleSubmit}
                  >
                    <Text textStyle={'textHead'}>Save</Text>
                  </Button>
                </div>
              </Center>
            ) : null}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Myaccount;
