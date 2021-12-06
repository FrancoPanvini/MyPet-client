import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 60vw;
  height: 70vh;

  background: var(--back-color);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

  & label {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  .error {
    color: red;
    margin-left: 10px;
    font-size: 1rem;
  }
`;

export const InputNombre = styled.div`
  width: 75%;

  & input {
    background: none;
    width: 100%;
    border: black solid 1px;
    border-radius: 9999px;
    text-align: center;
    outline: none;

    &::placeholder {
      color: black;
    }
  }
`;

export const SelectRaza = styled.div`
  width: 75%;

  & select {
    background: none;
    width: 70%;
    border: black solid 1px;
    border-radius: 9999px;
    text-align: center;
  }
`;

export const InputSexo = styled.div`
  width: 75%;

  & > div {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    & label {
      color: black;
    }
  }
`;

export const InputFechaExacta = styled.div`
  width: 75%;

  & > div {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    & label {
      color: black;
    }
  }
`;

export const InputFechaNacimiento = styled.div`
  width: 75%;

  & input {
    background: none;
    border: black solid 1px;
    border-radius: 9999px;
    text-align: center;
    outline: none;

    &::placeholder {
      color: black;
    }
  }
`;

export const InputEdad = styled.div`
  width: 75%;

  & input {
    width: 10%;
    background: none;
    border: black solid 1px;
    border-radius: 9999px;
    text-align: center;
    outline: none;
    margin-right: 20px;

    &::placeholder {
      color: black;
    }
  }
`;

export const Button = styled.input`
  background: var(--other-color);
  border-radius: 28px;
  width: 150px;
  padding: 5px 20px 5px 20px;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    background: var(--text-color);
    cursor: pointer;
  }
`;
