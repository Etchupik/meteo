import React from 'react';
import './App.css';
import Prévision from "./components/prévisions/prévisions";

function App() {
 return (
   <div className="App">
     <header className="App-header">
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