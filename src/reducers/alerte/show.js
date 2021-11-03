import { combineReducers } from "redux";

export function error(state = null, action) {
  switch (action.type) {
    case "ALERTE_SHOW_ERROR":
      return action.error;

    case "ALERTE_SHOW_MERCURE_DELETED":
      return `${action.retrieved["@id"]} has been deleted by another user.`;

    case "ALERTE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case "ALERTE_SHOW_LOADING":
      return action.loading;

    case "ALERTE_SHOW_RESET":
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case "ALERTE_SHOW_SUCCESS":
    case "ALERTE_SHOW_MERCURE_MESSAGE":
      return action.retrieved;

    case "ALERTE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case "ALERTE_SHOW_MERCURE_OPEN":
      return action.eventSource;

    case "ALERTE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
