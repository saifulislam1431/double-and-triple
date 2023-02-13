function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseFloat(inputFieldValue);
    inputField.value = '';

    const calculation = inputValue * 2;
    return calculation;
    //  function result(resultFieldId){
    //     const resultField = document.getElementById(resultFieldId);
    //     resultField.innerText =  calculation;
    //  }
}




document.getElementById('double-btn').addEventListener('click', function() {

    const doubleInput = getInputValue('double-input');
    const doubleResult = document.getElementById('first-result');
    doubleResult.innerText = doubleInput;
})

document.getElementById('triple-btn').addEventListener('click', function() {

    const tripleInput = getInputValue('triple-input');
    const tripleResult = document.getElementById('second-result');
    tripleResult.innerText = tripleInput;

})