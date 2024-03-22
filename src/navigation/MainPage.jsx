import {
  Box,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

import React from 'react';

import { useEffect, useState } from 'react';
import MobileResponseScreen from '../MobileResponsive/MobileNav/MobileResponseScreen';
import SideNav from '../Navbar/SideNav';
import MainSideNav from './MainSideNav';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainHoveringSideNav from './MainHoveringSideNav';

const MainPage = () => {
  const [openBar, setOpenBar] = useState(false);

  const openSideBar = useSelector((state) => state?.profile?.openSideBar);

  return (
    <Box w='full' h='auto' position='relative' bg='gray' className='example'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='fixed'
        top='0'
        // left='0'
        width='full'
        // maxW='1920px'
        zIndex='1'
        h='4.5rem'
      >
        <MobileResponseScreen />
      </Box>

      <Box display='flex' alignItems='flex-start' marginTop='4rem'   >
        <Box
          w='5rem'
          h='100vh'
          maxHeight='100vh'
          position='fixed'
          top='0rem'
          zIndex='1'
          bg='white'
          shadow='lg'
          display={{ base: 'none', md: 'none', lg: 'block' }}
         
        >
          <MainSideNav />
        </Box>

        <Box
          w={openSideBar ? '200px' : '0rem'}
     

          // transition="width 0.5s"  // Added transition property for smooth animation

          // Adjust the duration and timing function as needed
          css={{
            transitionDuration: '0.7s',
            transitionTimingFunction: 'ease',
          }}

          





          // transition='width 0.5s ease-in-out'
          position='fixed'
          top='5rem'
          left={{
            base: '5rem',
            md: '5rem',
            lg: '5rem',
             xl: '5rem',
      
            
              // '4xl': '25rem',
          }}
          zIndex='0'
          h='91vh'
          maxHeight='91vh'
          bg='white'
          roundedRight='lg'
          display={{ base: 'none', md: 'block', lg: 'block' }}
          mt='4'

   
        >
        <MainHoveringSideNav />
        </Box>

        <Box
          flex='1'
          h='100%'
          marginLeft={{
            base: '0',
            lg: `${openSideBar ? '290px' : '6rem'}`
            
          }}
          transition='margin-left 0.3s ease-in-out'

          position="fixed"

        >
          <Box
            bg='white'
            h='88.5vh'
             maxHeight='88.5vh'
            p='1rem'
            overflow='auto'
            className='example'
            width={{
              base: '100%',

              md:"100%",
              
              lg: `calc(99.5% - ${openSideBar ? '300px' : '6.5rem'})`,
              // xl: `calc(799%  - ${openSideBar ? '300px' : '6.5rem'})`,
              //  '4xl': `calc(74%  - ${openSideBar ? '300px' : '6.5rem'})`,
            }}
            // maxW='1920px'
            position='fixed'
            top='5rem'
            rounded='lg'
            mt='4'
            shadow="2xl"

         

           right =  {{base:"0", lg:"1rem"}}


            transition="width 0.5s"  // Added transition property for smooth animation

    // Adjust the duration and timing function as needed
    css={{
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
    }}




          >
            <Box mt='4' className='example' overflow="scroll" mb={{base: "10rem", md:"5rem"}}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
