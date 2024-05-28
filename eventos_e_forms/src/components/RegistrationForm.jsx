import { useState } from 'react';

const RegistrationForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {values.name}
        <p>Nome:</p>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>E-mail:</p>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Senha:</p>
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default RegistrationForm;
