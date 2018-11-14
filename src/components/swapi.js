import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const URL = "https://swapi.co/api/people/";

export default class swapi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {swl:[]}
    }

    async componentDidMount(){
        const swl = [] 
        swl.push(await fetch(URL+"1/").then(res => res.json())) 
        swl.push(await fetch(URL+"2/").then(res => res.json())) 
        swl.push(await fetch(URL+"3/").then(res => res.json())) 
        this.setState({swl})
    }

    render() {
        const options = getOptions()
        const columns = getColumns();
        return (
            <div>
                <BootstrapTable
                    striped
                    hover
                    bootstrap4
                    keyField='name'
                    data={this.state.swl}
                    columns={columns}
                    pagination={paginationFactory(options)}
                    filter={filterFactory()}
                />
            </div>
        )
    }
}

function getColumns() {
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
    return columns;
}

function getOptions(total) {
    return {
        paginationSize: 5,
        pageStartIndex: 1,
        hide: true, // Hide the  dropdown always
        hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        sizePerPageList: [{
            text: '10', value: 10
        }, {
            text: 'All', value: (total > 0) ? total : 10
        }]
    };
}