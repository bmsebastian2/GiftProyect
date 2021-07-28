import React from 'react';
import './App.css';
import GiftofList from './components/GiftofList';
import { Link, Route } from "wouter";


function App() {
 
  return (
    <div className="App">
      <section className="App-content">
                  
        <h1>App</h1>
        <Link to="/gift/panda">Pandas</Link>
        <Link to="/gift/uruguay">Uruguay</Link>
        <Link to="/gift/Morty">Morty</Link>
        <Route  path = "/gift/:keyword"  component ={GiftofList} /> 
        {/* <GiftofList keyword={'panda'}/> */}
           
      </section>
    </div>
  );
}

export default App;
