import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import MobileResponseScreen from '../MobileResponsive/MobileNav/MobileResponseScreen';
import Navbar from '../Navbar/Navbar';
import SampleSide from '../Navbar/SampleSide';
import SideNav from '../Navbar/SideNav';
import MainPage from './MainPage';
import LayoutPage from './LayoutPage';

const SharedLayout = () => {
  return (
    <>
      {/* <div className='h-full border-2 border-red'> */}
      {/* <Navbar /> */}
      {/* <MobileResponseScreen />

        <SampleSide /> */}
      {/* <SideNav /> */}
      {/* 
        <MainPage />
      </div> */}

      <Box w='auto'
      
      // maxWidth='1920px'
      
      margin='auto'>
        {/* <MainPage /> */}
        <LayoutPage />
      </Box>
    </>
  );
};

export default SharedLayout;
