import React from "react";
import UserForm, {User} from "./UserForm";
import OrderItemForm, {Item, Option} from "./OrderItemForm";
import OrderSummary from "./OrderSummary";

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

    onDeleteItem = (e: any):void => {
        const index = parseInt(e.target.dataset.item);
        const order = this.state.order.filter((el, i) => i !== index);
        this.setState({order})
    };

    onItemChange = (item: Item, index: number): void => {
        const { order } = this.state;
        order[index] = item;
        this.setState({order})
    };

    onClientChange = (client: User): void => {
        this.setState({client})
    };


    render() {
        return (
            <div>
                <h1 className="uppercase text-3xl mb-6">Pizza order</h1>
                <h3 className="text-lg font-bold mb-3">Basic information</h3>
                <hr/>
                <UserForm onChange={this.onClientChange} />
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">Choose your pizza</h3>
                        <button
                            className="text-xs border border-2 text-green-500 border-green-300 px-4 py-2"
                            onClick={this.addItem}
                        >Add pizza</button>
                    </div>
                    { this.state.order.map((item,itemIndex) => (
                        <OrderItemForm
                            key={itemIndex}
                            index={itemIndex}
                            onChange={this.onItemChange}
                            onDelete={this.onDeleteItem}
                            sizes={this.props.sizes}
                            toppings={this.props.toppings} />
                    ))}
                </div>
                <OrderSummary order={this.state.order} />
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