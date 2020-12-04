import React from 'react';
import { Link } from 'react-router-dom';
import DataOperations from '../content/filter/DataOperations';
import { IItem } from '../content/sup-shop/views/sup.model';
import './PanelProdsList.scss';

interface IProps { }

interface IState {
    items: JSX.Element[],
    dataOps: DataOperations,
}

export default class PanelProdsList extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            items: [],
            dataOps: new DataOperations()
        }
    }

    removeItem(id: string, index: number){
        const dataOps = new DataOperations();
        dataOps.deleteItem(id)
        .then((response) => {
            console.log('response', response);
            const newItems = this.state.items.filter(({key}) => key !== String(index))
            this.setState({ items: newItems });
        });
    }

    componentDidMount() {

        this.state.dataOps.getFullData()
            .then((data) => this.setState(() => ({
                items: data.map(({ id, title, description, price }, index) => (
                    <div className="panel__prods-list--item" key={index}>
                        <span className="panel__prods-list--title">{title}</span>
                        <span className="panel__prods-list--description">{description}</span>
                        <span className="panel__prods-list--price">{price}</span>
                        <Link to={`/panel/edit/${id}`} className="panel__prods-list--edit">Edit</Link>
                        <span className="panel__prods-list--delete" onClick={() => this.removeItem(id, index)}>Del</span>
                    </div>
                ))
            })));
    }

    render() {
        return (
            <div className="panel__prods-list">
                {this.state.items}
            </div>
        );
    }
}