async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
}

const Gateway = {
    baseUrl : "https://cms.globalconnect.hr",
    baseApiUrl : "https://cms.globalconnect.hr/api",
    async getProjectPictures(id) {
        return fetchData(`${Gateway.baseApiUrl}/project/${id}/pictures`);
    },

    async getProjectRichText(id) {
        return fetchData(`${Gateway.baseApiUrl}/project/${id}/richtext`);
    },

    async getFirstPicturesList() {
        return fetchData(`${Gateway.baseApiUrl}/project/first-images`);
    },

    async getAllProjectsShortInfo() {
        return fetchData(`${Gateway.baseApiUrl}/project/shortInfo`);
    },

    async getAllServicesShortInfo() {
        return fetchData(`${Gateway.baseApiUrl}/service/shortInfo`);
    },

    async getServicePictures(id) {
        return fetchData(`${Gateway.baseApiUrl}/service/${id}/pictures`);
    },

    async getServiceRichText(id) {
        return fetchData(`${Gateway.baseApiUrl}/service/${id}/richtext`);
    },

    async getEmployes() {
        return fetchData(`${Gateway.baseApiUrl}/employee`);
    },

    async getReferences() {
        return fetchData(`${Gateway.baseApiUrl}/reference`);
    }
};

export default Gateway;
