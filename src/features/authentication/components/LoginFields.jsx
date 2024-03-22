import React, { useEffect, useState, useRef } from 'react';
import helpIconImage from '../../../assets/images/Icon awesome-question-circle.png';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setLoginForgotName,
  setIsLoading,
} from '../../../pages/AuthWorkFlow/authSlice';
import { getUser, getUserRole } from '../../../store/slices/profileSlice';
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

const LoginFields = (props) => {
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state?.profile?.isLoading);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const userId = useSelector((state) => state.profile.userId);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);
  const userRoles = useSelector((state) => state.profile.userRole);

  console.log(
    userRole,
    token,
    loginResponse,
    'iam userRole userRole userRole, token, token, token'
  );

  console.log(props, 'iam props');

  const dispatch = useDispatch();

  const {
    checkboxClicked,
    isDisclaimerAccepted,
    checboxChecked,
    forgotsClicked,
  } = props;

  console.log(isDisclaimerAccepted, 'disclaimer card');

  const [data, setData] = useState({
    username: '',
    password: '',
    districtCode: '',
    isChecked: false,
  });

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  // useEffect(() => {
  //   useRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(user));
  // }, [user]);

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(pwd));
  //   setValidMatch(pwd === matchPwd);
  // }, [pwd, matchPwd]);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd, matchPwd]);

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

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const setField = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const settingCheckBox = () => {
    let checkBoxEl = document.getElementById('checkbox');

    if (isDisclaimerAccepted) {
      console.log('from if blcok', isDisclaimerAccepted);
      checkBoxEl.checked = true;
      setField('isChecked', true);
    } else {
      console.log('from else blcok', isDisclaimerAccepted);

      checkBoxEl.checked = false;
      setField('isChecked', false);
    }
  };

  const handleChange = (event) => {
    console.log(event);

    if (event.target.type === 'checkbox') {
      checkboxClicked(true);
    } else {
      setField([event.target.name], event.target.value);
    }
  };

  const validate = () => {
    let errors = {};

    const { username, password, districtCode, isChecked } = data;

    if (!username || username.length === 0) {
      errors.username = '*Required';
    }

    if (!password || password.length === 0) {
      errors.password = '*Required';
    }

    if (!districtCode || districtCode.length === 0) {
      errors.districtCode = '*Required';
    }

    if (!isChecked) {
      errors.isChecked = '*Required';
    }

    return errors;
  };

  useEffect(() => {
    if (!checboxChecked) {
      if (isDisclaimerAccepted) {
        settingCheckBox();
      }
      settingCheckBox();
    }
  }, [checboxChecked, isDisclaimerAccepted]);

  console.log(data, 'iam data');

  const forgotButtonClicked = (event) => {
    event.stopPropagation();

    console.log(event.target.getAttribute('name'), 'forgots nameee');

    dispatch(setLoginForgotName(event.target.getAttribute('name')));
    forgotsClicked(event.target.getAttribute('name'), true);
  };

  const formSubmitted = (event) => {
    event.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      console.log('form failed to submit');

      setErrors(errors);
    } else {
      dispatch(setIsLoading(true));
      console.log('form submitted successfully');

      let loginDetails = {
        username: data.username,
        password: data.password,
        districtCode: data.districtCode,
        isChecked: data.isChecked,
      };

      const loginUserDetails = {
        user_name: data.username,
        password: data.password,
      };

      dispatch(getUser(loginUserDetails));

      console.log(loginDetails, 'loginDetailsobj');

      let checkBoxEl = document.getElementById('checkbox');
      checkBoxEl.checked = false;

      setData({
        username: '',
        password: '',
        districtCode: '',
        isChecked: false,
      });

      setUser('');
      setPwd('');
      setMatchPwd('');
    }
  };

  useEffect(() => {
    console.log(userId, 'in loginpage');
    userId && dispatch(getUserRole({ id: userId, token }));
  }, [userId]);

  useEffect(() => {
    console.log(userRole, 'userRole in ');
    console.log(userRoles, 'userRoles in loginPage');
    token && userRole && navigate(`/role/${userRole}`);
  }, [userRole]);

  // useEffect(() => {
  // 	console.log(loginResponse, "before 2nd api");
  // 	if (loginResponse?.code === 200) {
  // 		let id = loginResponse?.response?.uuid;
  // 		dispatch(getUserRole({ id, token }));
  // 	}

  // 	if (loginResponse?.code === 200 && userRole?.length) {
  // 		navigate(`/role/${userRole}`);
  // 	}

  // }, [loginResponse, userRole]);

  console.log(loginResponse, 'loginResponse from login fileds');

  return (
    <>
      <div className='col-start-9 col-span-12'>
        <>
          <div className='md:w-[90%] xl:w-[110%] md:pt-5 xl:pt-0'>
            <div className='flex flex-col  text-[#FFFFFF] mb-5 xl:pb-10'>
              <h1 className='text-3xl mb-5'>Login here</h1>
              <p className='text-sm'>
                * Password & District Code are Case Sensitive.
              </p>
            </div>

            <form className='' onSubmit={formSubmitted}>
              <div className='mb-2'>
                <div className='flex justify-between items-center text-[#FFFFFF] text-xs'>
                  <label htmlFor='username'>Username</label>
                  <p
                    name='usernameForgot'
                    className='cursor-pointer'
                    onClick={forgotButtonClicked}
                  >
                    Forgot?
                  </p>
                </div>
                <div>
                  <input
                    type='text'
                    id='username'
                    ref={userRef}
                    value={data.username}
                    name='username'
                    onChange={handleChange}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    className={`${
                      errors.username === '*Required'
                        ? 'border-1 border-[#f50c0c]'
                        : ''
                    } block w-full px-4 py-2 
                     mt-2  bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>

                {errors && errors.username && (
                  <p className='text-[#f50c0c]'>{errors.username}</p>
                )}
              </div>

              <div className='mb-2'>
                <div className='flex justify-between items-center text-[#FFFFFF] text-xs'>
                  <label htmlFor='password'>Password</label>
                  <p
                    name='passwordForgot'
                    className='cursor-pointer'
                    onClick={forgotButtonClicked}
                  >
                    Forgot?
                  </p>
                </div>

                <Box className='mt-2'>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder=''
                      backgroundColor='#F5F9FF'
                      py='2'
                      px='4'
                      name='password'
                      id='password'
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      border={
                        errors && errors?.password === '*Required' ? '1px' : ''
                      }
                      borderColor={
                        errors && errors?.password === '*Required' ? 'red' : ''
                      }
                      value={data.password}
                      onChange={handleChange}
                    />
                    <InputRightElement
                      h='full'
                      pb='1.5'
                      display={'flex'}
                      flexDirection={'column'}
                      justifyContent={'center'}
                      alignItems={'center'}
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
                </Box>

                {/* <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className={`${
                      errors.password === "*Required"
                        ? "border-1 border-[#f50c0c]"
                        : ""
                    } block w-full px-4 py-2 
                     mt-2  bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40`}
                  />

                  <AiFillEye />
                </div> */}

                {errors && errors.password && (
                  <p className='text-[#f50c0c]'>{errors.password}</p>
                )}
              </div>

              <div className='mb-2'>
                <div className='flex justify-between items-center text-[#FFFFFF] text-xs'>
                  <label htmlFor='districtCode'>
                    District Code 4-Character (e.g. X@v2)
                  </label>
                  <p
                    name='districtCodeForgot'
                    className='cursor-pointer'
                    onClick={forgotButtonClicked}
                  >
                    Forgot?
                  </p>
                </div>
                <input
                  type='text'
                  name='districtCode'
                  id='districtCode'
                  value={data.districtCode}
                  onChange={handleChange}
                  className={`${
                    errors.districtCode === '*Required'
                      ? 'border-1 border-red'
                      : ''
                  } block w-full px-4 py-2 
                     mt-2  bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors && errors.districtCode && (
                  <p className='text-[#f50c0c]'>{errors.districtCode}</p>
                )}
              </div>

              <div>
                <div className='flex text-xs text-[#FFFFFF] mt-2 mb-2'>
                  <>
                    <input
                      type='checkbox'
                      value={data.isChecked}
                      id='checkbox'
                      name='isChecked'
                      onChange={handleChange}
                      className={`mr-2`}
                    />
                    <label htmlFor='checkbox'>
                      I agree to the Terms of Use
                    </label>
                  </>
                </div>
                {errors && errors.isChecked && (
                  <p className='text-[#f50c0c]'>{errors.isChecked}</p>
                )}
              </div>

              <div className='mt-5'>
                <button
                  className='w-full text-[#2F362F] bg-[#FFFFFF] font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  type='submit'
                >
                  Log In
                </button>
              </div>
            </form>

            <div className='flex mt-3'>
              <img src={helpIconImage} className='mr-2' />
              <p className={`text-[#FFFFFF] cursor-pointer`}>Help?</p>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default LoginFields;
