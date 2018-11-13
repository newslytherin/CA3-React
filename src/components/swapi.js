import React from "react"
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

export default class swapi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {swl:[props.swl]}
    }

    render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
            sort: true
        }, {
            dataField: 'height',
            text: 'Height',
            sort: true
        }, {
            dataField: 'mass',
            text: 'Weight',
            sort: true
        }, {
            dataField: 'gender',
            text: 'Gender',
            sort: true
        }, {
            dataField: 'birth_year',
            text: 'Birth Year',
            sort: true
        }];
        return (
            <div>
                <BootstrapTable
                    striped
                    hover
                    bootstrap4
                    keyField='name'
                    data={this.state.swl}
                    columns={columns}
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                />
            </div>
        )
    }
}