export const SET_EVENTS = "SET_EVENTS";

export const setEvents = (data) => {
  return {
    type: SET_EVENTS,
    payload: data,
  };
};
