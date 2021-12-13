import {
  GET_CHUCK_REQUEST,
  GET_CHUCK_SUCCESS,
  GET_CHUCK_ERROR,
} from "./constants";

const initialState = {
  chuckUrl: undefined,
  loading: true,
  error: false,
};

export const chuckReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHUCK_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CHUCK_SUCCESS: {
      return {
        ...state,
        loading: false,
        chuckUrl: action.payload,
      };
    }
    case GET_CHUCK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
