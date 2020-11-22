import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-9f466.cloudfunctions.net/api",
});

export default instance;

// - For local
// "http://localhost:5001/clone-9f466/us-central1/api"
