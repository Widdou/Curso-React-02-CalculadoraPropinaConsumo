import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderItemProps = {
  orderItem: OrderItem
  removeOrderItem : (id : OrderItem['id']) => void
}

export default function OrderItemDetail({orderItem, removeOrderItem} : OrderItemProps) {

  return (<>
  
    <div className="flex justify-between gap-3 items-center
      border-t border-gray-200 pt-3">
      <div className="w-full "> 
        <p>{orderItem.name}</p>
        <p className="font-bold text-sm">
          Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}</p>
      </div>
    
      <button
        className="size-8 rounded-full bg-rose-600 text-white font-black"
        onClick={() => removeOrderItem(orderItem.id)}
      >X</button>
    
    </div>
  </>)

}