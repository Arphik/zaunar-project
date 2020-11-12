
import React, { Component } from 'react';
import './Filter.scss';
import { IGpusModel, IFilterObject } from '../views/gpus.model';

interface FilterProps {
  data: Promise<IGpusModel>;
  changeFilteredData(filter: IFilterObject): void;
}
interface FilterState {
    types: JSX.Element[],
    filterObject: IFilterObject
}

export default class Filter extends Component<FilterProps, FilterState> {

    constructor(props: FilterProps){
        super(props);
        this.state = {
            filterObject: {
                producer: [],
                gpumodel: [],
                memorytype: [],
                vram: [],
            },
            types: []
            // this.props.data.gpuStats.types.map((type, index) => (<div className="filter__type" key={index}>
            //     <div className="filter__type--title">{type.title}</div>
            //     {type.names.map((item, index) => (
            //         <div className="filter__checkbox--container" key={index}>
            //             <span className="filter__clear" onClick={() => this.clearCheckboxes(type.name)}>Wyczyść</span>
            //             <input className={`filter__checkbox--${type.name}`} type="checkbox" onChange={this.filterData} name={type.name} id={String(index)}/>{item.t}
            //         </div>))}
            // </div>))
        }
    }

    clearCheckboxes = (type: string) => {
        console.log(document.querySelectorAll(`.filter__checkbox--${type}`));
        document.querySelectorAll(`.filter__checkbox--${type}`)
        .forEach((element) => (element as HTMLInputElement).checked = false);

        let newFilterObj = JSON.parse(JSON.stringify(this.state.filterObject));
        newFilterObj[type] = [];
        this.setState(() => ({filterObject: newFilterObj}));
        this.props.changeFilteredData(newFilterObj);
    }

    filterData = (event: any) => {
        let newFilterObj = this.state.filterObject;
        
        event.target.checked ? 
            newFilterObj[event.target.name as keyof IFilterObject].push(Number(event.target.id)) :
            newFilterObj[event.target.name as keyof IFilterObject] = newFilterObj[event.target.name as keyof IFilterObject]
            .filter((element) => element !== Number(event.target.id));

        this.setState(() => ({filterObject: newFilterObj}));
        console.log('newFilterObj', newFilterObj);

        this.props.changeFilteredData(this.state.filterObject);
    }

    render(){
        return (
            <div className="filter">
                {/* {this.state.types} */}
            </div>
        );
    }
}