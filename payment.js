document.addEventListener('DOMContentLoaded', () => {
    const completePaymentButton = document.getElementById('complete-payment');
    const planNameSpan = document.getElementById('selectedPlan');
    const billingCycleSpan = document.getElementById('selectedBillingCycle');
    const planDetailsSpan = document.getElementById('selectedPlanDetails');

    // Retrieve selected plan from local storage
    const selectedPlan = localStorage.getItem('selectedPlan');
    const selectedBillingCycle = localStorage.getItem('selectedBillingCycle');
    const selectedPlanDetails = localStorage.getItem('selectedPlanDetails');
    
    if (selectedPlan) {
        planNameSpan.textContent = selectedPlan;
        billingCycleSpan.textContent = selectedBillingCycle;
        planDetailsSpan.textContent = selectedPlanDetails;
    } else {
        // Redirect user back to subscription page if plan is not selected
        window.location.href = 'check.html';

    }

    completePaymentButton.addEventListener('click', () => {
        // Add your payment processing logic here
        
        // Set selected plan status to "Active" (or "Cancelled" as needed)
        localStorage.setItem('selectedStatus', 'Active');

        // Redirect to the "Current Plan Details" page
        window.location.href = 'check.html';
    });
});
