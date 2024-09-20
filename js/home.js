// add event handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault(); //prevent page reload
    
    // money to be added to the amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})