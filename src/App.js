import './App.css';
import { useEffect } from 'react';
import { useTelegram } from 'react';


function App() {
  const {onToggleButton, tgWebApp} = useTelegram();

  useEffect(() => {
    tgWebApp.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
