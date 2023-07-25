import axios from "axios";

// const url = http://localhost:8000;

export const authenticatesignup = async (data) => {
  try {
    // console.log(data)
    await axios.post(`http://localhost:8000/signup`, data);
  } catch (err) {
    console.log("error in signup api", err);
  }
};
