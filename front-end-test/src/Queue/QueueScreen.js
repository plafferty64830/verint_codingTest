import React, { Component, useState } from 'react';
import Customer from './components/Customer';
import { fetchQueueData } from '../api/queue/getQueue';
import { Button, Form, Input, Label } from './components/Input';
import { addCustomerToQueue } from '../api/queue/addCustomer';


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
                    customers: response.customers,
                    expectedTime: response.expectedTime,
                    searchValue: '',
                    email: '',
                    name: ''
                });
            })
    }

    render() {

        const addCustomer = () => {
            const custData = {
                emailAddress: this.state.email,
                name: this.state.name
            }

            addCustomerToQueue(custData).then(() => {
                alert('Customer Successfully Added')
                this.setState({name: '', email: ''})
            })
        }

        let customers = [];

        for (let i = 0; i < this.state?.customers.length; ++i) {
            //if search value is not blank - run the search value check
            if (this.state.searchValue !== '') {
                if (this.state.customers[i].customer.name.toUpperCase().startsWith(this.state.searchValue.toUpperCase())) {
                    customers.push(
                        <div key={this.state.customers[i].id}>
                            <div>
                                <Customer key={i} customer={this.state.customers[i].customer} expectedTime={this.state.expectedTime} />
                            </div>
                        </div>
                    );
                }
            }
            //otherwise, just display the customer
            else {
                customers.push(
                    <div key={this.state.customers[i].id}>
                        <div>
                            <Customer key={i} customer={this.state.customers[i].customer} expectedTime={this.state.expectedTime} />
                        </div>
                    </div>
                );
            }


        }



        return (
            <div>
                <Form>
                    <Label>Filter by Name</Label>
                    <div class="row">
                            <Input value={this.state.searchValue} onInput={e => this.setState({ searchValue: e.target.value })} type="text" name="name" />
                    </div>

                    <br />

                    <Label>OR</Label>
                    <br />
             
                    <Label>Add a Customer</Label>

                    <div class="row">

                            <Input value={this.state.name} placeholder={'Name'} onInput={e => this.setState({ name: e.target.value })} type="text" name="name" />
                            <br />
                            <Input value={this.state.email} placeholder={'Email Address'} onInput={e => this.setState({ email: e.target.value })} type="text" name="email" />
           
                        <div class="column">
                            <Button onPointerDown={() => addCustomer()}>Add</Button>
                        </div>
                    </div>

                </Form>
                <div>
                    {
                        customers
                    }
                </div>
            </div>
        );
    }
}
