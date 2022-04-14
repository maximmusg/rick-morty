import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {useState} from "react"
import Characters from './components/Characters';

function App() {

  const [characters, setcharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setcharacters(characterApi.results)
  }  

  // console.log(characters) 

  return (
    <div className="App">
      <header className="App-header">
        <h1 children="title">Rick & Morty</h1>
        { characters ? (
          < Characters characters={characters} setcharacters={setcharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} className='' alt=''/>
            <button className='btn-search' onClick={reqApi}>Buscar personajes</button>
          </>
        )}
        
          
      </header>
    </div>
  );
}

export default App;
