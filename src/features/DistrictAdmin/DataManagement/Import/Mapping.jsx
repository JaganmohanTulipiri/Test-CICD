import {
  Box,
  Center,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import addCircleIcon from '../../../../assets/customIcons/Icon ionic-ios-add-circle.svg';
import React, { useEffect, useState } from 'react';

import { MappingTableData } from '../../config/config';
import { useLocation, useNavigate } from 'react-router-dom';
import ImportRollBackModal from './ImportRollBackModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGetMappingObjectList,
  getRemoveMappingObjects,
  setGetMappingObj,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import { RiDeleteBin6Line, RiDownloadLine } from 'react-icons/ri';
import {
  setManageUser,
  setPreviousPath,
} from '../../../../store/slices/profileSlice';
import DeleteMappingSuccessModal from './DeleteMappingSuccessModal';
import { FaDownload } from 'react-icons/fa';
import TableSkeleton from '../../../../components/GlobalComponents/TableSkeleton';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

const Mapping = (props) => {
  const { setActiveTab } = props;

  console.log('setActiveTab', setActiveTab);

  const { columnNames } = MappingTableData;
  const [importRollBackModal, setImportRollBackModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const token = useSelector((state) => state?.profile?.token);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const mappingTableData = useSelector(
    (state) => state?.schoolAdmin?.getMappingObjectList
  );

  const loading = useSelector((state) => state?.schoolAdmin?.loading);
  const code = useSelector((state) => state?.profile?.code);

  console.log(mappingTableData, 'mappingTableDatamappingTableData');

  const [pageNumber, setPageNumber] = useState(1);

  const dataSetObj = {
    1: 'School, Teacher, Class, Student',
    2: 'School, Teacher, Class',
    3: 'School, Student',
    4: 'School, Administrator',
  };

  const handlePageNumber = (event) => {
    setPageNumber(event.selected + 1);
  };

  const clickToNavigate = () => {
    // dispatch(
    //   setManageUser({
    //     previousPath: location.pathname,
    //   })
    // );
    dispatch(setPreviousPath(location.pathname));

    navigate(`/role/${selectedRole}/create-new-mapping`, {
      state: setActiveTab,
    });
  };

  const clickToDelete = (uuid) => {
    dispatch(getRemoveMappingObjects({ uuid, token }));
  };

  const clickToEdit = (id) => {
    console.log('uuid', id);
    // dispatch(
    //   setManageUser({
    //     previousPath: location.pathname,
    //   })
    // );
    dispatch(setPreviousPath(location.pathname));

    navigate(`/role/${selectedRole}/edit/mapping/${id}`);
  };

  const getMappingId = (item) => {
    dispatch(
      setGetMappingObj({
        mappingId: item.uuid,
        dataSet: item.data_set,
      })
    );
  };

  useEffect(() => {
    dispatch(getGetMappingObjectList({ token, skip: pageNumber }));
  }, [pageNumber, code]);

  return (
    <Flex direction='column' gap='4' mt='8'>
      <Flex>
        <Text textStyle={'textHead'} fontWeight={'bold'} color='black'>
          FILE MAPPING
        </Text>
        <Spacer />

        <HStack cursor='pointer' onClick={() => clickToNavigate()}>
          <Text
           textStyle={'textHead'}
            as='span'
            textDecoration='underline'
            color='black-2'
            fontWeight={'bold'}
          >
            Create New Mapping
          </Text>
          <Box width='6' height='6'>
            <img w='full' h='full' src={addCircleIcon} />
          </Box>
        </HStack>
      </Flex>
      <Text
        textStyle={'textHead'}
        color='black-1'
      >
        Saved import file mappings:
      </Text>
      {loading ? (
        <TableSkeleton />
      ) : (
        <TableContainer>
          <Table variant='striped' colorScheme='bg'>
            <Thead>
              <Tr>
                {columnNames.map((columnName, index) => {
                  return (
                    <Th>
                      <Text
                        textStyle={'textHead'}
                        color='primary'
                      >
                        {columnName}
                      </Text>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {/* <Td onClick={() => setImportRollBackModal(true)}>click here</Td> */}

              {mappingTableData?.length ? (
                mappingTableData?.map((item, i) => {
                  return (
                    <Tr>
                      <Td
                        color='primary'
                        cursor='pointer'
                        onClick={() => clickToEdit(item?.uuid)}
                        textStyle={'textHead'}
                      >
                        {item?.name}
                      </Td>
                      <Td
                       textStyle={'textHead'}
                      >
                        {dataSetObj[item?.data_set]}
                      </Td>
                      <Td
                        textStyle={'textHead'}
                      >
                        {moment(item?.updatedAt).format('L')}{' '}
                        {moment(item?.updatedAt).format('LTS')}
                      </Td>
                      <Td>
                        <Stack>
                          <a href={item?.csv_path} style={{ width: '18px' }}>
                            <FaDownload
                              size={18}
                              fill='#0081c8'
                              cursor='pointer'
                              onClick={() => getMappingId(item)}
                            />
                          </a>
                          {/* <IoMdDownload/> */}
                        </Stack>
                      </Td>
                      <Td
                      textStyle={'textHead'}
                      >
                        <Box
                          onClick={() => {
                            clickToDelete(item?.uuid);
                          }}
                        >
                          <RiDeleteBin6Line
                            size={20}
                            fill='#0081c8'
                            cursor='pointer'
                          />
                        </Box>
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Flex justifyContent='center'>
                  <Text
                    textStyle={'textHead'}
                  >
                    No Records Found
                  </Text>
                </Flex>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}

      {/* <DeleteMappingSuccessModal /> */}
      <ImportRollBackModal
        importRollBackModal={importRollBackModal}
        setImportRollBackModal={setImportRollBackModal}
      />

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
    </Flex>
  );
};

export default Mapping;
