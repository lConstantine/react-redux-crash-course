import './App.css';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = amount => {
    dispatch({
      type: "ADD_CASH",
      payload: amount,
    })
  }

  const getCash = amount => {
    dispatch({
      type: "GET_CASH",
      payload: amount,
    })
  }

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className="App" style={{ marginTop: '40vh' }}>
      <>
        <div style={{ fontSize: '3rem' }}>Баланс: {cash}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={() => addCash(+prompt())}>Пополнить счёт</button>
          <button onClick={() => getCash(+prompt())}>Снять со счёта</button>
          <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button onClick={() => getCash(+prompt())}>Удалить клиента</button>
          <button onClick={() => dispatch(fetchCustomers())}>Получить базу клиентов</button>
        </div>
      </>
      <>
        {customers.length > 0
          ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Клиенты:<br />
            {customers.map(customer =>
              <div onClick={() => removeCustomer(customer)}
                style={{ border: "2px solid black", padding: "10px", margin: "5px", width: "200px" }}>
                {customer.name}
              </div>)}
          </div>
          : <div style={{ fontSize: "2rem", marginTop: "50px" }}>
            Клиенты отсутствуют!
          </div>}
      </>
    </div>
  );
}

export default App;
