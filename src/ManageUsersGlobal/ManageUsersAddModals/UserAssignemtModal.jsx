import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NegativeButton from '../../components/NegativeButton';
import PositiveButton from '../../components/PositiveButton';
import { getClassbasedonSchool } from '../../features/authentication/components/schoolAdmin/schoolAdminSlice';

const UserAssignmentsModal = (props) => {
  const {
    schools,
    userAssignmentsModal,
    setUserAssignmentsModal,
    userAssignments,
    setUserAssignments,
  } = props;

  const dispatch = useDispatch();

  const token = useSelector((state) => state.profile.token);

  const manageUser = useSelector((state) => state.profile.manageUser);

  const ClassbasedonSchool = useSelector(
    (state) => state?.schoolAdmin?.ClassbasedonSchool?.data?.response
  );

  const [selectedSchool, setSelectedSchool] = useState({});

  const [selectedClass, setSelectedClass] = useState({});

  const handleSchool = (e) => {
    const body = {
      schools: [e.target.value],
    };

    dispatch(getClassbasedonSchool({ token, body }));
    setSelectedSchool(
      schools.filter((school) => school.uuid === e.target.value)[0]
    );
  };

  const handleClass = (e) => {
    setSelectedClass(
      ClassbasedonSchool.filter((clas) => clas?.uuid === e.target.value)[0]
    );
  };

  const handleAdd = () => {
    let assignedSchools = userAssignments;
    console.log('assignedschools====', assignedSchools);
    let schoolIndex = assignedSchools.findIndex(
      (school) => school.uuid === selectedSchool.uuid
    );
    if (schoolIndex == -1) {
      setUserAssignments((prevState) => [
        ...prevState,
        { ...selectedSchool, classes: [selectedClass] },
      ]);
    } else {
      let assignedClasses = assignedSchools[schoolIndex].classes;
      let classIndex = assignedClasses.findIndex(
        (clas) => clas.uuid === selectedClass.uuid
      );
      if (classIndex == -1) {
        assignedSchools.splice(schoolIndex, 1, {
          ...assignedSchools[schoolIndex],
          classes: [...assignedSchools[schoolIndex].classes, selectedClass],
        });

        setUserAssignments([...assignedSchools]);
      }
    }
    setUserAssignmentsModal(false);
  };

  return (
    <>
      <Modal
        size={'md'}
        isOpen={userAssignmentsModal}
        isCentered
        useInert={true}
        borderColor='transparent'
      >
        <ModalOverlay />

        <ModalContent p='4' direction='flex' alignItems={'center'}>
          <Text
            textAlign={'center'}
            mb='3'
            color='primary'
            textStyle={'textHead'}
          >
            Add School/Class
          </Text>

          <ModalBody>
            <Flex direction='column' gap='4'>
              <Box>
                <Select
                  onChange={(e) => handleSchool(e)}
                  bg='bg.100'
                  borderColor='bg.100'
                  placeholder='Select school'
                  name='schools'
                  textStyle={'textHead'}
                >
                  {schools?.map((school, i) => {
                    return (
                      <option key={school?.uuid} value={school?.uuid}>
                        {school?.school_name}
                      </option>
                    );
                  })}
                </Select>
              </Box>

              {manageUser?.userType != 'schoolAdmin' ? (
                <Box mt='4'>
                  <Select
                    onChange={(e) => handleClass(e)}
                    bg='bg.100'
                    borderColor='bg.100'
                    placeholder='Select class'
                    name='schools'
                    textStyle={'textHead'}
                  >
                    {ClassbasedonSchool?.map((clas, i) => {
                      return (
                        <option key={clas?.uuid} value={clas?.uuid}>
                          {clas?.class_name}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              ) : null}

              <Flex justify='center' gap='8'>
                <Box
                  onClick={() => {
                    setUserAssignmentsModal(false);
                  }}
                >
                  <NegativeButton text={'Cancel'} />
                </Box>
                <Box onClick={handleAdd}>
                  <PositiveButton text={'Add'} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserAssignmentsModal;
