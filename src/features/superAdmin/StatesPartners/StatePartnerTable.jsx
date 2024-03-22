import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  storeStateId,
  storeStateName,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const StatesPartnerTable = (props) => {
  console.log("props=================", props);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let StatesInfo = props.tableData;

  const stateName = props.filterByStateName;

  const RedirectToEditPage = (stateInfo) => {
    dispatch(storeStateId(stateInfo?.uuid));
    dispatch(storeStateName(stateInfo?.state_name));
    console.log("stateInfostateInfo", stateInfo);
    navigate("/role/superAdmin/StatesPartners/WA", {
      state: {
        data: stateInfo,
      },
    });
  };

  // const getAllStatesData = useSelector(
  //   (state) => state?.superAdmin?.getAllStatesInfo?.data?.response
  // );
  // const getStatesResponseByFilterName = useSelector(
  //   (state) => state?.superAdmin?.filterStatesByName
  // );
  // const getStatesResponseByFilterType = useSelector(
  //   (state) => state?.superAdmin?.filterStatesByType
  // );
  // const getStatesResponseByFilterLicense = useSelector(
  //   (state) => state?.superAdmin?.filterStatesByLicense
  // );

  // console.log("getAllStatesData=========", getAllStatesData);

  const tableHeaders = ["Name", "District(s)", "4-Digit Code", "License(s)"];

  return (
    <>
      <TableContainer marginTop="1.5rem" className="SuperAdminTables">
        <Table variant="stripped">
          <Thead>
            <Tr>
              {tableHeaders.map((item) => (
                <Th>
                  <Text textStyle="h4">{item}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {props.tableData?.length > 0 &&
              props.tableData?.map((item, key) => (
                <Tr>
                  <Button onClick={() => RedirectToEditPage(item)}>
                    <Td color="#1890ff">{item.state_name}</Td>
                  </Button>
                  <Td>{item.type}</Td>
                  <Td>{item.state_code}</Td>
                  <Td color="#1890ff">{item["License(s)"]}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StatesPartnerTable;
