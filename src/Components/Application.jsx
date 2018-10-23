
import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

import Navigation from './Navigation';


class Application extends Component {
    constructor() {
        super();


        this.choice = {
            name: 'Choose a Product',
            price: 0,
            currency: 'EUR',
            checked: ''
        }


        this.products = [
            {
                id: '01',
                name: 'title1',
                price: 20,
                currency: 'EUR'
            },
            {
                id: '02',
                name: 'title2',
                price: 30,
                currency: 'EUR'
            },
            {
                id: '03',
                name: 'title3',
                price: 60,
                currency: 'EUR'
            },
            {
                id: '04',
                name: 'title4',
                price: 45,
                currency: 'EUR'
            },
            {
                id: '05',
                name: 'title5',
                price: 25,
                currency: 'EUR'
            },
            {
                id: '06',
                name: 'title6',
                price: 225,
                currency: 'EUR'
            },
            {
                id: '07',
                name: 'title7',
                price: 15,
                currency: 'EUR'
            },
        ]
        this.yourChoice = [];

    }




    handleChange = (e) => {

        let choice;
        for (let i in  this.products) {
            if ( this.products[i].id == e.target.dataset.id) {
                choice = this.products[i];
                break;
            }
        }
        if ( e.target.checked == true) {

            let foundInYourChoice = false;
            for (let i in this.yourChoice) {
                if (this.yourChoice[i].id == choice.id) {
                    foundInYourChoice = true;
                    break;
                }
            }

            if (foundInYourChoice === false) {
                this.yourChoice.push(choice);
                this.forceUpdate();
            }


        } else {
            for (let i in this.yourChoice) {
                if (this.yourChoice[i].id == choice.id) {
                    this.yourChoice.splice(i,1)
                    this.forceUpdate();
                    break;
                }
            }
        }
    }








    render() {
        const products = this.products.map((product, i) => {
            return (
                <div className="card m-2 mt-4 p-4 bg-white rounded" key={product.id}>
                    <div className="card text-center">
                        <div className="card-header">{product.name}</div>
                        <div className="card-body">{product.price} {product.currency}</div>
                    </div>
                    <div className="text-right">
                        <label className="mr-2 pt-2" htmlFor={product.name}>add to cart</label>
                        <input 
                            type="checkbox" 
                            onClick={this.handleChange} 
                            className="btn btn-secondary m-auto" 
                            data-id={product.id}  
                        />
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            {products}
                        </div>
                        <ShoppingCart ordering={this.yourChoice} />

                    </div>
                </div>
            </div>
        );

    }
}



export default Application;

















