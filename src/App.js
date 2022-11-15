import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Quote from './Quote';
import './scss/style.scss';
import { CiDark, CiLight } from 'react-icons/ci';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [msg, setMsg] = useState([]);
  const [toggle, setToggle] = useState("dark");

  useEffect(() => {
    const fetch = async () => {
      const response = await axios(`https://api.goprogram.ai/inspiration`);
      setMsg(response.data);
    };
    fetch();
  }, []);

  const lightToggle = () => {
    setToggle((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      <div className='main-comp' id={toggle}>
        <div className='switch'>
          <label> {toggle === "light" ? <CiLight /> : <CiDark />}</label>
          <ReactSwitch onChange={lightToggle} checked={toggle === "dark"} />
        </div>
        <div className='card'>
          <h1>Inspirational Quote</h1>
          <Quote msg={msg} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
