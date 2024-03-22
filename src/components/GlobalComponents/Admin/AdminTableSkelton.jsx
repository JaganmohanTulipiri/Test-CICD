import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { useToken } from '@chakra-ui/react';
import { Button } from 'antd';
import WarningPop from '../Popups/WarningPop';
import ClipBoard from '../Popups/ClipBoardPop';
import { useNavigate } from 'react-router-dom';

const AdminTableSkelton = () => {
  const navigate=useNavigate()
  const bg = useToken('colors', 'white.500');
  const [enable, setEnable] = useState(true);
  const [inputBorderColor, setInputBorderColor] = useState('rounded-lg  p-2');
  const [buttonText, setButtonText] = useState('Edit');
  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    setButtonText('Save');
  }

  function handleDisableClick() {
    setInputBorderColor('rounded-lg p-2');
if(!enable){
  console.log("heloooo")
  navigate('/role/teacher/adminTest')
}
  
  }

  function handleEnableClick() {
    setInputBorderColor('rounded-lg border-2 border-gray-800 p-2');
    setButtonText('Save');
    setShowPopup(true);
    setEnable(false);
  }
  const data = [
    {
      id: '1',
      sn: 'suresh',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '2',
      sn: 'ramesh',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '3',
      sn: 'joshi',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '4',
      sn: 'govindh',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '5',
      sn: 'ajay',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '6',
      sn: 'munju',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '7',
      sn: 'revanth',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '8',
      sn: 'suchi',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '9',
      sn: 'jani',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '10',
      sn: 'salini',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '11',
      sn: 'pooja',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '12',
      sn: 'ram',
      height: '5ft',
      weight: '55lb',
    },
    {
      id: '13',
      sn: 'sam',
      height: '5ft',
      weight: '55lb',
    },
  ];

  return (
    <div>
      <TableContainer className=' overflow-x-auto example'>
        <Table
          size='sm'
          variant='unstyled'
          bg={bg + '!important'}
          className='table-tiny '
        >
          <Thead>
            <Tr>
              <Th textAlign='center' width='2'>
                Student Name
              </Th>
              <Th textAlign='center'>Height</Th>
              <Th> Weight</Th>
              <Th>20M Pacer</Th>
              <Th>Percent Body Fat</Th> <Th>Abdominal Skin Fold</Th>
              <Th>Calf Skin Fold</Th> <Th>Tricep Skin Fold</Th>
              <Th>Curl-Up</Th>
              <Th>Trunk-lift</Th>
              <Th>Sit and Reach Left</Th>
              <Th>Sit and Reach Right</Th>
              <Th>Aerobic Activity</Th>
              <Th>Muscle-Strength</Th>
              <Th>Bone-Strength</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr key='id' textAlign='left' background='#fffff'>
                  <Td>{item.sn}</Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      value='25'
                      size='1'
                      className={`${inputBorderColor}`}
                    ></input>
                    <span className='px-2'>ft</span>
                    <input
                      placeholder=''
                      value='1'
                      size='1'
                      className={`${inputBorderColor}`}
                    ></input>
                    <span>in</span>
                  </Td>
                  <Td textAlign='center'>
                    <input
                      value='154'
                      size='4'
                      className={`${inputBorderColor}`}
                    />
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      size='2'
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                  <Td textAlign='left'>
                    <input
                      placeholder=''
                      className={`${inputBorderColor}`}
                    ></input>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <div className='flex justify-center mt-10 gap-3'>
        <Button onClick={handleDisableClick} type='button'>
          Cancel
        </Button>
        {enable && (
          <Button className='bg-green text-white' onClick={handleEnableClick}>
            {buttonText}
          </Button>
        )}
        {showPopup ? <ClipBoard /> : null}
      </div>
    </div>
  );
};

export default AdminTableSkelton;
