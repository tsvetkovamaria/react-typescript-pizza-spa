import React, {Component} from "react";
import {Item} from "./OrderItemForm";

interface Props {
    order: Item[]
}

class OrderSummary extends Component<Props> {
    getPrice = (item: Item): number => {
        let price = 0;
        if(item.size) {
            price += item.size.price;
        }
        price += Object.values(item.toppings).reduce((acc, topping) => acc + topping.price, 0)
        return price;
    }
    getTotal = (): number => {
        return this.props.order.reduce((acc, item) => acc + this.getPrice(item), 0);
    }
    render() {
        return (
            <div className="mb-10">
                <h2 className="text-lg font-bold mb-3">Summary</h2>
                <hr className="mb-4" />
                {
                    this.props.order.map((item, i) => (
                        <div key={i} className="text-sm">
                            <div className="flex justify-between mb-2 mt-4">
                                <b className="mr-8 whitespace-no-wrap">{item.size.name} Pizza {i + 1}</b>
                                <span className="w-full border-b"></span>
                                <b className="ml-8 whitespace-no-wrap">$ {this.getPrice(item) || '0'}</b>
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
                    <span>$ {this.getTotal() || '0'}</span>
                </div>
            </div>
        )
    }
}

export default OrderSummary;