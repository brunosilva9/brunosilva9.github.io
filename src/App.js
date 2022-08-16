import './App.css';
import Introduction from './components/Introduction';
import LanguageSelector from './components/LanguageSelector';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
        <Introduction/>

      </header>
    

    </div>
  );
}

export default App;
