import React, { useState } from "react"
import Compose from './assets/Compose.png'
import Delete from './assets/Delete.png'
import Dollor from './assets/Dollar.png'
import Expenses from './assets/Expenses.png'
import Money from './assets/Money.png'
import './App.css';



function App() {

  const [data, setData] = useState({

    budget: 0,
    balance: 0,
    expenses: 0,
    list: []


  });

  const [input, setInput] = useState({})



  const handleChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }

  const handleCalculate = (e) => {
    e.preventDefault()
    setData(prev => ({ ...prev, budget: input.budget }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      list: [...prev.list, { amount: input.expenses, title: input.expenseTitle }],
    }))

    setInput({})
  }

  const handleEdit = (e) => {
    setData(prev => ({
      ...prev,
      list: [],
      expenses: 0,
      title: ""

    })
    )
    setInput({})
  }

  const handleDelete = (e) => {
    setData(prev => ({
      ...prev,
      list: []
    }))
    setInput({})
  }


  return (
    <>
      {console.log('data', data)}

      <div id="main">
        <h4 id="title">BUDGET APP</h4>
        <div id="main2">
          <div id="left">

            <div id="container1">
              <form action="">
                <p className="text">Please Enter Your Budget</p>
                <input type="text" name="budget" id="input1" onChange={(e) => handleChange(e)} />
                <button id="btn1" type="submit" onClick={(e) => handleCalculate(e)}>Calculate</button>
              </form>
            </div>


            <div id="container2">
              <form action="">
                <p className="text">Please Enter Your Expense</p>
                <input type="text" name="expenseTitle" className="input2" onChange={(e) => handleChange(e)} />
                <p className="text">Please Enter Expense Amount</p>
                <input type="text" name="expenses" className="input2" onChange={(e) => handleChange(e)} />
                <button id="btn2" type="submit" onClick={(e) => handleSubmit(e)}>Add Expense</button>
              </form>
            </div>

          </div>
          <div id="right">

            <div id="right-top">
              <div className="flex">BUDGET
                <img src={Money} alt="Dollor bill" className="img1" />
                <h2 className="amount" id="budget">{`$ ${data.budget}`}</h2>
              </div>
              <div className="flex">EXPENSES
                <img src={Expenses} alt="credit-card" className="img1" />
                <h2 className="amount1">{`$ ${data.list.map(({ amount }) => parseInt(amount)).reduce(((a, b) => a + b), 0)}`}</h2>
              </div>
              <div className="flex">BALANCE
                <img src={Dollor} alt="Dollar-sign" className="img1" />
                <h2 className="amount">{`$ ${data.budget - data.list.map(({ amount }) => parseInt(amount)).reduce((a, b) => a + b, 0)}`}</h2>
              </div>
            </div>
            <div id="right-bottom">
              <div id="right-bottom-text">
                <p className="etev-text">Expense Title</p>
                <p className="etev-text">Expense Value</p>
              </div>

              {
                data.list.map((item) => {
                  return (
                    <>
                      <div id="list">
                        <div><p className="etev">{`${item.title}`}</p></div>
                        <div><p className="etev">{`$${item.amount}`}</p></div>
                        <div>
                          <img src={Compose} alt="edit button" className="img2" onClick={(e) => handleEdit(e)} />
                          <img src={Delete} alt="delete button" className="img2" onClick={(e) => handleDelete(e)} />
                        </div>
                      </div>
                    </>
                  )

                })
              }




            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
