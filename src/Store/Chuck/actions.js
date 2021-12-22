import { CHUCK_URL } from "../../API/index";
import {
  GET_CHUCK_REQUEST,
  GET_CHUCK_SUCCESS,
  GET_CHUCK_ERROR,
} from "./constants";

export const getChuckRequestAction = () => ({
  type: GET_CHUCK_REQUEST,
});

export const getChuckSuccessAction = (chuckUrl) => ({
  type: GET_CHUCK_SUCCESS,
  payload: chuckUrl,
});

export const getChuckErrorAction = () => ({
  type: GET_CHUCK_ERROR,
});

export const getChuckActionWithThunk = () => async (dispatch) => {
  dispatch(getChuckRequestAction());

  try {
    const response = await fetch(CHUCK_URL);

    if (!response.ok) {
      throw new Error(`error getting data with status`);
    }

    const result = await response.json();

    dispatch(getChuckSuccessAction(result));
  } catch (error) {
    dispatch(getChuckErrorAction());
  }
};
