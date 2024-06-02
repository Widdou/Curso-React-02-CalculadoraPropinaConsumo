/**
 * Un Reducer es un patron de diseño donde se abstrae y centraliza la logica del manejo de estados de un componente  
 */

import { MenuItem, OrderItem } from "../types"

export type OrderActions = 
  {type: 'add-item', payload: {item: MenuItem}} | 
  {type: 'remove-item', payload: {id: OrderItem['id']}} | 
  {type: 'add-tip', payload: {value: number}} | 
  {type: 'place-order'}

type OrderState = {
  order : OrderItem[]
  tip: number
}

export const initialState : OrderState = {
  order: [],
  tip: 0
}

export const OrderReducer = (
  state : OrderState = initialState,
  action : OrderActions
) => {

  if(action.type == 'add-item') {
    const itemExists = state.order.findIndex((item) => item.id === action.payload.item.id)

    let order : OrderItem[] = []
		if(itemExists >= 0) {

			order = state.order.map(
				item => item.id === action.payload.item.id
				? {...action.payload.item, quantity: item.quantity++} 
				: item
			) 

		} else {
			const newItem : OrderItem = {...action.payload.item, quantity: 1}
      order = [...state.order, newItem]
		}

    return {
      ...state,
      order
    }

  }
  
  if(action.type == 'remove-item') {
    return {
      ...state,
      order: state.order.filter(item => action.payload.id !== item.id)
    }
  }
  
  if(action.type == 'add-tip') {
    const tip = action.payload.value

    return {
      ...state,
      tip
    }
  }
  
  if(action.type == 'place-order') {
    return {
      ...state,
      order: [],
      tip: 0,
    }
  }
  
 
  return state
} 

