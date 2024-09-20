// console.log('button clicking file added');

// search: form submit reloading the page


// step-1: set event handler
document.getElementById('login-btn')
    .addEventListener('click', function(event){
        // step-2: prevent default behavior(reloading browser)
        event.preventDefault();
        
        // step-3: get phone number and pin number
        const phoneNumber = document.getElementById('phone-number').value;     
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);
        
        // validate phone and pin
        
    });