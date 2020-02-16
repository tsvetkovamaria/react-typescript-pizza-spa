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

class NewOrder extends React.Component<{}, State>{
    state: State = {
        client: {
            name: '',
            email: '',
            phone: '',
            address: ''
        },
        order: []
    }

    handleInputChange(){

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
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>E-mail Address</span>
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Address</span>
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Contact number</span>
                            <input type="text"/>
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
                            ['Small', 'Medium', 'Large'].map(size => (
                                <label>
                                    <input type="radio" name="size" value={ size } />
                                    { size }
                                </label>
                            ))
                        }
                    </div>
                    <div>
                        <h4>Pick your toppings</h4>
                        {
                            ['Bacon', 'Pepperoni'].map(topping => (
                                <label>
                                    <input type="radio" name="size" value={topping} />
                                    {topping}
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
                <button>Place Order</button>
            </div>
        );
    }
}

export default NewOrder;