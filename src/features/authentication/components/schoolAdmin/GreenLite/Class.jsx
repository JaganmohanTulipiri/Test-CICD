import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  Input,
  Select,
  Skeleton,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import addCircleCion from '../../../../../assets/customIcons/Icon ionic-ios-add-circle.svg';
import NegativeButton from '../../../../../components/NegativeButton';
import PositiveButton from '../../../../../components/PositiveButton';
import TextIcon from '../../../../../components/TextIcon';
import AddTeacherModal from '../../../../DistrictAdmin/System Administrator/Schools/addTeacherModal';
import ClassTable from '../../../../DistrictAdmin/DataManagement/ManageClasses/ClassTable';

import { classData } from '../../../../DistrictAdmin/DataManagement/ManageClasses/ManageClassesConfig';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSchoolAdminStudentByClassesCall,
  getTeachersListByClassIdApiCall,
  getUpdateClassByIDApiCall,
  getClassByIDApiCall,
} from '../schoolAdminSlice';

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddTeacherSuccessModal from './AddTeacherSuccessModal';
import {
  getUserData,
  setManageUser,
} from '../../../../../store/slices/profileSlice';
import { validateFormData } from '../../../../../Utilities/FormValidation';
import DeleteTeacherModal from './DeleteTeacherModal';
import { getClassByIDApi } from '../../../../../APIS/SchoolAdmin/school.service';
import { Rings } from 'react-loader-spinner';

