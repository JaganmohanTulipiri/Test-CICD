import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Input,
  Radio,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';
import { validateFormData } from '../../../../Utilities/FormValidation';
import { useNavigate, useParams } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getUserData } from '../../../../store/slices/profileSlice';

const BasicUserInfoTeacher = (props) => {
  const navigate = useNavigate();

  const manageUser = useSelector((state) => state.profile.manageUser);

  const {
    setActiveTab,
    inputDetailsObj,
    setInputDetailsObj,
    errors,

    setErrors,
  } = props;

  // const [errors, setErrors] = useState({});

  const params = useParams();

  const id = params.id;

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile.token);

  const previousPath =useSelector(state=>state?.profile?.previousPath)



  const teacher = [
    {
      id: '1',
      lable: 'Teacher ID*:',
      placeholder: '',
      name: 'teacher_id',
      inputType: 'text',
    },
    {
      id: '2',
      lable: 'Username*:',
      placeholder: '',
      name: 'user_name',
      inputType: 'text',
    },
    {
      id: '3',
      lable: 'Password*:',
      placeholder: '',
      name: 'password',
      inputType: 'password',
    },
    {
      id: '4',
      lable: 'Re-enter Password:',
      placeholder: '',
      name: 're_enter_password',
      inputType: 'password',
    },
    {
      id: '5',
      lable: 'First Name*:',
      placeholder: '',
      name: 'first_name',
      inputType: 'text',
    },
    {
      id: '6',
      lable: 'Last Name*:',
      placeholder: '',
      name: 'last_name',
      inputType: 'text',
    },
    {
      id: '7',
      lable: 'Middle initial:',
      placeholder: '',
      name: 'middle_initial',
      inputType: 'text',
    },

    {
      id: '8',
      lable: 'Email Address*:',
      placeholder: '',
      name: 'email',
      inputType: 'text',
    },
    {
      id: '9',
      lable: 'Alternate Email Address 1:',
      placeholder: '',
      name: 'email_1',
      inputType: 'text',
    },
    {
      id: '10',
      lable: 'Alternate Email Address 2:',
      placeholder: '',
      name: 'email_2',
      inputType: 'text',
    },

    {
      id: '11',
      lable: 'Phone:',
      placeholder: '',
      name: 'phone',
      inputType: 'text',
    },
  ];
  const [showPassword, setShowPassword] = useState({
    password: false,
    re_enter_password: false,
  });
  const handlePassword = (name) => {
    console.log(name, 'name of the input field in ');
    setShowPassword((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      setInputDetailsObj((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.checked,
      }));
    } else if (event.target.type === 'radio') {
      setInputDetailsObj((prevState) => ({
        ...prevState,
        login_status: event.target.value,
      }));
    } else {
      setInputDetailsObj({
        ...inputDetailsObj,
        [event.target.name]: event.target.value,
      });
    }
  };

  const clickToNext = (props) => {
    const { teacher_role, re_enter_password, ...payload } = inputDetailsObj;
    let errorObj = validateFormData(payload);

    setErrors({ ...errorObj });
    if (Object.keys(errorObj).length === 0) {
      setActiveTab(props);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getUserData({ id, token }));
    }
  }, []);

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap='6'
      >
        {teacher?.map((item, index) => {
          return (
            <GridItem colSpan='1'>
              {item.inputType != 'password' && (
                <Box>
                  <Text mb='2'>{item.lable}</Text>
                  <Input
                    type='text'
                    bg='bg.100'
                    border='0px'
                    name={item?.name}
                    value={inputDetailsObj[item?.name]}
                    onChange={handleChange}
                  />

                  {errors?.[item?.name] && (
                    <Text color='red'>{errors?.[item?.name]}</Text>
                  )}
                </Box>
              )}

              {item.inputType == 'password' && (
                <Box>
                  <Text mb='2'>{item.lable}</Text>
                  <InputGroup>
                    <Input
                      type={!showPassword[item?.name] ? item.inputType : 'text'}
                      border='0px'
                      bg='bg.100'
                      name={item?.name}
                      value={inputDetailsObj[item?.name]}
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
                        onClick={() => {
                          handlePassword(item?.name);
                        }}
                      >
                        {showPassword[item?.name] ? (
                          <ViewIcon cursor={'pointer'} />
                        ) : (
                          <ViewOffIcon cursor={'pointer'} />
                        )}
                      </span>
                    </InputRightElement>
                  </InputGroup>
                  {errors?.[item?.name] && (
                    <Text color='red'>{errors?.[item?.name]}</Text>
                  )}
                </Box>
              )}
            </GridItem>
          );
        })}
      </Grid>
      <div className=' flex gap-20  items-center'>
        <GridItem>
          <div>
            <Text className='mb-4'>Login Status:</Text>
            <Stack>
              <Radio
                name='login_status'
                onChange={handleChange}
                isChecked={inputDetailsObj?.login_status == '1' ? true : false}
                value='1'
              >
                Active
              </Radio>
              <Radio
                name='login_status'
                onChange={handleChange}
                isChecked={inputDetailsObj?.login_status == '0' ? true : false}
                value='0'
              >
                Inactive
              </Radio>
              {errors?.login_status && (
                <Text color='red'>{errors.login_status}</Text>
              )}
            </Stack>
          </div>
        </GridItem>
      </div>
      <Flex mt='8' justify='center' gap='8'>
        <Box
          onClick={() => {
            navigate(previousPath)
          }}
        >
          <NegativeButton text={'Cancel'} />
        </Box>
        <Box onClick={() => clickToNext(1)}>
          <PositiveButton text={'Next'} />
        </Box>
      </Flex>
    </>
  );
};

export default BasicUserInfoTeacher;
