import {
  validateAadhar,
  validateEmail,
  validatePAN,
  validatePhoneNumber,
  validateString2,
  validateRequired,
  validateUserName,
  validateString,
  validateNumber,
  validateDate,
} from "./FieldValidation";

let VALIDATION_OBJ = {
  event_name: (value, errors) => {
    if (!value) {
      errors["event_name"] = " Event Name is Required";
    } else if (value && !validateString2(value)) {
      errors["event_name"] = "Please enter valid event name";
    }
  },
  challenge_name: (value, errors) => {
    if (!value) {
      errors["challenge_name"] = "Challenge name is Required";
    } else if (value && !validateString2(value)) {
      errors["challenge_name"] = "Please enter valid Challenge name";
    }
  },
  title: (value, errors) => {
    if (!value) {
      errors["title"] = " Mandate Name  is Required";
    } else if (value && !validateString2(value)) {
      errors["title"] = "Please enter valid Mandate name";
    }
  },
  schools: (value, errors) => {
    if (!value?.length) {
      errors["schools"] = "Please Select Schools";
    }
  },
  classes: (value, errors) => {
    if (!value?.length) {
      errors["classes"] = "Please Select Classes";
    }
  },
  tests: (value, errors) => {
    if (!value?.length) {
      errors["tests"] = "Please Select TestItems";
    }
  },
  required: (value, errors) => {
    if (!value?.length) {
      errors["required"] = "Please Select Required value";
    }
  },
  start_date: (value, errors) => {
    if (!value) {
      errors["start_date"] = "Please Select Start Date";
    } else if (value && !validateDate(value)) {
      errors["start_date"] = "Please enter valid Start Date";
    }
  },
  end_date: (value, errors) => {
    if (!value) {
      errors["end_date"] = "Please Select End Date";
    } else if (value && !validateDate(value)) {
      errors["end_date"] = "Please enter valid End Date";
    }
  },
  event_type: (value, errors) => {
    if (!value) {
      errors["event_type"] = "Please Select the Event Type";
    }
  },
  challenge_type: (value, errors) => {
    if (!value) {
      errors["challenge_type"] = "Please Select the Challenge Type";
    }
  },
  event_struct: (value, errors) => {
    if (!value.length) {
      errors["event_struct"] = "Please Select  Test Items  to Create Event";
    }
  },
  description: (value, errors) => {
    if (!value) {
      errors["description"] = "Please Enter the Description";
    }
  },
  daily_goal: (value, errors) => {
    if (!value) {
      errors["daily_goal"] = "Please Enter the Daily Goal";
    } else if (value && !validateNumber(value)) {
      errors["daily_goal"] = "Please enter valid Daily Goal";
    }
  },
  teacher_id: (value, errors) => {
    if (!value) {
      errors["teacher_id"] = "Teacher ID is Required";
    }
  },
  first_name: (value, errors) => {
    if (!value) {
      errors["first_name"] = " First Name is Required";
    } else if (value && !validateString(value)) {
      errors["first_name"] = "Please enter valid First name";
    }
  },
  last_name: (value, errors) => {
    if (!value) {
      errors["last_name"] = " Last Name is Required";
    } else if (value && !validateString(value)) {
      errors["last_name"] = "Please enter valid Last name";
    }
  },
  middle_initial: (value, errors) => {
    if (value && !validateString(value)) {
      errors["middle_initial"] = "Please enter valid middle name";
    }
  },
  user_name: (value, errors) => {
    if (!value) {
      errors["user_name"] = " User Name is Required";
    } else if (value && !validateUserName(value)) {
      errors["user_name"] = "Please enter valid User name";
    }
  },
  email: (value, errors) => {
    if (!value) {
      errors["email"] = " Email Address is Required";
    } else if (value && !validateEmail(value)) {
      errors["email"] = "Please enter valid Email Address";
    }
  },
  email_1: (value, errors) => {
    if (value && !validateEmail(value)) {
      errors["email_1"] = "Please enter valid Email Address";
    }
  },
  email_2: (value, errors) => {
    if (value && !validateEmail(value)) {
      errors["email_2"] = "Please enter valid Email Address";
    }
  },
  phone: (value, errors) => {
    if (value && !validatePhoneNumber(value)) {
      errors["phone"] = "Please enter valid Phone Number";
    }
  },
  password: (value, errors) => {
    if (!value) {
      errors["password"] = "Please enter Password";
    }
  },
  // re_enter_password: (value, errors) => {
  // 	if (!value) {
  // 		errors["re_enter_password"] = "Please enter re_enter_password";
  // 	}
  // },
  login_status: (value, errors) => {
    if (!value) {
      errors["login_status"] = "Please select Status";
    }
  },

  district_administrator_id: (value, errors) => {
    if (!value) {
      errors["schoolAdmin_id"] = "District Admin ID is Required";
    }
  },

  student_id: (value, errors) => {
    if (!value) {
      errors["student_id"] = "Student ID is Required";
    }
  },

  grade: (value, errors) => {
    if (!value) {
      errors["grade"] = "Grade is Required";
    }
  },

  date_of_birth: (value, errors) => {
    if (!value) {
      errors["date_of_birth"] = "Date of Birth is Required";
    }
  },

  parent_email_1: (value, errors) => {
    if (value && !validateEmail(value)) {
      errors["parent_email_1"] = "Please enter valid Email Address";
    }
  },
  parent_email_2: (value, errors) => {
    if (value && !validateEmail(value)) {
      errors["parent_email_2"] = "Please enter valid Email Address";
    }
  },

  gender: (value, errors) => {
    if (!value) {
      errors["gender"] = "Gender is Required";
    }
  },

  ethnicity: (value, errors) => {
    if (!value) {
      errors["ethnicity"] = "ethnicity is Required";
    }
  },

  class_name: (value, errors) => {
    if (!value) {
      errors["class_name"] = "class_name is Required";
    }
  },

  school_name: (value, errors) => {
    if (!value) {
      errors["school_name"] = "School Name is Required";
    }
  },

  status: (value, errors) => {
    if (!value) {
      errors["status"] = "status is Required";
    }
  },

  role: (value, errors) => {
    if (!value) {
      errors["role"] = "role is Required";
    }
  },
  category: (value, errors) => {
    if (!value) {
      errors["category"] = "Category is Required";
    }
  },
  subject: (value, errors) => {
    if (!value) {
      errors["subject"] = "Subject is Required";
    }
  },
  primary_audience: (value, errors) => {
    if (!value) {
      errors["primary_audience"] = "Primary Audience is Required";
    }
  },
  assessment_name: (value, errors) => {
    if (!value) {
      errors["assessment_name"] = "Assessment is Required";
    }
  },
  test_name: (value, errors) => {
    if (!value) {
      errors["test_name"] = "Test Name is Required";
    }
  },
  publish_date: (value, errors) => {
    if (!value) {
      errors["publish_date"] = "Publish Date is Required";
    }
  },
  expired_date: (value, errors) => {
    if (!value) {
      errors["expired_date"] = "Expired Date is Required";
    }
  },
  media_type: (value, errors) => {
    if (!value) {
      errors["media_type"] = "Media Type is Required";
    }
  },
  file_url: (value, errors) => {
    if (!value) {
      errors["file_url"] = "File is Required";
    }
  },
  district_name: (value, errors) => {
    if (!value) {
      errors["district_name"] = "District Name is Required";
    }
  },
  local_identifier: (value, errors) => {
    if (!value) {
      errors["local_identifier"] = "Local Identifier is Required";
    }
  },
  state: (value, errors) => {
    if (!value) {
      errors["state"] = "State is Required";
    }
  },
  zipcode: (value, errors) => {
    if (!value) {
      errors["zipcode"] = "Zipcode is Required";
    }
  },

  district_code: (value, errors) => {
    if (!value) {
      errors["district_code"] = "District Code is Required";
    }
  },

  disclaimerAccepted: (value, errors) => {
    if (!value) {
      errors["disclaimerAccepted"] = "Required*";
    }
  },
  funder_name: (value, errors) => {
    if (!value) {
      errors["funder_name"] = "Funder Name is Required*";
    }
  },
  school_limit: (value, errors) => {
    if (!value) {
      errors["school_limit"] = "School Limit is Required*";
    }
  },
};

export const validateFormData = (data) => {
  console.log(data, "iam data");

  let errors = {};

  Object.keys(data).forEach((key) => {
    console.log(key, "iam key");

    VALIDATION_OBJ[key](data[key], errors);
  });

  return errors;
};
