import React from 'react';
import DataOperations from '../content/filter/DataOperations';
import { IItem } from '../content/views/gpus.model';
import './PanelEditProd.scss';

interface IProps{
    item: IItem
}

interface IState{
    currItem: IItem
}

export default class PanelEditProd extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);

        this.state = { 
            currItem: props.item
        }
    }

    updateInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Update from input.');
        let newItem: {[key:string]: string | number} = { ...this.state.currItem };
        const key: string = e.currentTarget.name;
        const value: number | string = e.currentTarget.value;
        newItem[key] = value;
        console.log('newItem ', newItem);
        // this.setState({ 
        //     currItem: newItem
        // });
    }
    // updateDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
    //     this.setState({description: e.currentTarget.value});
    // }
    // updatePrice = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({price: Number(e.currentTarget.value)});
    // }
    // updateShortStats = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({shortStats: e.currentTarget.value});
    // }
    // updateVram = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({vram: e.currentTarget.value});
    // }
    // updateImage = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({image: e.currentTarget.value});
    // }
    // updateModel = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({gpumodel: e.currentTarget.value});
    // }
    // updateProducer = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({producer: e.currentTarget.value});
    // }
    // updateMemorytype = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({memorytype: e.currentTarget.value});
    // }
    // updateConnectors = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({connectors: e.currentTarget.value});
    // }

    // updateInput(e: { target: { name: keyof IState, value: any } }){
    //     const key = e.target.name;
    //     const value = e.target.value;
    //     this.setState({ [key]: value });
    // }

    changeProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // const dataOps = new DataOperations();
        // dataOps.editProduct(this.state.currItem);
    }

    render() {
        return (
        <div className="panel__add-prod">
            <div className="panel__add-prod--title">
                Add product
            </div>
            <form className="panel__add-prod--form">

                <input onChange={this.updateInput} name="name" value={this.state.currItem.title} type="text" className="panel__add-prod--name panel__add-prod--input" placeholder="Name"/>
                <textarea onChange={this.updateInput} name="description" className="panel__add-prod--desc panel__add-prod--input" rows={4} placeholder="Description"></textarea>
                <input onChange={this.updateInput} name="shortStats" type="text" className="panel__add-prod--short-stats panel__add-prod--input" placeholder="Short stats"/>
                {/* <input onChange={this.updateVram} name="vram" type="text" className="panel__add-prod--vram panel__add-prod--input" placeholder="Vram"/> */}
                {/* <input onChange={this.updateImage} name="image" type="text" className="panel__add-prod--image panel__add-prod--input" placeholder="Image"/> */}
                {/* <input onChange={this.updateModel} name="model" type="text" className="panel__add-prod--model panel__add-prod--input" placeholder="Model"/> */}
                {/* <input onChange={this.updateProducer} name="producer" type="text" className="panel__add-prod--producer panel__add-prod--input" placeholder="Producer"/> */}
                {/* <input onChange={this.updateMemorytype} name="memorytype" type="text" className="panel__add-prod--memorytype panel__add-prod--input" placeholder="Memory type"/> */}
                {/* <input onChange={this.updateConnectors} name="connectors" type="text" className="panel__add-prod--connectors panel__add-prod--input" placeholder="Connectors"/> */}
                {/* <input onChange={this.updatePrice} name="shortStats" type="text" className="panel__add-prod--price panel__add-prod--input" placeholder="Price"/> */}

                <input onClick={this.changeProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Add"/>

            </form>
        </div>
    );}
}