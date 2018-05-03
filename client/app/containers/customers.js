
import React, { Component } from 'react';
import {connect } from 'react-redux';

class Customers extends Component {

    constructor () {
        super()
    }

    componentDidMount() {

        fetch('http://localhost:5000/api/customers')
            .then(res => {
                return res.json();
            })
            .then(customers => {
                console.log('customers', customers)
            })
    }

    render() {

        return (
            <div>
                <h2>Customers</h2>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const dispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, dispatchToProps)(Customers);