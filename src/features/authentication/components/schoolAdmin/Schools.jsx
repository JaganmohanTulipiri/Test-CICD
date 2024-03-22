import React, { useEffect, useState } from "react";
import {
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSchoolsForAdmin, getTeachersBySchool } from "./schoolAdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { setManageUser } from "../../../../store/slices/profileSlice";
import ErrorResponse from "../../../../components/GlobalComponents/ErrorResponse";
import TableSkeleton from "../../../../components/GlobalComponents/TableSkeleton";
import ReactPaginate from "react-paginate";

const SchoolsTable = (props) => {
  const { setPageNumber, pageNumber } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);
  const token = useSelector((state) => state?.profile?.token);

  const manageSchoolsData = useSelector(
    (state) => state?.schoolAdmin?.SchoolsForAdmin
  );
  const loading = useSelector((state) => state?.schoolAdmin?.loading);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  // const [pageNumber, setPageNumber] = useState("1");

  const handlePageNumber = (event) => {
    setPageNumber(event.selected + 1);
  };
  const data = [
    {
      id: "1",
      head: "SchoolName",
      name: "GreenLight Elementary",
      code: "5239044",
      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
    {
      id: "2",
      head: "Local Identifier",
      name: "GreenLight Elementary",
      code: "5239044",
      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
    {
      id: "3",
      head: "License(s)",
      name: "GreenLight Elementary",
      code: "5239044",
      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
  ];

  const clickToNavigate = (item) => {
    const schoolId = item?.uuid;

    dispatch(getTeachersBySchool({ schoolId, token }));
    navigate(`/role/${selectedRole}/school/${schoolId}`);
  };

  const finalBody = {
    user_uuid: userUUID,
    user_role: selectedRole,
  };

  useEffect(() => {
    dispatch(getSchoolsForAdmin({ token, skip: pageNumber }));
  }, [pageNumber]);

  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <TableContainer>
          <Table variant="Striped">
            <Thead>
              <Tr>
                {data?.map((item, index) => {
                  return (
                    <Th>
                      <Text textStyle="h4">{item?.head}</Text>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {manageSchoolsData &&
                manageSchoolsData?.map((item, index) => {
                  return (
                    <>
                      <Tr>
                        <Td
                          className="text-primary cursor-pointer"
                          onClick={() => clickToNavigate(item)}
                        >
                          {item?.school_name}
                        </Td>
                        <Td>{item?.local_identifier}</Td>
                        <Td></Td>
                      </Tr>
                    </>
                  );
                })}
              {!manageSchoolsData?.length && (
                <Flex justifyContent="center">
                  <Text>No Records Found</Text>
                </Flex>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}

      <Flex justify="flex-end" my='5'>
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
    </>
  );
};

const Schools = (props) => {
  const { pageNumber, setPageNumber } = props;
  return (
    <div>
      <>
        <Text fontSize={"h3"} fontWeight="bold">
          SCHOOLS
        </Text>
        <Divider orientation="horizontal" mt="4" />
        <Text mt="4">Participating Schools</Text>
        <Divider orientation="horizontal" mt="4" mb="4" />
        <SchoolsTable pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </>
    </div>
  );
};

export default Schools;
