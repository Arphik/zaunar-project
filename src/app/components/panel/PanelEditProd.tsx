import React from 'react';
import DataOperations from '../content/filter/DataOperations';
import ItemView from '../content/ItemView';
import { IItem } from '../content/views/sup.model';
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
                id: 'string',
                title: 'string',
                description: 'string',
                qty: 0,
                sentTime: 'string',
                price: 0,
                guarantee: 'string',
                image: 'string',
                producer: 'string',
                type: 'string',
                technology: 'string',
                purpose: 'string',
                oar: 'string',
                handle: 'string',
                thickness: 'string',
                length: 'string',
                width: 'string',
            },
            panelEditInputs: [],
        }
    }

    componentDidMount() {
        const dataOps = new DataOperations();
        dataOps.getItem(this.props.match.params.id)
            .then((item) => {
                console.log('Edited item ', item);
                const newItem: IItem = { ...item };
                let inputs: JSX.Element[] = [];
                let key: string;
                for (key in item) {
                    inputs.push(<input type="text" onChange={this.updateInput} 
                        placeholder={key}
                        className={`panel__edit-prod--${key}`}
                        name={key}
                        value={this.state.currItem[key]}/>);
                }
                this.setState({ 
                    currItem: item,
                    panelEditInputs: inputs
                 });
            });
    }

    updateInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log('Update from input.', this.state.currItem.qty);
        // let newItem = {...this.state.currItem};
        // type keyType = keyof IItem;
        // const key: keyType = e.currentTarget.name as keyof IItem;
        // let newValue: string | number = e.currentTarget.value;
        // newItem.;

        // this.setState({
        //     currItem: newItem
        // });
    }

    changeProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        // const newItem: IItem = { ...this.state.currItem };
        // const dataOps = new DataOperations();
        // dataOps.editProduct(newItem);
    }

    render() {
        // console.log(this.state.currItem);
        return (
            <div className="panel__add-prod">
                <div className="panel__add-prod--title">
                    Edit product
            </div>
                <form className="panel__add-prod--form">

                    {this.state.panelEditInputs}

                    {/* <input onChange={this.updateInput} name="name" value={this.state.currItem.title} type="text" className="panel__add-prod--name panel__add-prod--input" placeholder="Name" />
                    <textarea onChange={this.updateInput} name="description" value={this.state.currItem.description} className="panel__add-prod--desc panel__add-prod--input" rows={4} placeholder="Description"></textarea>
                    <input onChange={this.updateInput} name="shortStats" value={this.state.currItem.shortStats} type="text" className="panel__add-prod--short-stats panel__add-prod--input" placeholder="Short stats" />
                    <input onChange={this.updateInput} name="vram" value={this.state.currItem.vram} type="text" className="panel__add-prod--vram panel__add-prod--input" placeholder="Vram" />
                    <input onChange={this.updateInput} name="image" value={this.state.currItem.image} type="text" className="panel__add-prod--image panel__add-prod--input" placeholder="Image" />
                    <input onChange={this.updateInput} name="model" value={this.state.currItem.gpumodel} type="text" className="panel__add-prod--model panel__add-prod--input" placeholder="Model" />
                    <input onChange={this.updateInput} name="producer" value={this.state.currItem.producer} type="text" className="panel__add-prod--producer panel__add-prod--input" placeholder="Producer" />
                    <input onChange={this.updateInput} name="memorytype" value={this.state.currItem.memorytype} type="text" className="panel__add-prod--memorytype panel__add-prod--input" placeholder="Memory type" />
                    <input onChange={this.updateInput} name="connectors" value={this.state.currItem.connectors} type="text" className="panel__add-prod--connectors panel__add-prod--input" placeholder="Connectors" />
                    <input onChange={this.updateInput} name="shortStats" value={this.state.currItem.shortStats} type="text" className="panel__add-prod--price panel__add-prod--input" placeholder="Price" /> */}

                    <input onClick={this.changeProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Change" />

                </form>
            </div>
        );
    }
}