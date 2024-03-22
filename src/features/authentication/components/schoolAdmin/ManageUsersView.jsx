import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import { IoMdAddCircle } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ManageUSersView = () => {
  return (
    <>
      <Text textStyle={'textHead'}>
        This User is a District Administrator and has access to all schools and
        classes
      </Text>

      <div className='flex justify-between mt-6'>
        <Flex fontWeight={'bold'} gap='3'>
          <Text textStyle={'textHead'}>School Administrator</Text>
        </Flex>
        <Flex gap='3'>
          <Text textDecoration={'underline'}>Add School</Text>

          <IoMdAddCircle className='' fill='#0081c8' size={25} />
        </Flex>
      </div>
      <Divider mt='5' />
      <div className='mt-5'>
        <Text className='mb-5'>School</Text>
        <div className='flex justify-between mt-6 bg-[#ECF4FF] h-[3rem]'>
          <div className='m-3'>school name</div>
          <RiDeleteBin6Line size={20} fill='#0081c8' className='m-4' />
        </div>
      </div>
      {/* <div className='flex justify-between mt-6'>
  
          <Flex fontWeight={'bold'} gap='3' >
            <Text >Teacher</Text>
          </Flex>
          <Flex gap='3'>
            <Text textDecoration={'underline'}>Add Class</Text>
  
            <IoMdAddCircle className='' fill='#0081c8' size={25} />
  
          </Flex>
        </div>
        <Divider mt='5' /> */}
      {/* <div className='mt-5'>
          <Text className='mb-5'>School/Class</Text>
          <Select placeholder='Select option' border={'none'} bg='#'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div> */}
      <Flex justifyContent={'center'} mt='5' justify={'space-between'}>
        <Box className='mt-5 gap-2'>
          <Button className='rounded-2xl gap-1 '>Cancel</Button>
          <Button className='bg-green text-white rounded-2xl '>Save</Button>
        </Box>
      </Flex>
    </>
  );
};

export default ManageUSersView;
