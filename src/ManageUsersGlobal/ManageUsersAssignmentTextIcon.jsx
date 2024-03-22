import { Box, Text } from "@chakra-ui/react";
import React from "react";

import addCircleIcon from "../assets/customIcons/Icon ionic-ios-add-circle.svg";

const ManageUsersAssignmentTextIcon = (props) => {


  return (
    <>
      <Text textStyle="h3" as="span" textDecoration="underline" color="black-2">
        {props.text}
      </Text>
      <Box width="6" height="6">
        <img w="full" h="full" src={addCircleIcon} />
      </Box>
    </>
  );
};

export default ManageUsersAssignmentTextIcon;
