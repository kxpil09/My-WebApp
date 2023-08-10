document.addEventListener('DOMContentLoaded', () => {
    const monthlyTab = document.getElementById('monthly-tab');
    const yearlyTab = document.getElementById('yearly-tab');
    const monthlyPricingTable = document.getElementById('monthly-pricing-table');
    const yearlyPricingTable = document.getElementById('yearly-pricing-table');

    monthlyTab.addEventListener('click', () => {
        monthlyTab.classList.add('active');
        yearlyTab.classList.remove('active');
        monthlyPricingTable.classList.add('active');
        yearlyPricingTable.classList.remove('active');
    });

    yearlyTab.addEventListener('click', () => {
        yearlyTab.classList.add('active');
        monthlyTab.classList.remove('active');
        yearlyPricingTable.classList.add('active');
        monthlyPricingTable.classList.remove('active');
    });

    const plans = document.querySelectorAll('.plan');

    plans.forEach(plan => {
        plan.addEventListener('click', () => {
            plans.forEach(p => p.classList.remove('selected'));
            plan.classList.add('selected');
        });
    });
});

function openPaymentPage() {
    const selectedPlan = document.querySelector('.plan.selected');
    
    if (selectedPlan) {
        const planName = selectedPlan.querySelector('td:first-child').textContent;
        const billingCycle = selectedPlan.querySelector('td:nth-child(2)').textContent;
        const selectedTab = document.querySelector('.tab-button.active').textContent; // Get the active tab
        const planPrice = selectedPlan.querySelector('td:nth-child(3)').textContent;
        const planDetails = selectedTab === 'Monthly' ? 'Monthly' : 'Yearly';
        
        localStorage.setItem('selectedPlan', planName);
        localStorage.setItem('selectedBillingCycle', billingCycle);
        localStorage.setItem('selectedPlanDetails', planDetails);
        localStorage.setItem('selectedPlanPrice', planPrice);
        
        window.location.href = 'payment.html';
    } else {
        alert('Please select a plan before proceeding.');
    }
}
