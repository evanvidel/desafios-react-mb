import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import DynamicForm from "./components/DynamicForm";
import ValidationForm from "./components/ValidationForm";

function App() {
  return (
    <>
      <h2>1 - Formulário de registro</h2>
      <RegistrationForm />
      <h2>2 - Formulário dinâmico</h2>
      <DynamicForm />
      <h2>3 - Validação de Formulário</h2>
      <ValidationForm />
    </>
  );
}

export default App;
