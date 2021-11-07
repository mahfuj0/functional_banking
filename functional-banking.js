
// set booth input

function addInput(input){
    const inputField =document.getElementById(input);
    const getValue= inputField.value;
    const value = parseFloat(getValue)
    inputField.value=''
    return value

};

// updatetotal depo & withdraw total balance

function updateTotal (money,taka){
    const keepMoney = document.getElementById(money);
    const getText = keepMoney.innerText
    const convartNum = parseFloat(getText);
    const privious = convartNum+ taka;
    keepMoney.innerText=privious
}

// handle deposit

document.getElementById('deposit-btn').addEventListener('click',function(){
    const amount= addInput('deposit-input')
   if(amount>0){
    updateTotal('depo-total',amount)
    UpdateBalance(amount,true)
   }
   

});


// handle withdraw

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const amount= addInput('withdraw-input')
    if(amount>0){
        updateTotal('withdraw-total',amount)
    UpdateBalance(amount,false)
    }
})

// update total balance

function UpdateBalance(uBalance,isAdding){
    const balanceInput = document.getElementById('balance-total');
    const getBalanceTex= balanceInput.innerText;
    const makeNum =parseFloat(getBalanceTex)
    let balanceTotal;
    if(isAdding== true){
        balanceTotal = makeNum + uBalance

    }
    else{
        balanceTotal = makeNum - uBalance
    }

    balanceInput.innerText=balanceTotal
}