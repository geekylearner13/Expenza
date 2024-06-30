import React from "react";
function ExpenseForm(props){
    const [expense,setExpense] = React.useState({
        category:"Stationary",
        amount:"" ,
        description:"",
        date:""
    });
    function handleChange(event){
        const{name,value} = event.target;
        setExpense((prevValue)=>{
           return{...prevValue,
            [name]:value,
            date:new Date(),}
        });
    }
    function handleClick(event){
        props.onAdd(expense);
        setExpense({
            category:"",
            amount:"",
            description:"",
            date:""
        });
        props.getTotalExpense();
        event.preventDefault();
    }
    return(
    <section id="addExpense">
    <div className="expense-form-div">
    <div className="section-heading">
        <h1 className="big-heading">Your Finances, Illuminated.</h1>
        <h3>Take charge of your budget, visualize spending patterns, and achieve your financial goals.</h3>
    </div>
    
    <h1 style={{textAlign:"center"}}>Add Your Expense Details Here:</h1>
    <form className="create-note">
        
        <label>Choose the category for your expense: </label>
        <select onChange={handleChange} name="category" id="" value={expense.category}>
        <option value="Stationary">Stationary</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Recharge">Reacharge</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <label>Amount: </label>
      <input onChange = {handleChange} type="number" name="amount" placeholder="Enter the Amount" value={expense.amount}></input>
      <label>Description: </label>
      <textarea onChange = {handleChange} name="description" placeholder="Write Description for Expense" value={expense.description}/>
      <button onClick={handleClick}>Add</button>
      </form> 
      <div className="section-heading">
        <h1 className="big-heading">Financial Footprints:</h1>
        <h3>Review Your Expenses</h3>
    </div>
    </div>
    </section> 
    );  
};
export default ExpenseForm;