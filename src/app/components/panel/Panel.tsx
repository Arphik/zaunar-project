import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Panel.scss';
import PanelAddProd from './PanelAddProd';
import PanelEditProd from './PanelEditProd';
import PanelProdsList from './PanelProdsList';

import PanelMenu from './PanelMenu';

export const Panel = () => {
    return (
        <section className="panel">
            <PanelMenu/>

            <Switch>
                <Route path="/panel/list" component={PanelProdsList}/>
                <Route path="/panel/add" component={PanelAddProd}/>
                <Route path="/panel/edit/:id" component={PanelEditProd}/>
            </Switch>
        </section>
    )
}
export default Panel;