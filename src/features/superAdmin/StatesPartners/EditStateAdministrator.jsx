import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const EditStateAdministrator = () => {

  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto">
      <Flex>
        <Box className="p-3">
          <Text textStyle="h4" marginBottom="6">
            Edit State Administrator
          </Text>
        </Box>
        <Spacer />
      </Flex>
      {/* <AddEditInfoTemplate
        navigationLink={"/role/SuperAdmin/StatePartners/EditManageUserAssignments"}
      /> */}
    </div>
  );
};

export default EditStateAdministrator;
