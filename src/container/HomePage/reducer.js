import {
    REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_ERROR
  } from './action';

function Home(state = {
  isFetching: false,
  didInvalidate: false,
  searchString: '',
  tempratures: [],
  error: '',
  city: {}
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        searchString: action.search,
        error: ''
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        tempratures: action.tempratures,
        lastUpdated: action.receivedAt,
        searchString: action.search,
        city: action.city,
        error: ''
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        error: action.error,
        tempratures: [],
        city: {}

      };
    default:
      return state;
  }
}
export default Home;
