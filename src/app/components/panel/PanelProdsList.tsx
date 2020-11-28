import React from 'react';
import { Link } from 'react-router-dom';
import DataOperations from '../content/filter/DataOperations';
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

    componentDidMount() {

        this.state.dataOps.getFullData()
            .then((data) => this.setState(() => ({
                items: data.map(({ id, title, description, price }) => (
                    <div className="panel__prods-list--item">
                        <span className="panel__prods-list--title">{title}</span>
                        <span className="panel__prods-list--description">{description}</span>
                        <span className="panel__prods-list--price">{price}</span>
                        <Link to={`/panel/edit/${id}`} className="panel__prods-list--edit">Edit</Link>
                        <span className="panel__prods-list--delete">Del</span>
                    </div>
                ))
            })));
    }

    changeProduct = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // const dataOps = new DataOperations();
        // dataOps.editProduct(this.state.currItem);
    }

    render() {
        return (
            <div className="panel__prods-list">
                {this.state.items}
            </div>
        );
    }
}