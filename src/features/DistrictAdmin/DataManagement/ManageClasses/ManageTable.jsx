import React from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react'

const reportActivityTableList = [
  {
    id: 1,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 2,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 3,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 4,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 5,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 6,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 7,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 8,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 9,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 10,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 11,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 12,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 13,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 14,
    reportName: 'AStudent1.Jhon',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },
];

const ManageTable = () => {
  const downloadButtonClicked = () => {};

  return (
    <div className='h-auto mt-5 md:overflow-x-auto '>
      <table>
        <thead>
          <tr>
            <th className='w-[4%]'>
              <div className='flex justify-center items-center'>
                <input type='checkbox' className='ml-5 mr-1' />
                <AiFillCaretDown />
              </div>
            </th>

            <th className='font-poppins-regular'>StudentName</th>
            <th className='font-poppins-regular'>Student Id</th>
            <th className='font-poppins-regular'>Birth Date</th>
            <th font-poppins-regular>Grade</th>
            <th>Sex Assigned at Birth</th>
            <th>Login Status</th>
          </tr>
        </thead>
        <tbody>
          {reportActivityTableList?.map((each, index) => (
            <tr key={each.id} className='table-row'>
              <td>
                <input type='checkbox' />
              </td>

              <td className='text-primary font-poppins-regular'>
                {each.reportName}
              </td>
              <td className='font-poppins-regular'>{each.runBy}</td>
              <td className='font-poppins-regular'>{each.readyDate}</td>
              <td className=' font-poppins-regular'>{each.scheduledOn}</td>

              <td className=' font-poppins-regular'>{each.status}</td>

              <td
                className='underline text-primary cursor-pointer'
                onClick={downloadButtonClicked}
              >
                {each.downloadView}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTable;
