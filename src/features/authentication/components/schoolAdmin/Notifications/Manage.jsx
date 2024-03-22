import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Link,
  Select,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddAnnouncement from './AddAnnouncement';
import ManageNotificationsTable from './ManageNotificationsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getManageAnnouncementData } from '../schoolAdminSlice';
import { AddIcon } from '@chakra-ui/icons';

const NotificationsManage = () => {
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.profile.selectedRole);

  const dispatch = useDispatch();

  const [dropdownText, setDropdowntext] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const token = useSelector((state) => state?.profile?.token);
  const role = useSelector((state) => state?.profile?.selectedRole);

  const handleButtonClick = () => {
    navigate(`/role/${userRole}/Notifications/Received`);
  };

  const getFilteredItems = (e) => {
    setDropdowntext(e.target.value);
  };

  useEffect(() => {
    dispatch(
      getManageAnnouncementData({
        status: dropdownText,
        token,
        role,
        skip: pageNumber,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getManageAnnouncementData({
        status: dropdownText,
        token,
        role,
        skip: pageNumber,
      })
    );
  }, [dropdownText, pageNumber]);
  return (
    <>
      {/* <Flex>
				<Box>
					<Text textStyle="h1">NOTIFICATIONS</Text>
					<br></br>
				</Box>
			</Flex>
			<Flex className="mb-6">
				<ButtonGroup>
					<Button
						onClick={handleButtonClick}
						backgroundColor="#EEEEEE"
						color="black"
						marginRight="-0.5rem"
						borderRadius="none"
						borderLeftRadius="1rem"
						width="10rem"
					>
						RECEIVED
					</Button>
					<Button
						color="#ffffff"
						backgroundColor="primary"
						borderRadius="none"
						borderRightRadius="1rem"
						width="10rem"
					>
						MANAGE
					</Button>
				</ButtonGroup>
			</Flex>
			<Text textStyle="h6">
				Notifications will be displayed to user everytime they login, prior to
				accessing their dashboard.
			</Text> */}

      <Box marginTop='4'>
        <Text
         textStyle={'textHead'}
          fontWeight='bold'
        >
          Select status
        </Text>
      </Box>
      <Box>
        <Select
        textStyle={'textHead'}
          fontWeight='bold'
          placeholder='All Status'
          backgroundColor='#F5F9FF'
          w='20rem'
          border='none'
          name='status'
          value={dropdownText}
          onChange={(e) => getFilteredItems(e)}
        >
          <option value='In Progress'>In Progress</option>
          <option value='Not Started'>Not Started</option>
          <option value='Completed'>Completed</option>
        </Select>
      </Box>

      <Flex marginTop='10'>
        <Text
          textStyle={'textHead'}
          fontWeight='bold'
          mt={{ base: '15px' }}
        >
          MANAGE ANNOUCEMENTS
        </Text>

        <Spacer />
        <HStack p='4' onClick={() => setAddModal(true)} cursor='pointer'>
          <Text
            textStyle={'textHead'}
            fontWeight='bold'
            textDecoration='underline'
          >
            Add Announcement
          </Text>
          <AddIcon
            marginLeft='-0.4rem'
            backgroundColor='#0081c8'
            color='white'
            borderRadius='2rem'
            fontSize='1.1rem'
            p='0.3rem'
          />

          {/* <Link to="/role/SuperAdmin/Districts/AddNewDistrict"> */}
          {/* <AddAnnouncement /> */}
          {/* </Link> */}
        </HStack>
      </Flex>
      {addModal && (
        <AddAnnouncement addModal={addModal} setAddModal={setAddModal} />
      )}

      <ManageNotificationsTable setPageNumber={setPageNumber} />
    </>
  );
};

export default NotificationsManage;
