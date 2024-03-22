import React from 'react';
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import Multiselect from 'multiselect-react-dropdown';

const AddEditUserBasicInfo = (props) => {
  const { activeTab, userDetails, addDistrictAdmin, setAddDistrictAdmin } =
    props;

  const handleRemoveRoles = (selectedItems) => {
    console.log(selectedItems, 'selectedItems');

    if (selectedItems?.length === 0) {
      setAddDistrictAdmin({
        ...addDistrictAdmin,
        school_admin_role: false,
        teacher_role: false,
      });
    } else {
      const teacherRes = selectedItems?.filter((each) => each === 'Teacher');

      if (teacherRes?.length > 0) {
        setAddDistrictAdmin({
          ...addDistrictAdmin,
          teacher_role: true,
          school_admin_role: false,
        });
      }

      const SchoolAdmin = selectedItems?.filter(
        (each) => each === 'School Admin'
      );

      if (SchoolAdmin?.length > 0) {
        setAddDistrictAdmin({
          ...addDistrictAdmin,
          school_admin_role: true,
          teacher_role: false,
        });
      }
    }
  };

  const handleSelectRoles = (selectedItems) => {
    console.log(selectedItems, 'selecteduitems');

    selectedItems?.forEach((each) => {
      if (each === 'Teacher') {
        setAddDistrictAdmin({
          ...addDistrictAdmin,
          teacher_role: true,
        });
      }
      if (each === 'School Admin') {
        setAddDistrictAdmin({
          ...addDistrictAdmin,
          school_admin_role: true,
        });
      }
    });
  };

  const handleChangeRadio = (e) => {
    console.log(e, 'e in handlechangeRadio-------------');
    setAddDistrictAdmin({
      ...addDistrictAdmin,
      login_status: e == 1 ? true : false,
    });
  };

  console.log(addDistrictAdmin, 'addDistrictAdmin');

  return (
    <>
      {userDetails.map((item, index) => {
        return (
          <GridItem colSpan='1'>
            {item.inputType !== 'date' &&
              item.inputType !== 'select' &&
              item.inputType !== 'checkbox' &&
              item.inputType !== 'radio' && (
                <Box inlineSize='sm'>
                  <Text mb='2'>{item.lable}</Text>
                  <Input
                    type='text'
                    border='0px'
                    bg='bg.100'
                    name={item?.name}
                  />
                </Box>
              )}

            {item.inputType === 'select' && (
              <Box inlineSize='sm'>
                <Text mb='2'>{item.lable}</Text>

                <Multiselect
                  name={item?.name}
                  onRemove={handleRemoveRoles}
                  onSelect={handleSelectRoles}
                  options={item?.options}
                  isObject={false}
                />

                {/* <Select bg="bg.100" borderColor="bg.100">
									{item.options.map((value, i) => {
										return (
											<option key={i} value={value}>
												{value}
											</option>
										);
									})}
								</Select> */}
              </Box>
            )}
            {item.inputType == 'date' && (
              <Box inlineSize='sm'>
                <Text mb='2'>{item.lable}</Text>
                <Input type='date' border='0px' bg='bg.100' />
              </Box>
            )}
            {item.inputType == 'checkbox' && (
              <HStack spacing='2'>
                <Checkbox />

                <Text mb='2'>{item.lable}</Text>
              </HStack>
            )}

            {/* 
            {item.inputType == "radio" && (
              <Flex direction="column" inlineSize="sm" >
                <Text mb="2">{item.groupLable}</Text>
                <RadioGroup name="login_status">
                  {item.group.map((lable, index) => {
                    return (
                      <Radio value={lable} ml="4">
                        {lable}
                      </Radio>
                    );
                  })}






                </RadioGroup>
              </Flex>
            )} */}
          </GridItem>
        );
      })}

      <GridItem>
        <div>
          <Text className='mb-4'>Login Status:</Text>
          <RadioGroup name='login_status'>
            <Stack>
              <Radio value={'1'}>Active</Radio>
              <Radio value={'0'}>In Active</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </GridItem>
    </>
  );
};

export default AddEditUserBasicInfo;
