import React from 'react';
import DataOperations from '../content/filter/DataOperations';
import { IItem } from '../content/sup-shop/views/sup.model';
import './PanelAddProd.scss';

interface IProps {

}

interface IState {
    item: IItem,
}

export default class PanelAddProd extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            item: {
                id: '',
                title: '',
                description: '',
                qty: 0,
                sentTime: '',
                price: 0,
                guarantee: '',
                image: '',
                producer: '',
                type: '',
                technology: '',
                purpose: '',
                oar: '',
                handle: '',
                thickness: '',
                length: '',
                width: '',
            },
        }
    }

    componentDidMount() {}

    createInputs(){
        let newInputs: JSX.Element[] = [];
        let key: string;
        for (key in this.state.item) {
            console.log('Input item[key]', this.state.item[key]);
            newInputs.push(<input type="text" onChange={(e) => this.updateInput(e)}
                key={newInputs.length}
                placeholder={key}
                className={`panel__add-input panel__add--${key}`}
                name={key}
                value={this.state.item[key]} />);
        }
        return newInputs;
    }

    updateInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const key = e.currentTarget.name;

        document.querySelector(`.panel__add--${key}`)?.classList.remove('required');

        let newItem: IItem = this.state.item;
        console.log('State item ', key, this.state.item);
        newItem[key] = e.currentTarget.value;
        console.log('newItem ', newItem);
        this.setState(() => ({
            item: newItem
        }));
    }

    addProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        for(const key in this.state.item){
            if(this.state.item[key] === ''){
                document.querySelector(`.panel__add--${key}`)?.classList.add('required');
            }
        }

        console.log("Add product.");
        const dataOps = new DataOperations();
        dataOps.addProduct(this.state.item);
    }

    render() {
        return (
            <div className="panel__add-prod">
                <div className="panel__add-prod--title">
                    Add product
            </div>
                <form className="panel__add-prod--form">

                    {this.createInputs()}
                    <input onClick={this.addProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Add" />

                </form>
            </div>
        );
    }
}