import React from "react";
import { Select, Divider, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";
import SubCards from "./SubCards";
import CoachTable from "./CoachTable";
import ManageTable from "../../../../DistrictAdmin/DataManagement/ManageClasses/ManageTable";
import { ManageClassPop } from "../../../../DistrictAdmin/DataManagement/ManageClasses/ManageClassPop";
import addIcon from "../../../../../assets/customIcons/addIcon.svg";
import { RiDeleteBin5Line } from "react-icons/ri";
import GridProvider from "../../../../../components/GridProvider";

const CoachBoard = () => {
  const CoachBoard = {
    title: "Coach Board HS Period 3",

    coachBoardFields: [
      {
        lable: "ClassName",
        inputType: "text",
        defaultValue: "Coach Board HS Period 3",
      },
      {
        lable: "School",
        inputType: "text",
        defaultValue: "Greenlight High School",
      },
      {
        lable: "Start Date",
        inputType: "datetime-local",
        defaultValue: "08/02/2022",
      },
      {
        lable: "End Date",
        inputType: "datetime-local",
        defaultValue: "08/02/2023",
      },
      {
        lable: "Local Identifier",
        inputType: "text",
        defaultValue: "HSP31718",
      },
      {
        lable: "Status",
        inputType: "text",
        defaultValue: "In Progress",
      },
      {
        lable: "Teachers",
        inputType: "text",
        defaultValue: "Basu, Raj",
      },
    ],
  };
  const { title, coachBoardFields } = CoachBoard;
  return (
    <>
      <Flex>
        <Text textStyle="h4">
          {title}
        </Text>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap="8" marginTop="8">
        <GridProvider data={coachBoardFields} />
      </Grid>

      <Box marginTop="10">
        <Divider borderColor="gray" />
      </Box>
      <div className="m-5">
        <Text textStyle="h4">Classes</Text>
        <ManageTable />
      </div>
    </>
    // <div>
    //   <p className="mt-5 p-6 font-poppins-bold"> Coach Board HS Period 3</p>
    //   <div className="px-8 grid grid-cols-4 gap-6 mb-4">
    //     <p className="text-sm font-poppins-regular">ClassName*</p>

    //     <p className="text-sm font-poppins-regular">School*</p>
    //     <p className="text-sm font-poppins-regular">Start Date*</p>
    //     <p className="text-sm font-poppins-regular">End Date*</p>
    //   </div>

    //   <div className="grid grid-cols-4 gap-4 px-6 mt-5">
    //     <Select
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //       placeholder="Select the option"
    //       default="Green Light Elementary"
    //       variant="filled"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //     <Select
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //       placeholder="Select the option"
    //       default="Green Light Elementary"
    //       variant="filled"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //     <Select
    //       placeholder="Green Light Elementary"
    //       variant="filled"
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //     <Select
    //       placeholder="Green Light Elementary"
    //       variant="filled"
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //   </div>

    //   <div className="px-8  grid grid-cols-4 gap-6 mb-4 mt-4">
    //     <p className="text-sm font-poppins-regular">Local Identifier</p>
    //     <p className="text-sm font-poppins-regular">Status*</p>
    //     <p className="text-sm font-poppins-regular">Teachers</p>
    //   </div>

    //   <div className="grid grid-cols-4 gap-4 px-6 mt-5">
    //     <Select
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //       placeholder="Select the option"
    //       default="Green Light Elementary"
    //       variant="filled"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //     <Select
    //       size="sm"
    //       border="1px solid #f5f5f5"
    //       borderRadius="15"
    //       placeholder="Select the option"
    //       default="Green Light Elementary"
    //       variant="filled"
    //     >
    //       <option value="Green Light Elementary">Green Light Elementary</option>
    //       <option value="Coach Board HS Period 3 ">
    //         Coach Board HS Period 3{" "}
    //       </option>
    //       <option value="All"> All</option>
    //     </Select>
    //     <div className="flex justify-between">
    //       <p className="text-primary font-poppins-regular">Coach</p>
    //       <div className="flex gap-2">
    //         <p className="text-primary underline font-poppins-regular">
    //           Delete{" "}
    //         </p>
    //         <p>
    //           <RiDeleteBin5Line className="w-5 h-5" fill="#0081c8" />
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //
    //   <div className="flex justify-between">
    //     <div className="flex">
    //       <p className="px-6">classes Roaster</p>
    //       <Select
    //         placeholder="Action"
    //         variant="filled"
    //         size="sm"
    //         border="1px solid #f5f5f5"
    //         borderRadius="15"
    //         bg="primary"
    //         color="white"
    //         w="15rem"
    //       >
    //         <option value="Green Light Elementary">Action</option>
    //         <option value="Coach Board HS Period 3 ">Action</option>
    //         <option value="All"> All</option>
    //       </Select>
    //     </div>
    //     <div className="px-7">
    //       <Flex gap="2">
    //         {/* <Text textStyle='h3' textDecoration='underline'>
    //           Add New Class
    //         </Text> */}
    //         <ManageClassPop />
    //         <Box width="6" height="6" mt={2} cursor="pointer">
    //           <img w="full" h="full" src={addIcon} />
    //         </Box>
    //         {/* <AddIcon /> */}
    //       </Flex>
    //     </div>
    //   </div>

    //   <div className="m-5">
    //     <ManageTable />
    //   </div>
    // </div>
  );
};

export default CoachBoard;
