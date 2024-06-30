import React from "react";
function Navbar(){
    return(<div>
        {/* <!-- Nav Bar --> */}
    <nav class="navbar navbar-expand-lg navbar-dark  ">
      <a class="navbar-brand" href="#jjk">Expenza</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
          <li class="nav-item">
              <a class="nav-link " href="#home">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link " href="#addExpense">Add Expense</a>
          </li>
          <li class="nav-item">
              <a class="nav-link " href="#expenseList">Expense List</a>
          </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-user"></i> Login</button>
      </form>
      </div>
    </nav>
    </div>);
};

export default Navbar;