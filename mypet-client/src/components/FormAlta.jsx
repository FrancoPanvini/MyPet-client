import React, { useState, useEffect } from "react";

//? SERVICES
import getRazas from "../services/getRazas";
import postMascota from "../services/postMascota";

//? STYLES
import {
  Container,
  Form,
  InputNombre,
  SelectRaza,
  InputSexo,
  InputFechaExacta,
  InputFechaNacimiento,
  InputEdad,
  Button,
} from "./styles/FormAlta";

function FormAlta() {
  const [data, setData] = useState({
    nombre: "",
    raza: NaN,
    sexo: "",
    fecha_nacimiento: "",
    fecha_exacta: true,
    edad_años: 0,
    edad_meses: 0,
  });
  const [errors, setErrors] = useState({});
  const [razas, setRazas] = useState([]);

  //* Cargo listado de Razas de BD
  useEffect(() => {
    const razas = getRazas();
    razas.then(res => {
      setRazas(res);
    });
  }, []);

  //*Manejo cambio datos en el formulario
  const handleChange = e => {
    if (e.target.name === "raza" || e.target.name === "edad_años" || e.target.name === "edad_meses") {
      setData({ ...data, [e.target.name]: parseInt(e.target.value) });
    } else if (e.target.name === "fecha_exacta") {
      setData({ ...data, [e.target.name]: e.target.value === "true" ? true : false });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  //*Valido errores posibles
  const validate = () => {
    let errors = {};
    if (!data.nombre) errors.nombre = "Ingrese un nombre";
    if (isNaN(data.raza)) errors.raza = "Seleccione una raza";
    if (!data.sexo) errors.sexo = "Seleccione el sexo";
    if (data.fecha_exacta && !data.fecha_nacimiento) errors.fecha_nacimiento = "Ingrese una fecha de nacimiento";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  //*Envio datos al servidor
  const handleSubmit = async e => {
    e.preventDefault();

    if (validate()) {
      const rta = postMascota(data);
      if (rta) {
        alert("Mascota creada con éxito");
        window.location.reload(false);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Carga tu Mascota</h1>
        <InputNombre>
          <label>
            Nombre <span className="error">{errors.nombre ? errors.nombre : ""}</span>
          </label>
          <input type="text" placeholder="Nombre" name="nombre" onChange={handleChange} />
        </InputNombre>
        <SelectRaza>
          <label>Raza</label>
          <select placeholder="Raza" name="raza" onChange={handleChange}>
            <option value="">¿Qué es?</option>
            {razas &&
              razas.map(raza => {
                return (
                  <option key={raza.id} value={raza.id}>
                    {raza.nombre}
                  </option>
                );
              })}
          </select>
          <span className="error">{errors.raza ? errors.raza : ""}</span>
        </SelectRaza>
        <InputSexo>
          <label>
            Sexo<span className="error">{errors.sexo ? errors.sexo : ""}</span>
          </label>
          <div>
            <div>
              <label htmlFor="macho">Macho</label>
              <input type="radio" name="sexo" id="macho" value="M" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="hembra">Hembra</label>
              <input type="radio" name="sexo" id="hembra" value="H" onChange={handleChange} />
            </div>
          </div>
        </InputSexo>
        <InputFechaExacta>
          <label>¿Conocés el día en que nació?</label>
          <div>
            <div>
              <label htmlFor="true">SI</label>
              <input type="radio" name="fecha_exacta" id="true" value={true} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="false">NO</label>
              <input type="radio" name="fecha_exacta" id="false" value={false} onChange={handleChange} />
            </div>
          </div>
        </InputFechaExacta>
        {data.fecha_exacta ? (
          <InputFechaNacimiento>
            <label>¿Cuando nació?</label>
            <input type="date" onChange={handleChange} name="fecha_nacimiento" />
            <span className="error">{errors.fecha_nacimiento ? errors.fecha_nacimiento : ""}</span>
          </InputFechaNacimiento>
        ) : (
          <InputEdad>
            <label>¿Que edad aproximada tiene?</label>
            <label>
              Años <span className="error">{errors.edad_años ? errors.edad_años : ""}</span>
            </label>
            <input type="text" placeholder={0} name="edad_años" onChange={handleChange} />
            <label>
              Meses <span className="error">{errors.edad_meses ? errors.edad_meses : ""}</span>
            </label>
            <input type="text" placeholder={0} name="edad_meses" onChange={handleChange} />
          </InputEdad>
        )}
        <br />
        <Button type="submit" value="Registrar" />
      </Form>
    </Container>
  );
}

export default FormAlta;
