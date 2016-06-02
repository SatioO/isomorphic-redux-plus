import { LOCATION_CHANGE } from 'react-router-redux';


export const selectPageStatus = (state) => state.pageStatus.status;

const defaultState = { status: null, initialLoad: true };

const computeStatus = (status) => {
  if (!status) {
    return 0;
  }
  if (String(status).startsWith('5')) {
    return 503;
  }
  return 404;
};

export default (state = defaultState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    if (state.initialLoad) {
      return { ...state, initialLoad: false };
    }
    return { ...state, status: null };
  }
  if (action.role === 'primary' && action.error) {
    return { ...state, status: computeStatus(action.error.status) };
  }

  return state;
};