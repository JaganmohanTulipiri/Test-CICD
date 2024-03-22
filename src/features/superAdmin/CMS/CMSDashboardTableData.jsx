import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setPreviousPath } from '../../../store/slices/profileSlice';
import {
  getDeletedCMSContentById,
  getResourceByCategoryStatus,
  getResourceBySubject,
  GetResources,
  setCurrentCMSContent,
} from '../../../store/slices/superAdminSlice/superAdminSlice';
import linkIcon from '../customIcons/linkIcon.svg';
import previewIcon from '../customIcons/previewIcon.svg';

const CMSDashboardTableData = (props) => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const location = useLocation();

  const TableHeaders = [
    'Title',
    'Category',
    'Status',
    'Preview',
    'Link',
    'Delete',
  ];
  const BaseUrl = 'https://d2d0wpgkzkt4y0.cloudfront.net/';

  const { status, subject, category } = props.filters;

  const userRole = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);
  const titleFilterResponse = useSelector(
    (state) => state.superAdmin?.resourceByTitle
  );
  const resourcesResponse = useSelector(
    (state) => state?.superAdmin?.CMSResources?.data?.response
  );
  const statusFilterResponse = useSelector(
    (state) => state.superAdmin?.resourceByStatus
  );

  const subjectFilterResponse = useSelector(
    (state) => state.superAdmin?.resourceBySubject
  );

  const deletedCMSContentByIdResponse = useSelector(
    (state) => state?.superAdmin?.deleteCMSContent
  );

  const CMSContentResponse = useSelector(
    (state) => state?.superAdmin?.CMSContent
  );

  const [tableData, setTableData] = useState([{}]);

  const [showPreview, setshowPreview] = useState(false);

  const [linkStatesData, setLinksStateData] = useState({
    linkURL: '',
    showLinkCondition: false,
    isLinkClicked: false,
    clickedLinkURLUUID: '',
  });

  const RedirectToEditContent = (contentData) => {
    dispatch(setCurrentCMSContent(contentData));
    navigate(`/role/${userRole}/CMS/CMSContent`);
    dispatch(setPreviousPath(location.pathname));
  };
  const handleDelete = (id) => {
    dispatch(getDeletedCMSContentById({ id: id, token: token }));
  };
  const handleDocumentView = (url) => {
    window.open(url, '_blank');
  };
  const handleLinkView = (url, id) => {
    setLinksStateData({
      ...linkStatesData,
      linkURL: url,
      showLinkCondition: true,
      clickedLinkURLUUID: id,
      isLinkClicked: true,
    });
    navigator.clipboard.writeText(url);
  };

  const handleImageClick = () => {
    setshowPreview(!showPreview);
  };

  const handleLinkCondition = (contentUUID) => {
    if (
      contentUUID === linkStatesData?.clickedLinkURLUUID &&
      linkStatesData.isLinkClicked
    ) {
      toast({
        position: 'bottom',
        duration: 1000,
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Link Copied!
          </Box>
        ),
      });
    }
    setTimeout(() => {
      setLinksStateData({ ...linkStatesData, isLinkClicked: false });
    }, 1000);
  };

  useEffect(() => {
    dispatch(GetResources({ token: token }));
  }, [CMSContentResponse]);

  useEffect(() => {
    setTableData(resourcesResponse);
  }, [resourcesResponse]);

  useEffect(() => {
    setTableData(null);
    if (status === 'All' && subject === 'All' && category === 'All') {
      dispatch(GetResources({ token: token }));
    } else if (category !== 'All' && status === 'All' && subject === 'All') {
      dispatch(GetResources({ token: token }));
    } else if (status !== 'All') {
      dispatch(getResourceByCategoryStatus({ status: status, token: token }));
    } else if (subject !== 'All') {
      dispatch(getResourceBySubject({ subject: subject, token: token }));
    } else {
      dispatch(GetResources());
    }
  }, [status, subject, category]);

  useEffect(() => {
    setTableData(statusFilterResponse);
  }, [status, statusFilterResponse]);

  useEffect(() => {
    setTableData(subjectFilterResponse);
  }, [subjectFilterResponse]);

  useEffect(() => {
    setTableData(titleFilterResponse?.data?.response);
  }, [titleFilterResponse]);

  useEffect(() => {
    if (deletedCMSContentByIdResponse?.data?.status === 'success') {
      dispatch(GetResources({ token: token }));
    }
  }, [deletedCMSContentByIdResponse]);

  console.log('CMS Data', tableData);

  return (
    <>
      <TableContainer className='SuperAdminTables'>
        <Table variant='stripped'>
          <Thead>
            <Tr>
              {TableHeaders.map((item) => (
                <Th>
                  <Text textStyle='h4'>{item}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>

          {tableData?.length > 0
            ? tableData?.map((item, key) => {
                console.log('item.category, category', item.category, category);
                if (item.category === category) {
                  return (
                    <>
                      <Tbody>
                        <Tr>
                          <Td color='#1890ff'>
                            <Button onClick={() => RedirectToEditContent(item)}>
                              {item.title}
                            </Button>
                          </Td>
                          <Td>{item.category}</Td>
                          <Td>{item.status}</Td>

                          {showPreview === true ? (
                            <Td>
                              <Box>
                                <Image
                                  src={`${BaseUrl}${item.file_url}`}
                                  onClick={handleImageClick}
                                />
                              </Box>
                            </Td>
                          ) : (
                            <Td>
                              <Box marginLeft='7'>
                                <Image
                                  src={previewIcon}
                                  onClick={handleImageClick}
                                />
                              </Box>
                            </Td>
                          )}
                          <Td>
                            <Box marginLeft='2'>
                              <Image
                                cursor='pointer'
                                src={linkIcon}
                                onClick={() => {
                                  handleLinkView(
                                    `${BaseUrl}${item.file_url}`,
                                    `${item.uuid}`
                                  );
                                }}
                              />
                            </Box>
                            <Box>
                              {linkStatesData.isLinkClicked &&
                                handleLinkCondition(item.uuid)}
                            </Box>
                          </Td>
                          <Td>
                            <Box marginLeft='3'>
                              <DeleteIcon
                                cursor='pointer'
                                color='red'
                                fontSize={20}
                                onClick={() => handleDelete(item.uuid)}
                              />
                            </Box>
                          </Td>
                        </Tr>
                      </Tbody>
                    </>
                  );
                } else if (category === 'All' || category === '') {
                  return (
                    <>
                      <Tbody>
                        <Tr>
                          <Td color='#1890ff' textStyle={'textHead'}>
                            <Button onClick={() => RedirectToEditContent(item)}>
                              {item.title}
                            </Button>
                          </Td>
                          <Td>{item.category}</Td>
                          <Td>{item.status}</Td>

                          <Td>
                            <Box marginLeft='8'>
                              <Image
                                src={previewIcon}
                                cursor='pointer'
                                onClick={() => {
                                  handleDocumentView(
                                    `${BaseUrl}${item.file_url}`
                                  );
                                }}
                              />
                            </Box>
                          </Td>
                          <Td>
                            <Box marginLeft='2'>
                              <Image
                                cursor='pointer'
                                src={linkIcon}
                                onClick={() => {
                                  handleLinkView(
                                    `${BaseUrl}${item.file_url}`,
                                    `${item.uuid}`
                                  );
                                }}
                              />
                            </Box>
                            <Box>
                              {linkStatesData.isLinkClicked &&
                                handleLinkCondition(item.uuid)}
                            </Box>
                          </Td>

                          <Td>
                            <Box marginLeft='3'>
                              <DeleteIcon
                                cursor='pointer'
                                color='red'
                                fontSize={20}
                                onClick={() => handleDelete(item.uuid)}
                              />
                            </Box>
                          </Td>
                        </Tr>
                      </Tbody>
                    </>
                  );
                }
              })
            : ''}
        </Table>
      </TableContainer>
    </>
  );
};

export default CMSDashboardTableData;
