import React from 'react';
import './PanelAddProd.scss';

interface IPostData{
    name: string,
    description: string,
    price: number,
}

interface IState{
    url: string,
    name: string,
    desc: string,
    price: number,
}

export default class PanelAddProd extends React.Component<any, IState>{

    state: IState = {
            "url": 'http://localhost:3000/products',
            name: 'e2334r23',
            desc: 'r2dfsdfwqewqedf',
            price: 44,
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
        const data = JSON.stringify({
            name: this.state.name,
            description: this.state.desc,
            price: this.state.price,
        });

        const fetchOpts = {
            body: data,
            method: 'POST', // or 'PUT'
            mode: 'no-cors' as RequestMode,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        try {
            console.log('Fetch data ', data, this.state.url);
            const response = await fetch(this.state.url, fetchOpts);
            console.log('Fetch response ', response);
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