import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostData = async () => {
    console.log("get post data call",BASE_URL);
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
      } catch (error) {
        return error
      }
}