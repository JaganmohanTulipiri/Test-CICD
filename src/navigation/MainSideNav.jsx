import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setActivatingID,
  setHoveringID,
  setOpenSideBar,
} from '../store/slices/profileSlice';

import {
  student,
  teacher_schoolAdministrator,
  parent,
  superAdmin,
  partner,
  districtAdmin,
  stateAdmin,
} from '../assets/roles/rolebasedList';

const MainSideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);

  const activatingID = useSelector((state) => state?.profile?.activatingID);
  const hoveringID = useSelector((state) => state?.profile?.hoveringID);

  const openSideBar = useSelector((state) => state?.profile?.openSideBar);

  console.log(openSideBar, 'from sidenavv');

  const loginResponse = useSelector((state) => state?.profile?.user);
  const smartCoachResponse = useSelector(
    (state) => state?.profile?.smartCoachResponse
  );

  const activityGramResponse = useSelector(
    (state) => state?.profile?.activityGramEventsList
  );
  const activityLogResponse = useSelector(
    (state) => state?.profile?.getActivityLogEvents
  );

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

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  console.log(selectedRole, 'from side navvvv');

  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseIsActive, setCollapseIsActive] = useState(false);
  const [activeID, setActiveID] = useState(1);
  const [hoverdID, setHoveredID] = useState(null);

  const [sideNavId, setSideNavId] = useState(null);

  const sideNavRouting = (role, id, clickedNavItem) => {
    console.log(role, id, clickedNavItem, 'in sidenav routing=========>');

    setSideNavId(id);

    console.log(selectedRole, 'role==>');
    console.log(routingObj[role]);
    console.log(routingObj[selectedRole][id]);
    routingObj[selectedRole][id]();
  };

  const screenWidth = window.innerWidth;
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  let width1 = windowSize.width - 280;
  let width2 = windowSize.width - 80;

  // let width1 = window.innerWidth;
  // let width2 = window.innerWidth;

  console.log(width1, 'width1');

  console.log(obj[selectedRole], 'obj[selectedrole]');

  const [openBar, setOpenBar] = useState(false);

  const openCollapse = () => {
    console.log('open collapse');
    document.getElementById('collapse').style.width = '200px';
    document.getElementById('main').style.width = `${width1}px`;
    setCollapseOpen(false);
  };
  const closeCollapse = () => {
    console.log('close collapse');

    document.getElementById('collapse').style.width = '0px';
    document.getElementById('main').style.width = `${width2}px`;
    setCollapseOpen(true);
  };

  console.log(activeID, 'activeID');

  console.log(obj[selectedRole], 'iam selecyed');

  const handleBar = (openBar) => {
    !openBar ? openCollapse : closeCollapse;
  };

  //   useLayoutEffect(() => {
  //     openCollapse();
  //     closeCollapse();
  //   }, []);

  //   useEffect(() => {
  //     setWindowSize({ width: window.innerWidth });
  //   }, []);

  //   useEffect(() => {
  //     if (openSideBar) {
  //       openCollapse();
  //     } else {
  //       closeCollapse();
  //     }
  //   }, [openSideBar]);

  return (
    <>
      {/* <Box
        display={{ base: 'none', md: 'flex' }}
        justifyContent={'center'}
        alignItems={'center'}
        mt={{ md: '20px' }}
        cursor='pointer'
        onClick={() => {
          dispatch(setOpenSideBar(!openSideBar));
        }}
      >
        <HamburgerIcon boxSize={25} />
      </Box> */}

      <Box
        // mt='3.2rem'
        display='flex'
        flexDirection='column'
        alignItems='center'
        h='auto'
        maxHeight='130vh'
        bg="white"
      >
        {obj[selectedRole]?.map((item) => {
          return (
            <>
              <Box
                w='8'
                h='8'
                p='1'
                my='5'
                cursor='pointer'
                rounded='md'
                transform='translateY(50%)'
                _hover={{ bg: 'primary' }}
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
                onClick={() => {
                  console.log(item.id, item.name, 'item id+++++++******>');

                  sideNavRouting(selectedRole, item.id, item);

                  if (item.id === '1') {
                    navigate(`/role/${selectedRole}`);
                  } else if (item.name === 'REPORTS') {
                    navigate(`/role/${selectedRole}/reports`);
                  } else if (item.name === 'SMART COACH') {
                    navigate(`/role/${selectedRole}/SmartCoach`);
                  }

                  if (!collapseIsActive) {
                    dispatch(setActivatingID(item.id));

                    console.log(item.id);
                  } else if (activatingID == item.id) {
                    dispatch(setActivatingID(null));
                    closeCollapse();
                  } else if (activatingID !== item.id) {
                    dispatch(setActivatingID(item.id));
                  }

                  if (item.name === 'OTHERS') {
                    setOthersItemList(item);

                    dispatch(setActivatingID(item.insideList[0].id));

                    navigate('/role/Student/ActivityGramTestEvents');
                  } else {
                    if (item.id === '1') {
                      navigate(`/role/${selectedRole}`);
                    }
                  }
                }}
              >
                <img
                  key={item.id}
                  className='w-full h-full object-fill  '
                  src={
                    activatingID == item.id || hoveringID == item.id
                      ? item.img2
                      : item.img
                  }
                />
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default MainSideNav;
