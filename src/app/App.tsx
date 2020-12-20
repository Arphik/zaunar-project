import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import Promotions from './components/content/promotions/Promotions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import ItemsList from './components/content/sup-shop/ItemsList';
import Panel from './components/panel/Panel';
import Cart from './components/content/sup-shop/cart/Cart';
import ItemView from './components/content/sup-shop/ItemView';

interface IParams{
  params: {
    id: number;
  }
}

const App: React.FC = () => {

  return (
      <div className="App">
            <Header/> 

            <main className="app__content">
              <div className="gray-cover"></div>
              <Switch>
                <Route path="/sup" exact component={ItemsList}/>
                <Route path="/sup/:id" component={ItemView} />
                <Route path="/panel" component={Panel}/>
                <Route path="/cart" component={Cart}/>
              </Switch>
                {/* <Route path="/">
                  <Promotions/>
                </Route>
                <Route path="/">
                  <ItemsList/>
                </Route>
                <Route path="/panel">
                  <Panel/>
                </Route> */}
            </main>
      </div>
  );
}

export default App;
