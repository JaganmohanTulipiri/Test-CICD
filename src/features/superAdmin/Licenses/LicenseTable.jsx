import {
  Button,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setPreviousPath } from "../../../store/slices/profileSlice";
import {
  getLicenseById,
  getLicenseList,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const LicenseTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const token = useSelector((state) => state?.profile?.token);
  const licensesList = useSelector(
    (state) => state?.superAdmin?.licensesList?.data?.response
  );

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const [data, setData] = useState([]);

  const handleLicenseUpdate = (funderId) => {
    dispatch(getLicenseById({ id: funderId, token: token }));
    navigate(`/role/${selectedRole}/Licenses/DisplayLicensedDistrictsData`);
    dispatch(setPreviousPath(location.pathname));
  };
  useEffect(() => {
    dispatch(getLicenseList({ token: token }));
  }, []);

  useEffect(() => {
    setData(licensesList);
  }, [licensesList]);

  console.log("license list", data);

  const tableHeaders = [
    "Funder",
    "Funder Type",
    "Status",
    "State",
    "Schools Licensed / Total",
    "Start Date",
    "End Date",
  ];
  return (
    <>
      <TableContainer marginTop="0.5rem" className="SuperAdminTables">
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
            {data?.length > 0 &&
              data?.map((item, key) => (
                <Tr>
                  <Button onClick={() => handleLicenseUpdate(item.uuid)}>
                    <Td color="#1890ff">
                      {item.funder_type === "district"
                        ? item?.district?.district_name
                        : item?.state?.state_name}
                    </Td>
                  </Button>
                  <Td>{item.funder_type}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item?.state?.state_name}</Td>
                  <Td></Td>
                  <Td>{item.start_date.split("T")[0]}</Td>
                  <Td>{item.end_date.split("T")[0]}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LicenseTable;
