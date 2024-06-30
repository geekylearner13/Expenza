import React from "react";
import Navbar from "./Navbar";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
function App(){
    const[items,setItems] = React.useState([]);
    const[sum,SetSum] = React.useState("");
    function addExpense(newItem){
        setItems((prevItems)=>{
            return [...prevItems,newItem];
        });
        
    }
    function deleteExpense(id) {
        setItems((prevItems) => {
          return prevItems.filter((expenseItem, index) => {
            return index !== id;
          });
        });
      }
    function calculateSum(){
        const expenseItem = [];
        items.forEach(function(entries){
           const numE = parseInt(entries.amount);
            expenseItem.push(numE);
        });

        // const totalExpense = expenseItem.reduce(function(accumulator,currentAmount){
        //     return accumulator + currentAmount;
        // });
        // SetSum(totalExpense);
        
        if(expenseItem.length>=1){
            const totalExpense = expenseItem.reduce(function(accumulator,currentAmount){
                return accumulator + currentAmount;
            });
            SetSum(totalExpense);
            return sum;
        }   
        
    }  
    return <div>
        <Navbar />
        <HeroSection />
        <Feature />
        <ExpenseForm getTotalExpense={calculateSum} onAdd={addExpense} />
        {items.map((expenseItem,index)=>{
            return (
            <ExpenseList
            key = {index}
            id = {index}
            amount = {expenseItem.amount}
            description ={expenseItem.description}
            date = {expenseItem.date.toString()}
            category = {expenseItem.category} 
            onDelete={deleteExpense}
            />)
        })};
        
    </div>
}
export default App;