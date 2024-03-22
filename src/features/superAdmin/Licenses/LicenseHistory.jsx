import { Box, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLicenseHistory } from "../../../store/slices/superAdminSlice/superAdminSlice";

const LicenseHistory = () => {
  const dispatch = useDispatch();

  const funderId = useSelector((state) => state?.superAdmin?.funderId);
  const token = useSelector((state) => state?.profile?.token);
  const licenseHistory = useSelector(
    (state) => state?.superAdmin?.licenseHistory
  );

  const [licenseHistoryData, setLicenseHistoryData] = useState([]);

  useEffect(() => {
    dispatch(
      getLicenseHistory({
        id: "2a3d628a-b699-473d-aff3-dacd322e750a",
        token: token,
      })
    );
  }, []);

  useEffect(() => {
    setLicenseHistoryData(licenseHistory);
  }, [licenseHistory]);

  console.log(licenseHistory, "licenseHistory Data");
  return (
    <div>
      <Flex>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="45rem"
          p="3"
        >
          <Flex>
            <Box w="20rem">
              {/* {LicenseHistoryData.map((item, key) => (
                <Text marginBottom="3">{item.data}</Text>
              ))} */}
            </Box>
            <Spacer />
            <Box>
              {/* {LicenseHistoryData.map((item, key) => (
                <Text marginBottom="9">{item.date}</Text>
              ))} */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default LicenseHistory;
