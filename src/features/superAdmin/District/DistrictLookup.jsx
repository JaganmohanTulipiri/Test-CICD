import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setPreviousPath } from '../../../store/slices/profileSlice';
import {
  getAllDistricts,
  getDistrictsByFilter,
  setDistrictsByFilter,
} from '../../../store/slices/superAdminSlice/superAdminSlice';
import DistrictsTable from './DistrictsTable';

const DistrictLookup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const DistrictLookup = {
    title: 'DISTRICT LOOKUP',
    subtitle: 'Add New District',
    filterFields: [
      {
        label: 'District Name',
        inputType: 'text',
        placeholder: 'Enter District Name',
        isrequired: 'true',
        name: 'district_name',
      },

      {
        label: '4-Digit Code',
        inputType: 'text',
        placeholder: 'Enter District Code',
        isrequired: 'false',
        name: '4-digit-code',
      },
      {
        label: 'Zip Code',
        inputType: 'text',
        placeholder: 'Enter Zip Code',
        isrequired: 'false',
        name: 'zipcode',
      },
      {
        label: 'School Name',
        inputType: 'text',
        placeholder: 'Enter School Name',
        isrequired: 'true',
        name: 'school_name',
      },
      {
        label: 'District Identifier',
        inputType: 'text',
        placeholder: 'Enter District Identifier',
        isrequired: 'true',
        name: 'district_identifier',
      },
    ],
  };
  const { title, subtitle, filterFields } = DistrictLookup;

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const allDistricts = useSelector(
    (state) => state?.superAdmin?.getDistricts?.data?.response
  );
  const token = useSelector((state) => state?.profile?.token);
  const FilterResponse = useSelector(
    (state) => state?.superAdmin?.getDistrictDataByFilter?.data?.response
  );
  const newDistrictResponse = useSelector(
    (state) => state?.superAdmin?.newDistrict
  );
  const updateResponse = useSelector(
    (state) => state?.superAdmin?.updateDistrict
  );
  const deletedDistrictResponse = useSelector(
    (state) => state.superAdmin?.deleteDistrict
  );

  const [districtData, setDistrictData] = useState(allDistricts);

  const [formData, setFormData] = useState({
    district_name: '',
    district_sso_id: '',
    zipcode: '',
    district_identifier: '',
    school_name: '',
    code: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    dispatch(getDistrictsByFilter({ body: formData, token: token }));
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      district_name: '',
      district_sso_id: '',
      zipcode: '',
      district_identifier: '',
      school_name: '',
    });
    setDistrictData(allDistricts);
    dispatch(getAllDistricts({ token: token }));
    dispatch(setDistrictsByFilter(null));
  };

  const handleDistrictAddition = () => {
    navigate(`/role/${selectedRole}/Districts/AddNewDistrict`);
    dispatch(setPreviousPath(location.pathname));
  };

  useEffect(() => {
    setDistrictData(allDistricts);
  }, [allDistricts]);

  useEffect(() => {
    // console.log("=========useEffect============in getAllDistricts UseEffect");
    dispatch(getAllDistricts({ token: token }));
    dispatch(setDistrictsByFilter(null));
  }, [updateResponse, newDistrictResponse, deletedDistrictResponse]);

  useEffect(() => {
    console.log('=========useEffect============in filterresponse UseEffect');
    if (FilterResponse !== undefined) setDistrictData(FilterResponse);
  }, [FilterResponse]);

  console.log('Filter Response', FilterResponse);

  return (
    <div className='example'>
      <Flex display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box>
          <Text textStyle='text'>{title}</Text>
        </Box>
        <Spacer />

        {selectedRole !== 'stateAdmin' && (
          <Box marginRight={{ base: '0rem', lg: '1rem', md: '1rem' }}>
            <Button
              marginRight='-0.5rem'
              color='black'
              onClick={handleDistrictAddition}
            >
              {subtitle}
            </Button>
            <AddIcon
              backgroundColor='#0081c8'
              color='white'
              borderRadius='2rem'
              fontSize='1.2rem'
              p='0.3rem'
            />
          </Box>
        )}
      </Flex>
      <Divider className='mt-1' />

      <Text textStyle='h4'>Filter</Text>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap='6'
        marginTop='5'
      >
        {filterFields?.map((item, index) => {
          return (
            <GridItem colSpan='1'>
              {item.inputType === 'text' && (
                <Box>
                  <Text mb='2' textStyle={'textHead'}>
                    {item.label}
                  </Text>
                  <Input
                    type='text'
                    border='0px'
                    bg='bg.100'
                    name={item?.name}
                    value={filterFields[item?.name]}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                  />
                </Box>
              )}
            </GridItem>
          );
        })}
      </Grid>

      <Center>
        <Flex
          minWidth='max-content'
          alignItems='center'
          className='mr-10'
          marginTop='3rem'
        >
          <ButtonGroup gap='4'>
            <Button
              color='black'
              borderRadius='3xl'
              backgroundColor='#EEEEEE'
              w={{ base: '5rem', md: '7rem', lg: '7rem' }}
              onClick={handleClear}
            >
              <Text textStyle={'textHead'}>Clear</Text>
            </Button>
            <Button
              backgroundColor='#54B435'
              color='white'
              borderRadius='3xl'
              w={{ base: '5rem', md: '8rem', lg: '8rem' }}
              onClick={handleApply}
            >
              <Text textStyle={'textHead'}> Apply</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>

      <Divider />
      <DistrictsTable tableData={districtData} />
    </div>
  );
};

export default DistrictLookup;
