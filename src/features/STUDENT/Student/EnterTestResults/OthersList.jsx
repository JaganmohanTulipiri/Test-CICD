import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import activityGram from "../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityGram.svg";

import activityLog from "../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityLogo.svg";
import { setActivatingID } from "../../../../store/slices/profileSlice";

const OthersList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const listItems = [
    {
      id: "1",
      name: "ACTIVITYGRAM",
      img: activityGram,
    },

    {
      id: "2",
      name: "ACTIVITYLOG",
      img: activityLog,
    },
  ];

  const cardItemClicked = (selectedItem) => {
    console.log(selectedItem, "selectedItem");

    if (selectedItem?.name === "ACTIVITYGRAM") {
        dispatch(setActivatingID(6))

      navigate("/role/Student/ActivityGramEvent");



    }

    if (selectedItem?.name === "ACTIVITYLOG") {
        dispatch(setActivatingID(7))
      navigate("/role/Student/ActivityLog");
  
    }
  };

  return (
    <>
      <div className=" mt-5 md:px-5 lg:px-10">
        {listItems &&
          listItems?.map((item) => (
            <Card
              bg="#f5f5f5"
              boxShadow="sm"
              border="1"
              mt="4"
              height="14"
              justifyContent="center"
              onClick={() => cardItemClicked(item)}
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                cursor={"pointer"}
              >
                <Image src={item.img} width="8" />

                <Text className="px-5" fontSize="xs">
                  {item.name}
                </Text>
              </CardBody>
            </Card>
          ))}
      </div>
    </>
  );
};

export default OthersList;
