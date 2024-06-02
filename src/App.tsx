import { menuItems } from "./data/db"

import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import { useReducer } from "react"
import { OrderReducer, initialState } from "./reducers/order-reducer"

function App() {

  const [state, dispatch] = useReducer(OrderReducer, initialState)

  return (
    <>

      <header className=" bg-rose-500 py-5">
        <h1 className="text-center font-black text-4xl">
          Calculadora de Propinas y de Consumo
        </h1>
      </header>
      
      <main 
        className=" max-w-7xl mx-auto py-12 px-5 grid md:grid-cols-2 gap-3"
      >
        <div>
          <h2 className="font-black text-4xl mb-5">Menú</h2>
          
          <div className="space-y-3">

            {menuItems.map(item => {
              return <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            })}

          </div>
        </div>

        <OrderContent
          order={state.order}
          tip={state.tip}
          dispatch={dispatch}
        />

      </main>
    </>
  )
}

export default App
