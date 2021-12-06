import React, { useEffect } from "react";

//? COMPONENTS
import FormAlta from "./components/FormAlta";

//? SERVICES
import getAuth from "./services/getAuth";

function App() {
  useEffect(() => {
    getAuth();
  }, []);

  return <FormAlta />;
}

export default App;
