import React from 'react';

import {
  student,
  teacher_schoolAdministrator,
  parent,
  superAdmin,
  partner,
  districtAdmin,
  stateAdmin,
} from '../assets/roles/rolebasedList';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActivatingID, setHoveringID } from '../store/slices/profileSlice';
import { Box, Text } from '@chakra-ui/react';

const MainHoveringSideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const activatingID = useSelector((state) => state?.profile?.activatingID);
  const hoveringID = useSelector((state) => state?.profile?.hoveringID);

  const openSideBar = useSelector((state) => state?.profile?.openSideBar);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const obj = {
    teacher: teacher_schoolAdministrator,
    schoolAdmin: teacher_schoolAdministrator,
    student: student,
    Parent: parent,
    districtAdmin: districtAdmin,
    stateAdmin: stateAdmin,
    superAdmin: superAdmin,
    Partner: partner,
  };

  console.log('hello');

  const routingObj = {
    teacher: {
      1: () => {
        navigate('/role/teacher');
      },
      2: () => {
        navigate(`/role/${userRole}/adminTest`);
      },
      3: () => {
        navigate('/role/Teacher/SmartCoach');
      },
      4: () => {
        navigate('/role/Teacher/reports');
      },

      5: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      6: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },

    superAdmin: {
      1: () => {
        navigate('/role/SuperAdmin');
      },
      2: () => {
        navigate('/role/SuperAdmin/Districts/DistrictLookup');
      },
      3: () => {
        navigate('/role/SuperAdmin/Licenses');
      },
      4: () => {
        navigate('/role/SuperAdmin/Notifications');
      },
      5: () => {
        navigate('/role/SuperAdmin/SSOConfigMain');
      },
      6: () => {
        navigate('/role/SuperAdmin/StatesPartners');
      },
    },
    student: {
      1: () => {
        navigate('/role/Student');
      },

      2: () => {
        navigate('/role/Student/EnterTestResults');
      },

      3: () => {
        navigate('/role/Student/SmartCoach');
      },
      4: () => {
        navigate('/role/Student/reports');
      },

      6: () => {
        navigate('/role/Student/ActivityGramEvent');
      },

      8: () => {
        navigate('/role/Student/ActivityLog');
      },

      7: () => {
        navigate('/role/Student/ActivityGramLiteTestEvents');
      },
    },
    Parent: {},
    schoolAdmin: {
      1: () => {
        navigate('/role/schoolAdmin');
      },

      2: () => {
        navigate(`/role/${userRole}/adminTest`);
      },

      3: () => {
        navigate('/role/schoolAdmin/SmartCoach');
      },
      4: () => {
        navigate('/role/schoolAdmin/reports');
      },

      5: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      6: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },

    districtAdmin: {
      1: () => {
        navigate('/role/districtAdmin/data-management');
      },
      2: () => {
        navigate('/role/districtAdmin/system-admin');
      },
      3: () => {
        navigate('/role/districtAdmin/reports');
      },
      4: () => {
        navigate('/role/districtAdmin/SmartCoach');
      },
      5: () => {
        navigate('/role/districtAdmin/district-statistics');
      },
      6: () => {
        navigate('/role/districtAdmin/system_usage');
      },

      7: () => {
        navigate('/role/districtAdmin/fitnessgram');
      },

      8: () => {
        navigate(`/role/${userRole}/adminTest`);
      },

      9: () => {
        navigate(`/role/${userRole}/ActivityGramEvent`);
      },

      10: () => {
        navigate(`/role/${userRole}/ActivityLog`);
      },
    },

    stateAdmin: {
      1: () => {
        navigate(`/role/${userRole}/system-admin`);
      },
      2: () => {
        navigate('/role/StateAdmin/data-management');
      },
      3: () => {
        navigate('/role/StateAdmin/reports');
      },
      4: () => {
        navigate('/role/StateAdmin/smart-coach');
      },
      5: () => {
        navigate('/role/StateAdmin/district-statistics');
      },
      6: () => {
        navigate('/role/StateAdmin/system_usage');
      },
    },
    Partner: {
      1: () => {
        navigate('/role/Partner');
      },
      2: () => {
        navigate('/role/Partner/Reports');
      },
      3: () => {
        navigate('/role/Partner/SmartCoach');
      },
    },
  };

  const sideNavRouting = (role, id, clickedNavItem) => {
    console.log(role, id, clickedNavItem, 'in sidenav routing=========>');

    console.log(selectedRole, 'role==> =========');
    console.log(routingObj[role]);
    console.log(routingObj[selectedRole][id]);
    routingObj[selectedRole][id]();
  };

  return (
    <>
      <Box display='flex' flexDirection='column' bg="white" >
        {obj[selectedRole]?.map((item) => {
          return (
            <Box
              key={item.id}
              h='8'
              // py='2'
              // p='1'

              my='5'
              mr='2'
            
        
              cursor='pointer'
              roundedRight='xl'
              transform='translateY(50%)'
              _hover={{ bg: 'primary', textColor: 'white' }}
              whiteSpace='nowrap'
              overflow='hidden'
              textColor={
                activatingID == item.id || hoveringID == item.id
                  ? 'white'
                  : 'black'
              }
              display='flex'
              alignItems='center'
              bg={
                activatingID == item.id || hoveringID == item.id 
                  ? 'primary'
                  : ''
              }
              onMouseEnter={() => {
                dispatch(setHoveringID(item.id));
              }}
              onMouseLeave={() => {
                dispatch(setHoveringID(null));
              }}
              // onClick={() => {
              //   sideNavRouting(selectedRole, item.id, item);

              //   alert("hii")

              //   if (activatingID == item.id) {
              //     dispatch(setActivatingID(null));

              //     closeCollapse();
              //   } else if (activatingID !== item.id) {
              //     dispatch(setActivatingID(item.id));
              //   }
              // }}

              onClick={() => {
                sideNavRouting(selectedRole, item.id, item);

                if (activatingID == item.id) {
                  dispatch(setActivatingID(null));
                } else if (activatingID !== item.id) {
                  dispatch(setActivatingID(item.id));
                }
              }}
            >
              <Text px='3' textStyle={'sideTxt'}>
                {item.name}
              </Text>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MainHoveringSideNav;
