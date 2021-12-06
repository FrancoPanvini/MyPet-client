import axios from "axios";

const postMascota = async payload => {
  try {
    let rta = await axios.post("http://localhost:1337/mascotas", payload, { headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    } });
    return rta;
  } catch (error) {
    console.log("An error occurred:", error.response);
  }
};

export default postMascota;
