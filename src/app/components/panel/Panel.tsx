import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Panel.scss';
import PanelAddProd from './PanelAddProd';

import PanelMenu from './PanelMenu';

export const Panel = () => {
    return (
        <section className="panel">
            <PanelMenu/>

            <Switch>
                <Route path="/panel/add" component={PanelAddProd}/>
                <Route path="/panel/edit" component={PanelAddProd}/>
            </Switch>
        </section>
    )
}
export default Panel;