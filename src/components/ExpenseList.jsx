import React from "react";
function ExpenseList(props){
    function handleClick() {
        props.onDelete(props.id);
      }

    function handleEdit(){
        props.onEdit(props.id);
    }
    return(
    <section id="expenseList">
    <div className="note">
        <h1>₹ {props.amount}</h1>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <p>{props.category}</p>
        <button onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
        <button onClick={handleEdit}><i class="fa-solid fa-pen-to-square"></i></button>

    </div>
    </section>);
}
export default ExpenseList;