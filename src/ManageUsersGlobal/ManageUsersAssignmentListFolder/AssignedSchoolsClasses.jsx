import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line, RiDeleteBinLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const AssginedSchoolsClasses = (props) => {
  const { userAssignments, setUserAssignments } = props;

  const handleDelete = (schoolId, classId) => {
    let assignedSchools = userAssignments;

    let schoolIndex = assignedSchools.findIndex(
      (school) => school.uuid === schoolId
    );

    let assignedClasses = assignedSchools[schoolIndex].classes;

    if (assignedClasses.length == 1) {
      assignedSchools.splice(schoolIndex, 1);
    } else {
      let classIndex = assignedClasses.findIndex(
        (clas) => clas.uuid === classId
      );

      let filteredClasses = assignedClasses.filter(
        (clas) => clas.uuid !== classId
      );

      assignedSchools.splice(schoolIndex, 1, {
        ...assignedSchools[schoolIndex],
        classes: [...filteredClasses],
      });
    }

    setUserAssignments([...assignedSchools]);
  };

  return (
    <>
      <Box>
        {userAssignments?.map((school) => (
          <Accordion allowToggle backgroundColor='bg.100' mt='3'>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {school?.school_name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              {school?.classes?.length
                ? school?.classes?.map((item, index) => (
                    <AccordionPanel pb={4}>
                      <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        {item?.class_name}
                        <RiDeleteBin6Line
                          cursor='pointer'
                          className='mt-1 text-red'
                          onClick={() => handleDelete(school.uuid, item.uuid)}
                        />
                      </Box>
                    </AccordionPanel>
                  ))
                : null}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default AssginedSchoolsClasses;
