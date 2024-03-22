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
import { getSchoolAdminStudentByClass } from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import { useLocation } from 'react-router-dom';

const ClassTableTwo = () => {
  const { tableName, actions, addStudentoClass, tableColumns, rows } =
    classTableData;
  const [addStudentModal, setAddStudentModal] = useState(false);

  console.log(addStudentModal, 'in classtable');

  const dispatch = useDispatch();

  const location = useLocation();

  const classId = location?.state?.classId;

  console.log(classId, 'classs id');

  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state.profile.userId);
  const coachBoardList = useSelector(
    (state) => state.schoolAdmin.schoolAdminGetAllClasses
  );

  const studentRoaster = useSelector(
    (state) => state.schoolAdmin.schoolAdminStudentByClass
  );

  console.log(coachBoardList, 'coachBoardListhjkkkkkkkkkkkkkkkkkkk');
  console.log(studentRoaster, 'jhgvsdgyfg');

  useEffect(() => {
    dispatch(getSchoolAdminStudentByClass({ token, classId }));
  }, []);

  return (
    <>
      <Divider />
      <Flex justify='space-between' w='full'>
        <HStack spacing='12'>
          <Text textStyle='h6'>{tableName}</Text>

          <Box>
            <Select
              size='sm'
              rounded='full'
              bg='primary'
              borderColor='primary'
              placeholder='Action'
            >
              {actions.map((action) => {
                return <option value={action}>{action}</option>;
              })}
            </Select>
          </Box>
        </HStack>
        <Box onClick={() => setAddStudentModal(true)}>
          <TextIcon text={addStudentoClass} icon={addCircleCion} />
        </Box>
      </Flex>
      <TableContainer>
        <Table variant='striped' colorScheme='bg'>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              {tableColumns.map((columnName, index) => {
                return (
                  <Th textStyle='h6' color='primary'>
                    {columnName}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Checkbox />
                  </Td>
                  {row.rowData.map((value, index) => {
                    return <Td key='index'>{value}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <AddStudentModal
        addStudentModal={addStudentModal}
        setAddStudentModal={setAddStudentModal}
      />
    </>
  );
};

export default ClassTableTwo;
