import React from "react";

interface User {
    name: string
    email: string
    address: string
    phone: string
}

interface Option {
    name: string
    price: number
    id: number
}

interface Size extends Option {
}

interface Topping extends Option {
}

interface Pizza {
    size: Size
    toppings: {
        [id: number]: Topping
    }
}

interface State {
    client: User
    order: Pizza[]
}

interface Props {
    sizes: Option[],
    toppings: Option[]
}

class NewOrder extends React.Component<Props, State>{
    state: State = {
        client: {
            name: '',
            email: '',
            phone: '',
            address: ''
        },
        order: [],
    };

    onTextChange = (e: any): void => {
        let client:any = this.state.client;
        client[e.target.name] = e.target.value;
        this.setState({client});
    };

    onSizeChange = (e: any): void => {
        const selectedSize = this.props.sizes[e.target.value];
        // TODO: get i from event, should be index of pizza in order
        const i = e.target.dataset.pizza;
        const order = this.state.order;
        order[i].size = selectedSize;
        this.setState({order});
    }

    onToppingChange = (e: any): void => {
        const topping = this.props.toppings[e.target.value];
        // TODO: get i from event, should be index of pizza in order
        const i = e.target.dataset.pizza;
        const order = this.state.order;
        const pizza = order[i];
        const toppingExists = pizza.toppings[topping.id];
        if(toppingExists) {
            delete pizza.toppings[topping.id]
        } else {
            pizza.toppings[topping.id] = topping
        }
        this.setState({order})
    };

    onSubmit = (e: any): void => {
        e.preventDefault();
        console.log(this.state);
    };

    addItem = ():void => {
        const defaultSize = {
            "name": "Large",
            "price": 40.00,
            "id": 1
        };
        const newItem = {
            size: defaultSize,
            toppings: {}
        };
        const order = this.state.order;
        order.push(newItem);
        this.setState({order})
    };

    getPrice = (pizza: Pizza): number => {
        let price = 0;
        if(pizza.size) {
            price += pizza.size.price;
        }
        price += Object.values(pizza.toppings).reduce((acc, topping) => acc + topping.price, 0)
        return price;
    }

    getTotal = (): number => {
        return this.state.order.reduce((acc, pizza) => acc + this.getPrice(pizza), 0);
    }

    render() {
        return (
            <div>
                <h1>Pizza order</h1>
                <h3>Basic information</h3>
                <hr/>
                <div>
                    <div>
                        <label>
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                value={this.state.client.name}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>E-mail Address</span>
                            <input
                                type="text"
                                name="email"
                                value={this.state.client.email}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Address</span>
                            <input
                                type="text"
                                name="address"
                                value={this.state.client.address}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Contact number</span>
                            <input
                                type="tel"
                                name="phone"
                                value={this.state.client.phone}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <h3>Choose your pizza</h3>
                    <button onClick={this.addItem}>Add pizza</button>
                    {/* Pizza form*/}
                    { this.state.order.map((pizza, pizzaIndex) => (
                        <div key={pizzaIndex}>
                            <div>
                                <h4>Pizza {pizzaIndex + 1}</h4>
                                <button>Remove Pizza</button>
                            </div>
                            <div>
                                <h4>Choose size</h4>
                                {
                                    this.props.sizes.map((size, i) => (
                                        <label key={size.name + i}>
                                            <input
                                                type="radio"
                                                name={'size' + pizzaIndex}
                                                checked={pizza.size.id === size.id}
                                                data-pizza={pizzaIndex}
                                                onChange={this.onSizeChange}
                                                value={ i }
                                            />
                                            { size.name }
                                        </label>
                                    ))
                                }
                            </div>
                            <div>
                                <h4>Pick your toppings</h4>
                                {
                                    this.props.toppings.map((topping, i) => (
                                        <label key={topping.name + i}>
                                            <input
                                                type="checkbox"
                                                name={'topping' + pizzaIndex}
                                                data-pizza={pizzaIndex}
                                                onChange={this.onToppingChange}
                                                checked={ pizza.toppings[topping.id] !== undefined }
                                                value={ i }
                                            />
                                            {topping.name}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
                {/*Summary*/}
                <div>
                    <h2>Summary</h2>
                    <hr/>
                    {
                        this.state.order.map((pizza, i) => (
                            <div key={i}>
                                <div>
                                    <b>{pizza.size.name} Pizza {i + 1}</b>
                                    <span>..........</span>
                                    <b>$ {this.getPrice(pizza)}</b>
                                </div>
                                {
                                    Object.values(pizza.toppings).map(topping => (
                                        <div key={topping.name}>
                                            <b>{topping.name}</b>
                                            <b>{topping.price}</b>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <hr/>
                    <span>TOTAL</span>
                    <span>$ {this.getTotal()}</span>
                </div>
                <button onClick={this.onSubmit}>Place Order</button>
            </div>
        );
    }
}

export default NewOrder;