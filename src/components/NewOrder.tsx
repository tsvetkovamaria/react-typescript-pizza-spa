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
    toppings: Topping[]
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

    onSubmit = (e: any): void => {
        e.preventDefault();
        console.log(this.state);

    };

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
                    <div>
                        <h4>Pizza 1</h4>
                        <button>Remove Pizza</button>
                    </div>
                    <div>
                        <h4>Choose size</h4>
                        {
                            this.props.sizes.map((size, i) => (
                                <label key={size.name + i}>
                                    <input type="radio" name="size" value={ size.name } />
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
                                    <input type="radio" name="size" value={topping.name}/>
                                    {topping.name}
                                </label>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>Summary</h2>
                    <hr/>
                    <hr/>
                    <span>TOTAL</span>
                    <span>$ 25</span>
                </div>
                <button onClick={this.onSubmit}>Place Order</button>
            </div>
        );
    }
}

export default NewOrder;