import './App.css';
import Counter from './components/Counter';
import Family from './components/Family';
import HelloName from './components/HelloName';
import HelloWorld from './components/HelloWorld';
import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass';

function App() {
  const members = [
    { name: 'Maria', age: 20, job: 'Estagiária' },
    { name: 'Henrique', age: 32, job: 'Engenheiro' },
    { name: 'Fernanda', age: 40, job: 'Médica' },
  ];
  return (
    <>
      <h2> 1 - Criando um componente simples</h2>
      <HelloWorld />
      <h2>2 -Utilizando props</h2>
      <HelloName name='Matheus' />
      <h2>3 - Multiplas props</h2>
      <Profile name='João' age={34} job='Advogado' />
      <h2>4 - Composição de Componentes</h2>
      <Family members={members} />
      <h2>5 - Componente de classe</h2>
      <ProfileClass name='Rodrigo' age={36} job='Monitor' />
      <h2>6 - Componente com estado</h2>
      <Counter />
    </>
  );
}

export default App;
