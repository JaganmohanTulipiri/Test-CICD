import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
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
  setGetMapObjDetailsById,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CreateMappingSuccessModal from "./CreateMappingSuccessModal";

const EditMapping = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const params = useParams();

  const mappingUuid = params.id;

  const token = useSelector((state) => state?.profile?.token);

  const columnNames = useSelector(
    (state) => state?.schoolAdmin?.csvColumnsNames
  );
  const manageUser = useSelector((state) => state.profile.manageUser);

  const mappingTableData = useSelector(
    (state) => state?.schoolAdmin?.getTablesById?.data?.response
  );

  const getMapObjDetailsByIdData = useSelector(
    (state) => state?.schoolAdmin?.getMapObjDetailsById?.data?.response
  );

  const previousPath = useSelector((state) => state?.profile?.previousPath);

  const [csvFileUploaded, setCsvFileUploaded] = useState(false);

  const [requiredFields, setRequiredFields] = useState([]);



  

  const formData = new FormData();

  const [dropdowntext, setDropdowntext] = useState();

  const [data, setData] = useState({
    data_set: "",
    name: "",
    mapped_object: {},
    mapUUID: mappingUuid,
  });

  const [name, setName] = useState("");

  const [selectedData, setSelectedData] = useState({});

  const mandataryArrays = mappingTableData?.filter((item) => item?.Required);

  const mandatoryHeaders = mandataryArrays?.map((item) => item.FieldCd);
  

  const onHandleChange = (event) => {
    console.log(
      event.target.name,
      event.target.value,
      "iam on chnageeeeeeeeee"
    );

    if (!event.target.value) {
      const dummyObj = {
        ...data.mapped_object,
      };
      delete dummyObj[event.target.name];

      setData((prevState) => ({
        ...prevState,
        mapped_object: {
          ...dummyObj
        },
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        mapped_object: {
          ...prevState.mapped_object,
          [event.target.name]: event.target.value,
        },
      }));
    }

    
  };

  const inputOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSelect = (e) => {
    setDropdowntext(e.target.value);
    // dispatch(getGetTablesById({ uuid: dropdowntext, token }));

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    formData.append("file", e.target.files[0]);
    dispatch(getCsvColumnsNames({ finalBody: formData, token }));
    setCsvFileUploaded(true);
  };

  const clickToSave = () => {
    const finalBody = {
      ...data,
      mapUUID: mappingUuid,
      updateMapping:true,
    };

    const existingmandatoryHeaders = [];

    const selectedValue = data.mapped_object

    Object.keys(selectedValue).forEach((key) => {
      if (mandatoryHeaders.includes(key)) {
        existingmandatoryHeaders.push(key);
      }
    });

    const missedmandatoryHeaders = mandatoryHeaders.filter(
      (key) => !existingmandatoryHeaders.includes(key)
    );

    setRequiredFields(missedmandatoryHeaders);


    if (missedmandatoryHeaders.length === 0 && data?.name) {
      dispatch(getCreateMappingObject({ finalBody, token }));
    }
  };


  useEffect(() => {
    dispatch(setCsvColumnsNames(null));

    dispatch(getGetMapObjDetailsById({ uuid: mappingUuid, token }));

    // dispatch(getGetTablesById({ uuid: 1, token }));
  }, []);

  useEffect(() => {
    setData({
      data_set: getMapObjDetailsByIdData?.data_set,
      name: getMapObjDetailsByIdData?.name,
      mapped_object: getMapObjDetailsByIdData?.mapped_object,
    });
  }, [getMapObjDetailsByIdData]);

  useEffect(() => {
    dispatch(getGetTablesById({ uuid: data?.data_set, token }));
  }, [data?.data_set]);

  console.log(getMapObjDetailsByIdData, "getMapObjDetailsByIdData");

  useEffect(() => {
    setData({
      ...data,
      columnNames: columnNames,
    });
  }, [columnNames]);

  console.log(data, "im dataaa");

  console.log(
    getMapObjDetailsByIdData?.mapped_object?.SchoolId,
    "mapped objeecttt"
  );

  return (
    <>
      <Flex direction="column" mt="8" gap="4">
        <Box inlineSize="2xl">
          <Text textStyle="p" color="black-2">
            {text}
          </Text>
        </Box>
        <Text textStyle="h4" color="black-2">
          {sideHeading}
        </Text>
        <Box inlineSize="xs">
          <Text textStyle="h5" color="black-1">
            {step1}
          </Text>
          <Select
            placeholder=""
            bg="bg.100"
            borderColor="bg.100"
            name="data_set"
            value={data?.data_set}
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
            value={data?.name}
            onChange={(e) => inputOnChange(e)}
          />
          {
            !data?.name && <Text color="red">Name is required</Text>
          }
        </Box>
        <Box inlineSize="xs">
          <Text textStyle="h5" color="black-1">
            {step3}
          </Text>
          <Input
            type="file"
            bg="white"
            borderColor="white"
            name="file"
            onChange={(e) => handleChange(e)}
          />
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
                          value={data?.mapped_object[item?.FieldCd]}
                          onChange={(e) => onHandleChange(e)}
                        >
                          {csvFileUploaded
                            ? columnNames?.length &&
                              columnNames?.map((option, index) => (
                                <option value={option}>{option}</option>
                              ))
                            : Object.keys(
                                getMapObjDetailsByIdData !== undefined &&
                                  getMapObjDetailsByIdData?.mapped_object
                              )?.map(
                                (key) =>
                                  item?.FieldCd === key && (
                                    <option>
                                      {" "}
                                      {
                                        getMapObjDetailsByIdData?.mapped_object[
                                          key
                                        ]
                                      }
                                    </option>
                                  )
                              )}
                        </Select>
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Text>No Data</Text>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="center" gap={8} width={"full"}>
          <Box
            onClick={() => {
              navigate(previousPath);
              dispatch(setGetMapObjDetailsById(null));
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

export default EditMapping;
