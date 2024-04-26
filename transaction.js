const TransactionMoP = (() => {
    const paymentImages = document.querySelectorAll('.payment-img');
    const selectPayment = document.getElementById('payment-options')

    paymentImages.forEach(img => {
        img.addEventListener('click', () => {
            const selectedValue = img.getAttribute('data-value');
            selectPayment.value = selectedValue;
        })
    });
})();