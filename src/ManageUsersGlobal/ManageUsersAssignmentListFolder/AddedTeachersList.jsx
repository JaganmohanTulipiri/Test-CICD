import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const AddedTeachersList = (props) => {
  const { addedSchoolsListArray, setAddedSchoolsListArray } = props;

  console.log(
    addedSchoolsListArray,
    "addedSchoolsListArrayaddedSchoolsListArray"
  );

  const schoolsListItems = useSelector(
    (state) => state?.schoolAdmin?.schoolsListItemsToShow
  );

  const classesListItems = useSelector(
    (state) => state?.schoolAdmin?.classesListItemsToShow
  );

  const [schoolsListItemsToShow, setSchoolsListItemsToShow] =
    useState(schoolsListItems);

  const [classesListItemsToShow, setClassesListItemsToShow] =
    useState(classesListItems);

  const deleteIconClicked = (selectedItem) => {
    let newList = [];

    for (let i = 0; i < addedSchoolsListArray?.length; i++) {
      for (let k = 0; k < addedSchoolsListArray[i]?.classArray?.length; k++) {
        if (
          selectedItem.uuid !== addedSchoolsListArray[i]?.classArray?.[k]?.uuid
        ) {
          newList.push(addedSchoolsListArray[i]);
        }
      }
    }

    setAddedSchoolsListArray(newList);
  };

  useEffect(() => {
    setSchoolsListItemsToShow((prevState) => [...prevState, schoolsListItems]);
    setClassesListItemsToShow((prevState) => [...prevState, classesListItems]);
  }, [classesListItems]);

  console.log("addedSchoolsListArray============", addedSchoolsListArray);

  return (
    <>
      <Box width="50rem">
        {addedSchoolsListArray?.map((each) => (
          <Accordion allowToggle backgroundColor="#F5F9FF" mt="3">
            <AccordionItem border="none">
              {each?.schoolArray?.map((item) => (
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item?.school_name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
              ))}

              {each?.classArray?.map((item, index) => (
                <AccordionPanel pb={4}>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    {item?.class_name}
                    {/* <RiDeleteBin6Line
                      className="mt-1 text-red"
                      onClick={() => deleteIconClicked(item)}
                    /> */}
                  </Box>
                </AccordionPanel>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default AddedTeachersList;
