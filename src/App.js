import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext } from 'react';
export const GiftContext= createContext()

function App() {
  const gift = "diamond ring"
   
  return (
    
    <GiftContext.Provider value={gift}>
      <div className="App">
      <GrandFather></GrandFather>
    </div>
    </GiftContext.Provider>
  );
}

export default App;
