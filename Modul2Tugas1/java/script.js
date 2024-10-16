const display = document.querySelector(".display");  // Ensure this selects the correct element
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output != "") {
        try {
            // Safely evaluate the expression
            output = eval(output.replace("%", "/100"));
        } catch (error) {
            output = "Error";  // If there's an issue with eval (e.g., malformed input)
        }
    } else if (btnValue === "AC") {
        output = "";  // Clear the display
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);  // Remove last character
    } else if (btnValue === "²") {
        // Square the current output number
        output = (Math.pow(parseFloat(output), 2)).toString();
    } else {
        // Avoid starting with an operator if output is empty
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;  // Append button value to the output string
    }

    display.value = output;  // Update the display value
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
