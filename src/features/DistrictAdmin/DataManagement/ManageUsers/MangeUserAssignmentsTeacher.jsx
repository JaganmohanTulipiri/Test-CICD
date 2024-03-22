import { Box, Divider, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import addCircleIcon from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import AddStudentModal from "../ManageClasses/AddStudentModal";
import AddClassToStudentModal from "./AddClassToStudentModal";
import { useDispatch, useSelector } from "react-redux";
import ManageUsersAssignmentTextIcon from "../../../../ManageUsersGlobal/ManageUsersAssignmentTextIcon";
import TeacherAddSchoolModal from "../../../../ManageUsersGlobal/ManageUsersAddModals/TeacherAddSchoolModal";
import AddedTeachersList from "../../../../ManageUsersGlobal/ManageUsersAssignmentListFolder/AddedTeachersList";
import { setAddTeacherModalButtonClicked } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const ManageUserAssignments = () => {
  const [addClassToStudent, setAddClassToStudent] = useState(false);

  const [addUserPopUp, setAddUserPopUp] = useState(false);

  const[schools,setSchools]=useState([])

  const dispatch = useDispatch()

  const manageUsersSelectedDropdownText = useSelector(
    (state) => state?.schoolAdmin?.manageUsersSelectedDropdownText
  );

  const addTeacherModalButtonClicked = useSelector(
    (state) => state?.schoolAdmin?.addTeacherModalButtonClicked
  );



  console.log(addTeacherModalButtonClicked, "addTeacherModalButtonClicked")



  const schoolsListItems = useSelector(
    (state) => state?.schoolAdmin?.schoolsListItemsToShow
  );

  const classesListItems = useSelector(
    (state) => state?.schoolAdmin?.classesListItemsToShow
  );


console.log("schoolsListItems==================",schoolsListItems)



  const textObj = {
    student: <ManageUsersAssignmentTextIcon text={"Add Class"} />,
    teacher: <ManageUsersAssignmentTextIcon text={"Add School/Class"} />,
    schoolAdmin: <ManageUsersAssignmentTextIcon text={"Add School"} />,
  };

  return (
    <>
      <HStack mt="3">
        <Text>
          {manageUsersSelectedDropdownText &&
            manageUsersSelectedDropdownText?.toUpperCase()}
        </Text>
        <Spacer />
        <HStack cursor="pointer" onClick={() => setAddClassToStudent(true)}>
          {/* <Text
						textStyle="h3"
						as="span"
						textDecoration="underline"
						color="black-2"
					>
						addAssignment
					</Text>
					<Box width="6" height="6">
						<img w="full" h="full" src={addCircleIcon} />
					</Box> */}
          {textObj[manageUsersSelectedDropdownText] !== undefined &&
            textObj[manageUsersSelectedDropdownText]}
        </HStack>
      </HStack>
      <Divider />

   
   
      {manageUsersSelectedDropdownText !== undefined &&
        manageUsersSelectedDropdownText === "teacher" && (
          <TeacherAddSchoolModal
          addClassToStudent={addClassToStudent}
          setAddClassToStudent={setAddClassToStudent}
          />
        )}

        <p>Hello worlddddddddddddddd</p>

      {classesListItems !== undefined && classesListItems?.length > 0 ? <AddedTeachersList /> : <p>No Data </p>}

      {/* <AddClassToStudentModal
				addClassToStudent={addClassToStudent}
				setAddClassToStudent={setAddClassToStudent}
			/> */}
    </>
  );
};

export default ManageUserAssignments;
