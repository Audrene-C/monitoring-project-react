import { CURRENT_ALERT } from "../actions/type";

const initialState = {currentAlert: null};

export default function currentAlertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CURRENT_ALERT:
      return { currentAlert: payload };

    default:
      return state;
  }
}