import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (<>

    <button className="
      w-full flex justify-between p-3 
      border-2 border-rose-500 rounded-lg
     hover:bg-rose-500
    "
      onClick={() => dispatch({type: 'add-item', payload: {item: item}})}  
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>

  </>)
}