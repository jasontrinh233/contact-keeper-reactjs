import axios from "axios";

// Add token to all request headers
const setAuthToken = token => {
   if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
   } else {
      delete axios.defaults.headers.common["x-auth-token"];
   }
};

export default setAuthToken;
