import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: React.Dispatch<OrderActions>
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

  const subtotalAmount = useMemo(() => order.reduce((total, orderItem) => {
    total = total + (orderItem.price * orderItem.quantity)
    return total
  }, 0), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip]) 

  const total = useMemo(() => subtotalAmount + tipAmount, [order, tip])

  return (<>
  
    <div className="border-t-2 border-rose-500 text-lg pt-1 space-y-2">

      <h2 className="font-black text-2xl">Totales y Propina</h2>
      
      <form>

        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="text-sm items-center">
            <label htmlFor={tipOption.id}>
            <input 
              id={tipOption.id} 
              type="radio" 
              name="tip" 
              value={tipOption.value}
              onChange={(e) => 
                dispatch({type: "add-tip", payload: {value: +e.target.value}})}
              checked={tipOption.value === tip}
            /> {tipOption.label}</label>
          </div>
        ))}

      </form>

      <p className="text-sm">Sub-Total a pagar {''}
        <span className="font-black">{formatCurrency(subtotalAmount)}</span>
      </p>

      <p className="text-sm">Propina {''} 
        <span className="font-black">{formatCurrency(tipAmount)}</span>
      </p>

      <p className="text-sm">Total a pagar {''} 
        <span className="font-black">{formatCurrency(total)}</span>
      </p>

    </div>

  </>)
}