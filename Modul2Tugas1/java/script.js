const display = document.querySelector(".display"); 
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output != "") {
        try {

            output = eval(output);
        } catch (error) {
            output = "Error";  
        }
    } else if (btnValue === "AC") {
        output = "";  
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); 
    } else if (btnValue === "²") {

        output = (Math.pow(parseFloat(output), 2)).toString();
    } else {

        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue; 
    }

    display.value = output; 
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
