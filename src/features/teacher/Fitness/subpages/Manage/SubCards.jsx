import React from 'react';
import { manage_data } from '../Manage/data';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from '@chakra-ui/react';

const Main = () => {
  return (
    <>
      {manage_data.map((item, index) => {
        return (
          <>
            <div className='rounded-xl p-3 bg-white shadow-2xl w-[18rem]'>
              {manage_data.map(() => {
                return (
                  <ul>
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell text-xs'>
                        <input type='checkbox' className='mx-1' />
                        Class Name
                      </span>{' '}
                      :
                      <span className='text-xs px-2'>{item['class Name']}</span>
                    </li>
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell px-4 text-xs mx-2'>
                        Class Id
                      </span>{' '}
                      :<span className='text-xs px-2'>{item['class Id']}</span>
                    </li>{' '}
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell px-4 text-xs'>
                        Start Date
                      </span>{' '}
                      :
                      <span className='text-xs px-2'>{item['Start Date']}</span>
                    </li>{' '}
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell px-4 text-xs'>
                        End Date
                      </span>{' '}
                      :<span className='text-xs px-2'>{item['End Date']}</span>
                    </li>{' '}
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell px-4 text-xs'>
                        Students
                      </span>{' '}
                      :<span className='text-xs px-2'>{item['Students']}</span>
                    </li>{' '}
                    <li className='mb-2 table-row'>
                      <span className='text-primary table-cell px-4 text-xs'>
                        Status{' '}
                      </span>{' '}
                      :<span className='text-xs px-2'>{item['Status']}</span>
                    </li>{' '}
                    <li className='text-center cursor-pointer text-xs text-primary mt-3 bg-[#f4f4f4] p-2 '>
                      View
                    </li>
                  </ul>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

const SubCards = () => {
  return (
    <div className='m-10  grid grid-cols-3 gap-4 p-2'>
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
    </div>
  );
};

export default SubCards;
