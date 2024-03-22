import React from 'react';
import { Select, Divider } from '@chakra-ui/react';
import { FaFileExport } from 'react-icons/fa';
import SubCards from './SubCards';

const ManageClasses = () => {
  return (
    <div>
      <p className='mt-5 p-6 font-poppins-bold'>MANAGE CLASSES</p>
      <div className='px-8 grid grid-cols-3 gap-6 mb-4'>
        <p className='text-sm font-poppins-regular'>School</p>
        <p className='text-sm font-poppins-regular'>Teacher</p>
        <p className='text-sm font-poppins-regular'>Status</p>
      </div>
      <div className='grid grid-cols-3 gap-4 px-6'>
        <Select
          size='xs'
          border='1px solid #f5f5f5'
          borderRadius='15'
          placeholder='Select the option'
          default='Green Light Elementary'
          variant='filled'
        >
          <option value='Green Light Elementary'>Green Light Elementary</option>
          <option value='Coach Board HS Period 3 '>
            Coach Board HS Period 3{' '}
          </option>
          <option value='All'> All</option>
        </Select>
        <Select
          placeholder='Green Light Elementary'
          variant='filled'
          size='xs'
          border='1px solid #f5f5f5'
          borderRadius='15'
        >
          <option value='Green Light Elementary'>Green Light Elementary</option>
          <option value='Coach Board HS Period 3 '>
            Coach Board HS Period 3{' '}
          </option>
          <option value='All'> All</option>
        </Select>
        <Select
          placeholder='Green Light Elementary'
          variant='filled'
          size='xs'
          border='1px solid #f5f5f5'
          borderRadius='15'
        >
          <option value='Green Light Elementary'>Green Light Elementary</option>
          <option value='Coach Board HS Period 3 '>
            Coach Board HS Period 3{' '}
          </option>
          <option value='All'> All</option>
        </Select>
      </div>
      <div className='m-10'>
        <Divider />
      </div>
      <div className='px-16 flex justify-between '>
        <div className='flex gap-2'>
          <input type='checkbox' className='mt-1' />
          <p className='text-sm font-poppins-regular'>Select All</p>
        </div>
        <div className='flex justify-around '>
          <p className='text-sm font-poppins-regular px-2'>Export Classes</p>
          <FaFileExport className='w-5 h-5' fill='#0081c8' />
        </div>
      </div>
      <>
        <SubCards />
      </>
    </div>
  );
};

export default ManageClasses;
