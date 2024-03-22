import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AddNewSubject,
  deleteCMSSubject,
  getAllSubjects,
  getCMSSubjectStatus,
  getUpdatedCMSSubject,
  setAllSubjects,
} from '../../../../store/slices/superAdminSlice/superAdminSlice';
import AddNewSubjectPopup from './AddNewSubjectPopup';

const SubjectPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const finalRef = React.useRef(null);

  const authToken = useSelector((state) => state?.profile?.token);
  const subjectsResponse = useSelector(
    (state) => state?.superAdmin?.getSubjects?.data?.response
  );
  const deleteSubjectResponse = useSelector(
    (state) => state.superAdmin?.deleteSubject
  );
  const updatedSubjectStatusResponse = useSelector(
    (state) => state?.superAdmin?.CMSSubjectStatus
  );
  const subjectAPIResponse = useSelector(
    (state) => state?.superAdmin?.addSubject
  );
  const updatedSubjectResponse = useSelector(
    (state) => state.superAdmin?.updateSubject
  );
  const subjectStatusChangeResponse = useSelector(
    (state) => state?.superAdmin?.CMSSubjectStatus
  );

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);
  const [updateSubject, setUpdatedSubject] = useState(false);
  const [deleteSubject, setDeleteSubject] = useState(false);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const [subjectData, setSubjectData] = useState({
    name: '',
    updated_by: loginResponse?.response?.uuid,
  });
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');
  const [UUID, setUUID] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    console.log('handleChange=======', e.target.name, e.target.value);
    setSubject(e.target.value);
    setSubjectData({
      ...subjectData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = (subjectId) => {
    dispatch(deleteCMSSubject({ token: authToken, uuid: subjectId }));
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setUUID(e.target.value.split('||')[1]);
    setSubjectName(e.target.value.split('||')[0]);
    setStatus(e.target.value.split('||')[2]);
  };

  const handleSubmit = () => {
    setSubjectData({ ...subjectData, name: subjectName });
    dispatch(
      getUpdatedCMSSubject({
        body: subjectData,
        token: authToken,
        uuid: UUID,
      })
    );
    dispatch(
      getCMSSubjectStatus({
        body: {
          is_active: selectedOption === 'active' ? 'true' : 'false',
          updated_by: loginResponse?.response?.uuid,
        },
        subjectId: UUID,
        token: authToken,
      })
    );
  };

  const handleModalClose = () => {
    setSubject('');
    setSelectedOption('');
    onClose();
  };

  useEffect(() => {
    if (updatedSubjectResponse?.status === 200) {
      setIsSuccessPopUpOpen(true);
      setUpdatedSubject(true);
      onClose();
      setSubject('');
      setSelectedOption('');
    }
  }, [updatedSubjectResponse]);

  useEffect(() => {
    if (deleteSubjectResponse?.status === 200) {
      setIsSuccessPopUpOpen(true);
      setDeleteSubject(true);
      onClose();
      setSubject('');
      setSelectedOption('');
    }
  }, [deleteSubjectResponse]);

  useEffect(() => {
    if (subjectStatusChangeResponse?.status === 200) {
      setIsSuccessPopUpOpen(true);
      onClose();
      setSubject('');
      setSelectedOption('');
    }
  }, [subjectStatusChangeResponse]);

  useEffect(() => {
    if (updatedSubjectStatusResponse?.status === 200) {
      console.log('updated subjected status');
    }
  }, [updatedSubjectStatusResponse]);

  useEffect(() => {
    if (status === 'true') {
      setSelectedOption('active');
    } else {
      setSelectedOption('inactive');
    }

    console.log('status useEffect===', status, selectedOption);
  }, [status]);

  console.log('status change = selected option', selectedOption);

  useEffect(() => {
    if (subjectAPIResponse?.data?.code === 200) {
      dispatch(getAllSubjects({ token: authToken }));
      dispatch(setAllSubjects(null));
    }
  }, [subjectsResponse]);

  useEffect(() => {
    dispatch(getAllSubjects({ token: authToken }));
  }, [subjectAPIResponse, updatedSubjectResponse, subjectStatusChangeResponse]);

  return (
    <>
      <Link background='none' border='none' onClick={onOpen}>
        <Button color='black'>
          <Text textStyle={'text'}>Add/Remove CMS Subject</Text>
        </Button>
      </Link>
      <AddIcon
        backgroundColor='#0081c8'
        color='white'
        borderRadius='2rem'
        fontSize='1.1rem'
        p='0.3rem'
        marginLeft='-0.4rem'
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleModalClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p='9'>
            <Text size='md' color='#0081c8' textStyle='h4'>
              CMS Category
            </Text>

            <Flex>
              <Spacer />

              <AddNewSubjectPopup />
            </Flex>
            <Stack spacing='2' marginTop='3'>
              <Text>Select a Subject:</Text>
              <Select
                placeholder='All'
                backgroundColor='#F5F9FF'
                border='none'
                onChange={handleSubjectChange}
              >
                {subjectsResponse?.length > 0 &&
                  subjectsResponse.map((item, key) => (
                    <option
                      value={
                        item.name + '||' + item.uuid + '||' + item.is_active
                      }
                    >
                      {item.name}
                    </option>
                  ))}
              </Select>

              <Text marginRight='20'>Name of the Subject</Text>

              <InputGroup>
                <Input
                  type='text'
                  marginBottom='5'
                  backgroundColor='#F5F9FF'
                  border='none'
                  name='name'
                  value={subject.split('||')[0]}
                  onChange={handleChange}
                />
                <InputRightElement>
                  <DeleteIcon
                    color='red'
                    onClick={() => handleDelete(subject.split('||')[1])}
                  />
                </InputRightElement>
              </InputGroup>

              <Text>Status</Text>

              <RadioGroup name='options' value={selectedOption}>
                <Stack direction='column'>
                  <Radio
                    value='active'
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    Active
                  </Radio>
                  <Radio
                    value='inactive'
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    InActive
                  </Radio>
                </Stack>
              </RadioGroup>

              <Spacer />

              <Center>
                <ButtonGroup gap='4'>
                  <Button
                    onClick={handleModalClose}
                    color='black'
                    borderRadius='3xl'
                    backgroundColor='#EEEEEE'
                    width='7rem'
                  >
                    Cancel
                  </Button>
                  <Button
                    backgroundColor='#1890ff'
                    color='white'
                    borderRadius='3xl'
                    width='7rem'
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubjectPopup;
