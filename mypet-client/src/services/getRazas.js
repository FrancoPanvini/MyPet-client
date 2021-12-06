import axios from "axios";

const getRazas = async () => {
  try {
    let rta = await axios.get("http://localhost:1337/razas");
    rta = rta.data.map(raza => {
      const { id, nombre } = raza;
      return { id, nombre };
    });
    return rta;
  } catch (error) {
    console.log("An error occurred:", error.response);
  }
};

export default getRazas;
