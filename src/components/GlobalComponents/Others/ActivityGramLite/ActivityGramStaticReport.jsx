import React from 'react';
import play from '../../../../assets/images/Untitled design/play.png';

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

const ActivityTableLevelOne = () => {
  return (
    <div className='mt-10 '>
      <p className='mt-2 mb-2'>Assessment by Activity Level</p>
      <table class='table-auto'>
        <thead className='bg-[#4DB849] text-white'>
          <tr>
            <th>Gender</th>
            <th>Number Students</th>
            <th>Moderate Activity</th>
            <th>Vigorious Activity </th>
            <th>Total Activity at Home*</th>
            <th>Moderate Activity</th>
            <th>Vigorious Activity </th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Male</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>

            <td>0</td>
          </tr>
          <tr>
            <td>Female</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ActivityTableLevelTwo = () => {
  return (
    <div className='mt-10'>
      <p className='mt-2 mb-2'>Assessment by Activity Level</p>
      <table class='table-auto'>
        <thead className='bg-[#4DB849] text-white'>
          <tr>
            <th>Gender</th>
            <th>Number Students</th>
            <th>Lifestyle Activity</th>
            <th>Aerobic Activity </th>
            <th>Aerobic Sports</th>
            <th>Muscular Activity</th>
            <th>Flexibility Activity </th>
            <th>Rest </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Male</td>
            <td>1</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>100.00%</td>
          </tr>
          <tr>
            <td>Female</td>
            <td>1</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>100.00%</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>2</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>0.0%</td>
            <td>100.00%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ActivityGramStaticReport = () => {
  return (
    <>
      <div className='p-10'>
        <section className='flex justify-between'>
          <p className='text-black font-poppins-bold text-[1.2rem]'>
            {' '}
            ActivityGram Lite Student Report
          </p>
          <p className='text-[#4DB849] text-[1.2rem]'>
            <b className='text-[#4DB849] font-poppins-medium'>Activity </b>
            GRAM LITE
          </p>
        </section>
        <hr className='mt-5 border-[2px] border-back-color' />
        <RenderActivity />
        <div className='mt-10'>
          <ActivityTableLevelOne />
        </div>
        <div className='mt-10'>
          <ActivityTableLevelTwo />
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

export default ActivityGramStaticReport;
