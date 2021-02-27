import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { addCashAction, getCashAction } from './store/actions/actions'
import { addCustomerAction, removeCustomerAction, fetchCustomers } from './store/actions/actions'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = amount => dispatch(addCashAction(amount))
  const getCash = amount => dispatch(getCashAction(amount))

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => dispatch(removeCustomerAction(customer.id))

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
              <div
                key={customer.id}
                onClick={() => removeCustomer(customer)}
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
