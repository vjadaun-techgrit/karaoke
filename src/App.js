import './App.css';
import Karaoke from './components/Karaoke';
import { KaraokeWrapper } from './context/karaoke-context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KaraokeWrapper>
          <Karaoke />
        </KaraokeWrapper>
      </header>
    </div>
  );
}

export default App;

