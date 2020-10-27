import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import Promotions from './components/promotions/Promotions';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemsList from './components/content/ItemsList';
import Panel from './components/panel/Panel';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
            <Header/> 

            <main className="app__content">
              <div className="gray-cover"></div>
              <Switch>
                <Route path="/" exact component={Promotions}/>
                <Route path="/search" component={ItemsList}/>
                <Route path="/panel" component={Panel}/>
              </Switch>
            </main>
      </div>
    </Router>
  );
}

export default App;
