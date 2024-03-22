import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
  Card,
  CardBody,
  Stack,
  Text,
  Flex,
  HStack,
  Image,
} from '@chakra-ui/react';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import absent from '../../../assets/customIcons/absent@2x.png';
import present from '../../../assets/customIcons/absent.png';

import calendarImg from '../../../assets//images/Icon awesome-calendar-alt@2x.png';
import activityGramTestEventsImage from '../../../assets/images/OthersSectionImages/Activity Gram.svg';

import vesselImg from '../../../assets/images/vessel.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { agDeleteEventData } from '../../../features/teacher/teacherSlice';

const ActivityModalSkeleton = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isViewDataClicked, selectedCardData, smartCoachButtonClicked } =
    props;

  const eventId = selectedCardData?.uuid;

  const token = useSelector((state) => state.profile.token);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const userId = useSelector((state) => state?.profile?.userId);

  console.log(selectedRole, 'selectedRole from activiyty list');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const smartCoachButton = (value) => {
    smartCoachButtonClicked(value);
    navigate(`/role/${selectedRole}/SmartCoach`);
    onClose;
  };

  const handleStudentRoster = () => {
    navigate(`/role/${selectedRole}/studentroster`, {
      state: { eventId: selectedCardData.uuid },
    });
  };

  const handleDeleteEvent = () => {
    console.log('in handleDelete event ====>');
    let body = {
      updater_role: selectedRole,
      updated_by: userId,
    };
    dispatch(agDeleteEventData({ token, eventId, body }));
  };

  return (
    <>
      <Modal isOpen={isViewDataClicked} onClose={onClose} size='sm'>
        <ModalOverlay />
        <ModalContent
          containerProps={{
            justifyContent: 'flex-start',
            marginLeft: '8rem',
            marginTop: '9rem',
            padding: '0',
          }}
        >
          <ModalBody p='0' h='35rem'>
            {selectedCardData && (
              <Box
                w={['100%']}
                border='1px'
                borderColor='white'
                borderRadius='15'
                p='0'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                key={selectedCardData.id}
              >
                <Stack spacing='2'>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    bgColor='#E7F1FF'
                    border='1px'
                    borderColor='#E7F1FF'
                    borderRadius='3'
                    w='100%'
                    px='2'
                    py='1.5'
                  >
                    <Text color='black-2' textStyle='h4'>
                      {selectedCardData.event_name}
                    </Text>
                    <Box display='flex'>
                      <Box display='flex' px='10px' onClick={handleDeleteEvent}>
                        <Text textDecoration='underline'>Delete</Text>
                        <RiDeleteBin6Line size={20} fill='red' />
                      </Box>
                      <Box display='flex'>
                        <Text textDecoration='underline'>Edit</Text>
                        <FiEdit size={20} color='blue' />
                      </Box>
                    </Box>
                  </Box>

                  <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    px='3'
                  >
                    <Flex direction='column' spacing='3'>
                      <Text fontSize='sm' pb='2'>
                        {/* {selectedCardData.text} */}
                      </Text>
                      <HStack spacing='2'>
                        <Box width='6' height='6'>
                          <Image
                            src={calendarImg}
                            alt='calendar'
                            w='full'
                            h='full'
                          />
                        </Box>

                        <Text pt='2' fontSize='sm'>
                          {selectedCardData.start_date.split('T')[0]}
                        </Text>
                      </HStack>
                    </Flex>

                    <Box width='10rem' height='10rem'>
                      <Image
                        src={activityGramTestEventsImage}
                        objectFit='contain'
                        alt='calendar'
                      />
                    </Box>
                  </Flex>
                  <Flex justifyContent='space-evenly'>
                    <Box display='flex' alignItems='center'>
                      <Image src={absent} h='25px' />
                      <Text mx='5px'>
                        {selectedCardData.participants}
                        <span>Participants</span>
                      </Text>
                    </Box>
                    <Box display='flex' alignItems='center'>
                      <Image src={present} h='25px' />
                      <Text textStyle={'textHead'}>{selectedCardData.missing_data} Participants</Text>
                    </Box>{' '}
                  </Flex>
                </Stack>
                <Flex
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  mt='1rem'
                >
                  <Box
                    bgColor='primary'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    cursor='pointer'
                    textColor='white'
                    px='3.8rem'
                    py='0.5rem'
                    borderRadius={14}
                    onClick={() => smartCoachButton(false)}
                  >
                    <Image src={vesselImg} alt='vessel' w={8} h={6} pr='2' />
                    <Text fontSize='md' fontFamily='poppins'>
                      Smart Coach Resources
                    </Text>
                  </Box>

                  {selectedRole?.length && selectedRole === 'teacher' ? (
                    <Button
                      mb='2rem'
                      mt='1rem'
                      fontSize='md'
                      fontWeight='normal'
                      fontFamily='poppins'
                      textColor='white'
                      bgColor='primary'
                      px='6rem'
                      borderRadius={14}
                      onClick={() => handleStudentRoster()}
                    >
                      {' '}
                      View Student Roster
                    </Button>
                  ) : (
                    <>
                      <Button
                        mb='2rem'
                        mt='1rem'
                        fontSize='sm'
                        fontWeight='normal'
                        fontFamily='poppins'
                        textColor='white'
                        bgColor='primary'
                        px='6.5rem'
                        borderRadius={14}
                      >
                        {' '}
                        View/Enter Data
                      </Button>
                    </>
                  )}
                </Flex>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivityModalSkeleton;
