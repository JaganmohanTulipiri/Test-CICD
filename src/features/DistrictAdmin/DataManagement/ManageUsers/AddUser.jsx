import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasicUserInfoDistrictAdmin from './BasicUserInfoDistrictAdmin';
import BasicUserInfohelpDesk from './BasicUserInfohelpDesk';
import BasicUserInfoSchoolAdmin from './BasicUserInfoSchoolAdmin';
import BasicUserInfoStudent from './BasicUserInfoStudent';
import BasicUserInfoSuperAdmin from './BasicUserInfoSuperAdmin';
import BasicUserInfoTeacher from './BasicUserInfoTeacher';
import ManageUserAssignments from './ManageUserAssignments';
import { addUserData } from './ManageUsersData';

import { useLocation } from 'react-router-dom';
import { setUserData } from '../../../../store/slices/profileSlice';
import { validateFormData } from '../../../../Utilities/FormValidation';
import BasicUserInfoStateAdmin from './BasicUserInfostateAdmin';

const RACE_OPTIONS = [
  { value: 'White', label: 'White' },
  {
    value: 'Black or African American',
    label: 'Black or African American',
  },
  {
    value: 'American Indian or Alaska Native',
    label: 'American Indian or Alaska Native',
  },
  { value: 'Asian', label: 'Asian' },
  {
    value: 'Native Hawailian or Other Pacific',
    label: 'Native Hawailian or Other Pacific',
  },
  { value: 'Others', label: 'Others' },
];

