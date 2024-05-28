import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import DynamicForm from './components/DynamicForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>1 - Formulário de registro</h2>
      <RegistrationForm />
      <h2>2 - Formulário dinâmico</h2>
      <DynamicForm />
      <h2>3 - Validação de Formulário</h2>
    </>
  );
}

export default App;
