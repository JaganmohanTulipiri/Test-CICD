import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';

const EventCard = (props) => {
  const { title, list } = props;
  return (
    <>
      <Box
        display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}
        justifyContent='start'
        mt='2'
        mb='2'
      >
        <Card w={{ base: '17rem', md: 'sm', lg: 'sm' }} mx='2' mt='2' mb='2'>
          <CardBody p='0' mb='5'>
            <Text
              backgroundColor='head2'
              paddingTop='0.5rem'
              paddingLeft='0.5rem'
              paddingBottom='0.3rem'
              textStyle={'textHead'}
            >
              {title}{' '}
            </Text>
            <Stack mx='5'>
              <Stack mt='2'>
                {' '}
                <Text textColor='primary' textStyle={'textHead'}>
                  Heading
                </Text>
                <Text textStyle={'textHead'}>{list}</Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text textColor='primary' textStyle={'textHead'}>
                  Heading
                </Text>
                <Text textStyle={'textHead'}>{list}</Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text textColor='primary' textStyle={'textHead'}>
                  Heading
                </Text>
                <Text textStyle={'textHead'}>{list}</Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text textColor='primary' textStyle={'textHead'}>
                  Heading
                </Text>
                <Text textStyle={'textHead'}>{list}</Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        {/* <Card w={{ base: '17rem', md: 'sm', lg: 'sm' }} mx='2' mt='2' mb='2'>
          <CardBody p='0' mb='5'>
            <Text
              backgroundColor='#F5F4F4'
              paddingTop='0.5rem'
              paddingLeft='0.5rem'
              paddingBottom='0.3rem'
              fontFamily={'body'}
              fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
            >
              {title}{' '}
            </Text>
            <Stack mx='5'>
              <Stack mt='2'>
                {' '}
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Card w={{ base: '17rem', md: 'sm', lg: 'sm' }} mx='2' mt='2' mb='2'>
          <CardBody p='0' mb='5'>
            <Text
              backgroundColor='#F5F4F4'
              paddingTop='0.5rem'
              paddingLeft='0.5rem'
              paddingBottom='0.3rem'
              fontFamily={'body'}
              fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
            >
              {title}{' '}
            </Text>
            <Stack mx='5'>
              <Stack mt='2'>
                {' '}
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
              <Divider />

              <Stack mt='2' mb='2'>
                <Text
                  textColor='#A7D4EC'
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  Heading
                </Text>
                <Text
                  fontFamily={'body'}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                >
                  {list}
                </Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card> */}
      </Box>
    </>
  );
};

export default EventCard;