const AddUser = () => {
  const { buttonsList } = addUserData;

  const dispatch = useDispatch();

  const location = useLocation();

  const manageUsers = useSelector((state) => state.profile.manageUser);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const getStateUUID = useSelector((state) => state?.superAdmin?.stateId);
  const getStateName = useSelector((state) => state?.superAdmin?.stateName);

  const { userType, formTitle } = manageUsers;

  console.log(userType, 'userTypeuserTypeuserType');

  const userData = useSelector((state) => state?.profile?.UserData);

  const districtForDistrictAdmin = useSelector(
    (state) => state?.districtAdmin?.getDistrictForDistrictAdminResponse
  );

  const distrcitIDForDistrictAdmin = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );

  //get school id for adding school admin to school ---- superAdmin
  const getSchoolDataBySchoolID = useSelector(
    (state) => state?.superAdmin?.schoolBySchoolId?.uuid
  );
  console.log(
    districtForDistrictAdmin,
    '143districtForDistrictAdmindistrictForDistrictAdmin'
  );

  console.log(userData, 'iam userdata');

  const editUserDetails = {
    teacher: {
      teacher_id: userData?.teacher_id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      middle_initial: userData?.middle_initial,
      user_name: userData?.user_name,
      email: userData?.email,
      email_1: userData?.email_1,
      email_2: userData?.email_2,
      password: userData?.password,
      login_status: userData?.login_status,
      teacher_role: userData?.teacher_role,
    },
    schoolAdmin: {
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      middle_initial: userData?.middle_initial,
      user_name: userData?.user_name,
      email: userData?.email,
      email_1: userData?.email_1,
      email_2: userData?.email_2,
      password: userData?.password,
      login_status: userData?.login_status,
      school_admin_role: userData?.school_admin_role,
    },
    student: {
      student_id: userData?.student_id,
      first_name: userData?.first_name,
      grade: userData?.grade,
      email: userData?.email,
      user_name: userData?.user_name,
      last_name: userData?.last_name,
      date_of_birth: userData?.date_of_birth,
      parent_email_1: userData?.parent_email_1,
      password: userData?.password,
      middle_initial: userData?.middle_initial,
      race: userData?.race,
      parent_email_2: userData?.parent_email_2,
      gender: userData?.gender,
      ethnicity: userData?.ethnicity,
      phone: userData?.phone,
      login_status: userData?.login_status,
      print_body_composition: userData?.print_body_composition,
      print_reports_in_spanish: userData?.print_reports_in_spanish,
      permanently_exempt: userData?.permanently_exempt,
      student_role: userData?.student_role,
    },
    districtAdmin: {
      district_administrator_id: userData?.district_administrator_id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      middle_initial: userData?.middle_initial,
      user_name: userData?.user_name,
      email: userData?.email,
      email_1: userData?.email_1,
      email_2: userData?.email_2,
      password: userData?.password,
      login_status: userData?.login_status,
      school_admin_role: userData?.school_admin_role,
      district_admin_role: userData?.district_admin_role,
      teacher_role: userData?.teacher_role,
      role: userData?.role?.[0],
    },

    stateAdmin: {
      state: getStateName,
      state_administrator_id: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      user_name: '',
      email: '',
      email_1: '',
      email_2: '',
      password: '',
      login_status: '',
      state_admin_role: true,
      school_admin_role: false,
      teacher_role: false,
    },
    admin: {
      user_name: userData?.user_name,
      password: userData?.password,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      middle_initial: userData?.middle_initial,
      email: userData?.email,
      email_1: userData?.email_1,
      email_2: userData?.email_2,
      phone: userData?.phone,
      district_administrator_role: userData?.district_administrator_role,
      // state_administrator_role: userData?.state_administrator_role,
      teacher_role: userData?.teacher_role,
      login_status: userData?.login_status,
      super_admin_role: userData?.super_admin_role,
      //check admin for superadmin role
    },
    helpDesk: {
      user_name: userData?.user_name,
      password: userData?.password,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      middle_initial: userData?.middle_initial,
      email: userData?.email,
      email_1: userData?.email_1,
      email_2: userData?.email_2,
      phone: userData?.phone,
      district_administrator_role: userData?.district_administrator_role,
      // state_administrator_role: userData?.state_administrator_role,
      teacher_role: userData?.teacher_role,
      login_status: userData?.login_status,
      help_desk_role: userData?.help_desk_role,
    },
  };

  const fullObjDetails = {
    teacher: {
      teacher_id: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      user_name: '',
      email: '',
      email_1: '',
      email_2: '',
      phone: '',
      password: '',
      login_status: '1',
      teacher_role: true,
    },
    schoolAdmin: {
      first_name: '',
      last_name: '',
      middle_initial: '',
      user_name: '',
      email: '',
      email_1: '',
      email_2: '',
      password: '',
      phone: '',
      login_status: '1',
      teacher_role: false,
      school_admin_role: true,
      schools: [selectedRole === 'superAdmin' ? getSchoolDataBySchoolID : ''],
    },

    districtAdmin: {
      district_administrator_id: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      user_name: '',
      email: '',
      email_1: '',
      email_2: '',
      password: '',
      login_status: '1',
      school_admin_role: false,
      district_admin_role: true,
      teacher_role: false,
      districts: [
        selectedRole === 'superAdmin'
          ? distrcitIDForDistrictAdmin
          : districtForDistrictAdmin?.uuid,
      ],
    },

    student: {
      student_id: '',
      first_name: '',
      grade: '',
      email: '',
      user_name: '',
      last_name: '',
      date_of_birth: '',
      parent_email_1: '',
      password: '',
      middle_initial: '',
      race: [],
      parent_email_2: '',
      gender: '',
      ethnicity: '',
      phone: '',
      login_status: '1',
      print_body_composition: true,
      print_reports_in_spanish: false,
      permanently_exempt: false,
      student_role: true,
    },

    stateAdmin: {
      state: getStateName,
      state_administrator_id: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      user_name: '',
      email: '',
      email_1: '',
      email_2: '',
      password: '',
      login_status: '1',
      state_admin_role: true,
      school_admin_role: false,
      teacher_role: false,
    },

    admin: {
      user_name: '',
      password: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      email: '',
      email_1: '',
      email_2: '',
      phone: '',
      teacher_role: false,
      district_administrator_role: false,
      super_admin_role: true,
      login_status: '',
    },
    helpDesk: {
      user_name: '',
      password: '',
      first_name: '',
      last_name: '',
      middle_initial: '',
      email: '',
      email_1: '',
      email_2: '',
      phone: '',
      teacher_role: false,
      district_administrator_role: false,
      help_desk_role: true,
      login_status: '',
    },
  };

  const [activeTab, setActiveTab] = useState(0);
  const [inputDetailsObj, setInputDetailsObj] = useState({});
  const [userAssignments, setUserAssignments] = useState([]);

  console.log(userAssignments, 'USERR');

  const [selectedRace, setSelectedRace] = useState([]);

  const [errors, setErrors] = useState({});

  console.log('help desk data', editUserDetails.helpDesk);

  const basicUserInfoObj = {
    teacher: (
      <BasicUserInfoTeacher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),

    schoolAdmin: (
      <BasicUserInfoSchoolAdmin
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    stateAdmin: (
      <BasicUserInfoStateAdmin
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    districtAdmin: (
      <BasicUserInfoDistrictAdmin
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    student: (
      <BasicUserInfoStudent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        selectedRace={selectedRace}
        setSelectedRace={setSelectedRace}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    admin: (
      <BasicUserInfoSuperAdmin
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    helpDesk: (
      <BasicUserInfohelpDesk
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inputDetailsObj={inputDetailsObj}
        setInputDetailsObj={setInputDetailsObj}
        errors={errors}
        setErrors={setErrors}
      />
    ),
  };

  useEffect(() => {
    setInputDetailsObj(editUserDetails[userType]);

    if (userType == 'student' && userData?.race?.length) {
      let arr = RACE_OPTIONS.filter((race) => {
        let obj = null;
        userData?.race?.forEach((inputRace) => {
          if (inputRace == race.value) {
            obj = race;
          }
        });
        if (obj) {
          return obj;
        }
      });

      setSelectedRace(arr);
    }
    if (userType == 'student' && userData?.UserSchool?.length) {
      setUserAssignments([...userData.UserSchool]);
    } else if (userData?.AdminSchool?.length) {
      setUserAssignments([...userData.AdminSchool]);
    }
  }, [userData]);

  useEffect(() => {
    setInputDetailsObj(fullObjDetails[userType]);
    location?.state?.assignment &&
      setUserAssignments([location.state.assignment]);
    return () => {
      dispatch(setUserData({}));
    };
  }, []);

  console.log('userType ==', userType);

  return (
    <Flex gap='4' direction='column'>
      <Text
        fontFamily={'body'}
        fontSize={{ base: 'sm', md: 'md', lg: 'sm' }}
        fontWeight={'bold'}
      >
        {formTitle}
      </Text>

      <Flex>
        {userType === 'helpDesk' || userType === 'admin'
          ? buttonsList?.map(
              (role, index) =>
                index === 0 && (
                  <Button
                    key={index}
                    color={activeTab == index ? 'white' : 'black-2'}
                    bgColor={activeTab == index ? 'primary' : 'gray-1'}
                    py='1'
                    // borderLeftRadius={index == 0 && "full"}
                    // borderRightRadius={
                    //   index == buttonsList.length - 1 && "full"
                    // }

                    borderRightWidth={index != buttonsList.length - 1 && '1px'}
                    rounded='full'
                    borderColor='gray'
                    w='15em'
                    // onClick={() => {
                    //   if (userType === "superAdmin") {
                    //     alert("Hi");
                    //     console.log("userType superAdmin", inputDetailsObj);
                    //     const { re_enter_password, ...payload } =
                    //       inputDetailsObj;

                    //     let errorObj = validateFormData(payload);

                    //     console.log(errorObj, "errorObj for super admin ");

                    //     setErrors({ ...errorObj });
                    //     if (Object.keys(errorObj).length === 0) {
                    //       console.log(
                    //         "payload=========for superAdmin",
                    //         inputDetailsObj
                    //       );
                    //       (inputDetailsObj["created_by"] =
                    //         loginResponse?.response?.uuid),
                    //         (inputDetailsObj["super_admin_role"] = true);
                    //       dispatch(getAddUsers({ inputDetailsObj, token }));
                    //     }
                    //   }
                    //}}
                  >
                    <Text
                      fontFamily={'body'}
                      fontSize={{ base: 'sm', md: 'md', lg: 'sm' }}
                    >
                      {role}
                    </Text>
                  </Button>
                )
            )
          : buttonsList.map((role, index) => {
              return (
                <Button
                  key={index}
                  color={activeTab == index ? 'white' : 'black-2'}
                  bgColor={activeTab == index ? 'primary' : 'gray-1'}
                  py='1'
                  borderLeftRadius={index == 0 && 'full'}
                  borderRightRadius={index == buttonsList.length - 1 && 'full'}
                  borderRightWidth={index != buttonsList.length - 1 && '1px'}
                  rounded='none'
                  borderColor='gray'
                  w='15em'
                  onClick={() => {
                    if (userType === 'student') {
                      const {
                        student_role,
                        permanently_exempt,
                        print_body_composition,
                        print_reports_in_spanish,
                        re_enter_password,
                        race,
                        ...payload
                      } = inputDetailsObj;

                      const errorsObj = validateFormData(payload);

                      console.log(errorsObj, 'errors obj');

                      setErrors(errorsObj);

                      if (Object.keys(errorsObj).length === 0) {
                        setActiveTab(index);
                      }
                    }
                    if (userType === 'teacher') {
                      const { teacher_role, re_enter_password, ...payload } =
                        inputDetailsObj;
                      let errorObj = validateFormData(payload);

                      setErrors({ ...errorObj });
                      if (Object.keys(errorObj).length === 0) {
                        setActiveTab(index);
                      }
                    }

                    if (userType === 'districtAdmin') {
                      const {
                        district_admin_role,
                        teacher_role,
                        school_admin_role,
                        re_enter_password,
                        districts,
                        ...payload
                      } = inputDetailsObj;

                      let errorObj = validateFormData(payload);

                      setErrors({ ...errorObj });
                      if (Object.keys(errorObj).length === 0) {
                        setActiveTab(index);
                      }
                    }

                    if (userType === 'schoolAdmin') {
                      const {
                        teacher_role,
                        school_admin_role,
                        re_enter_password,
                        ...payload
                      } = inputDetailsObj;

                      let errorObj = validateFormData(payload);

                      setErrors({ ...errorObj });
                      if (Object.keys(errorObj).length === 0) {
                        setActiveTab(index);
                      }
                    }
                    if (userType === 'stateAdmin') {
                      const {
                        state,
                        teacher_role,
                        school_admin_role,
                        re_enter_password,
                        ...payload
                      } = inputDetailsObj;

                      let errorObj = validateFormData(payload);

                      setErrors({ ...errorObj });
                      if (Object.keys(errorObj).length === 0) {
                        setActiveTab(index);
                      }
                    }
                  }}
                >
                  <Text
                    fontFamily={'body'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'sm' }}
                    whiteSpace='pre-line'
                  >
                    {role}
                  </Text>
                </Button>
              );
            })}
      </Flex>

      {activeTab == 0 && inputDetailsObj && basicUserInfoObj[userType]}

      {userType !== 'admin' && activeTab == 1 && (
        <ManageUserAssignments
          inputDetailsObj={inputDetailsObj}
          setInputDetailsObj={setInputDetailsObj}
          userAssignments={userAssignments}
          setUserAssignments={setUserAssignments}
        />
      )}
    </Flex>
  );
};

export default AddUser;
