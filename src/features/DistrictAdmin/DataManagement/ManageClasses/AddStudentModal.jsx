import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

import React, { useEffect, useState } from 'react';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';
import addCircleCion from '../../../../assets/customIcons/Icon ionic-ios-add-circle.svg';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStudentInfoBasedOnParticularSchoolApi,
  getAddStudentToClassApiCall,
  setAddStudentToClassApiResponse,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';

import TextIcon from '../../../../components/TextIcon';
import { setManageUser } from '../../../../store/slices/profileSlice';

const AddStudentModal = (props) => {
  const { addStudentModal, setAddStudentModal } = props;

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { onClose } = useDisclosure();

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state.profile.userId);

  const selectedClassDetails = useSelector(
    (state) => state?.schoolAdmin?.selectedClassDetails
  );

  console.log(selectedClassDetails, 'selectedClassDetailss=====>');

  console.log(selectedClassDetails, 'selectedClassDetails');

  const studentsBySchool = useSelector(
    (state) => state.schoolAdmin.studentInfoBasedOnSchool
  );

  const [studentOptions, setStudentOptions] = useState([]);

  const [data, setData] = useState({
    user_uuid: '',
    classes: [params?.classId],
    schools: [params?.schoolId],
    assigner_role: selectedRole,
    assigner_uuid: userId,
  });

  const handleAddNewStudent = (schoolAdminId) => {
    dispatch(
      setManageUser({
        formTitle: `Add Student`,
        userType: 'student',
        previousPath: location.pathname,
      })
    );

    navigate(`/role/${selectedRole}/AddUser`, {
      state: {
        assignment: {
          uuid: selectedClassDetails?.school?.uuid,
          school_name: selectedClassDetails?.school?.school_name,
          classes: [
            {
              uuid: selectedClassDetails?.uuid,
              class_name: selectedClassDetails?.class_name,
            },
          ],
        },
      },
    });
  };

  const handleChange = (teacher) => {
    setData((prevState) => ({ ...prevState, user_uuid: teacher.value }));
  };

  const handleSubmit = () => {
    dispatch(getAddStudentToClassApiCall({ body: data, token }));
  };
  const handleInputChange = (searchText) => {
    searchText.length >= 3 &&
      dispatch(
        getStudentInfoBasedOnParticularSchoolApi({
          token,
          schoolId: selectedClassDetails?.schoolUuid,
          body: { search_text: searchText },
        })
      );
  };

  useEffect(() => {
    if (studentsBySchool?.length) {
      let arr = [];
      studentsBySchool.forEach((student) => {
        let obj = { label: student.last_name, value: student.uuid };
        arr.push(obj);
      });
      console.log(arr, 'for teacher options');
      setStudentOptions([...arr]);
    } else {
      setStudentOptions([]);
    }
  }, [studentsBySchool]);

  useEffect(() => {
    if (addStudentModal) {
      dispatch(
        getStudentInfoBasedOnParticularSchoolApi({
          token,
          schoolId: selectedClassDetails?.schoolUuid,
          body: { search_text: '' },
        })
      );
    }
  }, [addStudentModal]);

  return (
    <>
      <Modal
        size='md'
        onClose={() => {
          setAddStudentModal(false);
          onClose();
        }}
        isOpen={addStudentModal}
        isCentered
        useInert={true}
        borderColor='transparent'
      >
        <ModalOverlay />
        <ModalContent p='2'>
          <ModalBody>
            <Stack spacing='2'>
              <Text className='text-primary' textStyle='h3'>
                Add Student to Class
              </Text>

              <Flex
                justify={{ base: 'flex-start', md: 'flex-end', lg: 'flex-end' }}
                onClick={handleAddNewStudent}
              >
                <TextIcon text='Add New Student' icon={addCircleCion} />
              </Flex>

              <FormControl>
                <FormLabel textStyle={'textHead'}>User Last Name</FormLabel>
                <Select
                  name='user_uuid'
                  onInputChange={handleInputChange}
                  onChange={handleChange}
                  options={studentOptions}
                  placeholder='Select Student'
                ></Select>
              </FormControl>
              <FormControl>
                <FormLabel textStyle={'textHead'}>This Role</FormLabel>
                <Input value='Student' isDisabled />
              </FormControl>

              <FormControl>
                <FormLabel textStyle={'textHead'}>Class Name</FormLabel>
                <Input value={selectedClassDetails?.class_name} isDisabled />
              </FormControl>
              <FormControl>
                <FormLabel>At School</FormLabel>
                <Input
                  value={selectedClassDetails?.school?.school_name}
                  isDisabled
                />
              </FormControl>

              <Flex justify='center' gap='8'>
                <Box
                  onClick={() => {
                    setAddStudentModal(false);
                    dispatch(setAddStudentToClassApiResponse(null));
                  }}
                >
                  <NegativeButton text={'Cancel'} />
                </Box>
                <Box onClick={handleSubmit}>
                  <PositiveButton text={'Submit'} />
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddStudentModal;
