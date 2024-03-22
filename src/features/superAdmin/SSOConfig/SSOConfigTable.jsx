import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllSSOConfig,
  getSSOConfigByDistrict,
  getSSOConfigByOAuth2,
  setUpdatedSSOConfigById,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const SSOConfigTable = (props) => {
  console.log("After click ==== props in SSOConfigTable", props);
  const districtName = props.filterByDistrictData;
  const protocol = props.filterByOAuth2;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([{}]);
  const token = useSelector((state) => state?.profile?.token);

  const getAllSSOConfigResults = useSelector(
    (state) => state.superAdmin?.getSSOConfigData?.data?.response
  );

  const DistrictsResponse = useSelector(
    (state) => state.superAdmin?.SSOConfigResultByDistrict
  );
  const OAuth2Response = useSelector(
    (state) => state.superAdmin?.SSOConfigResultByOAuth2
  );

  useEffect(() => {
    dispatch(getAllSSOConfig({token:token}));
  }, []);

  useEffect(() => {
    if (districtName !== "" && districtName !== undefined) {
      dispatch(getSSOConfigByDistrict({ district: districtName, token:token }));
    } else if (protocol !== "" && protocol !== undefined) {
      dispatch(getSSOConfigByOAuth2({ OAuth2: protocol }));
    } else {
      dispatch(getAllSSOConfig());
    }
  }, [districtName, protocol]);

  useEffect(() => {
    setTableData(getAllSSOConfigResults);
  }, [getAllSSOConfigResults]);

  useEffect(() => {
    setTableData(DistrictsResponse);
  }, [DistrictsResponse]);

  useEffect(() => {
    setTableData(OAuth2Response);
  }, [OAuth2Response]);

  const RedirectToEditSSOConfig = (ConfigData) => {
    console.log("RedirectToEditSSOConfig", "/role/superAdmin/SSOConfig/EditSSOConfig");
    navigate("/role/superAdmin/SSOConfig/EditSSOConfig", {
      state: {
        data: ConfigData,
      },
    });
  };

  return (
    <>
      <TableContainer marginTop={"0.5rem"} className="SuperAdminTables">
        <Table variant="stripped" color="">
          <Thead>
            <Tr>
              <Th>Configuration Name</Th>
              <Th>District(s)</Th>
              <Th>Protocol</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tableData?.map((item, key) => (
              <Tr>
                <Button onClick={() => RedirectToEditSSOConfig(item)}>
                  <Td color="#1890ff">{item.configuration_name}</Td>
                </Button>
                <Td>{item.districts}</Td>
                <Td>{item.authorization_protocol}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SSOConfigTable;
