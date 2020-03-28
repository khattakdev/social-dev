import {LOAD_USER_DATA, LOGIN_USER, LOGOUT_USER} from "../actions/user";

const intialState = {
  isAuth: false,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
  image: null,
  posts: 0,
  logs: [],
  dob: null,
  likedPosts: [],
  likedProfiles: [],
  created: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case LOAD_USER_DATA: {
      const user = action.payload.user;
      return {
        ...state,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        image: user.image,
        logs: user.logs,
        likedProfiles: user.likedProfiles,
        likedPosts: user.likedPosts,
        created: user.created,
        dob: user.dob,
        posts: user.totalPosts,
        isAuth: true
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        gender: null,
        image: null,
        posts: 0,
        logs: [],
        dob: null,
        likedPosts: [],
        likedProfiles: [],
        created: null
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
