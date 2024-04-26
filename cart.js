const CartSetQuantity = (() => {
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const numberInput = document.querySelector(".number");

    minusBtn.addEventListener("click", () => {
        let currentValue = parseInt(numberInput.value);
        if (currentValue > 1) {
          numberInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener("click", () => {
        let currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue + 1;
    });

})();