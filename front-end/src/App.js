import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './app/component/landing';
import ListBet from './app/component/listbet';
import FAQ from './app/component/faq';
import BET from './app/component/Bet';
import Admin from './app/component/admin';
import SignIn from './app/component/signin';
function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path="/list_bet" element={<ListBet />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bet_aganist" element={<BET />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
