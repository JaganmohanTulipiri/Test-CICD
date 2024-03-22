import BASE_URL from "../../index";


export const LiencesEndPoints = {
    fundersList :`${BASE_URL}/licenses/funderslist`,
    createLicense:`${BASE_URL}/licenses`,
    getLicenses:`${BASE_URL}/licenses/getLicense`,
    getLicenseById: (uuid) => `${BASE_URL}/licenses/getLicenseById/${uuid}`,
    updateLicenseById: `${BASE_URL}/licenses/updatelicenseById`,
    getLicensedSchools:(uuid) => `${BASE_URL}/licenses/licensedschools/${uuid}`,
    deleteLicense:(uuid) => `${BASE_URL}/licenses/deleteLicense/${uuid}`,
    deleteSchoolLicense : (uuid) => `${BASE_URL}/licenses/deleteschoolLicense/${uuid}`, 
    schoolsToAddLicense : (uuid) => `${BASE_URL}/licenses/schools/${uuid}`,
    addLicenseToSchool : `${BASE_URL}/licenses/addlicensetoschool`, 
    getLicenseHistoryById:(uuid) => `${BASE_URL}/licenses/licensehistory/${uuid}`
}