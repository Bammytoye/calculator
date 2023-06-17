// var btnNumbers = document.querySelectorAll('btn-number')
// var btnOperators = document.querySelectorAll('.btn-operator')
// var btnEqual = document.querySelector('.btn-equal')
// var btnDelete = document.querySelector('.btn-delete')
// var btnAllClear = document.querySelector('.btn-allclear')
// var display = document.getElementById('display')

function showValue(val) {
    var show = document.getElementById('result');
    show.value += val;
}

function solve() {
    var number1 = document.getElementById('result').value
    var number2 = eval(number1);
    document.getElementById('result').value = number2 
    return number2 
}

function clearScreen() {
    var cleared = document.getElementById('result');
    cleared.value = " ";
}

function backSpace() {
    var back = document.getElementById('result');
    back.value = back.value.slice(0,-1);
}