const Class = () => {
  const { classDetails } = classData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const userRole = useSelector((state) => state.profile.selectedRole);

  const loading = useSelector((state) => state?.schoolAdmin?.loading);

  console.log(loading, 'from 53');
  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state.profile.userId);

  const schoolsList = useSelector((state) => state.teacher.schools);

  const teachersList = useSelector(
    (state) => state?.schoolAdmin?.teachersListByClassId
  );

  const selectedClassDetails = useSelector(
    (state) => state?.schoolAdmin?.selectedClassDetails
  );

  console.log(selectedClassDetails, 'selected class details');

  const addTeacherToManageClassApiResponse = useSelector(
    (state) => state?.schoolAdmin?.addTeacherToManageClassApiResponse
  );

  const updateClassByIdResponse = useSelector(
    (state) => state.schoolAdmin.updateClassByIdResponse
  );

  const [addTeacherModal, setAddTeacherModal] = useState(false);

  const [editClassData, setEditClassData] = useState({
    updater_role: userRole,
    updated_by: userId,
  });

  console.log(editClassData, 'editClassData+++++++++++++');

  const [errors, setErrors] = useState({});
  const [enable, setTrue] = useState(false);

  const handleChange = (event) => {
    setEditClassData({
      ...editClassData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = (teacherId) => {
    dispatch(getUserData({ id: teacherId, token }));
    dispatch(
      setManageUser({
        formTitle: `Edit Teacher`,
        userType: 'teacher',
        previousPath: location.pathname,
      })
    );
    navigate(`/role/${userRole}/edit/teacher/${teacherId}`);
  };

  const handleSubmit = () => {
    dispatch(
      getUpdateClassByIDApiCall({
        classId: params.classId,
        body: editClassData,
        token,
      })
    );
  };

  useEffect(() => {
    setEditClassData((prevState) => ({
      ...prevState,
      class_name: selectedClassDetails?.class_name,
      schoolUuid: selectedClassDetails?.school?.uuid,
      start_date: selectedClassDetails?.start_date?.split('T')[0],
      end_date: selectedClassDetails?.end_date?.split('T')[0],
      local_identifier: selectedClassDetails?.local_identifier,
      status: selectedClassDetails?.status,
    }));
  }, [selectedClassDetails]);

  useEffect(() => {
    dispatch(
      getTeachersListByClassIdApiCall({ token, classId: params.classId })
    );
  }, []);

  useEffect(() => {
    if (updateClassByIdResponse?.data?.code === 200) {
      dispatch(getClassByIDApiCall({ classId: params.classId, token }));
    }
  }, [updateClassByIdResponse]);

  useEffect(() => {
    if (addTeacherToManageClassApiResponse?.data?.code === 200) {
      setAddTeacherModal(false);

      dispatch(
        getTeachersListByClassIdApiCall({ classId: params.classId, token })
      );
    }
  }, [addTeacherToManageClassApiResponse]);

  return (
    <>
      <Flex direction='column' gap='4'>
        <HStack>
          <Text textStyle='text'>{selectedClassDetails?.class_name}</Text>
          <Spacer />
          <Box onClick={() => setAddTeacherModal(true)}>
            {userRole !== 'teacher' ? (
              <TextIcon
                text='Add Teacher to Class'
                icon={addCircleCion}
                size='1'
              />
            ) : (
              <TextIcon
                text='Request to Add Teacher'
                icon={addCircleCion}
                size='1'
              />
            )}
          </Box>
        </HStack>

        {loading ? (
          <Grid templateColumns='repeat(4, 1fr)' gap='8'>
            {[...Array(8)].map((num, index) => (
              <GridItem key={index}>
                <Skeleton height='2rem' startColor='gray-3' />
              </GridItem>
            ))}
          </Grid>
        ) : (
          <>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
              gap='8'
            >
              {classDetails?.map((item) => {
                return (
                  <>
                    {item.type !== 'select' && (
                      <GridItem>
                        <Text mb='2' textStyle='textHead'>
                          {item.lable}
                        </Text>
                        <Input
                          type={item.type}
                          name={item.name}
                          value={editClassData?.[item.name]}
                          onChange={(e) => handleChange(e)}
                          border='0px'
                          bg='bg.100'
                          size={{ base: 'sm', md: 'sm', lg: 'md' }}
                          fontSize={{ base: 'xs', lg: 'sm', md: 'md' }}
                        />
                        {errors?.[item?.name] && (
                          <Text color='red'>{errors?.[item?.name]}</Text>
                        )}
                      </GridItem>
                    )}
                    {item.type == 'select' && item.name == 'schoolUuid' && (
                      <GridItem>
                        <Text mb='2' textStyle='textHead'>
                          {item.lable}
                        </Text>
                        <Select
                          bg='bg.100'
                          borderColor='bg.100'
                          name={item.name}
                          value={editClassData?.schoolUuid}
                          placeholder='Select...'
                          onChange={(e) => handleChange(e)}
                          size={{ base: 'sm', md: 'sm', lg: 'md' }}
                          fontSize={{ base: 'xs', lg: 'sm', md: 'md' }}
                        >
                          {schoolsList.map((item, i) => {
                            return (
                              <option
                                key={i}
                                value={item.uuid}
                                selected={
                                  item.uuid === editClassData?.schoolUuid
                                }
                              >
                                {item.school_name}
                              </option>
                            );
                          })}
                        </Select>
                        {errors?.[item?.name] && (
                          <Text color='red' textStyle='textHead'>
                            {errors?.[item?.name]}
                          </Text>
                        )}
                      </GridItem>
                    )}
                    {item.type == 'select' && item.name == 'status' && (
                      <GridItem>
                        <Text mb='2' textStyle='textHead'>
                          {item.lable}
                        </Text>
                        <Select
                          bg='bg.100'
                          borderColor='bg.100'
                          name={item.name}
                          value={editClassData?.status}
                          placeholder='Select...'
                          onChange={(e) => handleChange(e)}
                          size={{ base: 'sm', md: 'sm', lg: 'md' }}
                          fontSize={{ base: 'xs', lg: 'sm', md: 'md' }}
                        >
                          {item.options.map((value, i) => {
                            return (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            );
                          })}
                        </Select>
                        {errors?.[item?.name] && (
                          <Text color='red' textStyle='textHead'>
                            {errors?.[item?.name]}
                          </Text>
                        )}
                      </GridItem>
                    )}
                  </>
                );
              })}

              <GridItem>
                <Text textStyle='textHead'>Teachers</Text>

                {!teachersList?.length ? (
                  <Flex>
                    <Text textStyle='textHead'>
                      No Teachers Found for the class
                    </Text>
                  </Flex>
                ) : (
                  teachersList.map((each) => (
                    <HStack>
                      <Text mt='4' color={'#0081c8'} textStyle='textHead'>
                        {each.last_name} {each.first_name}
                      </Text>
                      {userRole !== 'teacher' ? (
                        <GridItem textAlign='center'>
                          <Flex gap={'8'} mt='4'>
                            {userRole == 'teacher' ? null : (
                              <>
                                {userRole === 'districtAdmin' ? (
                                  <>
                                    <HStack>
                                      <Text
                                        textStyle='textHead'
                                        color='black-3'
                                        textDecoration='underline'
                                        onClick={() => setTrue(true)}
                                      >
                                        Delete
                                      </Text>
                                      <RiDeleteBin6Line
                                        color='#0081c8'
                                        className='mt-1'
                                      />
                                    </HStack>
                                  </>
                                ) : (
                                  <>
                                    <>
                                      <HStack spacing='6'>
                                        <Text
                                          color={'#0081c8'}
                                          textDecoration='underline'
                                          textStyle='textHead'
                                          cursor='pointer'
                                          onClick={() => {
                                            handleEdit(each.uuid);
                                          }}
                                        >
                                          Edit
                                        </Text>
                                        <FiEdit
                                          textStyle='textHead'
                                          color='#0081c8'
                                          className='mt-1'
                                          cursor='pointer'
                                          onClick={() => {
                                            handleEdit(each.uuid);
                                          }}
                                        />
                                      </HStack>
                                    </>

                                    <HStack>
                                      <Text
                                        color='black-3'
                                        textDecoration='underline'
                                        onClick={() => setTrue(true)}
                                        textStyle='textHead'
                                      >
                                        Delete
                                      </Text>
                                      <RiDeleteBin6Line
                                        color='#0081c8'
                                        className='mt-1'
                                      />
                                    </HStack>
                                  </>
                                )}
                              </>
                            )}
                          </Flex>
                        </GridItem>
                      ) : null}
                    </HStack>
                  ))
                )}
              </GridItem>
            </Grid>
            <Flex justify='center' gap={12} width={'full'} mt='8'>
              <Box
                onClick={() => {
                  navigate(`/role/${userRole}/manage-classes`);
                }}
              >
                <NegativeButton text={'No'} />
              </Box>
              <Box onClick={handleSubmit}>
                <PositiveButton text={'Save'} />
              </Box>
            </Flex>
          </>
        )}

        {enable && userRole == 'districtAdmin' ? (
          <DeleteTeacherModal setTrue={setTrue} enable={enable} />
        ) : null}

        {addTeacherModal && (
          <AddTeacherModal
            addTeacherModal={addTeacherModal}
            setAddTeacherModal={setAddTeacherModal}
            classDataa={{}}
          />
        )}
        <ClassTable />
      </Flex>
    </>
  );
};

export default Class;
