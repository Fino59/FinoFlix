const URL_BACKEND_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://finoflix.herokuapp.com';

export default {
  URL_BACKEND_API,
};
