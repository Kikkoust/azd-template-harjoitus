const VAT_PERCENT = 25.5;

const amountInput = document.getElementById('amount');
const calculateBtn = document.getElementById('calculateBtn');
const vatSpan = document.getElementById('vat');
const totalSpan = document.getElementById('total');

function calculateVAT() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 0) {
        vatSpan.textContent = "0.00 €";
        totalSpan.textContent = "0.00 €";
        alert("Please enter a valid amount!");
        return;
    }

    const vat = amount * (VAT_PERCENT / 100);
    const total = amount + vat;

    vatSpan.textContent = vat.toFixed(2) + " €";
    totalSpan.textContent = total.toFixed(2) + " €";
}

calculateBtn.addEventListener('click', calculateVAT);
