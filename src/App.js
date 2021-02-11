import React from 'react';
import './App.css';
import Prévision from "./components/prévisions/prévisions";
import Logo from './components/logo/logo';

function App() {
 return (
   <div className="App">
     <header className="App-header">
     <Logo />
      <h1>Météo</h1>
     </header>
     <main>
       <Prévision />
     </main>
     <footer>
       Page crée par Christian Camelot
     </footer>
   </div>
 );
}

export default App;