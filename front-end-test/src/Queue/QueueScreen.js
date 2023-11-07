import React, { Component } from 'react';

import Customer from './components/Customer';
import { fetchQueueData } from '../api/queue/getQueue';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetchQueueData()
            .then((response) => {
                this.setState({
                    customers: response
                });
            })
    }

    render() {

        let customers = [];
        for(let i = 0; i < this.state?.customers.length; ++i) {
            customers.push(
                // <div key={this.state.customers[i].id}>
                //     <div>
                //         {this.state.customers[i].customer.name}
                //     </div>
                // </div>
                <Customer key={i} customer={this.state.customers[i].customer} />
            );
        }

        return (
            <div>
                {
                    customers
                }
            </div>
        );
    }
}
