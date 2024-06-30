import React from "react";
function Feature(){
    return(
    <section class="white-section" id="features">
    <div className="section-heading">
        <h1 className="big-heading">Exclusive Features</h1>
        <h3>Delve into the specialized tools that make Expenza stand out in simplifying your expense tracking process.</h3>
    </div>
  
     <div class="row text-center">
       <div class="feature-box col-lg-4">
         <i class="fa-solid fa-circle-check feature-icon fa-5x flaticon"></i>
         <h3 class="feature-title">User-Friendly Interface</h3>
         <p class="features">Navigate through your finances with our intuitive and easy-to-use dashboard.</p>
       </div>  
       <div class="feature-box col-lg-4">
         <i class="fa-solid fa-binoculars feature-icon fa-5x flaticon"></i>
         <h3 class="feature-title">Expense Tracking</h3>
         <p class="features"> Automatically categorize and track all your expenses in real-time.</p>
       </div>  
       <div class="feature-box col-lg-4">
         <i class="fa-solid fa-heart feature-icon fa-5x flaticon"></i>
         <h3 class="feature-title">Budget Management</h3>
         <p class="features">Set up budgets for different categories and monitor your spending to stay on track.</p>
       </div>  
     </div>
   
  </section>
    );
};

export default Feature;