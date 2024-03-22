import React, { useContext, useEffect, useState } from 'react';

import fitnessLogo from '../../assets/images/FitnessGramLogo.svg';
import fitnessHeading from '../../assets/images/FITNESSGRAM.png';
import fitnessLoginExcerciseImage from '../../assets/images/Physical education-pana.png';
import crunchesImage from '../../assets/images/Group 7.png';

import loginBackgroundImage from '../../assets/images/loginbackgroundimage.png';
import LoginFields from './components/LoginFields';
import DisclaimerCard from './components/DisclaimerCard';
import ForgotUserNameCard from './components/ForgotUserNameCard';
import DummyModal from './components/DummyModal';
import LoginForgotsCard from './components/LoginForgotsCard';
import { useDispatch, useSelector } from 'react-redux';
import SuccessfullCard from './components/SuccessfullCard';
import loadingGif from '../../../src/assets/images/LoadingGIF/loading2.gif';
import { Rings } from 'react-loader-spinner';
import {
  setToken,
  setUser,
  setUserRole,
  setLoading,
  setLoadingTwo,
  setLoadingOne,
  setActivatingID,
  setHoveringID,
} from '../../store/slices/profileSlice';
import {
  setStudentFitnessGramEventsList,
  setStudentSelectedEventCard,
} from '../../store/slices/studentSlice/studentSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [checboxChecked, setChecboxChecked] = useState(false);

  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);

  const loginForgotName = useSelector((state) => state.profile.loginForgotName);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const token = useSelector((state) => state?.profile?.token);

  const loadingOne = useSelector((state) => state?.profile?.loadingOne);

  const loadingTwo = useSelector((state) => state?.profile?.loadingTwo);

  const isSucessPopUpOpen = useSelector(
    (state) => state.profile.isSucessPopUpOpen
  );

  console.log(loginResponse, 'iam login response');

  console.log(isSucessPopUpOpen, 'isSucessPopUpOpen');

  console.log(loginForgotName, 'loginForgotName');

  const [forgots, setForgots] = useState({
    usernameForgot: false,
    passwordForgot: false,
    districtCodeForgot: false,
  });

  const checkboxClicked = (value) => {
    setChecboxChecked(value);
  };

  const disclaimerSubmit = (value) => {
    setIsDisclaimerAccepted(value);
    setChecboxChecked(false);
  };

  const forgotsClicked = (key, value) => {
    console.log(key, value, 'forgots clieds');

    setForgots({
      ...forgots,
      [key]: value,
    });
  };

  console.log(window.innerHeight, window.innerWidth, 'height  and width');

  console.log(forgots, 'iam forgots');

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(setLoadingOne(false));
    dispatch(setLoadingTwo(false));

    dispatch(setActivatingID(1));
    dispatch(setHoveringID(null));
    dispatch(setStudentSelectedEventCard(null));

    dispatch(setUserRole(null));
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(setStudentFitnessGramEventsList(null));
  }, []);

  return (
    <>
      {loadingOne || loadingTwo ? (
        <div className=' w-full h-full bg-white flex justify-center items-center'>
          <Rings height={100} width={100} colors='#00BFFF' />{' '}
        </div>
      ) : (
        <div className='grid grid-cols-12 gap-0 relative h-full'>
          <div className='col-start-2 col-span-5 flex flex-col justify-end items-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col justify-center items-center pt-5 mb-5 pb-5'>
                <img src={fitnessLogo} className='max-w-full' />
                <img src={fitnessHeading} className='max-w-full' />
                <div className='text-center text-sm w-[100%] whitespace-normal'>
                  <p className='font-poppins-regular'>
                    <span className='text-fitness font-bold'>FitnessGram</span>{' '}
                    is one of the most widely used health-related fitness
                    assessment tools in the world, and it's backed by decades of
                    science, research and the vision of Dr.Kenneth H.Cooper, the
                    "Father of Aerobics."
                  </p>
                </div>
              </div>
              <div className='w-[90%]'>
                <img
                  src={fitnessLoginExcerciseImage}
                  className='mt-5 h-auto max-w rounded-lg  '
                />
              </div>
            </div>
          </div>

          <div
            className={
              'col-start-8 col-span-12 flex flex-col justify-center items-center bg-hero bg-cover object-scale-down bg-no-repeat bg-[#1895C4] bg-right-bottom'
            }
          >
            <LoginFields
              checboxChecked={checboxChecked}
              checkboxClicked={checkboxClicked}
              isDisclaimerAccepted={isDisclaimerAccepted}
              forgotsClicked={forgotsClicked}
            />
          </div>
        </div>
      )}

      {forgots && forgots[loginForgotName] ? (
        <LoginForgotsCard forgots={forgots} forgotsClicked={forgotsClicked} />
      ) : null}

      {isSucessPopUpOpen ? (
        <SuccessfullCard forgots={forgots} forgotsClicked={forgotsClicked} />
      ) : null}

      {checboxChecked ? (
        <>
          <DisclaimerCard
            checboxChecked={checboxChecked}
            disclaimerSubmit={disclaimerSubmit}
            checkboxClicked={checkboxClicked}
          />
        </>
      ) : null}
    </>
  );
};

export default LoginPage;
