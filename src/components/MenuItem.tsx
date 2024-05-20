import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item : MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (<>

    <button className="
      w-full flex justify-between p-3 
      border-2 border-rose-500 rounded-lg
     hover:bg-rose-500
    "
      onClick={() => addItem(item)}  
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>

  </>)
}