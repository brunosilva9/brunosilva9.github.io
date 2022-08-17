import './App.css';
import Introduction from './components/Introduction';
import LanguageSelector from './components/LanguageSelector';
import ModalExampleModal from './components/ModalExampleModal'
import React from 'react'
function App() {
  return (
    <div className="App">
      
        <LanguageSelector />
        <Introduction/>   
  
      <ModalExampleModal/>
    </div>
  );
}

export default App;
