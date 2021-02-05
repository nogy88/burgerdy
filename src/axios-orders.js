import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-c5016.firebaseio.com/",
});

export default instance;
