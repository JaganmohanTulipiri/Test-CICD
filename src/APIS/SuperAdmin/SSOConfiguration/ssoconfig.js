import BASE_URL from "../..";

export const SSOConfigEndPoints = {
    addSSOConfig : `${BASE_URL}/ssoConfigurations/addSsoConfiguration`,
    getSSOConfigData : `${BASE_URL}/ssoConfigurations/getAllSsoConfigurations`,
    SSOConfigByDistrict : (district) => `${BASE_URL}/ssoConfigurations/getSsoConfigurationByFilter?districts=${district}`,
    SSOConfigByAuthorization : (OAuth2) => `${BASE_URL}/ssoConfigurations/getSsoConfigurationByFilter?authorization_protocol=${OAuth2}`,
    deleteSSOConfig : (id) => `${BASE_URL}/ssoConfigurations/deleteSsoConfiguration/${id}`,
    updateSSOConfigByID : (id) => `${BASE_URL}/ssoConfigurations/updateSsoConfiguration/${id}`
}