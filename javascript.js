//Function that diss value
function isOperacion(n) {
    return (n == '+' || n == '-' || n == '*' || n == '/')
}
function isNumeric(n) {
    return (n == '0' || n =='1' || n=='2'|| n=='3'|| n=='4'|| n=='5'|| n=='6'|| n=='7'|| n=='8'|| n=='9' )
}
function dis(val) {
    if (document.getElementById("result").value === "MATH ERROR")
        clr()
    
    if (isNumeric(val))
        document.getElementById("result").value += val;
    
    else if (isOperacion(document.getElementById("result").value.at(-1)) && isOperacion(val)) {
        document.getElementById("result").value.at(-1) = char.val
    }
    
    else {
        document.getElementById("result").value += val;
    }
}
function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
    )
        document.getElementById("result").value += event.key;
    else if ((event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/') && document.getElementById("result").value.at(-1) !== isOperacion(document.getElementById("result").value.at(-1)))
        {
            document.getElementById("result").value += event.key;
    }
    else {
            document.getElementById("result").value.at(-1) = val;
    }
}
let cal = document.getElementById("calculator");
cal.onkeyup = function (event) {
        if (event.KeyCode === 13) {
            console.log("Enter");
            let x = document.getElementById("result").value
            console.log(x);
            solve();
        }
}

//Function that evaluates the digit and return result 
function solve() {
    if (isOperacion(document.getElementById("result").value.at(-1))) {
        document.getElementById("result").value = "MATH ERROR"
    }
    else {
        let x = document.getElementById("result").value
        let y = math.eval(x)
        document.getElementById("result").value = y
    }    
}
//Function that clear the dis
function clr() {
    document.getElementById("result").value = ""
}