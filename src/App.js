import './App.css';
import ChangeUpperCase from './components/changeUpperCase/index.js'
import Button from './components/button/index.js'

function App() {
  return (
    <>
      <ChangeUpperCase color='purple' label='meu paragráfo' />
      <Button label='Baixar CV' />
    </>
  );
}

export default App;
