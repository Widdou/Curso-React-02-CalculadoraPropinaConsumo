import { useMemo, useState } from "react";

import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {

	const [order, setOrder] = useState<OrderItem[]>([])
	const [tip, setTip] = useState(0)

	useMemo(() => {if(order.length === 0) setTip(0)}, [order])

	// const subtotalAmount = useMemo(() => order.reduce((total, orderItem) => {
  //   total = total + (orderItem.price * orderItem.quantity)
  //   return total
  // }, 0), [order])
	
	function addItem(item : MenuItem) {

		const itemExists = order.findIndex((orderItem) => orderItem.id === item.id)

		if(itemExists >= 0) {
			const updatedQuantity = order[itemExists].quantity += 1

			const updatedOrder = order.map(
				orderItem => orderItem.id === item.id
				? {...item, quantity: updatedQuantity} 
				: orderItem
			) 

			setOrder(updatedOrder);
		} else {
			const newOrderItem : OrderItem = {...item, quantity: 1}
			setOrder([...order, newOrderItem]);
		}

	}

	function removeOrderItem(id : OrderItem['id']) {
		const updatedOrder =order.filter(orderItem => orderItem.id !== id)
		setOrder(updatedOrder);
	}
	
	function placeOrder() {
		setOrder([])
		setTip(0)
	}

	return {
		order,
		// subtotalAmount,
		tip,
		addItem,
		setTip,
		removeOrderItem,
		placeOrder,
	}
}