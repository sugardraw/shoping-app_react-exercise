import React, { Component } from 'react';


class ProductCard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            currency: '',
            checked: ''
        }
        this.products = [
            {
                name: 'title1',
                price: 20,
                currency: 'EUR'
            },
            {
                name: 'title2',
                price: 30,
                currency: 'EUR'
            },
            {
                name: 'title3',
                price: 60,
                currency: 'EUR'
            },
            {
                name: 'title4',
                price: 45,
                currency: 'EUR'
            },
            {
                name: 'title5',
                price: 25,
                currency: 'EUR'
            },
            {
                name: 'title6',
                price: 225,
                currency: 'EUR'
            },
            {
                name: 'title7',
                price: 15,
                currency: 'EUR'
            },
        ]
        this.yourChoice=[]

    }


    handleChange = (e)=>{
        if(e.target.checked == true){
            this.setState({
                name: e.target.name,
                price: e.target.dataset.price,
                currency: e.target.dataset.currency,
                checked:true
            })
            this.yourChoice.push(this.state);
            console.log(this.yourChoice)
        }else if(e.target.checked == false){
            this.setState({
                checked:false
            })
            this.yourChoice.pop(this.state);
            console.log(this.yourChoice)
            
        }
       
    }




    render() {
        const products = this.products.map((product, i) => {
            return (
                <div className="card m-2 mt-4 p-4 bg-white rounded">
                    <div className="card text-center">
                        <div className="card-header">{product.name}</div>
                        <div className="card-body">{product.price} {product.currency}</div>
                    </div>
                    <div className="text-right">
                        <label className ="mr-2 pt-2" htmlFor={product.name}>check to add</label>
                    <input type="checkbox" onChange = {this.handleChange} className="btn btn-secondary m-auto" data-price= {product.price} data-currency= {product.currency} name={product.name} />
                    </div>
                </div>
            )
        });


        return (
            <div className="col-lg-8">
                {products}
            </div>
        )
    }

}





export default ProductCard;




