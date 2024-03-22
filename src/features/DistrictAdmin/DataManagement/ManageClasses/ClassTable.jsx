import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  Text,
  Divider,
  Flex,
  HStack,
  Box,
  Select,
} from '@chakra-ui/react';
import { classTableData } from './ManageClassesConfig';
import addCircleCion from '../../../../assets/customIcons/Icon ionic-ios-add-circle.svg';

import TextIcon from '../../../../components/TextIcon';
import AddStudentModal from './AddStudentModal';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  getSchoolAdminClassStudentCall,
  getSchoolAdminStudentByClassesCall,
  getStudentInfoBasedOnParticularSchoolApi,
  getTeachersBySchool,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import AddStudentSuccessModal from './AddStudentSuccessModal';
import {
  getUserData,
  setManageUser,
} from '../../../../store/slices/profileSlice';
import ErrorResponse from '../../../../components/GlobalComponents/ErrorResponse';
import { Rings } from 'react-loader-spinner';
import TableSkeleton from '../../../../components/GlobalComponents/TableSkeleton';
import SuccessResponse from '../../../../components/GlobalComponents/SuccessResponse';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

const ClassTable = () => {
  const { tableName, actions, addStudentoClass, tableColumns, rows } =
    classTableData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const loading = useSelector((state) => state?.schoolAdmin?.loading);
  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state.profile.userId);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  const studentRoaster = useSelector(
    (state) => state.schoolAdmin.schoolAdminStudentByClasses
  );
  const addStudentToClassApiResponse = useSelector(
    (state) => state?.schoolAdmin?.addStudentToClassApiResponse
  );

  const [addStudentModal, setAddStudentModal] = useState(false);
  const [userIds, setUserIds] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (event) => {
    setPageNumber(event.selected + 1);
    // dispatch(setCurrentPageNumber(event.selected+1))
  };

  const handleUserIds = (e, userId) => {
    if (e.target.checked) {
      setUserIds((prevState) => {
        studentRoaster?.length === [...prevState, userId].length
          ? setIsAllChecked(true)
          : setIsAllChecked(false);

        return [...prevState, userId];
      });
    } else {
      let dummyUserIds = userIds.slice();
      let userIdIndex = dummyUserIds.findIndex((id) => id === userId);
      dummyUserIds.splice(userIdIndex, 1);
      setUserIds([...dummyUserIds]);
      studentRoaster?.length === dummyUserIds.length
        ? setIsAllChecked(true)
        : setIsAllChecked(false);
    }
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setIsAllChecked(true);
      let arr = studentRoaster?.map((user) => user.uuid);
      setUserIds(arr);
    } else {
      setIsAllChecked(false);
      setUserIds([]);
    }
  };

  console.log(userIds, 'iam user ids');

  const handleEditStudent = (item) => {
    dispatch(getUserData({ id: item.uuid, token }));
    dispatch(
      setManageUser({
        formTitle: `Edit Student`,
        userType: 'student',
        previousPath: location.pathname,
      })
    );

    navigate(`/role/${userRole}/edit/student/${item.uuid}`);
  };

  useEffect(() => {
    dispatch(
      getSchoolAdminStudentByClassesCall({
        token,
        classId: params.classId,
        skip: pageNumber,
      })
    );
  }, [pageNumber]);

  useEffect(() => {
    if (addStudentToClassApiResponse?.data?.code === 200) {
      dispatch(
        getSchoolAdminStudentByClassesCall({
          token,
          classId: params.classId,
          skip: pageNumber,
        })
      );
      setAddStudentModal(false);
    }
  }, [addStudentToClassApiResponse]);

  return (
    <>
      <Divider />

      {loading ? (
        <TableSkeleton />
      ) : (
        <>
          <Flex
            justify='space-between'
            w='full'
            display={{ lg: 'flex', base: 'flex flex-col', md: 'flex' }}
          >
            <HStack spacing={{ base: '8', lg: '12', md: '8' }}>
              <Text textStyle='h1' whiteSpace={'nowrap'}>
                Class Roaster
              </Text>

              {userRole !== 'teacher' ? (
                <Box>
                  <Select
                    size='sm'
                    rounded='full'
                    bg='primary'
                    borderColor='primary'
                    placeholder='Action'
                    color='white'
                  >
                    {actions.map((action) => {
                      return <option value={action}>{action}</option>;
                    })}
                  </Select>
                </Box>
              ) : null}
            </HStack>
            {userRole !== 'teacher' ? (
              <Box onClick={() => setAddStudentModal(true)} mt='4'>
                <TextIcon
                  text={addStudentoClass}
                  icon={addCircleCion}
                  size='10'
                />
              </Box>
            ) : null}
          </Flex>
          <TableContainer>
            <Table variant='striped' colorScheme='bg'>
              <Thead>
                <Tr>
                  {userRole !== 'teacher' ? (
                    <Th>
                      <Checkbox
                        isChecked={isAllChecked}
                        onChange={handleCheckAll}
                      />
                    </Th>
                  ) : null}

                  {tableColumns.map((columnName, index) => {
                    return <Th textStyle='h6'>{columnName}</Th>;
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {studentRoaster.map((row, index) => {
                  return (
                    <>
                      {userRole !== 'teacher' ? (
                        <Tr key={index}>
                          <Td>
                            <Checkbox
                              isChecked={userIds.includes(row?.uuid)}
                              onChange={(e) => handleUserIds(e, row.uuid)}
                            />
                          </Td>
                          <Td
                            key='index'
                            color='primary'
                            onClick={() => handleEditStudent(row)}
                            cursor={'pointer'}
                          >
                            {`${row.first_name} ${row.last_name}`}
                          </Td>
                          <Td key='index'>{row.student_id}</Td>
                          <Td key='index'>
                            {moment(row.date_of_birth).format(
                              navigator.language === 'en-GB'
                                ? 'DD-MM-YYYY'
                                : 'MM-DD-YYYY'
                            )}
                          </Td>{' '}
                          <Td key='index'>{row.grade}</Td>
                          <Td key='index'>{row.gender}</Td>
                          <Td key='index'>{row.login_status}</Td>
                        </Tr>
                      ) : (
                        <Tr key={index}>
                          <Td
                            key='index'
                            color='primary'
                            onClick={() => handleEditStudent(row)}
                            cursor={'pointer'}
                          >
                            {`${row.first_name} ${row.last_name}`}
                          </Td>

                          <Td key='index'>{row.student_id}</Td>
                          <Td key='index'>
                            {moment(row.date_of_birth).format(
                              navigator.language === 'en-GB'
                                ? 'DD-MM-YYYY'
                                : 'MM-DD-YYYY'
                            )}
                          </Td>
                          <Td key='index'>{row.grade}</Td>
                          <Td key='index'>{row.gender}</Td>
                          <Td key='index'>{row.login_status}</Td>
                        </Tr>
                      )}
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>

          {!studentRoaster?.length && (
            <Flex justifyContent='center'>
              <Text>No Records Found</Text>
            </Flex>
          )}

          {addStudentModal && (
            <AddStudentModal
              addStudentModal={addStudentModal}
              setAddStudentModal={setAddStudentModal}
            />
          )}
        </>
      )}
      {studentRoaster?.length ? (
        <Flex justify='flex-end'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='Next >'
            onPageChange={handlePageNumber}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel='<Previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
          />
        </Flex>
      ) : null}
    </>
  );
};

export default ClassTable;
