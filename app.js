
function calculateExpenses(){
const income = numConvert('income');
const food = numConvert('food');
const rent = numConvert('rent');
const cloth = numConvert('cloth');
if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)){
    alert('please provide number')
    return;
}
const totalExpense = food + rent + cloth;
const balance = income - totalExpense;
document.getElementById('expense').innerText = totalExpense;
document.getElementById('balance').innerText = balance;
}

function saveBalance(){
    const save = numConvert('save');
    if(isNaN(save)){
        alert('please provide number')
        return;
    }
    const balance = parseFloat(document.getElementById('balance').innerText);
    const percent =  (save / 100) * balance;
    const remaining = balance - percent;
    document.getElementById('remain-balance').innerText = remaining;
    document.getElementById('savings').innerText = percent;
}


// reuseable function 
function numConvert(inputId){
    const input = document.getElementById(inputId);
    const inputValue = input.value
    const number = parseFloat(inputValue);
    input.value = '';
    return number;
}