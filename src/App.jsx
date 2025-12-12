import './App.css';
import DATA from './data.js';
import CatList from './components/CatList';


function App() {
 
  return (
    <>
    <CatList cats={DATA} />
    </>
  );
}

export default App;
