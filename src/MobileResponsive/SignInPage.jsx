import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Center,
  Box,
  InputGroup,
  InputRightElement,
  Img,
  SimpleGrid,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';

import fitnessLogo from '../assets/images/FitnessGramLogo.svg';
import fitnessHeading from '../assets/images/FITNESSGRAM.png';
import fitnessLoginExcerciseImage from '../assets/images/Physical education-pana.png';

import backgroundImg from '../../src/assets/images/loginbackgroundimage.png';

import { loginInputFieldsData } from './loginFieldsData';
import DisclaimerCardModal from './MobileNav/DisclaimerCardModal';
import { validateFormData } from '../Utilities/FormValidation';
import { QuestionIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ErrorResponse from '../components/GlobalComponents/ErrorResponse';
import ForgetUserName from '../features/DistrictAdmin/DataManagement/ManageUsers/SelectTabs/ForgetUserName';
import ForgetPassword from './ForgetScreens/ForgetPassword';
import ForgetDistrict from './ForgetScreens/ForgetDistrict';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, getUserRole } from '../store/slices/profileSlice';

const SignInPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const errorResponse = useSelector((state) => state?.profile?.errorResponse);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const token = useSelector((state) => state?.profile?.token);

  const loadingOne = useSelector((state) => state?.profile?.loadingOne);

  const loadingTwo = useSelector((state) => state?.profile?.loadingTwo);

  const userRoles = useSelector((state) => state.profile.userRole);

  const userId = useSelector((state) => state.profile.userId);

  const [showImage, setShowImage] = useState(false);

  const [loginDetails, setLoginDetails] = useState({
    user_name: '',
    password: '',
    district_code: '',
    disclaimerAccepted: '',
  });

  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [isPopUpShowPwd, setIsPopUpShowPwd] = useState(false);
  const [isPopUpShowCode, setIsPopUpShowCode] = useState(false);

  const [disclaimerPopUpOpened, setDisclaimerPopUpOpened] = useState(false);

  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    if (event.target.name === 'disclaimerAccepted') {
      setDisclaimerPopUpOpened(true);
    } else {
      setLoginDetails({
        ...loginDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    const { ...payload } = loginDetails;

    console.log(payload, 'payload');

    let errorObj = validateFormData(payload);

    if (Object.keys(errorObj)?.length > 0) {
      setErrors(errorObj);
    } else {
      setErrors({});

      console.log('form submitted');

      console.log(loginDetails, 'loginDetailsloginDetailsloginDetails');

      const loginUserDetails = {
        user_name: loginDetails.user_name,
        password: loginDetails.password,
        district_code: loginDetails.district_code,
      };

      dispatch(getUser(loginUserDetails));
    }

    console.log(errorObj, 'errorObjerrorObj');
  };

  useEffect(() => {
    setShowImage(true);
  });

  useEffect(() => {
    console.log(userId, 'in loginpage');
    userId && dispatch(getUserRole({ id: userId, token }));
  }, [userId, dispatch]);

  useEffect(() => {
    console.log(userRole, 'userRole in ');
    console.log(userRoles, 'userRoles in loginPage');
    token && userRole && navigate(`/role/${userRole}`);
  }, [userRole]);

  return (
    <>
      <Box
        minH='100vh'
        display='flex'
        flexDirection='column'
        overflow='scroll'
        className='example'
      >
        <Grid
          templateColumns={{
            base: '100%',
            md: '48% 52%',
            xl: '54% 46%',
            '2xl': '63% 37%',
          }}
          flex='1'
        >
          <Box
            display='flex'
            flexDir='column'
            justifyContent={{ base: 'center', md: 'center' }}
            alignItems='center'

          >


            <Box h="50%"  display='flex'
            flexDir='column'
            justifyContent={{ base: 'center', md: 'center' }}
            alignItems='center'> 


            <Img
              src={fitnessLogo}
              w={{ base: '20vw', lg: '5vw', md: '10vw' }}
              pb={{ base: '3' }}
              pt={{ base: '3' }}
            />
            <Img
              src={fitnessHeading}
              w={{ base: '60vw', md: '20vw', lg: '15vw' }}
              pb={{ base: '3' }}
              pt={{ base: '3' }}
            />

            <Text
              textAlign={'center'}
              gap='10'
              w={{ base: '100%', md: '100%', xl: '53%' }}
              // fontSize={{ base: '12px', md: '14px', lg: '16px' }}
              textStyle="textHead"
              mt={{base:'', xl:'0.8rem'}}

            >
              <b>FitnessGram</b> is one of the most widely used health-related
              fitness assessment tools in the world, and it's backed by decades
              of science, research, and the vision of <b>Dr.Kenneth H.Cooper</b>
              , the "Father of Aerobics."
            </Text>

            </Box>


          <Box h="50%">

          <Img
              src={fitnessLoginExcerciseImage}
              mt='10'
              h={showImage ? 'auto' : ''}
              maxW='100%'
              rounded='lg'
              transition='transform 1s ease-in-out'
              transform={showImage ? 'translateY(-40px)' : ''}
    
              objectFit="fill"
            />

          </Box>



           
          </Box>
          <Box
            height='100%'
            style={{ backgroundImage: `url(${backgroundImg})` }}
            css={{
              backgroundPosition: 'right 0.2rem',
            }}
            maxW='100%'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundColor='#1895C4'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            flex='1'
            px='2'
          >
            <Box w={{ lg: '70%', '3xl': '50%' }} >
              <Text
                textColor='white'
                fontSize={'3xl'}
                fontWeight={'bold'}
                mt='2'
                mb={{base:'2', lg:"1rem", xl:'2rem'}}
 
              >
                Login here
              </Text>
              <Text textColor='white' whiteSpace={{base:"wrap", md:"nowrap"}} fontWeight="thin"   mt={{base:'2', xl:'5'}}  mb={{base:'2',  lg:"1rem", xl:'2rem'}}
           >
                {' '}
                * Password & District Code are Case Sensitive.
              </Text>

              {loginInputFieldsData?.dataList?.map((each) => (
                <Box mt='3'>
                  <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    mb='1'
                  >
                    <Text textColor='white'>{each?.labelOne}</Text>
                    <Text
                      textColor='white'
                      cursor='pointer'
                      onClick={() => {
                        if (each?.name === 'user_name') {
                          setIsPopUpShow(true);
                        }

                        if (each?.name === 'password') {
                          setIsPopUpShowPwd(true);
                        }

                        if (each?.name === 'district_code') {
                          setIsPopUpShowCode(true);
                        }
                      }}
                    >
                      {each?.labelTwo}
                    </Text>
                  </Flex>

                  {each?.name !== 'password' ? (
                    <Input
                      placeholder='e.g. John'
                      type={each?.inputType}
                      bgColor='white'
                      rounded='md'
                      py='5'
                      name={each?.name}
                      value={loginDetails[each?.name]}
                      onChange={handleChange}
                      border={errors && errors[each?.name] && '1px solid red'}
                    />
                  ) : (
                    <InputGroup size='auto'>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder=''
                        backgroundColor='#F5F9FF'
                        py='2'
                        px='4'
                        name='password'
                        id='password'
                        border={errors && errors[each?.name] && '1px solid red'}
                        rounded='md'
                        value={loginDetails[each?.name]}
                        onChange={handleChange}
                      />
                      <InputRightElement
                        h='full'
                        pb='1.5'
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        pr='1rem'
                      >
                        <span
                          size='lg'
                          backgroundColor='#F5F9FF'
                          onClick={handleClick}
                        >
                          {show ? (
                            <ViewIcon cursor={'pointer'} />
                          ) : (
                            <ViewOffIcon cursor={'pointer'} />
                          )}
                        </span>
                      </InputRightElement>
                    </InputGroup>
                  )}

                  <Text textColor='red' mt='2'>
                    {errors && errors[each?.name]}
                  </Text>
                </Box>
              ))}

              <Box mt='3'>
                <Flex gap='3' alignItems='center' textColor='white'>
                  <Checkbox
                    isChecked={loginDetails?.disclaimerAccepted}
                    borderColor='white'
                    name='disclaimerAccepted'
                    onChange={handleChange}
                  >
                    I agree to the Terms of Use
                  </Checkbox>
                </Flex>
                <Text textColor='red' mt='2'>
                  {errors && errors['disclaimerAccepted']}
                </Text>
              </Box>

              <Box mt='3'>
                <Button
                  w='full'
                  bgColor='white'
                  rounded='md'
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
              </Box>

              <Flex className='gap-2' mt='3' mb='3rem' >
    
                <QuestionIcon mt='1' color={'white'} cursor="pointer" onClick = {() => {
                  window.open('https://help.fitnessgram.net/', '_blank')
                }} />
                <Text color='white' textDecoration='underline' cursor="pointer"  onClick = {() => {
                  window.open('https://help.fitnessgram.net/', '_blank')
                }} >
                  Help?
                </Text>


                
              </Flex>
            </Box>
          </Box>
        </Grid>

        <DisclaimerCardModal
          disclaimerPopUpOpened={disclaimerPopUpOpened}
          setDisclaimerPopUpOpened={setDisclaimerPopUpOpened}
          loginDetails={loginDetails}
          setLoginDetails={setLoginDetails}
        />

        <ErrorResponse message={errorResponse} />

        {isPopUpShow ? (
          <ForgetUserName
            isPopUpShow={isPopUpShow}
            setIsPopUpShow={setIsPopUpShow}
          />
        ) : null}
        {isPopUpShowPwd ? (
          <ForgetPassword
            isPopUpShowPwd={isPopUpShowPwd}
            setIsPopUpShowPwd={setIsPopUpShowPwd}
          />
        ) : null}
        {isPopUpShowCode ? (
          <ForgetDistrict
            isPopUpShowCode={isPopUpShowCode}
            setIsPopUpShowCode={setIsPopUpShowCode}
          />
        ) : null}
      </Box>
    </>
  );
};

export default SignInPage;
