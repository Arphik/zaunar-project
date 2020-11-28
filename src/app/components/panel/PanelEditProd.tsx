import React from 'react';
import DataOperations from '../content/filter/DataOperations';
import ItemView from '../content/ItemView';
import { IItem } from '../content/views/gpus.model';
import './PanelEditProd.scss';

interface IProps {
    item: IItem,
    match: {
        isExact: boolean,
        params: {
            id: string
        },
    },
}

interface IState {
    currItem: IItem,
    panelEditInputs: JSX.Element[],
}

export default class PanelEditProd extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            currItem: {
                id: '',
                title: '',
                description: '',
                qty: 0,
                price: 0,
                shortStats: '',
                vram: '',
                image: '',
                gpumodel: '',
                producer: '',
                memorytype: '',
                connectors: '',
            },
            panelEditInputs: [],
        }
    }

    componentDidMount() {
        const dataOps = new DataOperations();
        dataOps.getItem(this.props.match.params.id)
            .then((item) => {
                console.log('Edited item ', item);
                // const newItem: { [key: string]: string | number } = {...item};
                // let inputs: JSX.Element[] = [];
                // let key: string;
                // for (key in item) {
                //         inputs.push(<input type="text" onChange={this.updateInput} className={`panel__edit-prod--${key}`}
                //             name={key} />);
                // }
                this.setState({ currItem: item });
            });
    }

    updateInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log('Update from input.', this.state.currItem.qty);
        let newItem: { [index: string]: string | number} = { ...this.state.currItem };
        const key: string = e.currentTarget.name;
        const value: number | string = e.currentTarget.value;
        newItem[key] = value;
        // console.log('newItem ', newItem, this.state.currItem);
        // this.setState({ 
        //     currItem: {...newItem}
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
        console.log(this.state.currItem);
        return (
            <div className="panel__add-prod">
                <div className="panel__add-prod--title">
                    Edit product
            </div>
                <form className="panel__add-prod--form">

                    {/* {this.state.panelEditInputs} */}

                    <input onChange={this.updateInput} name="name" value={this.state.currItem.title} type="text" className="panel__add-prod--name panel__add-prod--input" placeholder="Name" />
                    <textarea onChange={this.updateInput} name="description" value={this.state.currItem.description} className="panel__add-prod--desc panel__add-prod--input" rows={4} placeholder="Description"></textarea>
                    <input onChange={this.updateInput} name="shortStats" value={this.state.currItem.shortStats} type="text" className="panel__add-prod--short-stats panel__add-prod--input" placeholder="Short stats" />
                    <input onChange={this.updateInput} name="vram" value={this.state.currItem.vram} type="text" className="panel__add-prod--vram panel__add-prod--input" placeholder="Vram" />
                    <input onChange={this.updateInput} name="image" value={this.state.currItem.image} type="text" className="panel__add-prod--image panel__add-prod--input" placeholder="Image" />
                    <input onChange={this.updateInput} name="model" value={this.state.currItem.gpumodel} type="text" className="panel__add-prod--model panel__add-prod--input" placeholder="Model" />
                    <input onChange={this.updateInput} name="producer" value={this.state.currItem.producer} type="text" className="panel__add-prod--producer panel__add-prod--input" placeholder="Producer" />
                    <input onChange={this.updateInput} name="memorytype" value={this.state.currItem.memorytype} type="text" className="panel__add-prod--memorytype panel__add-prod--input" placeholder="Memory type" />
                    <input onChange={this.updateInput} name="connectors" value={this.state.currItem.connectors} type="text" className="panel__add-prod--connectors panel__add-prod--input" placeholder="Connectors" />
                    <input onChange={this.updateInput} name="shortStats" value={this.state.currItem.shortStats} type="text" className="panel__add-prod--price panel__add-prod--input" placeholder="Price" />

                    <input onClick={this.changeProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Change" />

                </form>
            </div>
        );
    }
}