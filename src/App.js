import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Quote from './Quote';

function App() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios(`https://api.goprogram.ai/inspiration`);
      setMsg(response.data);
    };
    fetch();
  }, []);


  return (
    <div>
      <p>Inspirational Quote</p>
      <Quote msg={msg} />
    </div>
  );
}

export default App;
