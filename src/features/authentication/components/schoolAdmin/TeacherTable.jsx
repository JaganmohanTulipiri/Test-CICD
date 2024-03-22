import React, { useEffect, useState } from "react";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getTeachersBySchool } from "./schoolAdminSlice";
import {
  getUserData,
  setManageUser,
  setPreviousPath,
} from "../../../../store/slices/profileSlice";
import TableSkeleton from "../../../../components/GlobalComponents/TableSkeleton";
import ReactPaginate from "react-paginate";

function TeacherTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const params = useParams();

  const schoolUUID = params.schoolId;

  const [teacherId, setTeacherId] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState("1");

  const userRole = useSelector((state) => state?.profile?.selectedRole);

  const getTeachersBySchoolData = useSelector(
    (state) => state?.schoolAdmin?.TeachersBySchool
  );

  const token = useSelector((state) => state?.profile?.token);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  const editTeacherCode = useSelector(
    (state) => state?.schoolAdmin?.EditTeacher?.data
  );

  const responseCode = editTeacherCode?.code;

  const manageSchoolsData = useSelector(
    (state) => state?.schoolAdmin?.SchoolsForAdmin
  );
  const schoolId = manageSchoolsData[0]?.uuid;

  const loading = useSelector((state) => state?.schoolAdmin?.loading);

  const data = [
    {
      id: "1",
      head: "ID",
      name: "GreenLight Elementary",
      code: "5239044",
      status: "active",
      assigned: "Assigned",
      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
    {
      id: "2",
      head: "Login Status",
      name: "GreenLight Elementary",
      code: "5239044",
      status: "active",
      assigned: "Assigned",

      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
    {
      id: "3",
      head: "Assigned to Class",
      name: "GreenLight Elementary",
      code: "5239044",
      status: "active",
      assigned: "Assigned",

      net: "GreenLight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
    },
  ];

  const handlePageNumber = (event) => {
    setPageNumber(event.selected + 1);
  };

  const handleUserIds = (e, userId) => {
    if (e.target.checked) {
      setTeacherId((prevState) => {
        return [...prevState, userId];
      });
    } else {
      let dummyUserIds = teacherId.slice();
      let userIdIndex = dummyUserIds.findIndex((id) => id === userId);
      dummyUserIds.splice(userIdIndex, 1);
      setTeacherId([...dummyUserIds]);

      //   dispatch(getExportClasses({ token, body }));
    }
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setIsAllChecked(true);
      let arr = getTeachersBySchoolData.map((user) => user.uuid);

      setTeacherId(arr);

      let body = {
        class_uuid: arr,
      };
      //   dispatch(getExportClasses({ token, body }));
    } else {
      setIsAllChecked(false);
      setTeacherId([]);
    }
  };

  const clickToNavigate = (teacherId) => {
    dispatch(getUserData({ id: teacherId, token }));
    dispatch(
      setManageUser({
        formTitle: `Edit Teacher`,
        userType: "teacher",
        // previousPath: location.pathname,
      })
    );
    dispatch(setPreviousPath(location.pathname))

    navigate(`/role/${userRole}/edit/teacher/${teacherId}`);
  };

  useEffect(() => {
    dispatch(
      getTeachersBySchool({
        schoolId: schoolUUID,
        token,
        body: { search_text: "", skip: pageNumber, size: "20" },
      })
    );
  }, [pageNumber]);

  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <TableContainer className="mt-[3rem]">
          <Table variant="Striped">
            <Thead>
              <Tr>
                <Th>
                  <Flex gap={5}>
                    <Checkbox
                      isChecked={isAllChecked}
                      onChange={handleCheckAll}
                    />
                    <Text textStyle="h4" color="black">
                      Teacher Name{" "}
                    </Text>
                  </Flex>
                </Th>
                {data?.map((item, index) => {
                  return (
                    <>
                      <Th>
                        <Text textStyle="h4" color="black">
                          {item?.head}
                        </Text>{" "}
                      </Th>
                    </>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {getTeachersBySchoolData?.map((item, index) => {
                return (
                  <>
                    <Tr>
                      <Td className="text-primary cursor-pointer">
                        <Flex gap={5}>
                          <Checkbox
                            isChecked={teacherId.includes(item?.uuid)}
                            onChange={(e) => handleUserIds(e, item.uuid)}
                          />
                          <Text onClick={() => clickToNavigate(item.uuid)}>
                            {" "}
                            {item?.first_name}
                          </Text>
                        </Flex>
                      </Td>
                      <Td>{item?.teacher_id}</Td>
                      <Td>{item?.login_status ? "Active" : "Inactive"}</Td>
                      <Td className="text-primary  underline">Assigned</Td>
                    </Tr>
                  </>
                );
              })}
              {!getTeachersBySchoolData?.length && (
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
          previousLabel="< Previous"
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
}

export default TeacherTable;
