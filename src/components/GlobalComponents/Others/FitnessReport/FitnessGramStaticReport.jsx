import React from 'react';
import play from '../../../../assets/images/Untitled design/play.png';
import fit from '../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FITNESSGRAM.png';
import { FcClearFilters } from 'react-icons/fc';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { FaFileCsv } from 'react-icons/fa';
import emailImg from '../../../../assets/images/StudentReportTableImages/email.png';

const RenderActivity = () => {
  return (
    <>
      <div className='flex gap-10 mt-5'>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>District</p>
          <p className='text-[0.9rem] mt-1'>
            {' '}
            Test District (The Cooper Institute)
          </p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>School</p>
          <p className='text-[0.9rem] mt-1'> New Test School</p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Teacher</p>
          <p className='text-[0.9rem] mt-1'> Fitness, Sheryl</p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Class</p>
          <p className='text-[0.9rem] mt-1'>
            Coach Sheryl MS Period 4 Fall 17 18{' '}
          </p>
        </div>
        <div className='flex-col'>
          <p className='text-[1rem] font-poppins-bold'>Report</p>
          <p className='text-[0.9rem] mt-1'>Report Date 10/11/2018</p>
        </div>
      </div>
    </>
  );
};

const dataOne = [
  {
    id: '1',
    name: 'Push-Up - Male',
  },
  {
    id: '1',
    name: 'Push-Up - FeMale',
  },
  {
    id: '1',
    name: 'Body Mass Index - Male',
  },
  {
    id: '1',
    name: 'Body Mass Index - FeMale',
  },
];

const dataTwo = [
  {
    id: '1',
    age: '11',
    count: '1',
    hfz: 1,
    hfz2: '100%',
    avg: '100%',
    sd: 0,
    min: '12.00',
    max: '12.00',
  },
];

const FitnessGramReport = () => {
  return (
    <div className='mt-10 '>
      <table class='table-auto'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Age</th>
            <th> Count</th>
            <th># in HFZ </th>
            <th>% in HFZ </th>

            <th> Average </th>
            <th> Standard Deviation</th>
            <th>Minimum </th>
            <th> Maximum </th>
          </tr>
        </thead>
        <tbody>
          {dataTwo.map((item, index) => {
            return (
              <>
                <tr>
                  <td>{item.age}</td>
                  <td>{item.count}</td>
                  <td>{item.hfz}</td>
                  <td>{item.hfz2}</td>
                  <td>{item.avg}</td>
                  <td>{item.sd}</td>
                  <td>{item.min}</td>
                  <td>{item.max}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FitnessGramStaticReport = () => {
  return (
    <>
      
      <div className='p-10'>
        <section className='flex justify-between'>
          <p className='text-black font-poppins-bold text-[1.2rem]'>
            {' '}
            FitnessGram Statistics Report{' '}
          </p>
          <img src={fit} className='w-[10rem]' />
        </section>
        <hr className='mt-5 border-[2px] border-back-color' />
        <RenderActivity />
        <div className='mt-10'>
          <p className='mt-2 mb-2'>Assessment by Activity Level</p>
          <div className='bg-[#58C2EB] text-white text-center mb-[-40px]'>
            Push-Up - Male
          </div>
          <FitnessGramReport />
        </div>
        <div className='mt-10'>
          <div className='bg-[#58C2EB] text-white text-center mb-[-40px]'>
            Push-Up - FeMale
          </div>
          <FitnessGramReport />
        </div>
        <div className='mt-10'>
          <div className='bg-[#58C2EB] text-white text-center mb-[-40px]'>
            Body Mass Index - Male
          </div>
          <FitnessGramReport />
        </div>
        <div className='mt-10'>
          <div className='bg-[#58C2EB] text-white text-center mb-[-40px]'>
            Body Mass Index - FeMale
          </div>
          <FitnessGramReport />
        </div>

        <hr className='mt-8 border-[2px] border-back-color ' />
        <div className='flex float-right mt-5'>
          <p className='mt-3'>A PROGRAM OF</p>
          <img src={play} className='w-[5rem]' />
          <p className='mt-3'>THE NFL MOVEMENT FOR AN ACTIVE GENERATION</p>
        </div>
      </div>
    </>
  );
};

export default FitnessGramStaticReport;
