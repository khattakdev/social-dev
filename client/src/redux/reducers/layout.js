import {
  SNACBKAR_SHOW,
  SNACBKAR_HIDE,
  LOADING_START,
  LOADING_END
} from "../actions/layout";

const initialState = {
  snackbar: false,
  snackbarType: null,
  message: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACBKAR_SHOW:
    case SNACBKAR_HIDE:
      return {
        ...state,
        snackbar: action.snackbar,
        message: action.message,
        snackbarType: action.snackbarType
      };
    case LOADING_START:
    case LOADING_END:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

export default reducer;
