import React from 'react';
import DataOperations from '../content/filter/DataOperations';
import { IItem } from '../content/sup-shop/views/sup.model';
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
        }
    }

    async componentDidMount() {
        const dataOps = new DataOperations();
        const item = await dataOps.getItem(this.props.match.params.id);
        this.setState({ currItem: item });
    }

    createInputs = (): JSX.Element[] => {
        let newInputs: JSX.Element[] = [];
        let key: string;
        for (key in this.state.currItem) {
            newInputs.push(<input type="text" onChange={(e) => this.updateInput(e)}
                key={newInputs.length}
                placeholder={key}
                className={`panel__edit-input panel__add--${key}`}
                name={key}
                value={this.state.currItem[key]} />);
        }
        return newInputs;
    }

    updateInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const key = e.currentTarget.name;

        document.querySelector(`.panel__add--${key}`)?.classList.remove('required');

        let newItem: IItem = this.state.currItem;
        console.log('State item ', key, this.state.currItem);
        newItem[key] = e.currentTarget.value;
        console.log('newItem ', newItem);
        this.setState(() => ({
            currItem: newItem
        }));
    }

    changeProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newItem: IItem = { ...this.state.currItem };
        const dataOps = new DataOperations();
        dataOps.editProduct(newItem);
    }

    render() {
        // console.log(this.state.currItem);
        return (
            <div className="panel__edit-prod">
                <div className="panel__edit-prod--title">
                    Edit product
            </div>
                <form className="panel__edit-prod--form">

                    {this.createInputs()}

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

                    <input onClick={this.changeProduct} type="button" className="panel__edit-prod--submit panel__edit-prod--input" value="Change" />

                </form>
            </div>
        );
    }
}