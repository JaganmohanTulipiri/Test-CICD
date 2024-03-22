import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getNewDistrict } from '../../../store/slices/superAdminSlice/superAdminSlice';
import { validateFormData } from '../../../Utilities/FormValidation';

const AddNewDistrict = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const districtFields = [
    {
      id: '1',
      label: 'Entity Name*:',
      placeholder: '',
      name: 'district_name',
      inputType: 'text',
    },
    {
      id: '2',
      label: 'Address 1:',
      placeholder: '',
      name: 'address1',
      inputType: 'text',
    },
    {
      id: '3',
      label: 'Email:',
      placeholder: '',
      name: 'email',
      inputType: 'text',
    },
    {
      id: '4',
      label: 'School Local Identifier:',
      placeholder: '',
      name: 'local_identifier',
      inputType: 'text',
    },
    {
      id: '5',
      label: 'Address 2:',
      placeholder: '',
      name: 'address2',
      inputType: 'text',
    },
    {
      id: '6',
      label: 'Phone 1:',
      placeholder: '',
      name: 'phone1',
      inputType: 'text',
    },
    {
      id: '7',
      label: 'Phone 2:',
      placeholder: '',
      name: 'phone2',
      inputType: 'text',
    },
    {
      id: '8',
      label: 'SSO ID:',
      placeholder: '',
      name: 'sso_id',
      inputType: 'text',
    },
    {
      id: '9',
      label: 'City:',
      placeholder: '',
      name: 'city',
      inputType: 'text',
    },

    {
      id: '10',
      label: 'State:',
      placeholder: '',
      name: 'state',
      inputType: 'text',
    },
    {
      id: '11',
      label: 'District SSO ID:',
      placeholder: '',
      name: 'district_sso_id',
      inputType: 'text',
    },
    {
      id: '12',
      label: 'Zip Code:',
      placeholder: '',
      name: 'zipcode',
      inputType: 'text',
    },
    {
      id: '12',
      label: 'SSO Identifying Field:',
      placeholder: '',
      name: 'sso_identifying_field',
      inputType: 'select',
      options: [
        'All Schools',
        'Greenlight Elementary',
        'Greenlight HighSchool',
      ],
    },
  ];

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const newDistrictResponse = useSelector(
    (state) => state?.superAdmin?.newDistrict
  );
  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const previouspath = useSelector((state) => state?.profile?.previousPath);

  const [schoolIdentifier, setSchoolIdentifier] = useState(true);

  const [errors, setErrors] = useState({});

  const [newDistrict, setNewDistrict] = useState({
    district_name: '',
    // local_identifier: "",
    // state: "",
    // zipcode: "",
  });

  const handleChange = (e) => {
    setNewDistrict({ ...newDistrict, [e.target.name]: e.target.value });
  };

  const handleDistrictChange = (e) => {
    console.log(
      '===========handle Radio Button Change=========',
      e.target.value
    );
    if (e.target.value === 'addDistrict') {
      setSchoolIdentifier(true);
    } else if (e.target.value === 'addDistrictSchool') {
      setSchoolIdentifier(false);
    }
  };

  const validateData = (event) => {
    console.log('validate data');
    event.preventDefault();
    let errorObj = validateFormData(newDistrict);
    setErrors({ ...errorObj });
    const finalPayload = {
      ...newDistrict,
      created_by: loginResponse?.response?.uuid,
      creater_role: selectedRole,
    };
    // console.log("Final Payload", finalPayload);
    dispatch(getNewDistrict({ body: finalPayload, token }));
    console.log('previous path', previouspath);
  };

  console.log('School Identifier============', schoolIdentifier);
  return (
    <div className='w-full max-w-full h-full max-h-full overflow-y-auto ml-4'>
      <Flex>
        <Box>
          <Text textStyle='text'>
            <>Add New District</>
          </Text>

          <Text className='mt-3' textStyle={'textHead'}>
            <b>Note</b>: if District/Entity is the same as the school (private
            school, after school program, etc), use the "
            <b>Add as a school and District</b>" button
          </Text>
        </Box>
        <Spacer />
      </Flex>

      <Flex className='mt-3 ml-3 gap'>
        <RadioGroup defaultValue='addDistrict'>
          <Stack spacing={5} direction='row'>
            <Radio
              colorScheme='blue'
              value='addDistrict'
              onChange={handleDistrictChange}
            >
              <Text textStyle={'textHead'}>Add as District Only</Text>
            </Radio>
            <Radio
              colorScheme='blue'
              value='addDistrictSchool'
              onChange={handleDistrictChange}
            >
              <Text textStyle={'textHead'}>Add as a School and District</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>

      <form onSubmit={validateData}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap='6'
          marginTop='5'
        >
          {districtFields?.map((item, index) => {
            return (
              <GridItem colSpan='1'>
                {item.inputType === 'text' && (
                  <Box>
                    <Text mb='2'>{item.label}</Text>
                    {item.id === '4' ? (
                      <Input
                        type='text'
                        border='0px'
                        bg='bg.100'
                        name={item?.name}
                        value={districtFields[item?.name]}
                        onChange={handleChange}
                        isDisabled={schoolIdentifier}
                      />
                    ) : (
                      <Input
                        type='text'
                        border='0px'
                        bg='bg.100'
                        name={item?.name}
                        value={districtFields[item?.name]}
                        onChange={handleChange}
                      />
                    )}

                    {errors?.[item?.name] && (
                      <Text color='red'>{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}
              </GridItem>
            );
          })}
        </Grid>

        <Center>
          <Flex
            minWidth='max-content'
            alignItems='center'
            className='mt-20 gap'
          >
            <ButtonGroup gap='4'>
              <Link to={`/role/${selectedRole}/Districts/DistrictLookup`}>
                <Button
                  color='black'
                  borderRadius='3xl'
                  backgroundColor='#EEEEEE'
                  width='7rem'
                >
                  Cancel
                </Button>
              </Link>
              <Button
                color='#ffffff'
                className='rounded-3xl'
                backgroundColor='#65a30d'
                borderRadius='3xl'
                width='7rem'
                type='submit'
              >
                Save
              </Button>
            </ButtonGroup>
          </Flex>
        </Center>
      </form>
      {/* <NewDistrictSuccessPopup
        isSuccessPopUpOpen={isSuccessPopUpOpen}
        setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
      /> */}
    </div>
  );
};

export default AddNewDistrict;
