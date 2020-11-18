import React from 'react';
import './PanelAddProd.scss';

interface IState{
    title: string,
    description: string,
    qty: number,
    price: number,
    shortStats: string,
    vram: string,
    image: string,
    gpumodel: string,
    producer: string,
    memorytype: string,
    connectors: string,
}

export default class PanelAddProd extends React.Component<any, IState>{

    state: IState = {
            title: 'Lolforce RTX9950 Pamięć: 500 TB',
            description: 'TestDescr',
            qty: 1,
            price: 10000000,
            shortStats: 'Układ: Lolforce RTX9950 Pamięć: 500 TB Rodzaj pamięci: GDDR10XD Złącza: VGA 1szt., HighplayPort 9.90 5 szt.',
            vram: '500 TB',
            image: 'rtx2080tiasus.jpg',
            gpumodel: 'RTX9950',
            producer: 'Asus',
            memorytype: 'GDDR10XD',
            connectors: 'VGA 1szt., HighplayPort 9.90 5 szt.',
    }

    updateName = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value});
    }
    updateDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({description: e.currentTarget.value});
    }
    updatePrice = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({price: Number(e.currentTarget.value)});
    }
    updateShortStats = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({shortStats: e.currentTarget.value});
    }
    updateVram = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({vram: e.currentTarget.value});
    }
    updateImage = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({image: e.currentTarget.value});
    }
    updateModel = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({gpumodel: e.currentTarget.value});
    }
    updateProducer = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({producer: e.currentTarget.value});
    }
    updateMemorytype = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({memorytype: e.currentTarget.value});
    }
    updateConnectors = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({connectors: e.currentTarget.value});
    }

    // updateInput(e: { target: { name: keyof IState, value: any } }){
    //     const key = e.target.name;
    //     const value = e.target.value;
    //     this.setState({ [key]: value });
    // }

    addProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        const url = 'http://localhost:3000/products';

        const mod: RequestMode = 'cors';

        const fetchOpts = {
            body: JSON.stringify(this.state),
            method: 'POST',
            mode: mod,
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        };
        try {
            console.log('Fetch data ', this.state);
            const response = await fetch(url, fetchOpts);
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

                <input onChange={this.updateName} name="name" value={this.state.title} type="text" className="panel__add-prod--name panel__add-prod--input" placeholder="Name"/>
                <textarea onChange={this.updateDesc} name="desc" className="panel__add-prod--desc panel__add-prod--input" rows={4} placeholder="Description"></textarea>
                <input onChange={this.updateShortStats} name="shortStats" type="text" className="panel__add-prod--short-stats panel__add-prod--input" placeholder="Short stats"/>
                <input onChange={this.updateVram} name="vram" type="text" className="panel__add-prod--vram panel__add-prod--input" placeholder="Vram"/>
                <input onChange={this.updateImage} name="image" type="text" className="panel__add-prod--image panel__add-prod--input" placeholder="Image"/>
                <input onChange={this.updateModel} name="model" type="text" className="panel__add-prod--model panel__add-prod--input" placeholder="Model"/>
                <input onChange={this.updateProducer} name="producer" type="text" className="panel__add-prod--producer panel__add-prod--input" placeholder="Producer"/>
                <input onChange={this.updateMemorytype} name="memorytype" type="text" className="panel__add-prod--memorytype panel__add-prod--input" placeholder="Memory type"/>
                <input onChange={this.updateConnectors} name="connectors" type="text" className="panel__add-prod--connectors panel__add-prod--input" placeholder="Connectors"/>
                <input onChange={this.updatePrice} name="shortStats" type="text" className="panel__add-prod--price panel__add-prod--input" placeholder="Price"/>

                <input onClick={this.addProduct} type="button" className="panel__add-prod--submit panel__add-prod--input" value="Add"/>

            </form>
        </div>
    );}
}