// add event handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault(); //prevent page reload
    
    // money to be added to the amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // verify the pin number-wrong way
    if(pinNumberInput === '1234'){
        console.log('Added Money');
        // get the current balance
        const balance = document.getElementById('accountBalance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance);

        // add money with account balance
        const addMoneyNumber = parseFloat(addMoneyInput)
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        
        // update the DOM with updated balance
        document.getElementById('accountBalance').innerText = newBalance;
    }
    else{
        alert('wrong pin. try again');
    }
    
})