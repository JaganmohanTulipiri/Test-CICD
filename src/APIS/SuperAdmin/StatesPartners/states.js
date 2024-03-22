import BASE_URL from "../..";

export const StatesPartnersEndPoints = {
  addState: `${BASE_URL}/states/addStates`,
  updateState: (uuid) => `${BASE_URL}/states/updateState/${uuid}`,
  getStates: `${BASE_URL}/states/getAllStates`,
  deleteState : (uuid) => `${BASE_URL}/states/deleteStateById/${uuid}`,
  getStateByFilterName : (name) => `${BASE_URL}/states/getStateByFilter?state_name=${name}`,
  getStateByFilterType : (type) => `${BASE_URL}/states/getStateByFilter?type=${type}`,
  getStateByFilterLicense : (license_status) => `${BASE_URL}/states/getStateByFilter?license_status=${license_status}`,
};
