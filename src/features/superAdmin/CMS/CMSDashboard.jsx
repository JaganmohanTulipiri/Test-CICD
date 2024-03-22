import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getAllSubjects,
  getCMSResourceByTitle,
  setCurrentCMSContent,
} from '../../../store/slices/superAdminSlice/superAdminSlice';
import CMSDashboardTableData from './CMSDashboardTableData';
import { setPreviousPath } from '../../../store/slices/profileSlice';

const CMSDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const authToken = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const subjectsResponse = useSelector(
    (state) => state?.superAdmin?.getSubjects?.data?.response
  );
  const deleteSubjectResponse = useSelector(
    (state) => state.superAdmin?.deleteSubject
  );

  const [filters, setFilters] = useState({
    status: 'All',
    subject: 'All',
    category: 'All',
    title: 'All',
  });

  const [searchEnabled, setSearchEnabled] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === filters?.title) {
      setSearchEnabled(true);
    }
    //console.log('e.target.name, e.target.value', e.target.name, e.target.value);
    setFilters({ ...filters, [e.target.name]: e.target.value });
    //console.log('filters.title', filters.title);
    if (filters?.title !== 'All' && filters?.title?.length > 0) {
      dispatch(
        getCMSResourceByTitle({ title: e.target.value, token: authToken })
      );
    }
  };

  const handleRedirectToAddContent = () => {
    navigate(`/role/${selectedRole}/CMS/CMSContent`);
    dispatch(setPreviousPath(location.pathname));
  };
  useEffect(() => {
    dispatch(getAllSubjects({ token: authToken }));
    dispatch(setCurrentCMSContent({}));
  }, []);

  useEffect(() => {
    dispatch(getAllSubjects({ token: authToken }));
  }, [deleteSubjectResponse]);

  //console.log('filters', filters);
  //console.log('previous path', location.pathname);

  return (
    <div className='example'>
      <Flex display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box>
          <Text textStyle='text'>CONTENT MANAGEMENT SYSTEM</Text>
        </Box>
        <Spacer />
        <Box ml={{ base: '-10px', md: '0', lg: '0' }}>
          <Button
            marginRight={{ base: '0rem', md: '-0.5rem', lg: '-0.5rem' }}
            color='black'
            onClick={handleRedirectToAddContent}
          >
            <Text textStyle='text'>Add Content</Text>
          </Button>
          <AddIcon
            backgroundColor='#0081c8'
            color='white'
            borderRadius='2rem'
            fontSize='1.0rem'
            p='0.3rem'
          />
        </Box>
      </Flex>

      <Divider className='mt-1' borderColor='gray' />
      <Flex>
        <Box mt='4'>
          <Text marginLeft={0} textStyle='textHead'>
            Manage on-line help, tooltips, and documentation
          </Text>
        </Box>
      </Flex>

      <Flex
        mt={{ base: 4, md: '10', lg: '10' }}
        display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}
      >
        <Box>
          <Text textStyle={'textHead'}>Category:</Text>
          <Select
            backgroundColor='#F5F9FF'
            border='none'
            w='15rem'
            name='category'
            value={filters.category}
            onChange={handleChange}
            textStyle={'textHead'}
          >
            <option value='All'>All</option>
            <option value='smart coach resources'>Smart Coach Resources</option>
            <option value='Email Templates'>Email Templates</option>
          </Select>
        </Box>
        <Spacer />
        <Box>
          <Text textStyle={'textHead'}>Subjects:</Text>
          <Select
            backgroundColor='#F5F9FF'
            border='none'
            w='15rem'
            name='subject'
            value={filters.subject}
            onChange={handleChange}
            textStyle={'textHead'}
          >
            <option value='All' textStyle={'textHead'}>
              All
            </option>
            {subjectsResponse?.map((subjectData, index) => {
              if (subjectData?.is_active === false) {
                return null;
              }
              return (
                <option
                  key={index}
                  value={subjectData.name}
                  textStyle={'textHead'}
                >
                  {subjectData.name}
                </option>
              );
            })}
          </Select>
        </Box>
        <Spacer />
        <Box>
          <Text textStyle={'textHead'}>Status:</Text>
          <Select
            backgroundColor='#F5F9FF'
            border='none'
            w='15rem'
            name='status'
            value={filters.status}
            onChange={handleChange}
          >
            <option value='All'>All</option>
            <option value='active'>Active</option>
            <option value='inactive'>In Active</option>
          </Select>
        </Box>
        <Spacer />
        <Box flex='1'>
          <InputGroup marginTop='1rem'>
            <InputLeftElement>
              <SearchIcon color='gray' />
            </InputLeftElement>
            <Input
              type='Search'
              autoFocus
              placeholder='Search By Title'
              w='20rem'
              marginRight='1rem'
              name='title'
              onChange={handleChange}
              textStyle={'textHead'}
            />
          </InputGroup>
        </Box>
      </Flex>

      <Divider marginBottom='2' marginTop='10' borderColor='gray' />
      <CMSDashboardTableData filters={filters} />
    </div>
  );
};

export default CMSDashboard;
