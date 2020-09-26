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

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <Header/> 

          <section className="app__content">
            <div className="gray-cover"></div>
            <Switch>
              <Route path="/" exact>
                <Promotions/>
              </Route>
              <Route path="/search">
                <ItemsList/>
              </Route>
            </Switch>
          </section>
      </Router>
    </div>
  );
}

export default App;
