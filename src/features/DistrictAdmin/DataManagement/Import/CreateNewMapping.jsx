import { Box, Flex, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CreateNewMappingData, createTableData } from "../../config/config";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreateMappingObject,
  getCsvColumnsNames,
  getGetMapObjDetailsById,
  getGetTablesById,
  setCsvColumnsNames,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CreateMappingSuccessModal from "./CreateMappingSuccessModal";

const CreateNewMapping = () => {
  const {
    text,
    sideHeading,
    step1,
    step1Options,
    step2,
    step3,
    tableName,
    tableColumns,
  } = CreateNewMappingData;

  const { schoolTeacherClassStudentDataFeilds, schoolTeacherClassDataFeilds } =
    createTableData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const token = useSelector((state) => state?.profile?.token);

  const columnNames = useSelector(
    (state) => state?.schoolAdmin?.csvColumnsNames
  );
  const manageUser = useSelector((state) => state.profile.manageUser);

  const mappingTableData = useSelector(
    (state) => state?.schoolAdmin?.getTablesById?.data?.response
  );

  const mappingPath = useSelector((state) => state?.schoolAdmin?.mappingPath);

  const previousPath = useSelector((state) => state?.profile?.previousPath);

  console.log("mappingPath", mappingPath);

  const formData = new FormData();

  const [dropdowntext, setDropdowntext] = useState(1);

  const [name, setName] = useState("");

  const [selectedData, setSelectedData] = useState({});

  const [file, setFile] = useState(null);

  const [requiredFields, setRequiredFields] = useState([]);

  const mandataryArrays = mappingTableData?.filter((item) => item?.Required);

  const mandatoryHeaders = mandataryArrays?.map((item) => item?.FieldCd);

  console.log("mandataryArrays", mandataryArrays);

  console.log(mandatoryHeaders, "mandatoryHeadersmandatoryHeaders");

  const onHandleChange = (event) => {
    if (!event.target.value) {
      const dummyObj = {
        ...selectedData,
      };
      delete dummyObj[event.target.name];

      setSelectedData({
        ...dummyObj,
      });
    } else {
      setSelectedData({
        ...selectedData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const inputOnChange = (e) => {
    setName(e.target.value);
  };


  const clickToSave = () => {
    const finalBody = {
      name: name,
      data_set: dropdowntext,
      mapped_object: selectedData,
    };

    const existingmandatoryHeaders = [];

    Object.keys(selectedData).forEach((key) => {
      if (mandatoryHeaders.includes(key)) {
        existingmandatoryHeaders.push(key);
      }
    });

    const missedmandatoryHeaders = mandatoryHeaders?.filter(
      (key) => !existingmandatoryHeaders.includes(key)
    );

    setRequiredFields(missedmandatoryHeaders);

    if (missedmandatoryHeaders.length === 0 && name) {
      dispatch(getCreateMappingObject({ finalBody, token }));
    }
  };

  const onSelect = (e) => {
    setDropdowntext(e.target.value);
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      formData.append("file", e.target.files[0]);
      dispatch(getCsvColumnsNames({ finalBody: formData, token }));
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    dispatch(setCsvColumnsNames(null));
  }, []);

  useEffect(() => {
    dispatch(getGetTablesById({ uuid: dropdowntext, token }));
  }, [dropdowntext]);


  return (
    <>
      <Flex direction="column" mt="1" gap="4">
        <Box inlineSize="2xl">
          <Text mb="6" textStyle="h4">
            Create CSV Import Field Map
          </Text>
          <Text textStyle="p" color="black-2">
            {text}
          </Text>
        </Box>
        <Box inlineSize="xs">
          <Text textStyle="h5" color="black-1">
            {step1}
          </Text>
          <Select
            placeholder=""
            bg="bg.100"
            borderColor="bg.100"
            name="data_set"
            onChange={(e) => onSelect(e)}
          >
            {step1Options.map((option, index) => (
              <option value={option.id} key={index}>
                {option.lable}
              </option>
            ))}
          </Select>
        </Box>
        <Box inlineSize="xs">
          <Text textStyle="h5" color="black-1">
            {step2}
          </Text>
          <Input
            type="text"
            bg="bg.100"
            borderColor="bg.100"
            name="name"
            onChange={(e) => inputOnChange(e)}
          />
          {
            !name && <Text color="red">Name is required</Text>
          }
        </Box>
        <Box inlineSize="xs">
          <Text textStyle="h5" color="black-1">
            {step3}
          </Text>
          <Stack width="220px">
            <input
              accept=".csv"
              type="file"
              bg="white"
              borderColor="white"
              name="file"
              onChange={(e) => handleChange(e)}
            />
          </Stack>
          {!file && <Text color="red">Please choose csv file only</Text>}
        </Box>
        <Text textStyle="h4" color="black-2">
          {tableName}
        </Text>
        <TableContainer>
          <Table variant="striped" colorScheme="bg">
            <Thead>
              <Tr>
                {tableColumns.map((columnName, index) => {
                  return (
                    <Th>
                      <Text textStyle="h4" color="primary">
                        {columnName}
                      </Text>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {mappingTableData?.length ? (
                mappingTableData?.map((item, i) => {
                  return (
                    <Tr>
                      {item?.Required === true ? (
                          <Td>
                          {item?.Name}*
                           {requiredFields?.length > 0 &&
                          requiredFields.includes(item?.FieldCd) ? (
                            <Text color="red">Required</Text>
                          ) : null}
                          </Td>
                      ) : (
                        <Td>{item?.Name}</Td>
                      )}

                      <Td>{item?.FieldLength + " " + item?.ShowType}</Td>
                      <Td>
                        <Select
                          placeholder="select"
                          bg="bg.100"
                          // borderColor="bg.100"
                          variant="outline"
                          name={item?.FieldCd}
                          onChange={(e) => onHandleChange(e)}
                        >
                          {columnNames?.length &&
                            columnNames?.map((option, index) => (
                              <option value={option}>{option}</option>
                            ))}
                        </Select>
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Text>Hello world</Text>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="center" gap={8} width={"full"}>
          <Box
            onClick={() => {
              navigate(previousPath);
            }}
          >
            <NegativeButton text={"Cancel"} />
          </Box>
          <Box onClick={() => clickToSave()}>
            <PositiveButton text={"Save"} />
          </Box>
        </Flex>
      </Flex>

      {/* <CreateMappingSuccessModal setActiveTab={location?.state?.setActiveTab} /> */}
    </>
  );
};

export default CreateNewMapping;
