export const ManageUsersData = {
  title: "MANAGE USERS",


  



  userDetails: [
    {
      id: 1,
      placeholder: "Select",
      lable: "UserType",
      name: "user_type",
      type: "select",
      options: ["student", "teacher", "schoolAdmin", "districtAdmin", "parent"],
    },
    {
      id: 2,
      placeholder: "Select",
      lable: "school",
      name: "schools",

      type: "select",
      options: [],
    },
    {
      id: 3,
      placeholder: "All",
      lable: "Login Status",
      name: "login_status",

      type: "select",
      options: ["Active", "Inactive"],
    },
    {
      id: 4,
      placeholder: "date",
      lable: "Birth Date",
      name: "date_of_birth",
      type: "date",
    },
    {
      id: 5,
      placeholder: "All",
      lable: "Assignment Status",
      name: "assignment_status",
      type: "select",
      options: ["Assigned", "Un Assigned"],
    },
    {
      id: 6,
      placeholder: "All",
      lable: "Grades",
      name: "grade",
      type: "select",
      options: ["kindergarten",
      "First Grade",
      "Second Grade",
      "Third Grade",
      "Fourth Grade",
      "Fifth Grade",
      "Sixth Grade",
      "Seventh Grade",
      "Eighth Grade",
      "Ninth Grade",
      "Tenth Grade",
      "Eleventh Grade",
      "Twelth Grade",
      "Adult"],
    },
  ],
  tableName: "STUDENT",
  searchPlaceholder: "Search by Alphabet, Names or User ID",
  actionPlaceholder: "Action",
  actionOptions: ["Assign", "Unassign", "Activate Login", "Deactivate Login"],
  addStudent: "Add Student",
  exportUsers: "Export Users",
  tableColumns: [
    "Student Name",
    "Student ID",
    "Birth Date",
    "Grade",
    "Sex Assigned at Birth",
    "Login Status",
    "Assigned to Class",
  ],
  rows: [
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
    {
      rowData: [
        "AStudent1, John",
        "AS00001",
        "01/15/2007",
        "10",
        "M",
        "Active",
        "Assigned",
      ],
    },
  ],
};

export const addUserData = {
  title: "Add Student",
  buttonsList: ["BASIC USER INFORMATION", "MANAGE USER'S ASSIGNMENTS"],
  userDetails: [
    {
      lable: "Student ID:",
      inputType: "text",
    },
    {
      lable: "Username*",
      inputType: "text",
    },
    {
      lable: "Password*",
      inputType: "text",
    },
    {
      lable: "Re-enter Password*",
      inputType: "text",
    },
    {
      lable: "First Name*",
      inputType: "text",
    },
    {
      lable: "Last Name*",
      inputType: "text",
    },
    {
      lable: "Middle Initial",
      inputType: "text",
    },
    {
      lable: "Sex Assigned at Birth",
      inputType: "select",
      options: ["Male", "Female"],
    },
    {
      lable: "Grade *",
      inputType: "select",

      options: ["Kindergarten", "Second Grade", "Third Grade", "Fourth Grade"],
    },
    {
      lable: "Birth Date*(dd/mm/yyyy)",
      inputType: "date",
    },
    {
      lable: "Race*",
      inputType: "select",
      options: ["1", "2", "3", "4"],
    },
    {
      lable: "Ethnicity",
      inputType: "select",
      options: ["1", "2", "3", "4"],
    },
    {
      lable: "student Email Address",
      inputType: "text",
    },
    {
      lable: "Parent Email Address1",
      inputType: "text",
    },
    {
      lable: "Parent Email Address2",
      inputType: "text",
    },
    {
      lable: "Phone",
      inputType: "text",
    },
    {
      lable: "Print Body Composition",

      inputType: "checkbox",
    },
    {
      lable: "Print Reports in Spanish",

      inputType: "checkbox",
    },
    {
      lable: "Permanently Exempt",

      inputType: "checkbox",
    },
    {
      groupLable: "Login Status",

      inputType: "radio",
      group: ["Active", "Inactive"],
    },
  ],
};
