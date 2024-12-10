import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  try {
    const res = await axios(reqConfig);
    return res; // Successfully return the response
  } catch (err) {
    // Log the error with more detailed info
    console.error("API Error:", err.response ? err.response.data : err.message);
    // You could also log err.response.status to check status code
    return { error: true, message: err.response ? err.response.data : err.message };
  }
};

export default commonAPI;
