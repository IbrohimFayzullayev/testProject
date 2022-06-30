import axios from "axios";

const getData = async (path) => {
  const data = await axios
    .request({
      method: "GET",
      url: `http://localhost:3001/api/${path}`,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return data;
};
export default getData;
