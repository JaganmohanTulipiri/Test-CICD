import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import activityGram from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityGram.svg';
import activityLogo from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityLogo.svg';

import administerTest from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ADMINISTERTEST.svg';

import {
  Select,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import AdminTableSkelton from '../../../components/GlobalComponents/Admin/AdminTableSkelton';
import AdminTestResultSkelton from '../../../components/GlobalComponents/Admin/AdminTestResultSkelton';

const FirstTab = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);

  return (
    <>
      <div className='grid grid-cols-6  p-4'>
        <div className='flex flex-col'>
          <p className='mt-10 mb-2'>Select below</p>
          <Select placeholder='Select option' size='xs' w='10rem'>
            <option value='option1'>Test Regular 1000</option>
            <option value='option2'>Test Event 2</option>
            <option value='option3'>Test Event 2022</option>
            <option value='option3'>Fitness Nov 22</option>
          </Select>
        </div>
        <div className='flex flex-col'>
          <p className='mt-10 mb-2'>Select Below</p>
          <Select
            placeholder='Select option'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            size='xs'
            w='10rem'
          >
            <option value='Select'>Enter by class</option>
            <option value='Select'>Enter by student</option>
          </Select>
        </div>
        <>
          {selectedOption === 'Select' && (
            <div className='flex flex-col'>
              <p className='mt-10 mb-2'>Select Below</p>
              <Select
                placeholder='Select option'
                value={selectedOption1}
                onChange={(e) => setSelectedOption1(e.target.value)}
                size='xs'
                w='10rem'
              >
                <option value='input'>Enter by class</option>
                <option value='input'>Enter by student</option>
              </Select>
            </div>
          )}
        </>
        <div className=''>
          {selectedOption1 === 'input' && (
            <>
              {/* <div className='flex flex-col'>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<SearchIcon color='gray.300' />}
                    />
                  </InputGroup>
                </Stack>
              </div> */}
              <div className='flex flex-col'>
                <p className='mt-[4rem] mb-2 '></p>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={
                        <SearchIcon color='gray.300' marginBottom='4' />
                      }
                    />
                    <Input type='text' placeholder=' Search' size='xs' />
                  </InputGroup>
                </Stack>
              </div>
            </>
          )}
        </div>
      </div>

      <div className=''>
        {selectedOption1 === 'input' && (
          <>
            {/* <AdminTableSkelton /> */}
            <AdminTestResultSkelton />
          </>
        )}
      </div>
    </>
  );
};

const SecondTab = () => {
  const navigate = useNavigate();
  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const data = [
    {
      id: '1',
      name: 'ACTIVITYGRAM ',
      img: activityGram,
    },
    {
      id: '2',
      name: 'ACTIVITYGRAM LITE',
      img: activityLogo,
    },
    {
      id: '3',
      name: 'ACTIVITYLOG ',
      img: administerTest,
    },
  ];

  const clickOtherRole = (name) => {
    switch (name) {
      case name === 'ACTIVITYGRAM':
        navigate(`/role/${selectedRole}/ACTIVITYGRAM`);
        break;
      case name === 'ACTIVITYGRAM LITE':
        navigate(`/role/${selectedRole}/ActivityGramLiteTestEvents`);
        break;
      default:
        navigate(`/role/${selectedRole}/ActivityLogChallenges`);
        break;
    }
  };

  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div className='flex bg-[#f5f5f5] text-primary px-2 mt-4'>
              <img src={item.img} className='w-5 h-5 mt-5' />
              <p
                className=' p-2 m-3 rounded-lg text-[0.8rem] font-poppins-bold cursor-pointer'
                onClick={clickOtherRole(name)}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Admin = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };
  return (
    <>
      <div className='p-8'>
        <p className='text-left text-uppercase font-poppins-semibold'>
          ADMINISTER TEST{' '}
        </p>

        <>
          <div className='mt-4'>
            <ul className='nav flex gap-4 p-2 rounded-3xl  text-black  cursor-pointer w-[30vw]'>
              <li
                className={
                  activeTab === 'tab1'
                    ? 'bg-primary text-white p-2 rounded-l-lg'
                    : 'bg-[#f5f5f5] text-black p-2 rounded-l-lg'
                }
                onClick={handleTab1}
              >
                Fitness Gram
              </li>
              <li
                className={
                  activeTab === 'tab2'
                    ? 'bg-primary text-white p-2 rounded-r-lg w-[10vw]'
                    : 'bg-[#f5f5f5] text-[#282828] p-2 rounded-r-lg'
                }
                onClick={handleTab2}
              >
                Others
              </li>
            </ul>

            <div className=''>
              {activeTab === 'tab1' ? <FirstTab /> : <SecondTab />}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Admin;
