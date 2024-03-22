import React from 'react';
import { Stack, Text, Button, Card, Box, Flex } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';

import { IoMdSchool, IoIosHelpCircle } from 'react-icons/io';
import { FaUserCog, FaUsers, FaUser } from 'react-icons/fa';
import { MdUpload, MdNotifications } from 'react-icons/md';
import { BiPowerOff } from 'react-icons/bi';

import { MdEmail, MdRestorePage } from 'react-icons/md';
import { GoClippy } from 'react-icons/go';
import { GiKeyLock } from 'react-icons/gi';
import { BsArrowBarUp } from 'react-icons/bs';

export const commonSettingsData = {
  id: '1',
  head: 'ACCOUNT SETTINGS',
  list: [
    { id: 1, icon: <FaUser />, name: 'MyAccount' },
    { id: 2, icon: <IoIosHelpCircle />, name: 'Help' },
    { id: 2, icon: <BiPowerOff />, name: 'Logout' },
  ],
};

export const settingsData = {
  teacher: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [{ id: 1, icon: <MdNotifications />, name: 'Notifications' }],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        { id: 1, icon: <FaUserCog />, name: 'Manage Classes' },
        { id: 2, icon: <FaUsers />, name: 'Manage Users' },
      ],
    },
  ],

  superAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Manage Users',
          icon: <MdNotifications />,
        },
      ],
    },
  ],

  student: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [{ id: 1, icon: <MdNotifications />, name: 'Notifications' }],
    },
  ],
  Parent: {},
  schoolAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Schools',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Import',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Manage Classes',
          icon: <IoMdSchool />,
        },
        {
          id: 3,
          name: 'Manage Users',
          icon: <MdNotifications />,
        },
      ],
    },
  ],

  districtAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Schools',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Email Settings',
          icon: <MdEmail />,
        },
        {
          id: 3,
          name: 'Manage Mandates',
          icon: <GoClippy />,
        },
        {
          id: 4,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
        {
          id: 5,
          name: 'Roles & Privileges',
          icon: <GiKeyLock />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'End Of Term Process',
          icon: <MdRestorePage />,
        },
        {
          id: 2,
          name: 'Import',
          icon: <BsArrowBarUp />,
        },
        {
          id: 3,
          name: 'Manage Classes',
          icon: <GoClippy />,
        },
        {
          id: 4,
          name: 'Manage Users',
          icon: <FaUsers />,
        },
      ],
    },
  ],
  stateAdmin: [
    {
      id: '1',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Districts & Schools',
          icon: <IoMdSchool />,
        },

        {
          id: 2,
          name: 'Manage Mandates',
          icon: <MdNotifications />,
        },
        {
          id: 3,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
        {
          id: 4,
          name: 'Roles & Privileges',
          icon: <GiKeyLock />,
        },
      ],
    },
    {
      id: '2',
      head: 'DATA MANAGEMENT',
      list: [
        {
          id: 1,
          name: 'Import',
          icon: <BsArrowBarUp />,
        },
      ],
    },
  ],
  partner: [
    {
      id: '2',
      head: 'SYSTEM ADMINISTRATOR',
      list: [
        {
          id: 1,
          name: 'Districts & Schools',
          icon: <IoMdSchool />,
        },
        {
          id: 2,
          name: 'Notifications',
          icon: <MdNotifications />,
        },
      ],
    },
  ],
};

const SettingScreen = () => {
  return (
    <Card p='4' m='4' borderRadius='sm'>
      <Stack direction='column'>
        {commonSettingsData?.list?.map((link) => (
          <Box key={link.index}>
            <Flex gap={'4'}>
              <Text mt='1'>{link.icon}</Text>
              <Text>{link.name}</Text>
            </Flex>
          </Box>
        ))}
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
      ></Stack>
    </Card>
  );
};

export default SettingScreen;
