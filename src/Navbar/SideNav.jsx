import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';

import {
  student,
  teacher_schoolAdministrator,
  parent,
  superAdmin,
  partner,
  districtAdmin,
  stateAdmin,
} from '../assets/roles/rolebasedList';

import {
  getActivityGramEventsList,
  getActivityLogEvents,
  getSmartCoach,
  getTestSelection,
  setActivatingID,
  setHoveringID,
  setOpenSideBar,
  setTestSelectionButtonClicked,
} from '../../src/store/slices/profileSlice';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { setEventStudentList } from '../features/teacher/teacherSlice';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

const   SideNav = () => {
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

  useLayoutEffect(() => {
    openCollapse();
    closeCollapse();
  }, []);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth });
  }, []);

  useEffect(() => {
    if (openSideBar) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [openSideBar]);

  return (
    <>
      <nav
        className='xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col hidden bg-white
        xl:h-[calc(120vh-6rem)]
        lg:h-[calc(180vh-6rem)]
        md:h-[calc(109vh-6rem)]

        xl:max-h-[calc(1080px-6rem)]
        lg:max-h-[calc(980px-6rem)]
        md:max-h-[calc(980px-6rem)]

        max-h-[calc(980px-6rem)]
        h-[calc(100vh-6rem)]

        shadow-md
        xl:w-[5rem]
        lg:w-[5rem]
        md:w-[5rem]

        w-invisible

         fixed  z-[2] isolate top-0 left-0
        justify-start items-center  pt-12 gap-8 cursor-pointer'
      >
        <HamburgerIcon
          boxSize={25}
          onClick={() => {
            dispatch(setOpenSideBar(!openSideBar));
          }}
          display={{ base: 'none', md: 'flex' }}
          mt={{ lg: '-20px', md: '-20px' }}
          mb={{ lg: '40px' }}
        />

        {obj[selectedRole]?.map((item) => {
          return (
            <>
              <div
                key={item.id}
                name={item.id}
                className={
                  activatingID == item.id || hoveringID == item.id
                    ? 'bg-primary w-8 h-8 p-1 rounded-md translate-y-[50%]  hover:bg-primary '
                    : 'w-8 h-8 p-1 rounded-md translate-y-[50%] hover:bg-primary '
                }
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
                onMouseEnter={() => {
                  // setHoveredID(item.id);
                  dispatch(setHoveringID(item.id));
                }}
                onMouseLeave={() => {
                  // setHoveredID(null);
                  dispatch(setHoveringID(null));
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
              </div>
            </>
          );
        })}
      </nav>
      <nav
        id='collapse'
        className='xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col hidden w-0 bg-white xl:h-[calc(100vh-6rem)] lg:h-[calc(79vh-6rem)] md:h-[calc(100vh-6rem)]  xl:max-h-[calc(1080px-6rem)]
        lg:max-h-[calc(950px-6rem)] md:max-h-[calc(980px-6rem)]
         fixed   isolate top-[6.2rem] left-[5rem]  shadow-xs  pt-[1.6rem] gap-8 rounded-lg  ease-in-out duration-700 origin-left overflow-hidden whitespace-nowrap '
      >


        
        {obj[selectedRole]?.map((item) => {
          return (
            <div
              key={item.id}
              className={
                activatingID == item.id || hoveringID == item.id
                  ? 'bg-primary text-white translate-y-[50%] h-8 p-3 flex items-center text-poppins-regular text-base rounded-r-full hover:bg-primary hover:text-white cursor-pointer'
                  : 'translate-y-[50%] h-8 p-3 flex items-center text-poppins-regular text-base rounded-r-full hover:bg-primary hover:text-white  cursor-pointer'
              }
              onMouseEnter={() => {
                // setHoveredID(item.id);
                dispatch(setHoveringID(item.id));
              }}
              onMouseLeave={() => {
                // setHoveredID(null);
                dispatch(setHoveringID(null));
              }}
              onClick={() => {
                sideNavRouting(selectedRole, item.id, item);

                if (activatingID == item.id) {
                  dispatch(setActivatingID(null));

                  closeCollapse();
                } else if (activatingID !== item.id) {
                  dispatch(setActivatingID(item.id));
                }
              }}
            >
              <span className='text-[0.9rem] font-poppins-semibold'>
                {item.name}
              </span>
            </div>
          );
        })}





      </nav>
      <main
        className='
xl:h-[calc(100vh-4.5rem)]
lg:h-[calc(100vh-5rem)]
md:h-[calc(100vh-1rem)]
h-[calc(100vh-4rem)] max-h[906px]
xl:w-[calc(100vw-5rem)]
xl:max-w-[1848px-5rem]
lg:w-[calc(100vw-5rem)]
lg:max-w-[1848px-5rem]
md:w-[calc(100vw-5rem)]
md:max-w-[1848px-5rem]
w-[100vw]
max-w-[100vw]
xl:fixed xl:bottom-0 xl:right-0
lg:fixed lg:bottom-0 lg:right-0
md:fixed md:bottom-0 md:right-0
 ease-in-out duration-700 origin-left rounded-md '
        id='main'
      >
        <section className='h-[calc(100%-3rem)]  rounded-md xl:m-6 lg:m-5 xl:mt-6 lg:mt-2 md:mt-[4rem] mt-6 bg-white shadow-lg overflow-auto example xl:p-8 lg:p-8 md:p-8 p-2'>
          <Outlet />
        </section>
      </main>
    </>
  );
};

// const SideNav = () => {
//   return (
//     <>
//       <Box bg='white'>
//         <h1>ji</h1>
//       </Box>
//       <Box bg='white'>
//         <h1>ji</h1>
//       </Box>
//       <Box bg='white'>
//         <Outlet />
//       </Box>
//     </>
//   );
// };
export default SideNav;
