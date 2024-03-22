import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Select as MultiSelect } from 'chakra-react-select';
import {
  getClassesList,
  getSchoolsList,
  alPostEventData,
} from '../teacherSlice';
import { useDispatch, useSelector } from 'react-redux';
import { alCreateEventData } from './activityLogData';
import SuccessModal from '../../../components/SuccessModal';
import NegativeButton from '../../../components/NegativeButton';
import PositiveButton from '../../../components/PositiveButton';
import { useNavigate } from 'react-router-dom';
import { validateFormData } from '../../../Utilities/FormValidation';

const AlCreateEvent = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);
  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);
  const loading = useSelector((state) => state.teacher.loading);

  const responseCode = useSelector((state) => state.teacher.responseCode);

  const [schools, setSchools] = useState(schoolsList);
  const [classes, setClasses] = useState(classesList);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    challenge_name: '',
    challenge_type: '',
    daily_goal: '',
    description: '',
    start_date: '',
    end_date: '',
    schools: [],
    classes: [],
  });

  const handleSchools = (schoolsList) => {
    let all_value = null;
    if (schoolsList?.length) {
      for (let school of schoolsList) {
        if (school.label == 'All') {
          all_value = school;
          break;
        }
      }
    }

    if (all_value) {
      console.log('in all case');
      setSelectedSchools(all_value);
      console.log(all_value.value, 'paylpoadd');

      setInputs((prevState) => ({
        ...prevState,
        schools: all_value.value,
      }));
    } else {
      console.log('Not in all case');

      setSelectedSchools(schoolsList);

      setInputs((prevState) => ({
        ...prevState,
        schools: schoolsList?.map((item) => item?.value),
      }));
    }
  };

  const handleClasses = (classesList) => {
    let all_value = null;
    if (classesList?.length) {
      for (let clas of classesList) {
        if (clas.label == 'All') {
          all_value = clas;
          break;
        }
      }
    }

    if (all_value) {
      console.log('in all case');
      setSelectedClasses([all_value]);

      setInputs((prevState) => ({
        ...prevState,
        classes: all_value.value,
      }));
    } else {
      console.log('Not in all case');

      setSelectedClasses(classesList);

      setInputs((prevState) => ({
        ...prevState,
        classes: classesList?.map((item) => item?.value),
      }));
    }
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    let errorObj = validateFormData(inputs);

    console.log(errorObj, 'validation errors==========>');
    setErrors(errorObj);

    if (Object.keys(errorObj)?.length === 0) {
      let payload = {
        ...inputs,
        creater_role: selectedRole,
        created_by: userId,
      };
      console.log(payload, 'payloaddd');

      dispatch(alPostEventData({ payload, token }));
    }
  };

  useEffect(() => {
    !schoolsList?.length && dispatch(getSchoolsList({ userId, token }));
  }, []);
  useEffect(() => {
    console.log({ selectedSchools, token });
    dispatch(getClassesList({ body: { schools: inputs?.schools }, token }));
    setSelectedClasses([]);
  }, [inputs?.schools]);

  useEffect(() => {
    let schoolOptions = [];

    const schoolUuidArray =
      schoolsList?.length &&
      schoolsList.map((each) => {
        schoolOptions.push({ label: each.school_name, value: each.uuid });
        return each.uuid;
      });
    // setSchools(schoolOptions);

    schoolOptions.unshift({ label: 'All', value: schoolUuidArray });
    setSelectedSchools([{ label: 'All', value: schoolUuidArray }]);
    setInputs((prevState) => ({
      ...prevState,
      schools: schoolUuidArray,
    }));
    setSchools(schoolOptions);
  }, [schoolsList]);
  useEffect(() => {
    let classOptions = [];

    const classUuidArr =
      classesList?.length &&
      classesList.map((each) => {
        classOptions.push({ label: each.class_name, value: each.uuid });
        return each.uuid;
      });

    classOptions.unshift({ label: 'All', value: classUuidArr });
    classesList?.length &&
      setSelectedClasses([{ label: 'All', value: classUuidArr }]);
    setInputs((prevState) => ({
      ...prevState,
      classes: classUuidArr,
    }));
    setClasses(classOptions);
  }, [classesList]);

  console.log(inputs, 'inputs');
  return (
    <>
      {loading ? (
        <>
          <Grid templateColumns='repeat(4, 1fr)' gap='8' mt='5'>
            {[...Array(2)].map((num, index) => (
              <GridItem key={index}>
                <Skeleton height='2rem' startColor='gray-3' />
              </GridItem>
            ))}
          </Grid>
          <Grid templateColumns='repeat(4, 1fr)' gap='8' mt='20'>
            {[...Array(8)].map((num, index) => (
              <GridItem key={index}>
                <Skeleton height='2rem' startColor='gray-3' />
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        <Flex direction='column' gap='4'>
          <Text fontWeight='bold' textStyle={'textHead'}>
            ACTIVITLOG Create Assessment
          </Text>
          <Text textStyle={'textHead'}>ASSIGN TO THESE CLASSES:</Text>
          <Grid
            templateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(3,1fr)',
              lg: "'repeat(3,1fr)'",
            }}
            gap='2'
          >
            <GridItem>
              <Box maxW='100%'>
                <Text mb='2' textStyle={'textHead'}>
                  Schools
                </Text>
                <MultiSelect
                  useBasicStyles
                  name='schools'
                  colorScheme='bg'
                  isMulti
                  value={selectedSchools}
                  closeMenuOnSelect
                  onChange={handleSchools}
                  options={selectedSchools?.[0]?.label != 'All' ? schools : []}
                />
                {errors?.schools && <Text color='red'>{errors.schools}</Text>}
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW='100%'>
                <Text mb='2' textStyle={'textHead'}>
                  Classes
                </Text>
                <MultiSelect
                  useBasicStyles
                  name='classes'
                  colorScheme='bg'
                  isMulti
                  value={selectedClasses}
                  closeMenuOnSelect
                  onChange={handleClasses}
                  options={
                    selectedSchools?.length &&
                    selectedClasses?.[0]?.label != 'All'
                      ? classes
                      : []
                  }
                />
                {errors?.classes && <Text color='red'>{errors.classes}</Text>}
              </Box>
            </GridItem>
          </Grid>

          <Text textStyle={'textHead'}>CREATE CHALLENGE</Text>

          <Grid
            templateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(3,1fr)',
              lg: 'repeat(3,1fr)',
            }}
            gap='2'
          >
            {alCreateEventData.map((item, index) => {
              return (
                <GridItem colSpan='1'>
                  {item.type == 'select' && (
                    <Box maxW='100%'>
                      <Text mb='2' textStyle={'textHead'}>
                        {item.lable}
                      </Text>
                      <Select
                        bg='bg.100'
                        borderColor='bg.100'
                        placeholder={item.placeholder}
                        name={item.name}
                        onChange={(e) => handleChange(e)}
                        textStyle={'textHead'}
                      >
                        {item.options.map((value, i) => {
                          return (
                            <option key={i} value={value}>
                              {value}
                            </option>
                          );
                        })}
                      </Select>
                      {errors?.[item?.name] && (
                        <Text color='red' textStyle={'textHead'}>
                          {errors?.[item?.name]}
                        </Text>
                      )}
                    </Box>
                  )}

                  {item.type !== 'select' && (
                    <Box maxW='100%'>
                      <Text mb='2' textStyle={'textHead'}>
                        {item.lable}
                      </Text>
                      <Input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        onChange={(e) => handleChange(e)}
                        border='0px'
                        bg='bg.100'
                        textStyle={'textHead'}
                      />
                      {errors?.[item?.name] && (
                        <Text color='red' textStyle={'textHead'}>
                          {errors?.[item?.name]}
                        </Text>
                      )}
                    </Box>
                  )}
                </GridItem>
              );
            })}
          </Grid>

          <Flex justify='center' gap='8' pb='8' w='100%'>
            <Box onClick={() => navigate(`/role/${selectedRole}/ActivityLog`)}>
              <NegativeButton text={'Cancel'} />
            </Box>{' '}
            <Box onClick={handleSubmit}>
              <PositiveButton text={'Create'} isLoading={loading} />
            </Box>
          </Flex>
          <SuccessModal code={responseCode} message='Event Created' />
        </Flex>
      )}
    </>
  );
};

export default AlCreateEvent;
