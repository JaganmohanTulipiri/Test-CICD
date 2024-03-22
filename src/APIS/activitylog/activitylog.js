import BASE_URL from "..";

export const activityLogEndPoints = {
	activityLog: (uuid) => `${BASE_URL}/challenges/getChallengesForStudent/${uuid}`,
	activityGram: `${BASE_URL}/activityGram/getEvents`,
};
