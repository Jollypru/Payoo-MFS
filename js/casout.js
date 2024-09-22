document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cashout button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut);

    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(pinNumber);

    if(pinNumber === '1234'){
        const accountBalance = document.getElementById('accountBalance').innerText;
        console.log(accountBalance);

        const accountBalanceNumber = parseFloat(accountBalance);
        const cashOutNumber = parseFloat(cashOut);
        const newBalance = accountBalanceNumber - cashOutNumber;
        
        console.log('cash out done, New Balance', newBalance);

        document.getElementById('accountBalance').innerText = newBalance;
    }
    else{
        alert('failed, Try again');
    }
})