import axios from "axios";

const getAuth = async () => {
  axios
    .post("http://localhost:1337/auth/local", {
      identifier: "francopanvini@hotmail.com",
      password: "franco1234",
    })
    .then(response => {
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      localStorage.setItem("token", response.data.jwt);
      return response.data.jwt;
    })
    .catch(error => {
      console.log("An error occurred:", error.response);
    });
};

export default getAuth;
