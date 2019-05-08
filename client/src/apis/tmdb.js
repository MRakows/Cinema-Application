import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7cf378841a0fdaf1e6f5f4743fe5406f",
    language: "en-US"
  }
});
