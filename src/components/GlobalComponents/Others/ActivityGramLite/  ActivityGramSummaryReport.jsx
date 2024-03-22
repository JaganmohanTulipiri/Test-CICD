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

const ActivityTable = () => {
  return (
    <div className='mt-10'>
      <table class='table-auto'>
        <thead className='bg-green text-white'>
          <tr>
            <th>Student</th>
            <th>Grade</th>
            <th>Age</th>
            <th>Physical Activity at school*</th>
            <th>Physical Activity at Home*</th>
            <th>Physical Activity at Average*</th>
            <th>Physical Activity Level*</th>
            <th>Sedentary Habits***</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AA Student1, John</td>
            <td>7</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3.6</td>
            <td>Moderate</td>
            <td>3.6</td>

            <td>No</td>
          </tr>
          <tr>
            <td>Overall Average</td>
            <td>7</td>
            <td>13</td>
            <td>3</td>
            <td>3.2</td>
            <td>3.1</td>
            <td>Moderate</td>
            <td>3.6</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ActivityGramSummaryReport = () => {
  return (
    <>
      <div className='p-10'>
        <section className='flex justify-between'>
          <p className='text-black font-poppins-bold text-[1.2rem]'>
            {' '}
            ActivityGram Lite Student Report
          </p>
          <p className='text-green text-[1.2rem]'>
            <b className='text-green font-poppins-medium'>Activity </b>
            GRAM LITE
          </p>
        </section>
        <hr className='mt-5 border-[2px] border-back-color' />
        <RenderActivity />
        <div className='mt-10'>
          <ActivityTable />
        </div>
        <div className='mt-5'>
          <p className='text-justify text-[0.9rem] font-poppins-medium'>
            Note: This report displays the most recent survey within the
            specified date range *Scores range from 1-5 with higher numbers
            indicating a higher level of activity **Rating of Activity Level
            based on relative average score ***Scores range from 1-5 with higher
            numbers indicating a higher level of sendentary behavior
          </p>
        </div>
      </div>
      <hr className='mt-8 border-[2px] border-back-color ' />
      <div className='flex float-right mt-5'>
        <p className='mt-3'>A PROGRAM OF</p>
        <img src={play} className='w-[5rem]' />
        <p className='mt-3'>THE NFL MOVEMENT FOR AN ACTIVE GENERATION</p>
      </div>
    </>
  );
};

export default ActivityGramSummaryReport;
