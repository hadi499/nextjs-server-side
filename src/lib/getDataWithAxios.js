import axios from "axios";

export default async function getDataWithAxios() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  if (!res.data) {
    throw new Error("Failed to fetch data");
  }
  return res.data;
}
