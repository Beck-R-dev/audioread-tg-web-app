import { useEffect } from 'react';
import './App.css';

const tgWebApp = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tgWebApp.ready();
  }, [])

  const onClose = () => {
    tgWebApp.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
