import axios from "axios";
import { teacherEndpoints as api } from "./teacher";

export const getSchools = async (data) => {
  const config = {
    method: "get",
    url: api.schools(data.userId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getClasses = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.classes(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const getClassesByEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "get",
    url: api.classesByEvent(data?.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getEventTestList = async (token) => {
  const config = {
    method: "get",
    url: api.eventTestList(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getValidatedList = async (data) => {
  console.log(data, "iam event");
  const config = {
    method: "get",
    url: api.validatedList(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "fro valideted list");
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPendingList = async (data) => {
  console.log(data, "from pedning");
  const config = {
    method: "get",
    url: api.pendingList(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "for pending list");

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getRecentTestEventsList = async (data) => {
  const config = {
    method: "post",
    url: api.recentEventTestList(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.classes,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRecommondedEventTestList = async (data) => {
  const config = {
    method: "post",
    url: api.recommondedEventTestList(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.classes,
  };

  console.log(config, "in api request==========> recommend");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMandateEventTestList = async (data) => {
  const config = {
    method: "post",
    url: api.mandateEventTestList(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.schools,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const postEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.createEvent(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.payload,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    // alert(error.response.data.message);
    throw error;
  }
};

export const agPostEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.agCreateEvent(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.payload,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");

    throw error;
  }
};

export const alPostEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.alCreateEvent(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.payload,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    // alert(error.response.data.message);

    throw error;
  }
};

export const deleteEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.deleteEvent(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request for delete==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const agDeleteEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.agDeleteEvent(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request for delete==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const alDeleteEvent = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.alDeleteEvent(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request for delete==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getEventsList = async (data) => {
  console.log(data, "iam data from api callkkkkkkkkkkkkkkkkkkkkkk");

  console.log(data.data, "data in service=======>");

  const config = {
    method: "get",
    url: api.eventsList(data.data),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    // data: data.body,
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const getFgEventsList = async (data) => {
  console.log(data, "iam data from api callkkkkkkkkkkkkkkkkkkkkkk");

  // console.log(finalObj, "finalObj");

  const config = {
    method: "get",
    url: api.fgEventsList(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    // data: data.body,
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getEventById = async (data) => {
  const config = {
    method: "get",
    url: api.eventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getAgEventById = async (data) => {
  const config = {
    method: "get",
    url: api.agEventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getAlEventById = async (data) => {
  const config = {
    method: "get",
    url: api.alEventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};
export const updateEventById = async (data) => {
  const config = {
    method: "post",
    url: api.updateEventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.payload,
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const updateAlEventById = async (data) => {
  const config = {
    method: "post",
    url: api.updateAlEventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.payload,
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};
export const updateAgEventById = async (data) => {
  const config = {
    method: "post",
    url: api.updateAgEventById(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.payload,
  };
  console.log(config, "in api request==========>");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};
export const getEventStudentList = async (data) => {
  console.log(data, "from service");
  const config = {
    method: "post",
    url: api.eventStudentList(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    const response = await axios(config);

    console.log(response, "response eventlist");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getApproveStudentList = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.approveStudentList(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    console.log(config, "inside try");

    const response = await axios(config);

    console.log(response, "approve list");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const fgStoreStudentData = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.fgStoreStudentData(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    const response = await axios(config);
    console.log(response, "approve list");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};
export const agStoreStudentData = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.agStoreStudentData(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    const response = await axios(config);
    console.log(response, "approve list");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const alStoreStudentData = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.alStoreStudentData(data.token),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    const response = await axios(config);
    console.log(response, "approve list");
    // alert(response.data.message);
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};
export const getAgStudentResultById = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.agStudentResultById(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    const response = await axios(config);
    console.log(response, "approve list");
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};
export const getAlStudentResultById = async (data) => {
  console.log(data, "appve data");
  const config = {
    method: "post",
    url: api.alStudentResultById(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "iam config data");
  try {
    const response = await axios(config);
    console.log(response, "approve list");
    // alert(response.data.message);
    return response;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const getManageClasses = async (data) => {
  console.log(data, "from 660");

  const config = {
    method: "post",
    url: api.manageClasses(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    return error;
  }
};

export const getFilteredManageClasses = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.filterManageClasses(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const getStudentsByClass = async (data) => {
  const config = {
    method: "get",
    url: api.studentsByClass(data.classId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async (data) => {
  console.log(data, "iam data from api call");

  const config = {
    method: "post",
    url: api.getAllUsers(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};
export const getActivityGramEventsList = async (data) => {
  const config = {
    method: "get",
    url: api.activityGramEventList(data?.data),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error, "activity gram events list from service");
    return error;
  }
};

export const getActivityGramEventStudentList = async (data) => {
  console.log(data, "hfbhdb");
  const config = {
    method: "get",
    url: api.activityGramEventStudentList(data.eventId),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error, "ag student list  error");
    throw error;
  }
};

export const getActivityLogEventList = async (data) => {
  const config = {
    method: "get",
    url: api.activityLogEventsList(data.data),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    // data: finalObj,
  };

  try {
    const response = await axios(config);
    console.log(response, "from servies log events");
    return response;
  } catch (error) {
    console.log(error, "iam error from log chanllenges");
    throw error;
  }
};

export const getActivityLogClassList = async (data) => {
  const config = {
    method: "get",
    url: api.activityLogClassList(data.challengeId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response, "from service log class list");
    return response;
  } catch (error) {
    console.log(error, "from log classlist from  service ");
  }
};

export const getActivityLogStudentsList = async (data) => {
  const config = {
    method: "get",
    url: api.activityLogEventStudentList(data.challengeId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response, "service data list");
    return response;
  } catch (error) {
    console.log(error, "from service error log student log all");
  }
};

export const getActivityLogFilterByStudent = async (data) => {
  console.log(data, "from serviceeeeeeeeeeee filter");

  const config = {
    method: "post",
    url: api.activityLogFilterByStudent(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    console.log(response, "filter data list");
    return response;
  } catch (error) {
    console.log(error, "from filter error log student log ");
  }
};
