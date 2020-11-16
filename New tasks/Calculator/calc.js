var temp;
var count = 0;
var op="";
var digit = "";
function press_me(input){
    
    for (var i=0; i<10; i++) {
        if (input == i){
            digit += input;
            document.getElementById("display_screen").innerHTML = digit;
            break;
        }
    }
    if (input == "+" || input == "-" || input == "*" || input == "/" ) {
        if (count < 1) {
            op = input;
            temp = (Number(digit));
        } else {
            if(op == "+") {
                result = temp + Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "-") {
                result = temp - Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "*") {
                result = temp * Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "/") {
                result = temp / Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            op = input;
        }
        count++;
        digit = "";
    }
    if (input == "=" ) {
        if(count >= 1){
            if(op == "+") {
                result = temp + Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "-") {
                result = temp - Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "*") {
                result = temp * Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
            if(op == "/") {
                result = temp / Number(digit);
                temp = result;
                document.getElementById("display_screen").innerHTML = result;
            }
        }
        digit = "";
    }
    if (input == "C") {
        temp = "";
        digit = "";
        count = 0;
        op="";
        document.getElementById("display_screen").innerHTML = "";
    }
}

