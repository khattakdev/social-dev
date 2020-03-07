import { LOGIN_USER } from "../actions/user";

const intialState = {
  isAuth: false,
  email: "akkhattak65@gmail.com",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  logs: [],
  dob: ""
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        email: action.payload.email,
        isAuth: true
      };
    }
    case "LOGIN_USER2": {
      return {
        ...state,
        email: "akkhattak65@gmail.com"
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
