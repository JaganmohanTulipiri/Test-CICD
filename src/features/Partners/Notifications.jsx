import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import EllipsisIcon from '../superAdmin/customIcons/ellipsisIcon.png';
import { UnCheckedNotifications } from '../superAdmin/json_files/NotificationsData.json';

const Notifications = () => {
  const [isActive, setIsActive] = useState('true');
  const [UnCheckedMessages, setUnCheckedMessages] = useState(
    UnCheckedNotifications
  );

  return (
    <>
      <Flex>
        <Box>
          <Text textStyle='h6'>NOTIFICATIONS</Text>
          <br></br>
        </Box>
      </Flex>
      <Text textStyle='h6'>
        Notifications will be displayed to user everytime they login, prior to
        accessing their dashboard.
      </Text>

      <Box marginTop='3'>
        {UnCheckedMessages.map((item, key) => (
          <Flex
            onClick={() => setIsActive(key)}
            style={{
              backgroundColor: key === isActive ? '#FFFFFF' : '#EBF8FF',
            }}
          >
            <Box w='full'>
              <Flex>
                <Box>
                  <div className='w-2 h-2 bg-primary rounded-full mr-10 mt-12 ml-3'></div>
                </Box>
                <Box marginTop='3' p='3'>
                  <p>{item.Header}</p>
                  <p>{item.Pending}</p>
                  <p>{item.DateTime}</p>
                </Box>
              </Flex>
              <Divider />
            </Box>
            <Box>
              <Image src={EllipsisIcon} boxSize='2rem' marginTop='6'></Image>
            </Box>
          </Flex>
        ))}
      </Box>
      <Box></Box>
    </>
  );
};

export default Notifications;
