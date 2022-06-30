import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default Api;