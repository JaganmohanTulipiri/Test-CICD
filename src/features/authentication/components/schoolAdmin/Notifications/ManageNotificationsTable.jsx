import React, { useEffect } from "react";
import {
  TableContainer,
  Th,
  Tr,
  Td,
  Table,
  Thead,
  Tbody,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getManageAnnouncementData } from "../schoolAdminSlice";
import ReactPaginate from "react-paginate";
import TableSkeleton from "../../../../../components/GlobalComponents/TableSkeleton";
import moment from "moment";
// import { getManageAnnouncementData } from "../teacherSlice";

const ManageNotificationsTable = (props) => {
  const { setPageNumber } = props;

  const loading = useSelector((state) => state?.schoolAdmin?.loading);
  const role = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state?.profile?.token);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);
  const dispatch = useDispatch();
  // const manageAnnouncementData = useSelector((state) => state?.teacher?.manageAnnouncementData?.data?.response?.data);

  const manageAnnouncementData = useSelector(
    (state) => state?.schoolAdmin?.ManageAnnouncementData
  );
  console.log("manageAnnouncementData---->", manageAnnouncementData);

  const handlePageNumber = (event) => {
    setPageNumber(event.selected + 1);
    // dispatch(setCurrentPageNumber(event.selected+1))
  };

  console.log("props from manageTable", props);
  const data = [
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
    {
      title: "sample Text here",
      startDate: "01/23/23",
      endDate: "01/24/23",
      audience: "student,parent",
      status: "active",
    },
  ];

  const tableHeader = [
    "Notification Title",
    "Start Date",
    "End Date",
    "Audience",
    "Status",
  ];
  return (
    <Box>
      {loading ? (
        <TableSkeleton />
      ) : (
        <TableContainer className="SuperAdminTables">
          <Table variant="stripped">
            <Thead>
              <Tr>
                {tableHeader.map((item) => (
                  <Th>
                    <Text
                    textStyle={'textHead'}
                    >
                      {item}
                    </Text>
                  </Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {manageAnnouncementData?.length > 0 &&
                manageAnnouncementData?.map((item, key) => (
                  <Tr>
                    <Td
                    textStyle={'textHead'}
                    >
                      {item.announcement_title}
                    </Td>
                    <Td
                      textStyle={'textHead'}
                    >
                      {moment(item.start_date).format(
                        navigator.language === "en-GB"
                          ? "DD-MM-YYYY"
                          : "MM-DD-YYYY"
                      )}
                    </Td>
                    <Td
                      textStyle={'textHead'}
                    >
                      {moment(item.end_date).format(
                        navigator.language === "en-GB"
                          ? "DD-MM-YYYY"
                          : "MM-DD-YYYY"
                      )}
                    </Td>
                    <Td
                      textStyle={'textHead'}
                    >
                      {item.audience}
                    </Td>
                    <Td style={{ color: "#1890ff" }}>{item.status}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>

          {manageAnnouncementData?.length === 0 && (
            <Text
              textStyle={'textHead'}
              color="black"
              textAlign={"center"}
              mt="5"
              mb="5"
            >
              No Data Found
            </Text>
          )}
        </TableContainer>
      )}

      <Flex justify="flex-end" my="5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageNumber}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </Flex>
    </Box>
  );
};

export default ManageNotificationsTable;
