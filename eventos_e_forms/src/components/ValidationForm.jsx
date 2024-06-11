import { useState } from "react";

const ValidationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [erros, setErros] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = event.target;

    validate(name, value);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setErros({ ...erros, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const validate = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage = value ? "" : "O nome não pode ser em branco";
        break;
      case "email":
        break;
      case "password":
        break;
      default:
        break;
    }
    return errorMessage;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Nome:</p>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {erros.name && <p>{erros.name}</p>}
      </div>
      <div>
        <p>E-mail:</p>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Senha:</p>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default ValidationForm;
