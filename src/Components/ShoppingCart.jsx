import React, { Component } from 'react';
import CurrencyChanger from './CurrencyChanger'


class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            name: 'EUR'
        }

    }

    submitOrder = (e) => {
        e.preventDefault();
        console.log(e, this.state.cartList);
    }



    calculateTotalPrice = (result) => {
        
        if (this.props.ordering.length !== 0) {
            
            result = this.props.ordering
            .map((item, i) => Number(item.price))
            .reduce((total, price) => total + price);

            this.state.total = result;

            return this.state.total + ` ${this.state.name}`;
        }
    }

    calculateCurrency = (data)=>{
        document.querySelector('#resultTotals div').textContent = (this.state.total * data.rate).toFixed(2)+` ${data.name}`
       
    }
        


    render() {

        const cartList = this.props.ordering.map((product) => {
            return (
                <div className="p-4" key={product.id}>
                    Name:<h4 className="text-primary">{product.name}</h4>
                    Price: <h2>{product.price} {product.currency}</h2>
                    <hr />
                </div>

            )
        });



        return (
            <div className="col-lg-4">
                <div className="card text-center mt-4 p-4 m-2 shadow bg-white rounded">
                    <h3 className="text-center p-3">Shopping Cart</h3>
                    {cartList}
                    <h2 className='text-right p-2' id="result">
                        <span id="resultTotals"> total: {this.calculateTotalPrice()}
                            <div className="small text-secondary"></div>
                        </span>
                    </h2>
                    <form className=" text-right m-2" onSubmit={this.submitOrder}>
                        {/* <button className="btn btn-secondary m-auto " > Calculate Total Price</button> */}
                        <button type="submit" className="btn btn-primary" > submit</button>
                    </form>
                    <CurrencyChanger onCurrencyChanged= {this.calculateCurrency}/>
                </div>

            </div>

        );
    }

}

export default ShoppingCart;



