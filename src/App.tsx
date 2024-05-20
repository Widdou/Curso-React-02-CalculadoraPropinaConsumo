import { menuItems } from "./data/db"

import useOrder from "./hooks/useOrder"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"

function App() {

  const { order, tip, addItem, removeOrderItem, setTip, placeOrder} = useOrder()

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
                addItem={() => addItem(item)}
              />
            })}

          </div>
        </div>

        <OrderContent
          order={order}
          tip={tip}
          setTip={setTip}
          removeOrderItem={removeOrderItem}
          placeOrder={placeOrder}
        />

      </main>
    </>
  )
}

export default App
