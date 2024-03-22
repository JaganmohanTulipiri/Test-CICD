import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const AddStateAdministrator = () => {
  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto">
      <Flex>
        <Box>
          <Text textStyle="h4" marginBottom="6">
            Add State Administrator
          </Text>
        </Box>
        <Spacer />
      </Flex>
      {/* <AddEditInfoTemplate
        navigationLink={"/role/SuperAdmin/StatesPartners/StateUsersAssignments"}
      /> */}
    </div>
  );
};

export default AddStateAdministrator;
