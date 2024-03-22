import { Box, Flex, GridItem, Input, Select, Text } from '@chakra-ui/react';
import MultiSelect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import { BiCalendarAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const GridProvider = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { data, distcrictForm, setDistcrictForm } = props;
  console.log(data);

  const districtForDistrictAdmin = useSelector(
    (state) => state?.districtAdmin?.getDistrictForDistrictAdminResponse
  );

  console.log(distcrictForm, 'distcrictForm');

  const [dateValue, setDateValue] = useState('');

  const [dateButtonClicked, setDateButtonClicked] = useState(false);

  const [showDate, setShowDate] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'school_start_date') {
      setDateValue(event.target.value);
      setShowDate(true);
      setDateButtonClicked(false);

      // const formattedDate = event.target.value ? new Date(event.target.value).toLocaleString("en-us", {
      //   day: "numeric",
      //   month: "long",
      // }) : ''
    } else {
      setDistcrictForm({
        ...distcrictForm,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    const formattedDate = dateValue
      ? new Date(dateValue).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
        })
      : '';

    setDistcrictForm({
      ...distcrictForm,
      school_start_date: formattedDate,
    });
  }, [dateValue]);

  console.log(showDate, 'date show value');
  console.log(dateButtonClicked, 'date dateButtonClicked value');

  return (
    <>
      {data.map((item, index) => {
        return (
          <GridItem colSpan='1' w={{ base: '80%', lg: 'full' }}>
            {item.inputType == 'select' && (
              <Box inlineSize='sm' maxW={{ base: '100%', lg: '100%' }}>
                <Text mb='2' textStyle={'textHead'}>
                  {item.lable}
                </Text>
                <Select bg='bg.100' borderColor='bg.100' textStyle={'textHead'}>
                  {item.options.map((value, i) => {
                    return (
                      <option key={i} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Select>
              </Box>
            )}

            {/* {item.inputType == "multi-select" && (
							<Box inlineSize="sm" maxW="100%">
								<Text mb="2">{item.lable}</Text>
								<MultiSelect
									showCheckbox
									isObject={false}
									onRemove={(event) => {
										console.log(event);
									}}
									onSelect={(event) => {
										console.log(event);
									}}
									options={item.options}
								/>
							</Box>
						)} */}

            {item.inputType !== 'multi-select' &&
              item.inputType !== 'select' &&
              item.inputType === 'date' &&
              (!showDate ? (
                <Box
                  inlineSize='sm'
                  maxW='100%'
                  onClick={() => {
                    setDateButtonClicked(true);
                    setShowDate(false);
                  }}
                >
                  <Text mb='2' textStyle={'textHead'}>
                    {item.lable}
                  </Text>
                  <Input
                    type={item?.inputType}
                    name={item?.name}
                    border='0px'
                    bg='bg.100'
                    value={dateValue}
                    onChange={handleChange}
                    textStyle={'textHead'}
                  />
                </Box>
              ) : (
                <Box inlineSize='sm' maxW='100%'>
                  <Text mb='2'>{item.lable}</Text>
                  <Flex alignItems={'center'} border='0px' bg='bg.100'>
                    <Input
                      type='text'
                      name='school_start_date'
                      border='none'
                      w={'92%'}
                      value={distcrictForm && distcrictForm[item?.name]}
                      onChange={handleChange}
                    />
                    <Box
                      onClick={() => {
                        setDateButtonClicked(true);
                        setShowDate(false);
                      }}
                    >
                      <BiCalendarAlt />
                    </Box>
                  </Flex>
                </Box>
              ))}

            {item.inputType !== 'multi-select' &&
              item.inputType !== 'select' &&
              item.inputType !== 'date' && (
                <Box inlineSize='sm' maxW='100%'>
                  <Text mb='2' textStyle={'textHead'}>
                    {item.lable}
                  </Text>
                  <Input
                    type={item?.inputType}
                    name={item?.name}
                    border='0px'
                    bg='bg.100'
                    value={distcrictForm && distcrictForm[item?.name]}
                    onChange={handleChange}
                    textStyle={'textHead'}
                  />
                </Box>
              )}
          </GridItem>
        );
      })}
    </>
  );
};

export default GridProvider;
