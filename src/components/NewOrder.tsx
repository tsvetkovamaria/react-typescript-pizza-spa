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

interface Item {
    size: Size
    toppings: {
        [id: number]: Topping
    }
}

interface State {
    client: User
    order: Item[]
}

interface Props {
    sizes: Option[]
    toppings: Option[]

    onOrder(order: any): void
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
        const i = e.target.dataset.item;
        const order = this.state.order;
        order[i].size = selectedSize;
        this.setState({order});
    }

    onToppingChange = (e: any): void => {
        const topping = this.props.toppings[e.target.value];
        const i = e.target.dataset.item;
        const order = this.state.order;
        const item = order[i];
        const toppingExists = item.toppings[topping.id];
        if(toppingExists) {
            delete item.toppings[topping.id]
        } else {
            item.toppings[topping.id] = topping
        }
        this.setState({order})
    };

    serializeOrder = () => {
        const order = {
            personalDetails: this.state.client,
            order: this.state.order.map(item => ({
                size: item.size.name,
                toppings: Object.values(item.toppings).map(topping => topping.name)
            }))
        };
        return order;
    };
    onSubmit = (e: any): void => {
        e.preventDefault();
        const order = this.serializeOrder();
        this.props.onOrder(order);
        console.log(order);
    };

    addItem = ():void => {
        const newItem = {
            size: {...this.props.sizes[0]},
            toppings: {}
        };
        const order = this.state.order;
        order.push(newItem);
        this.setState({order})
    };

    getPrice = (item: Item): number => {
        let price = 0;
        if(item.size) {
            price += item.size.price;
        }
        price += Object.values(item.toppings).reduce((acc, topping) => acc + topping.price, 0)
        return price;
    }

    getTotal = (): number => {
        return this.state.order.reduce((acc, item) => acc + this.getPrice(item), 0);
    }

    render() {
        return (
            <div>
                <h1 className="uppercase text-3xl mb-6">Pizza order</h1>
                <h3 className="text-lg font-bold mb-3">Basic information</h3>
                <hr/>
                <div className="grid grid-cols-2 gap-10 py-4 mb-8">
                    <div>
                        <label>
                            <span className="block text-sm mb-2">Name</span>
                            <input
                                type="text"
                                name="name"
                                className="block w-full border p-2"
                                value={this.state.client.name}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className="block text-sm mb-2">E-mail Address</span>
                            <input
                                type="text"
                                name="email"
                                className="block w-full border p-2"
                                value={this.state.client.email}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className="block text-sm mb-2">Address</span>
                            <input
                                type="text"
                                name="address"
                                className="block w-full border p-2"
                                value={this.state.client.address}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className="block text-sm mb-2">Contact number</span>
                            <input
                                type="tel"
                                name="phone"
                                className="block w-full border p-2"
                                value={this.state.client.phone}
                                onChange={this.onTextChange}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">Choose your pizza</h3>
                        <button
                            className="text-xs border border-2 text-green-500 border-green-300 px-4 py-2"
                            onClick={this.addItem}
                        >Add pizza</button>
                    </div>

                    {/* Pizza form*/}
                    { this.state.order.map((item,itemIndex) => (
                        <div key={itemIndex} className="mb-6">
                            <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                                <h4 className="uppercase font-bold text-lg">Pizza {itemIndex + 1}</h4>
                                <button
                                    className="text-xs border border-2 text-red-500 border-red-500 px-4 py-2">
                                    Remove Pizza
                                </button>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-lg mb-4">Choose size</h4>
                                {
                                    this.props.sizes.map((size, i) => (
                                        <label
                                            key={size.name + i}
                                            className={'px-6 py-3 inline-block border border-blue mr-2 ' + (item.size.id === size.id? 'bg-blue-400 text-white': '')}
                                        >
                                            <input
                                                type="radio"
                                                name={'size' + itemIndex}
                                                checked={item.size.id === size.id}
                                                data-item={itemIndex}
                                                onChange={this.onSizeChange}
                                                value={ i }
                                                className='hidden'
                                            />
                                            <span>
                                                { size.name }
                                            </span>
                                        </label>
                                    ))
                                }
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-lg mb-4">Pick your toppings</h4>
                                <div className="grid grid-cols-4 gap-3">
                                {
                                    this.props.toppings.map((topping, i) => (
                                        <label
                                            key={topping.name + i}
                                            className={'px-6 py-3 border border-blue mr-2 ' + (item.toppings[topping.id] !== undefined? 'bg-blue-500 text-white': '')}
                                        >
                                            <input
                                                type="checkbox"
                                                name={'topping' + itemIndex}
                                                data-item={itemIndex}
                                                onChange={this.onToppingChange}
                                                checked={ item.toppings[topping.id] !== undefined }
                                                value={ i }
                                                className="hidden"
                                            />
                                            {topping.name}
                                        </label>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*Summary*/}
                <div className="mb-10">
                    <h2 className="text-lg font-bold mb-3">Summary</h2>
                    <hr className="mb-4" />
                    {
                        this.state.order.map((item, i) => (
                            <div key={i} className="text-sm">
                                <div className="flex justify-between mb-2 mt-4">
                                    <b className="mr-8 whitespace-no-wrap">{item.size.name} Pizza {i + 1}</b>
                                    <span className="w-full border-b"></span>
                                    <b className="ml-8 whitespace-no-wrap">$ {this.getPrice(item)}</b>
                                </div>
                                {
                                    Object.values(item.toppings).map(topping => (
                                        <div key={topping.name} className="pl-10 flex justify-between">
                                            <span>{topping.name}</span>
                                            <span>{topping.price}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <hr className="my-4"/>
                    <div className="flex justify-between text-2xl bold">
                        <span>TOTAL</span>
                        <span>$ {this.getTotal()}</span>
                    </div>
                </div>
                <div className="text-right">
                    <button
                        className="inline-block text-xs border border-2 text-teal-500 border-teal-300 px-4 py-2"
                        onClick={this.onSubmit}
                    >Place Order</button>
                </div>
            </div>
        );
    }
}

export default NewOrder;