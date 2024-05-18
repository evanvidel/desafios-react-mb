import './App.css';
import Toggle from './components/Toggle';
import ToggleMultiplo from './components/ToggleMultiplo';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import WindowWidthChecker from './components/WindowWidthChecker';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />
      <h2>2 - Multiplos Estados</h2>
      <ToggleMultiplo />
      <h2>3 - Relógio em tempo real</h2>
      <Clock />
      <h2>4 - Todo List</h2>
      <TodoList />
      <h2>6 - Verificador de Largura de tela</h2>
      <WindowWidthChecker />
      <h2>6 - simulação requisição de API</h2>
      <DataFetcher />
    </>
  );
}

export default App;
