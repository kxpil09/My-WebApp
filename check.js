document.addEventListener('DOMContentLoaded', () => {
    const planNameSpan = document.getElementById('plan-name');
    const planStatusSpan = document.getElementById('plan-status');
    const planPriceSpan = document.getElementById('plan-price');
    const cancelButton = document.getElementById('cancel-plan');
    const changeButtonsContainer = document.getElementById('change-plan'); 
    const warningMessage = document.getElementById('warning-message');

    const selectedPlan = localStorage.getItem('selectedPlan');
    const selectedStatus = localStorage.getItem('selectedStatus');
    const selectedBillingCycle = localStorage.getItem('selectedBillingCycle');
    const selectedPlanDetails = localStorage.getItem('selectedPlanDetails');

    if (selectedPlan && selectedStatus && selectedBillingCycle) {
        planNameSpan.textContent = selectedPlan;
        planStatusSpan.textContent = selectedStatus;
        planPriceSpan.textContent = selectedBillingCycle + ' / ' + selectedPlanDetails;

        if (selectedStatus === 'Cancelled') {
            planStatusSpan.style.color = 'red';
            warningMessage.style.display = 'block';
            cancelButton.style.display = 'none';
            changeButtonsContainer.style.display = 'block';
        }
    } else {
        window.location.href = 'subscription.html';
    }

    cancelButton.addEventListener('click', () => {
        planStatusSpan.textContent = 'Cancelled';
        planStatusSpan.style.color = 'red';
        warningMessage.style.display = 'block';
        cancelButton.disabled = true;
        changeButtonsContainer.style.display = 'block';
    });

    changeButtonsContainer.addEventListener('click', (event) => {
            window.location.href = 'subscription.html';
    });
});
