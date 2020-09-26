import React, { Component } from 'react';
import Filter from './filter/Filter';
import './ItemsList.scss';

import LargeBricksView from './views/LargeBricksView';
import SmallBricksView from './views/SmallBricksView';
import LargeListView from './views/LargeListView';
import SmallListView from './views/SmallListView';
import { DataOperations } from './filter/DataOperations';
import { IGpusModel } from './views/gpus.model';

interface ItemsListState {
  data: IGpusModel;
  filteredData: IGpusModel;
  view: number;
  dataOps: DataOperations;
}

export default class ItemsList extends Component<{}, ItemsListState> {

  constructor(props: any){
    super(props);
    this.state = {
      data: new DataOperations().getFullData(),
      filteredData: new DataOperations().getFullData(),
      view: 1,
      dataOps: new DataOperations()
    }
    // console.log("didMount data ", this.state.data);
  }

  componentDidMount(){
    this.setState(() => ({
      data: this.state.dataOps.getFullData(),
      filteredData: this.state.dataOps.getFullData(),
    }))
  }

    changeView = (choice: number): JSX.Element => {
      let newView = (<div></div>);
        switch(choice){
            case 1: newView = (<LargeBricksView data={this.state.filteredData}/>);
            break;
            case 2: newView = (<SmallBricksView data={this.state.filteredData}/>);
            break;
            case 3: newView = (<LargeListView data={this.state.filteredData}/>);
            break;
            case 4: newView = (<SmallListView data={this.state.filteredData}/>);
            break;
        }
        return newView;
    }

    changeFilteredData = (filter: any): void => {
      let newFilteredData = JSON.parse(JSON.stringify(this.state.data));
      newFilteredData.items = this.state.dataOps.setFilteredData(this.state.data, filter);
      this.setState(() => ({filteredData: newFilteredData}));
       console.log("FILTERED", this.state.filteredData);
    }

    render(): JSX.Element {
      return (
        <div className="shop-content">
          <Filter data={this.state.data} changeFilteredData={this.changeFilteredData}/>

          
          <div className="items-list">
            <div className="changeView">
              <div className="largeBricks" onClick={() => this.setState(()=>({view: 1}))}></div>
              <div className="smallBricks" onClick={() => this.setState(()=>({view: 2}))}></div>
              <div className="largeList" onClick={() => this.setState(()=>({view: 3}))}></div>
              <div className="smallList" onClick={() => this.setState(()=>({view: 4}))}></div>
            </div>
            {this.changeView(this.state.view)}
          </div>
        </div>
      )
    };
}