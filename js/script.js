
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = "";
    return value;
}

function getTotalMoney(fieldId, amount) {
    console.log(fieldId);
    const inputText = document.getElementById(fieldId);
    const inputTextValue = parseFloat(inputText.innerText);
    const previosInputValue = inputTextValue;
    const currentAmountValue = previosInputValue + amount;
    inputText.innerText = currentAmountValue;

}
function totalBalance(amount, isAdding) {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const prebalanceValue = parseFloat(totalBalanceText);
    let currentBalance;
    if (isAdding == true) {
        currentBalance = prebalanceValue + amount;
    }
    else {
        currentBalance = prebalanceValue - amount;
    }
    totalBalance.innerText = currentBalance;
}

function getInnerText(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const innertextValue = fieldTag.innerText;
    const value = parseFloat(innertextValue);
    fieldTag.innerText = value;
    return value;
}


document.getElementById('diposit-button').addEventListener('click', function () {
    const amount = getInputValue('diposit-input-field');
    if (amount > 0) {
        getTotalMoney('diposit-money', amount);
        totalBalance(amount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input-field');
    const balance = getInnerText('total-balance');
    if (amount > 0 && amount <= balance) {
        getTotalMoney('withdraw-money', amount);
        totalBalance(amount, false);
    }
})