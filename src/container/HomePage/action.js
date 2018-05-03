import api from '../../lib/api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const requestPosts = () => ({
  type: REQUEST_POSTS
});
const API_KEY = '060c011784ac004d3668a0696a4068c5';
export const receivePosts = (json, search) => (
  {
    type: RECEIVE_POSTS,
    tempratures: json.data.list || [],
    city: json.data.city || {},
    receivedAt: Date.now(),
    search,
    error: ''
  });
export const receivePostsError = error => (
  {
    type: RECEIVE_ERROR,
    tempratures: [],
    city: {},
    receivedAt: Date.now(),
    error
  });

export const fetchPosts = search => (
  dispatch => api(`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&units=metric&q=${search}`)
    .then(
      json =>
        dispatch(receivePosts(json, search)),
    ).catch(error =>
      dispatch(receivePostsError(error.response))
    )
);

const shouldFetchPosts = () => {
  const posts = false;
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = search => (
  (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      dispatch(fetchPosts(search));
    }
  }
);
