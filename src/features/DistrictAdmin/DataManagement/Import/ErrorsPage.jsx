import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import successTick from "../../../../assets/customIcons/success-tick.svg";
import { FaFileExport } from "react-icons/fa";
import { ErrorTableData } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import { setPreviewCsv } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const ErrorsPage = (props) => {
  const { setCheckErrorPage,setDisable } = props;
  const dispatch = useDispatch()

  const previewData = useSelector(
    (state) => state?.schoolAdmin?.previewCsv?.data?.response
  );

  const previewHeadersList = previewData?.exportData?.exportHeaders;

  const previewDataContent = previewData?.previewData;

  const exportUserData = previewData?.exportData;

  console.log("previewDataContent", previewDataContent);

  const clickToReUpload = () => {
    dispatch(setPreviewCsv(null))
    setDisable(false)
    setCheckErrorPage(false)
  }

  return (
    <>
      <Box>
        <Flex
          direction="column"
          color="black-2"
          gap="4"
          mt="4"
          pl="2"
          textStyle="p"
        >
          <Text marginRight="">
            The Grid Below shows a preview of data in this CSV file. If no
            errors found ,click the Import Button to begin the import process.
          </Text>
          <span>
            If there are any validation errors, please correct and re-upload
            your import file.
          </span>

          <Box inlineSize="xs">
            <Text color="#0081c8" textStyle="h4">
              VALIDATION
            </Text>
          </Box>
          <Box display="flex">
            <Image src={successTick} w={4} />
            <Text textStyle="h6" color="red" pl="2" display="flex">
              <Text pr="2">{previewData?.errorCount}</Text> 
              Errors Found in your file. please correct these items and
              re-upload your file .Visit
              <Text color="#0081c8">https://help.fitnessgram.net/</Text>
              for more information on importing. View Next Error
            </Text>
          </Box>
          {/* <Text color="red" fontSize="sm">
            Error:123459 doesnt match any licenesed school local identifiers
          </Text> */}
          <Flex mt="8">
            <Text color="black-2" display="flex">
              click here to
              <Box onClick={() => clickToReUpload()}>
                <Text pl="2" color="#0081c8" textDecoration="underline" cursor="pointer">
                  re-upload
                </Text>
              </Box>
            </Text>
            <Spacer />
            <HStack spacing="8">
              <HStack cursor="pointer">
                <CSVLink
                  filename={previewData?.fileName}
                  data={exportUserData?.exportContent}
                  headers={exportUserData?.exportHeaders}
                >
                  <HStack cursor="pointer">
                    <Text
                      textStyle="h3"
                      as="span"
                      textDecoration="underline"
                      color="black-2"
                    >
                      EXPORT ERRORS
                    </Text>
                    <Box width="6" height="6">
                      <FaFileExport size={25} fill="#0081c8" />
                    </Box>
                  </HStack>
                </CSVLink>
              </HStack>
            </HStack>
          </Flex>
          <TableContainer marginBottom="14">
            <Table variant="striped" colorScheme="bg">
              <Thead>
                <Tr>
                  {previewHeadersList?.map((columnName, index) => {
                    return (
                      <Th>
                        <Text textStyle="h4"> {columnName.actualFieldName}</Text>
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody textStyle="p" alignItems="centers">
                {previewDataContent?.map((item, i) => (
                  <Tr>
                    {previewHeadersList.map((header) => {
                      return (
                        <Td color={item[`${header.key}Error`] == 1 && "red"}>
                          {item[header.key]}
                        </Td>
                      );
                    })}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </>
  );
};

export default ErrorsPage;
