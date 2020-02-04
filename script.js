function getArraySum(total, num) {
    return total - num;
}

function addition(){
    var arr = [];

    var input1 = parseFloat(document.getElementById('n1').value);
    var input2 = parseFloat(document.getElementById('n2').value);
    var input3 = parseFloat(document.getElementById('n3').value);

    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var check3 = document.getElementById('check3');

    if(check1.checked === true) arr.push(input1);

    if(check2.checked === true) arr.push(input2);

    if(check3.checked === true) arr.push(input3);
    
    if (arr.length <= 1)
        window.alert("Please enter at least 2 inputs");
    
    else {
        var result = arr.reduce((a, b) => a + b, 0);
        document.getElementById('calculator-screen').value = arr.join(" + ") + " = " + result;
    }
}

function subs(){
    var arr = [];

    var input1 = parseFloat(document.getElementById('n1').value);
    var input2 = parseFloat(document.getElementById('n2').value);
    var input3 = parseFloat(document.getElementById('n3').value);

    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var check3 = document.getElementById('check3');

    if(check1.checked === true) arr.push(input1);

    if(check2.checked === true) arr.push(input2);

    if(check3.checked === true) arr.push(input3);
    
    if (arr.length <= 1)
        window.alert("Please enter at least 2 inputs");
    
    else {
        var result = arr.reduce(getArraySum);
        console.log(result);
        document.getElementById('calculator-screen').value = arr.join(" - ") + " = " + result;
    }
}

function multiply(){
    var arr = [];

    var input1 = parseFloat(document.getElementById('n1').value);
    var input2 = parseFloat(document.getElementById('n2').value);
    var input3 = parseFloat(document.getElementById('n3').value);

    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var check3 = document.getElementById('check3');

    if(check1.checked === true) arr.push(input1);

    if(check2.checked === true) arr.push(input2);

    if(check3.checked === true) arr.push(input3);
    
    if (arr.length <= 1)
        window.alert("Please enter at least 2 inputs");
    
    else {
        var result = arr.reduce((a, b) => a * b);
        document.getElementById('calculator-screen').value = arr.join(" x ") + " = " + result;
    }
}

function division(){
    var arr = [];

    var input1 = parseInt(document.getElementById('n1').value);
    var input2 = parseInt(document.getElementById('n2').value);
    var input3 = parseInt(document.getElementById('n3').value);

    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var check3 = document.getElementById('check3');

    if(check1.checked === true) arr.push(input1);

    if(check2.checked === true) arr.push(input2);

    if(check3.checked === true) arr.push(input3);
    
    if (arr.length <= 1)
        window.alert("Please enter at least 2 inputs");
    
    else {
        var result = arr.reduce((a, b) => a / b);
        var round_num = Math.round(result);
        document.getElementById('calculator-screen').value = arr.join(" / ") + " = " + round_num;
    }
}

function clear_all(){
    var confirmation = confirm("Delete all inputs?");

    if(confirmation == true){
        document.getElementById('n1').value = "";
        document.getElementById('n2').value = "";
        document.getElementById('n3').value = "";
    }

    else 
        return false;
}
