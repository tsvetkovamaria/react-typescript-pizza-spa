import React, {Component} from "react";

export interface Option {
    name: string
    price: number
    id: number
}

export interface Item {
    size: Size
    toppings: {
        [id: number]: Topping
    }
}

export interface Size extends Option {
}

interface Topping extends Option {
}

interface State {
    item: Item
    isOpen: boolean
}

interface Props {
    sizes: Size[]
    toppings: Topping[]
    index: number
    onChange(item: Item, index: number): void
    onDelete(e: any): void
}


class OrderItemForm extends Component<Props, State> {
    state: State = {
        item: {
            size: {...this.props.sizes[0]},
            toppings: {}
        },
        isOpen: true
    };

    onSizeChange = (e: any): void => {
        const selectedSize = this.props.sizes[e.target.value];
        const item = this.state.item;
        item.size = selectedSize;
        this.setState({item});
        this.props.onChange(item, this.props.index);
    };

    onToppingChange = (e: any): void => {
        const topping = this.props.toppings[e.target.value];
        const item = this.state.item;
        const toppingExists = item.toppings[topping.id];
        if(toppingExists) {
            delete item.toppings[topping.id]
        } else {
            item.toppings[topping.id] = topping
        }
        this.setState({item});
        this.props.onChange(item, this.props.index);

    };

    toggle = (e: any): void => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <div className="mb-6">
                <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                    <h4 className="uppercase font-bold text-lg">Pizza {this.props.index + 1}</h4>
                    <button
                        onClick={this.props.onDelete}
                        data-item={this.props.index}
                        className="text-xs border border-2 text-red-500 border-red-500 px-4 py-2 ml-auto mr-2">
                        Remove Pizza
                    </button>
                    <span
                        onClick={this.toggle}
                        className="p-4 cursor-pointer">
                        {this.state.isOpen? '▲' : '▼'}
                    </span>
                </div>
                <div className={this.state.isOpen ? '' : 'hidden'}>
                    <div className="p-4">
                        <h4 className="font-bold text-lg mb-4">Choose size</h4>
                        {
                            this.props.sizes.map((size, i) => (
                                <label
                                    key={size.name + i}
                                    className={'px-6 py-3 inline-block border border-blue mr-2 ' + (this.state.item.size.id === size.id? 'bg-blue-400 text-white': '')}
                                >
                                    <input
                                        type="radio"
                                        name={'size' + this.props.index}
                                        checked={this.state.item.size.id === size.id}
                                        onChange={this.onSizeChange}
                                        value={ i }
                                        className='hidden'
                                    />
                                    <span>{ size.name }</span>
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
                                    className={'px-6 py-3 border border-blue mr-2 ' + (this.state.item.toppings[topping.id] !== undefined? 'bg-blue-500 text-white': '')}
                                >
                                    <input
                                        type="checkbox"
                                        name={'topping' + this.props.index}
                                        onChange={this.onToppingChange}
                                        checked={ this.state.item.toppings[topping.id] !== undefined }
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
            </div>
        )
    }
}

export default OrderItemForm;