
import { Dispatch, SetStateAction } from "react"

import type { OrderItem } from "../types"
import OrderItemDetail from "./OrderItemDetail"
import OrderTotals from "./OrderTotals"

type OrderContentProps = {
  order: OrderItem[]
  tip: number
  setTip: Dispatch<SetStateAction<number>>
  removeOrderItem: (orderItem : OrderItem['id']) => void
  placeOrder: () => void
}

export default function OrderContent({
    order,
    tip,
    setTip,
    removeOrderItem,
    placeOrder
  } : OrderContentProps) {
  return (<>
    <div>

      <h2 className="font-black text-4xl mb-5">Consumo</h2>

      <div className="space-y-3 p-5 border-2 rounded-xl border-rose-500">
      
        
        {order.length == 0 
          ? <p className="text-center">La orden esta vacia</p> 
          : <>

            {order.map(orderItem => <>
              <OrderItemDetail
                key={orderItem.id}
                orderItem={orderItem}
                removeOrderItem={removeOrderItem}
              />
            </>)}

            <OrderTotals
              order={order}
              tip={tip}
              setTip={setTip}
            />

            <button
              className="w-full p-2 font-bold 
                rounded-lg border-2 border-rose-500
                hover:bg-rose-500 hover:text-white
                active:bg-rose-700 "
              disabled={order.length === 0}
              onClick={placeOrder}
            >Guardar Orden</button>
            
          </>
        }

      </div>

    </div>
  </>)
}

