import React, { Component } from 'react';
import CurrencyChanger from './CurrencyChanger'


class ShoppingCard extends Component {
    constructor(props) {
        super(props);

        this.card = {
            name:'add a product',
            items: [],
            totalPrice: 0,
            totalItems: 0,
            itemPrice: 10,
            currency: 'EUR',
            currencyRate: 1

        }
        this.state = this.card;

    }


    // increaseTotalItems = () => {
    //     // this.card.totalItems++;
    //     this.setState(this.card);
    //     this.calculatePrices()
    // }

    calculatePrices = (totalItems) => {
        if (this.card.totalItems > 0) {
            this.card.totalPrice = (this.card.itemPrice * this.card.totalItems) * this.card.currencyRate;
        }
        this.setState(this.card);
    }

    changeCurrency = (obj) => {

        if (typeof obj !== 'object') {
            return;
        }
        console.log(obj)
        this.card.currency = obj.name;
        this.card.currencyRate = obj.rate;

        this.calculatePrices();
    }
    changeCurrency = (obj) => {

        if (typeof obj !== 'object') {
            return;
        }
        if (obj.hasOwnProperty('name')
            && obj.hasOwnProperty('rate')) {

            console.log(obj)
            this.card.currency = obj.name;
            this.card.currencyRate = obj.rate;

            this.calculatePrices();
        }
    }







    render() {
        return (
            <div className="col-lg-4">
                <div className="card text-center mt-4 p-4 m-2 shadow bg-white rounded">
                    Name:<h4 className="text-primary">{this.state.name}</h4>
                    Price: <h2>{this.state.totalPrice} {this.state.currency}</h2>
                    <hr />
                    Products: <span>{this.state.totalItems}</span>
                    <hr />
                    <div className=" d-flex justify-content-around w-75 m-auto">
                        <button className="btn btn-secondary m-auto " onClick={this.calculatePrices}> Calculate Total Price</button>
                        <button type="submit" className="btn btn-primary m-auto" > submit</button>
                    </div>
                    <hr />
                    <CurrencyChanger onCurrencyChange={this.changeCurrency} />

                </div>
            </div>

        );
    }

}

export default ShoppingCard;



