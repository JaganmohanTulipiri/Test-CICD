import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TextIcon from '../../../../components/TextIcon';
import addCircleCion from '../../../../assets/customIcons/Icon ionic-ios-add-circle.svg';
import { districtData } from './SchoolsData';
import GridProvider from '../../../../components/GridProvider';
import PositiveButton from '../../../../components/PositiveButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';

import {
  getDistrictForDistrictAdminApiCall,
  getUpdateDistrictForDistrictAdminApiCall,
} from '../../../../DistrictAdminApis/districtAdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRemoveAdminFromDistrict,
  getSchoolsForAdmin,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import UpdateDistrictSuccessModal from './UpdateDistrictSuccessModal';
import Schools from '../../../authentication/components/schoolAdmin/Schools';
import {
  getUserData,
  setManageUser,
  setPreviousPath,
} from '../../../../store/slices/profileSlice';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import RemoveDistrictAdminSuccessModal from './RemoveDistrictAdminSuccessModal';
import ErrorResponse from '../../../../components/GlobalComponents/ErrorResponse';

const District = () => {
  const { title, details, administrators } = districtData;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();

  const userId = useSelector((state) => state?.profile?.userId);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const [pageNumber, setPageNumber] = useState('1');

  const districtForDistrictAdmin = useSelector(
    (state) => state?.districtAdmin?.getDistrictForDistrictAdminResponse
  );

  const removeAdminFromDistrictDeleteResponse = useSelector(
    (state) => state?.schoolAdmin?.removeAdminFromDistrict
  );

  const districtAdmins = districtForDistrictAdmin?.AdminDistrict;

  const updateDistrictForDistrictAdminResponse = useSelector(
    (state) => state?.districtAdmin?.updateDistrictForDistrictAdminResponse
  );

  const [isDistrcitUpdatedSuccess, setIsDistrcitUpdatedSuccess] =
    useState(false);

  const [distcrictForm, setDistcrictForm] = useState({
    district_name: districtForDistrictAdmin?.district_name,
    district_identifier: districtForDistrictAdmin?.district_identifier,
    district_sso_id: districtForDistrictAdmin?.district_sso_id,
    email: districtForDistrictAdmin?.email,

    phone_1: districtForDistrictAdmin?.phone_1,
    phone_2: districtForDistrictAdmin?.phone_2,
    address_1: districtForDistrictAdmin?.address_1,
    address_2: districtForDistrictAdmin?.address_2,

    city: districtForDistrictAdmin?.city,

    state: districtForDistrictAdmin?.state,

    zipcode: districtForDistrictAdmin?.zipcode,
    school_start_date: districtForDistrictAdmin?.school_start_date,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let finalObj = {
      ...distcrictForm,
      updater_role: userRole,
      updated_by: userId,
    };

    // let errorsObj = {};

    // for (let i of event.target.elements) {
    //   if (i.type !== "submit") {

    //     finalObj[i.name] = i.value;
    //   }

    //   if (i.value === "" || i.value === " ") {
    //     errorsObj[i.name] = "*Required";
    //   }
    // }

    // delete errorsObj[""];

    // if (Object.keys(errorsObj)?.length > 0) {
    // } else {

    const UUID = districtForDistrictAdmin?.uuid;

    dispatch(
      getUpdateDistrictForDistrictAdminApiCall({
        body: finalObj,
        token,
        UUID,
      })
    );
    // }
  };
  const clickToNavigate = (disAdminId) => {
    dispatch(getUserData({ id: disAdminId, token }));
    dispatch(
      setManageUser({
        formTitle: `Edit District Administrator`,
        userType: 'districtAdmin',
        // previousPath: location.pathname,
      })
    );
    dispatch(setPreviousPath(location.pathname))

    navigate(`/role/${userRole}/edit/districtAdmin/${disAdminId}`);
  };

  const handleDelete = (uuid) => {
    const finalPayload = {
      user_uuid: uuid,
      updater_role: userRole,
      updated_by: userId,
    };

    const districtUUID = districtForDistrictAdmin?.uuid;

    dispatch(getRemoveAdminFromDistrict({ token, districtUUID, finalPayload }));
  };

  useEffect(() => {
    setDistcrictForm({
      district_name: districtForDistrictAdmin?.district_name,
      district_identifier: districtForDistrictAdmin?.district_identifier,
      district_sso_id: districtForDistrictAdmin?.district_sso_id,
      email: districtForDistrictAdmin?.email,

      phone_1: districtForDistrictAdmin?.phone_1,
      phone_2: districtForDistrictAdmin?.phone_2,
      address_1: districtForDistrictAdmin?.address_1,
      address_2: districtForDistrictAdmin?.address_2,

      city: districtForDistrictAdmin?.city,

      state: districtForDistrictAdmin?.state,

      zipcode: districtForDistrictAdmin?.zipcode,
      school_start_date: districtForDistrictAdmin?.school_start_date,
    });
  }, [districtForDistrictAdmin]);
  useEffect(() => {
    const finalBody = {
      user_uuid: userId,
      user_role: userRole,
    };

    dispatch(getDistrictForDistrictAdminApiCall({ userId, token }));

    dispatch(getSchoolsForAdmin({ token, skip: pageNumber }));
  }, [pageNumber]);

  useEffect(() => {
    if (updateDistrictForDistrictAdminResponse?.data?.code === 200) {
      setIsDistrcitUpdatedSuccess(true);

      dispatch(getDistrictForDistrictAdminApiCall({ userId, token }));
    }
  }, [updateDistrictForDistrictAdminResponse]);

  useEffect(() => {
    if (removeAdminFromDistrictDeleteResponse?.data?.code === 200) {
      dispatch(getDistrictForDistrictAdminApiCall({ userId, token }));
    }
  }, [removeAdminFromDistrictDeleteResponse]);

  return (
    <Flex direction='column' gap='4'>
      <HStack>
        <Text
          fontFamily={'body'}
          fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          whiteSpace='nowrap'
        >
          {districtForDistrictAdmin?.district_name}
        </Text>
        <Spacer />
        <Box
          onClick={() => {
            dispatch(
              setManageUser({
                formTitle: `Add District Administrator`,
                userType: 'districtAdmin',
                // previousPath: location.pathname,
              })
            );
            dispatch(setPreviousPath(location.pathname))

            navigate(`/role/${userRole}/AddUser`);
          }}
          display={{ md: 'block', lg: 'block', base: 'none' }}
        >
          <TextIcon text={'Add Administrator'} icon={addCircleCion} />
        </Box>
        <HStack
          display={{ md: 'none', lg: 'none', base: 'flex' }}
          onClick={() => {
            dispatch(
              setManageUser({
                formTitle: `Add District Administrator`,
                userType: 'districtAdmin',
                // previousPath: location.pathname,
              })
            );
            dispatch(setPreviousPath(location.pathname))

            navigate(`/role/${userRole}/AddUser`);
          }}
        >
          <Text
            fontFamily={'body'}
            fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          >
            Add Administrator
          </Text>
          <BsPlusCircleFill className='w-5 h-5' fill='#0081c8' />
        </HStack>
      </HStack>

      {/* <form onSubmit={handleSubmit}> */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: '2', lg: '8' }}
      >
        <GridProvider
          data={details}
          distcrictForm={distcrictForm}
          setDistcrictForm={setDistcrictForm}
        />

        <GridItem colSpan='1' h='auto'>
          <Flex direction='column'>
            <Text>{administrators}:</Text>
            {districtAdmins?.map((admin, index) => {
              return (
                <Box display={'flex'} justifyContent='space-between'>
                  <Text color='primary'>
                    {admin.last_name},{admin.first_name}
                  </Text>
                  <Flex className='gap-2 mt-1'>
                    <HStack
                      onClick={() => {
                        clickToNavigate(admin.uuid);
                      }}
                      cursor='pointer'
                    >
                      <Text>Edit</Text>
                      <FaRegEdit className='mt-[0.2rem] text-primary mr-6' />
                    </HStack>
                    <HStack
                      onClick={() => handleDelete(admin.uuid)}
                      cursor='pointer'
                    >
                      <Text>Delete</Text>

                      <RiDeleteBin6Line className='mt-1 text-red' />
                    </HStack>
                  </Flex>
                </Box>
              );
            })}
            {/* {districtAdmins?.map((admin, index) => {
              return (
                <SimpleGrid
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    lg: 'repeat(3, 1fr)',
                  }}
                  gap='8'
                >
                  {' '}
                  <Text className='text-primary'>
                    {admin.last_name},{admin.first_name}
                  </Text>
                  <Flex className='gap-2 mt-1'>
                    <HStack
                      onClick={() => {
                        clickToNavigate(admin.uuid);
                      }}
                      cursor='pointer'
                    >
                      <Text>Edit</Text>
                      <FaRegEdit className='mt-[0.2rem] text-primary mr-6' />
                    </HStack>
                    <HStack
                      onClick={() => handleDelete(admin.uuid)}
                      cursor='pointer'
                    >
                      <Text>Delete</Text>

                      <RiDeleteBin6Line className='mt-1 text-red' />
                    </HStack>
                  </Flex>
                </SimpleGrid>
              );
            })} */}
          </Flex>
        </GridItem>
      </Grid>

      <Flex justify='center' gap={12} width={'full'} mt='8'>
        <Box>
          <Button
            type='button'
            height='36px'
            width='96px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            borderRadius='18px'
            fontSize='14px'
            fontWeight='normal'
            bg='gray-1'
            color='black'
            fontFamily='poppins'
          >
            Cancel
          </Button>
        </Box>
        <Box onClick={handleSubmit}>
          <PositiveButton text={'Save'} type='submit' />
        </Box>
      </Flex>
      {/* </form> */}

      {/* <RemoveDistrictAdminSuccessModal /> */}

      {/* <UpdateDistrictSuccessModal
        isDistrcitUpdatedSuccess={isDistrcitUpdatedSuccess}
        setIsDistrcitUpdatedSuccess={setIsDistrcitUpdatedSuccess}
      /> */}
      <Schools setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </Flex>
  );
};

export default District;
