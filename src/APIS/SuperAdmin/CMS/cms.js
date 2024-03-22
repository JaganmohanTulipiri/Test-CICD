import BASE_URL from "../../index";

export const CMSEndPoints = {
  AddContent: `${BASE_URL}/resources/addResources`,
  GetCMSResources: `${BASE_URL}/resources/getAllResources`,
  AddSubject: `${BASE_URL}/subject/addSubject`,
  GetSubject: `${BASE_URL}/subject/getAllSubject`,
  UpdateSubject: (uuid) => `${BASE_URL}/subject/updateSubjectById/${uuid}`,
  DeleteSubject: (uuid) => `${BASE_URL}/subject/deleteSubject/${uuid}`,
  GetResourceByCategoryStatus: (status) =>
    `${BASE_URL}/resources/getResourceByCategory?status=${status}`,
  GetResourceByCategorySubject: (subject) =>
    `${BASE_URL}/resources/getResourceBySubject?subject=${subject}`,
  GetCMSByTitle: (title) =>
    `${BASE_URL}/resources/getResourceByCategory?title=${title}`,
  deleteCMSContentById: (id) =>
    `${BASE_URL}/resources/deleteResourcesById/${id}`,
  getAssessmentsList: `${BASE_URL}/getAssesmentList`,
  getTestsList: `${BASE_URL}/getTestList`,
  getAudienceList: `${BASE_URL}/getAudienceList`,
  activeInactiveSubject: (uuid) =>
    `${BASE_URL}/subject/activeInactiveSubject/${uuid}`,
  updateCMSContent: (uuid) =>
    `${BASE_URL}/resources/updateResourcesById/${uuid}`,
};
