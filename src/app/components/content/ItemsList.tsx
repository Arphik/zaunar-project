import React, { Component } from 'react';
import Filter from './filter/Filter';
import './ItemsList.scss';

import LargeBricksView from './views/LargeBricksView';
import SmallBricksView from './views/SmallBricksView';
import LargeListView from './views/LargeListView';
import SmallListView from './views/SmallListView';
import { DataOperations } from './filter/DataOperations';
import { IItem } from './views/gpus.model';

interface ItemsListState {
  data: IItem[];
  view: number;
}

export default class ItemsList extends Component<{}, ItemsListState> {

  constructor(props: any){
    super(props);
    this.state = {
      data: [],
      view: 1,
    }
    // console.log("didMount data ", this.state.data);
  }

  componentDidMount(){

    const promisedData = new DataOperations().getFullData();
    promisedData.then((data)=>{

      this.setState(() => 
        ({data: data})
      );

    })
  }

    changeView = (choice: number): JSX.Element => {
      let newView = (<div></div>);
        switch(choice){
            case 1: newView = (<LargeBricksView data={this.state.data}/>);
            break;
            // case 2: newView = (<SmallBricksView data={this.state.filteredData}/>);
            // break;
            // case 3: newView = (<LargeListView data={this.state.filteredData}/>);
            // break;
            // case 4: newView = (<SmallListView data={this.state.filteredData}/>);
            // break;
        }
        return newView;
    }

    changeFilteredData = (filter: any): void => {
      // let newFilteredData = JSON.parse(JSON.stringify(this.state.data));
      // newFilteredData.items = this.state.dataOps.setFilteredData(this.state.data, filter);
      // this.setState(() => ({filteredData: newFilteredData}));
      //  console.log("FILTERED", this.state.filteredData);
    }

    render(): JSX.Element {
      return (
        <div className="shop-content">
          {/* <Filter data={this.state.data} changeFilteredData={this.changeFilteredData}/> */}

          
          <div className="items-list">
            <div className="items-list__change-view--container">
              <div className="items-list__change-view--btn largeBricks" onClick={() => this.setState(()=>({view: 1}))}></div>
              <div className="items-list__change-view--btn smallBricks" onClick={() => this.setState(()=>({view: 2}))}></div>
              <div className="items-list__change-view--btn largeList" onClick={() => this.setState(()=>({view: 3}))}></div>
              <div className="items-list__change-view--btn smallList" onClick={() => this.setState(()=>({view: 4}))}></div>
            </div>
            {this.changeView(this.state.view)}
          </div>
        </div>
      )
    };
}