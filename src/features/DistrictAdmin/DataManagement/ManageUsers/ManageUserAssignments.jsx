import { Box, Divider, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageUsersAssignmentTextIcon from '../../../../ManageUsersGlobal/ManageUsersAssignmentTextIcon';
import TeacherAddSchoolModal from '../../../../ManageUsersGlobal/ManageUsersAddModals/TeacherAddSchoolModal';
import AddedTeachersList from '../../../../ManageUsersGlobal/ManageUsersAssignmentListFolder/AddedTeachersList';
import {
  getAddUsers,
  getUpdateUsers,
  setAddUsersResponse,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import { getClassesList, getSchoolsList } from '../../../teacher/teacherSlice';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';
import ManageUsersSuccessModal from './ManageUsersSuccessModal';
import { useNavigate, useParams } from 'react-router-dom';
import { getDistrictForDistrictAdminApiCall } from '../../../../DistrictAdminApis/districtAdminSlice';
import ManageUsersEditSuccessModal from './ManageUsersEditSuccessModal';
import UserAssignmentsModal from '../../../../ManageUsersGlobal/ManageUsersAddModals/UserAssignemtModal';
import AssginedSchoolsClasses from '../../../../ManageUsersGlobal/ManageUsersAssignmentListFolder/AssignedSchoolsClasses';
import ErrorResponse from '../../../../components/GlobalComponents/ErrorResponse';
import { MdOutlineAddCircle } from 'react-icons/md';

const ManageUserAssignments = (props) => {
  console.log('params in manageuserassignments', props);
  const {
    setInputDetailsObj,
    inputDetailsObj,
    userAssignments,
    setUserAssignments,
    role,
  } = props;
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);

  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);

  const manageUser = useSelector((state) => state.profile.manageUser);

  const manageUsersAddUsersResponse = useSelector(
    (state) => state?.schoolAdmin?.addUsersResponse
  );

  const previousPath = useSelector((state) => state?.profile?.previousPath);

  const [userAssignmentsModal, setUserAssignmentsModal] = useState(false);

  const [addClassToStudent, setAddClassToStudent] = useState(false);

  const [added, setAdded] = useState(false);

  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);

  const [selectedSchoolsList, setSelectedSchoolsList] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const [selectedSchoolName, setSelectedSchoolName] = useState([]);
  const [selectedClassName, setSelectedClassName] = useState([]);

  // const handleSubmit = () => {
  // 	const schoolArrayList = addedSchoolsListArray?.map((item) =>
  // 		item.schoolArray?.map((each) => each.uuid)
  // 	);

  // 	const finalSchoolsList = [].concat(...schoolArrayList);

  // 	const filteredSchoolList = finalSchoolsList?.filter(
  // 		(each, index) => finalSchoolsList.indexOf(each) === index
  // 	);

  // 	const classArrayList = [].concat(
  // 		...addedSchoolsListArray?.map((each) =>
  // 			each.classArray?.map((item) => item.uuid)
  // 		)
  // 	);

  // 	const finalPayload = {
  // 		...inputDetailsObj,
  // 		created_by: userId,
  // 		creater_role: selectedRole,
  // 		schools: filteredSchoolList,
  // 		classes: classArrayList,
  // 	};

  // 	const userRole = params.role;
  // 	const userUuid = params.id;

  // 	if (userUuid) {
  // 		const finalPayload = {
  // 			...inputDetailsObj,
  // 			updated_by: userId,
  // 			creater_role: selectedRole,
  // 			schools: filteredSchoolList,
  // 			classes: classArrayList,
  // 		};

  // 		if (finalPayload["password"] === "*****") {
  // 			delete finalPayload["password"];
  // 		}

  // 		dispatch(getUpdateUsers({ finalPayload, token, UserId: userUuid }));

  // 		console.log(
  // 			finalPayload,
  // 			"finalPayloadfinalPayload-----------------------"
  // 		);
  // 	} else {
  // 		dispatch(getAddUsers({ finalPayload, token }));
  // 	}
  // };

  const handleSubmit = () => {
    const userRole = params.role;
    const userUuid = params.id;

    let schools = [];
    let classes = [];

    console.log('userUUID ==== handleSubmit', userUuid);

    console.log(userAssignments, 'userAssignments ==== handleSubmit');

    userAssignments?.forEach((school) => {
      schools?.push(school?.uuid);
      school?.classes?.forEach((clas) => classes?.push(clas.uuid));
    });

    if (userUuid) {
      const finalPayload = {
        ...inputDetailsObj,
        updated_by: userId,
        creater_role: selectedRole,
        schools,
        classes,
      };
      dispatch(getUpdateUsers({ finalPayload, token, UserId: userUuid }));
    } else {
      const finalPayload = {
        ...inputDetailsObj,
        created_by: userId,
        creater_role: selectedRole,
        schools,
        classes,
      };
      dispatch(getAddUsers({ finalPayload, token }));
    }
  };

  const textObj = {
    student: <ManageUsersAssignmentTextIcon text={'Add Class'} />,
    teacher: <ManageUsersAssignmentTextIcon text={'Add School/Class'} />,
    schoolAdmin: <ManageUsersAssignmentTextIcon text={'Add School'} />,
  };

  useEffect(() => {
    schoolsList?.length && setSchools(schoolsList);
    classesList?.length && setClasses(classesList);
  }, [schoolsList?.length, classesList?.length]);

  useEffect(() => {
    dispatch(getSchoolsList({ userId, token }));

    dispatch(setAddUsersResponse(null));
  }, []);

  useEffect(() => {
    dispatch(getClassesList({ body: { schools: selectedSchoolsList }, token }));
  }, [selectedSchoolsList]);

  useEffect(() => {
    if (manageUsersAddUsersResponse?.data?.code === 200) {
      dispatch(getDistrictForDistrictAdminApiCall({ userId, token }));
    }
  }, [manageUsersAddUsersResponse]);

  console.log(userAssignments, 'assignments===========>');

  return (
    <>
      <HStack mt='3'>
        {manageUser.userType !== 'districtAdmin' ? (
          <Text textStyle={'textHead'}>SCHOOL</Text>
        ) : (
          <Text textStyle={'textHead'}>DISTRICT ADMINISTRATOR</Text>
        )}
        <Spacer />
        <HStack
          cursor='pointer'
          display={{ base: 'none', lg: 'block', md: 'block' }}
          onClick={() => {
            setAddClassToStudent(true);
            setUserAssignmentsModal(true);
          }}
        >
          {textObj[manageUser.userType]}
        </HStack>
        <HStack
          display={{ base: 'block', md: 'none', lg: 'none' }}
          onClick={() => {
            setAddClassToStudent(true);
            setUserAssignmentsModal(true);
          }}
        >
          <Flex>
            <Text textStyle={'textHead'}>Add Class</Text>
            <MdOutlineAddCircle className='w-5 h-5' fill='#0081c8' />
          </Flex>
        </HStack>
      </HStack>
      <Divider />

      {manageUser?.userType !== 'districtAdmin' && userAssignmentsModal && (
        // <TeacherAddSchoolModal
        // 	addClassToStudent={addClassToStudent}
        // 	setAddClassToStudent={setAddClassToStudent}
        // 	setSelectedClasses={setSelectedClasses}
        // 	selectedClasses={selectedClasses}
        // 	selectedSchoolsList={selectedSchoolsList}
        // 	setSelectedSchoolsList={setSelectedSchoolsList}
        // 	setSelectedSchoolName={setSelectedSchoolName}
        // 	setSelectedClassName={setSelectedClassName}
        // 	schools={schools}
        // 	classes={classes}
        // 	setAdded={setAdded}
        // 	addedSchoolsListArray={addedSchoolsListArray}
        // 	setAddedSchoolsListArray={setAddedSchoolsListArray}
        // />
        <UserAssignmentsModal
          schools={schools}
          userAssignments={userAssignments}
          setUserAssignments={setUserAssignments}
          userAssignmentsModal={userAssignmentsModal}
          setUserAssignmentsModal={setUserAssignmentsModal}
        />
      )}
      {manageUser.userType === 'districtAdmin' ? (
        <Text textStyle={'textHead'}>
          This is user is a District Administrator and has access to all schools
          and classes
        </Text>
      ) : (
        <>
          {/* {addedSchoolsListArray?.length > 0 || added ? (
						<AddedTeachersList
							selectedSchoolName={selectedSchoolName}
							selectedClassName={selectedClassName}
							setAdded={setAdded}
							addedSchoolsListArray={addedSchoolsListArray}
							setAddedSchoolsListArray={setAddedSchoolsListArray}
						/>
					) : null} */}
          {userAssignments?.length ? (
            <AssginedSchoolsClasses
              userAssignments={userAssignments}
              setUserAssignments={setUserAssignments}
            />
          ) : null}
        </>
      )}

      {/* {selectedClassName?.length ? ( */}
      <Flex mt='8' justify='center' gap='8'>
        <Box
          onClick={() => {
            navigate(previousPath);
          }}
        >
          <NegativeButton text={'Cancel'} />
        </Box>
        <Box onClick={handleSubmit}>
          <PositiveButton text={'Submit'} />
        </Box>
      </Flex>
      {/* ) : null} */}
      {/* <ManageUsersEditSuccessModal />
			<ManageUsersSuccessModal /> */}
    </>
  );
};

export default ManageUserAssignments;
