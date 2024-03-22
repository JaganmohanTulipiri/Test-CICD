import {
  Box,
  GridItem,
  Input,
  Select,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const GridProviderNew = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { data } = props;
  console.log(data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <GridItem colSpan='1' rowSpan='1'>
            {item.inputType == 'select' ? (
              <Box inlineSize='sm' maxW='100%'>
                <Text mb='2'>{item.lable}</Text>
                <Select bg='bg.100' borderColor='bg.100'>
                  {item.options.map((value, i) => {
                    return (
                      <option key={i} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Select>
              </Box>
            ) : item.inputType === 'password' ? (
              <Box inlineSize='sm' maxW='100%'>
                <Text textStyle={'textHead'}>{item.lable}</Text>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder={item.placeholder}
                    autoFocus
                    border='none'
                    value={item.value}
                  />
                  <InputRightElement width='13rem' marginTop='0.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      backgroundColor='#F5F9FF'
                      onClick={handleClick}
                    >
                      {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            ) : item.inputType === 'radio' ? (
              <Box inlineSize='sm' maxW='100%'>
                <Text mb='2'>{item.lable}</Text>
                <RadioGroup borderColor='bg.100'>
                  <Stack direction={item.direction}>
                    {item.options.map((value, i) => {
                      return (
                        <Radio key={i} value={value}>
                          {value}
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
              </Box>
            ) : item.inputType === 'Link' ? (
              <Box inlineSize='sm' maxW='100%'>
                <Link to={item.to}>{item.lable}</Link>
              </Box>
            ) : item.inputType === 'checkbox' ? (
              <Box>
                <Text marginTop='0.5rem'>Settings:</Text>
                <Checkbox>Apply read-only access only</Checkbox>
              </Box>
            ) : (
              <Box inlineSize='sm' maxW='100%'>
                <Text mb='2'>{item.lable}</Text>
                <Input
                  type={item.inputType}
                  border='0px'
                  bg='bg.100'
                  defaultValue={item.defaultValue}
                  readOnly={item.readOnlyValue}
                  placeholder={item.placeholder}
                  isRequired={item.isrequired}
                />
              </Box>
            )}
          </GridItem>
        );
      })}
    </>
  );
};

export default GridProviderNew;
