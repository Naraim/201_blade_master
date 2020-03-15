import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import Create from './Create/Create';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <HashRouter>

      

      <Route path="/Gallery" exact component={Gallery} />
      <Route path="/Create" exact component={Create} />
      <Route path="/" exact component={Home} />

     </HashRouter>
    </div>
  );
}

export default App;
