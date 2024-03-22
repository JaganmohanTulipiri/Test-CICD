import { Box, Flex, FormLabel, HStack, Input, Radio, RadioGroup, Stack, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

import {FaBookReader} from 'react-icons/fa'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const ActivityGramLiteElementary = () => {
  return (
    <>
        <Flex direction='column'>

        <HStack>
  <Text textStyle="h1" color="black-2">ACTIVITYGRAM </Text>
  <Text textStyle="h2" color="black-2">LITE ELEMENTARY</Text>
</HStack>

        <Box bg="primary" textColor="white" borderRadius="full" py={2} w='12rem' display="flex" justifyContent="center" gap={5} alignItems="center">
            <Text>Instructions</Text>
            <FaBookReader />
            <MdOutlineKeyboardArrowDown />

        </Box>

        <Box>
        <Text  fontSize={"1rem"} fontWeight={"semibold"} color="#282828">1. I enjoy doing physically activity.</Text>
        <RadioGroup >
  <Stack>
    
    <Radio value='2'>Unchecked</Radio>
    <Radio value='3'>Unchecked</Radio>
  </Stack>
</RadioGroup>
        </Box>


          
        </Flex>
    </>
  )
}

export default ActivityGramLiteElementary