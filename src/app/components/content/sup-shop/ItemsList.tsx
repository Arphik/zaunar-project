import React, { Component } from 'react';
import Filter from '../filter/Filter';
import './ItemsList.scss';

import LargeBricksView from './views/LargeBricksView';
import SmallBricksView from './views/SmallBricksView';
import LargeListView from './views/LargeListView';
import SmallListView from './views/SmallListView';
import DataOperations from '../filter/DataOperations';
import { IItem } from './views/sup.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

interface ItemsListState {
  data: IItem[];
  view: number;
  dataOperations: DataOperations;
}

export default class ItemsList extends Component<{}, ItemsListState> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      view: 0,
      dataOperations: new DataOperations(),
    }
  }

  componentDidMount() {

    this.setState(() => ({ dataOperations: new DataOperations()}));

    const promisedData = this.state.dataOperations.getFullData();
    promisedData.then((data) => {

      this.setState(() =>
        ({ data: data })
      );

    })
  }

  changeView = (): JSX.Element => {
    const views: JSX.Element[] = [
      <LargeBricksView data={this.state.data} />,
      <SmallBricksView data={this.state.data} />,
      <LargeListView data={this.state.data} />,
      <SmallListView data={this.state.data} />
    ]
    return views[this.state.view];
  }

  changeFilteredData = (filter: any): void => {
    // let newFilteredData = JSON.parse(JSON.stringify(this.state.data));
    // newFilteredData.items = this.state.dataOps.setFilteredData(this.state.data, filter);
    // this.setState(() => ({filteredData: newFilteredData}));
    //  console.log("FILTERED", this.state.filteredData);
  }

  render(): JSX.Element {
    console.log('ItemsList data ', this.state.data);
    return (
      <div className="shop-content">
        {/* <Filter data={this.state.data} changeFilteredData={this.changeFilteredData}/> */}


        <div className="items-list">
          <div className="items-list__change-view--container">
            <div className="items-list__change-view--btn largeBricks" onClick={() => this.setState(() => ({ view: 0 }))}></div>
            <div className="items-list__change-view--btn smallBricks" onClick={() => this.setState(() => ({ view: 1 }))}></div>
            <div className="items-list__change-view--btn largeList" onClick={() => this.setState(() => ({ view: 2 }))}></div>
            <div className="items-list__change-view--btn smallList" onClick={() => this.setState(() => ({ view: 3 }))}></div>
          </div>
          {/* {this.changeView(this.state.view)} */}
          { 
            this.state.data.length > 0 ? 
            this.changeView()
            : 
            (
              <div className="items-list__loading-gif">
                Loading data
                  <FontAwesomeIcon icon={faRedo} />
              </div>
            ) 
          }
          
        </div>
      </div>
    )
  };
}