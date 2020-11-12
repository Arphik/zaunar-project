import React from 'react';
import './PanelAddProd.scss';

interface IState{
    url: string,
    name: string,
    desc: string,
    qty: number,
    price: number,
}

export default class PanelAddProd extends React.Component<any, IState>{

    state: IState = {
            url: 'http://localhost:3000/products',
            name: 'TestName',
            desc: 'TestDescr',
            qty: 0,
            price: 0,
    }

    updateName = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({name: e.currentTarget.value});
    }

    updateDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({desc: e.currentTarget.value});
    }

    updatePrice = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({price: Number(e.currentTarget.value)});
    }

    addProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            description: this.state.desc,
            qty: this.state.qty,
            price: this.state.price,
        };

        const fetchOpts = {
            body: JSON.stringify(data),
            method: 'POST', // or 'PUT'
            mode: 'cors' as RequestMode,
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        };
        try {
            console.log('Fetch data ', data);
            const response = await fetch(this.state.url, fetchOpts);
            console.log('Fetch response ', response.body);
            return response;
        } catch (error) {
            console.log('Fetch error ', error);
        }
    }

    render() {
        return (
        <div className="panel__add-prod">
            <div className="panel__add-prod--title">
                Add product
            </div>
            <form className="panel__add-prod--form">

                <input onChange={this.updateName} name="name" value={this.state.name} type="text" className="panel__add-prod--name panel__add-prod--input" placeholder="Name"/>

                <textarea onChange={this.updateDesc} name="desc" className="panel__add-prod--desc panel__add-prod--input" rows={4} placeholder="Description"></textarea>

                <input onChange={this.updatePrice} name="price" type="text" className="panel__add-prod--price panel__add-prod--input" placeholder="Price"/>

                <input onClick={this.addProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Add"/>

            </form>
        </div>
    );}
}