import BASE_URL from "../../index";

export const districtsEndPoints = {
  AddDistricts: `${BASE_URL}/districts/addDistricts`,
  GetDistricts: `${BASE_URL}/districts/getDistricts`,
  UpdateDistricts: (uuid) => `${BASE_URL}/districts/updateDistrict/${uuid}`,
  DeleteDistrict: (uuid) => `${BASE_URL}/districts/deleteDistrict/${uuid}`,
  addSchool: `${BASE_URL}/schools/addSchool`,
  createAdminUser: `${BASE_URL}/users/addUsers`,
  editTeacherInfo: (uuid) => `${BASE_URL}/users/editTeacher/${uuid}`,
  getSchools: `${BASE_URL}/schools/getSchoolsForAdmin`,
  getTeachers: (uuid) => `${BASE_URL}/users/getTeachersBySchool/${uuid}`,
  // addSchoolToDistrict:`${BASE_URL}/schools/addSchool`
  // getAdminByDistrict: (uuid) =>
  //   `${BASE_URL}/districts/getDistrictWithDistrictAdmin/${uuid}`,
  getDistrictAdmin: (uuid) =>
    `${BASE_URL}/districts/getDistrictWithDistrictAdmin/${uuid}`,
  updateAdminDetails: (uuid) => `${BASE_URL}/users/updateUsers/${uuid}`,
  getSchoolsByDistrictId: (uuid) =>
    `${BASE_URL}/districts/getSchoolsBasedOnDistrictId/${uuid}`,
  getDistrictByFilter: (
    district_sso_id,
    district_name,
    zipcode,
    district_identifier
  ) => {
    console.log(district_sso_id,district_name, zipcode,district_identifier)
    var URL = `${BASE_URL}/districts/getDistricts?`;
    if (district_sso_id !== "" && district_sso_id !== undefined) {
      URL += `district_sso_id=${district_sso_id}`;
    } else if (district_name !== "" && district_name !== undefined) {
      URL += `district_name=${district_name}`;
    } else if (zipcode !== "" && zipcode !== undefined) {
      URL += `zipcode=${zipcode}`;
    } else if (district_identifier !== "" && district_identifier !== undefined) {
      URL += `district_identifier=${district_identifier}`;
    }
    console.log("URL in getDIstrictsByFilter", URL);
    return URL;
  },
  updateSchool: (uuid) => `${BASE_URL}/schools/updateSchool/${uuid}`,
  assignAdminToDistrict: (uuid) =>
    `${BASE_URL}/districts/assignAdminToDistrict/${uuid}`,
  deleteAdminUser: (uuid) =>
    `${BASE_URL}/districts/removeAdminFromDistrict/${uuid}`,
  getSchoolAdminsBySchoolId: (uuid) =>
    `${BASE_URL}/schools/getSchoolWithSchoolAdmin/${uuid}`,
  getSchoolsAndTeacherofDistrict : (uuid) => `${BASE_URL}/districts/getSchoolsAndTeacherOfDistrict/${uuid}`,
  getUsersDataById: (uuid) => `${BASE_URL}/users/getUserById/${uuid}`,
  removeSchool:(uuid) => `${BASE_URL}/schools/deleteSchool/${uuid}`
};
