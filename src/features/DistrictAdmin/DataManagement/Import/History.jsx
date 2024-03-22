import { Box, Flex, HStack, Img, Spacer, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import historyIcon from '../../../../assets/customIcons/ExploreHistoryIcon.svg';
import React, { useEffect } from 'react';
import { HistoryTableData } from '../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { getGetImportHistory } from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import RollBackModal from './RollbackModal';
import { useState } from 'react';
import TableSkeleton from '../../../../components/GlobalComponents/TableSkeleton';

const History = () => {
  const { columnNames } = HistoryTableData;

  const dispatch = useDispatch();

  const mapHistory = useSelector(
    (state) => state?.schoolAdmin?.getImportHistory?.data?.response
  );
  const token = useSelector((state) => state?.profile?.token);

  const loading = useSelector((state) => state?.schoolAdmin?.loading);

  const [roleBackModal, setRoleBackModal] = useState(false);
  const [importId, setImportId] = useState(null);

  console.log('mapHistory', mapHistory);

  const clickToNavigate = (importId) => {
    setImportId(importId);
    setRoleBackModal(true);
  };

  const clickToDownload = () => {};

  useEffect(() => {
    dispatch(getGetImportHistory({ token }));
  }, []);

  return (
    <Flex direction='column' gap='4' mt='8'>
      <Flex>
        <Text textStyle={'textHead'} color='black-2'>
          FILE IMPORT HISTORY FOR THE LAST 30 DAYS
        </Text>
        <Spacer />

        <HStack
          cursor='pointer'
          onClick={() => console.log('onclick of explore history')}
        >
          <Text
            textStyle={'textHead'}
            textDecoration='underline'
            color='black-2'
          >
            Explore History
          </Text>
          <Box width='6' height='6'>
            <Img w='full' h='full' src={historyIcon} />
          </Box>
        </HStack>
      </Flex>
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
                      <Text textStyle={'textHead'} color='primary'>
                        {columnName}
                      </Text>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {mapHistory?.length ? (
                mapHistory?.map((item, i) => {
                  return (
                    <Tr>
                      <Td>
                        {item?.status !== 'Roll Back Completed' ? (
                          <Text
                            color='primary'
                            cursor='pointer'
                            onClick={() => clickToNavigate(item?.uuid)}
                            textStyle={'textHead'}
                          >
                            {item?.file_name}
                          </Text>
                        ) : (
                          <Text textStyle={'textHead'}>{item?.file_name}</Text>
                        )}
                      </Td>
                      <Td>
                        <a href={item?.file_download}>{item?.file_name}</a>
                      </Td>
                      <Td textStyle={'textHead'}>{item?.import_history_id}</Td>
                      <Td textStyle={'textHead'}>
                        {item?.start_date?.split('T')[0]}
                      </Td>
                      <Td textStyle={'textHead'}>
                        {item?.end_date?.split('T')[0]}
                      </Td>
                      <Td textStyle={'textHead'}>{item?.status}</Td>
                      <Td textStyle={'textHead'}>{item?.errors}</Td>
                      <Td textStyle={'textHead'}>{item?.students}</Td>
                      <Td textStyle={'textHead'}>{item?.teachers}</Td>
                      <Td textStyle={'textHead'}>{item?.deactivations}</Td>
                      <Td textStyle={'textHead'}>{item?.classes}</Td>
                      <Td textStyle={'textHead'}>{item?.link_to_class}</Td>
                      <Td textStyle={'textHead'}>{item?.link_to_school}</Td>
                    </Tr>
                  );
                })
              ) : (
                <Flex justifyContent='center'>
                  <Text>No Records Found</Text>
                </Flex>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}

      <RollBackModal
        roleBackModal={roleBackModal}
        setRoleBackModal={setRoleBackModal}
        importId={importId}
      />
    </Flex>
  );
};

export default History;
