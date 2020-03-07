export const SNACBKAR_SHOW = "SNACBKAR_SHOW";
export const SNACBKAR_HIDE = "SNACBKAR_HIDE";
export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

export const snackbarShow = (snackbarType, message) => dispatch => {
  dispatch({
    type: SNACBKAR_SHOW,
    snackbar: true,
    snackbarType,
    message
  });
  setTimeout(() => {
    dispatch(snackbarHide());
  }, 3000);
};

export const snackbarHide = () => dispatch => {
  dispatch({
    type: SNACBKAR_HIDE,
    snackbar: false,
    message: null
  });
};

export const loadingStart = () => dispatch => {
  dispatch({
    type: LOADING_START,
    loading: true
  });
};

export const loadingEnd = () => dispatch => {
  dispatch({
    type: LOADING_END,
    loading: false
  });
};
