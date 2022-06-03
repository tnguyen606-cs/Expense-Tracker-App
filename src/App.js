import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remainning from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    // <p>Hello React!</p>
    <AppProvider>
      <div className="container"> 
        <h1 className="mt-3"> My Trip Canada Budget 2022 </h1>
        <div className="row mt-3">
          <div className="col-sm"> <Budget /> </div>
          <div className="col-sm"> <Remainning /> </div>
          <div className="col-sm"> <Spent /> </div>
        </div>
        <div className="row mt-3"> <ExpenseList /> </div>
        <div className="row mt-3"> <AddExpense /> </div>
      </div>
    </AppProvider>
  )
}

export default App;
