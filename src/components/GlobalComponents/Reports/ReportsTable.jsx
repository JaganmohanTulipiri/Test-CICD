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
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 2,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 3,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 4,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 5,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 6,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 7,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 8,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 9,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 10,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 11,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 12,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 13,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },

  {
    id: 14,
    reportName: 'Activity Log Student Report',
    action: 'Scheduled',
    runBy: 'Raj Basu',
    scheduledOn: '10',
    readyDate: '01/15/2007',
    status: 'Ready',
    downloadView: 'Download',
  },
];

const ReportsTable = () => {
  const downloadButtonClicked = () => {};

  return (
    <div className='h-auto mt-5 md:overflow-x-auto '>
      <table>
        <thead>
          <tr>
            <th className='w-[4%]'>
              <div className='flex justify-center itenms-center'>
                <input type='checkbox' className='ml-5 mr-1' />
                <AiFillCaretDown />
              </div>
            </th>
            <th className='text-left table-row-report-name'>Report Name</th>
            <th>Actioin</th>
            <th>Run By</th>
            <th>Scheduled on</th>
            <th>Ready Date</th>
            <th>Status</th>
            <th>Download/View</th>
          </tr>
        </thead>
        <tbody>
          {reportActivityTableList?.map((each, index) => (
            <tr key={each.id} className='table-row'>
              <td>
                <input type='checkbox' />
              </td>
              <td className='table-row-report-name text-left '>
                {each.reportName}
              </td>
              <td>{each.action}</td>
              <td>{each.runBy}</td>
              <td>{each.scheduledOn}</td>
              <td>{each.readyDate}</td>
              <td>{each.status}</td>

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

export default ReportsTable;
