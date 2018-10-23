import React from "react";

class CurrencyChanger extends React.Component {
    constructor(props) {
        super(props);

        this.currencies = [
            {
                name: 'USD',
                rate: 1.16
            },
            {
                name: 'EUR',
                rate: 1
            },
            {
                name: 'EGP',
                rate: 20.73225
            }
        ];
    }


    chooseCurrency = (name) => {
        for (let i in this.currencies) {
            if (this.currencies.hasOwnProperty(i) && this.currencies[i].name === name) {
                // fire event
                this.props.onCurrencyChanged(this.currencies[i]);
                break;
            }
        }
    }

    render() {
        let buttonsList = this.currencies.map((currency) => {
            return (
  
                    <button className="btn btn-primary m-2 mt-2"
                        onClick={() => { this.chooseCurrency(currency.name) }}
                        key={currency.name}
                    >
                        {currency.name}
                    </button>

            );
        })

        return (
            <div className="text-right mt-2">
                <hr/>
                {buttonsList}
            </div>
        );
    }
}

export default CurrencyChanger;