import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AddEditUser from '../../../../components/AddEditUser';
import GridProvider from '../../../../components/GridProvider';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';
import { addClassModalData } from './ManageClassesConfig';
import {
  getAddClassToManageClassesApiCall,
  setAddClassToManageClassesApiResponse,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getManageClassesList } from '../../../teacher/teacherSlice';
import ErrorResponse from '../../../../components/GlobalComponents/ErrorResponse';
import SuccessResponse from '../../../../components/GlobalComponents/SuccessResponse';
const AddClassModal = (props) => {
  const { onClose } = useDisclosure();
  const dispatch = useDispatch();

  const { title, classDetails } = addClassModalData;
  const { addClassModal, setAddClassModal, setIsSuccess } = props;

  const token = useSelector((state) => state?.profile?.token);
  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const errorResponse = useSelector((state) => state?.profile?.errorResponse);
  const code = useSelector((state) => state?.profile?.code);

  const schoolsList = useSelector((state) => state.teacher.schools);

  const addClassToManageClassesApiResponse = useSelector(
    (state) => state?.schoolAdmin.addClassToManageClassesApiResponse
  );

  const [classData, setClassData] = useState({
    class_name: '',
    start_date: '',
    end_date: '',
    local_identifier: '',
    schoolUuid: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setClassData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      getAddClassToManageClassesApiCall({
        body: { ...classData, creater_role: selectedRole, created_by: userId },
        token,
      })
    );
  };

  console.log(addClassModal, 'from 75');

  // useEffect(() => {
  //   if (addClassToManageClassesApiResponse?.data?.code === 200) {
  //     setAddClassModal(false);
  //   }
  // }, [addClassToManageClassesApiResponse, dispatch]);

  return (
    <>
      <Modal
        size='sm'
        onClose={() => {
          setAddClassModal(false);

          onClose;
        }}
        isOpen={addClassModal}
        isCentered
        useInert={true}
        borderColor='transparent'
      >
        <ModalOverlay />
        <ModalContent p='4'>
          <ModalCloseButton onClick={() => setAddClassModal(false)} />
          <ModalBody>
            <Text color='primary' mb='3' textStyle={'textHead'}>
              {title}
            </Text>
            {classDetails.map((item) => {
              return (
                <>
                  {item.type !== 'select' && (
                    <Box maxW='100%'>
                      <Text mb='2' textStyle={'textHead'}>
                        {item.lable}
                      </Text>
                      <Input
                        type={item.type}
                        name={item.name}
                        value={classData?.item?.name}
                        onChange={(e) => handleChange(e)}
                        border='0px'
                        bg='bg.100'
                        textStyle={'textHead'}
                      />
                      {errors?.[item?.name] && (
                        <Text color='red' textStyle={'textHead'}>
                          {errors?.[item?.name]}
                        </Text>
                      )}
                    </Box>
                  )}
                  {item.type == 'select' && (
                    <Box maxW='100%'>
                      <Text mb='2' textStyle={'textHead'}>
                        {item.lable}
                      </Text>
                      <Select
                        bg='bg.100'
                        borderColor='bg.100'
                        name={item.name}
                        value={classData?.item?.name}
                        placeholder='Select...'
                        onChange={(e) => handleChange(e)}
                        textStyle={'textHead'}
                      >
                        {schoolsList.map((item, i) => {
                          return (
                            <option key={i} value={item.uuid}>
                              {item.school_name}
                            </option>
                          );
                        })}
                      </Select>
                      {errors?.[item?.name] && (
                        <Text color='red' textStyle={'textHead'}>
                          {errors?.[item?.name]}
                        </Text>
                      )}
                    </Box>
                  )}
                </>
              );
            })}

            <Flex justify='center' gap='8' p='8' w='100%'>
              <Box
                onClick={() => {
                  setAddClassModal(false);
                  dispatch(setAddClassToManageClassesApiResponse(null));
                }}
              >
                <NegativeButton text={'Cancel'} />
              </Box>

              <Box onClick={handleSubmit}>
                <PositiveButton text={'Create'} />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {code && code === 200 ? setAddClassModal(false) : null}
    </>
  );
};

export default AddClassModal;
