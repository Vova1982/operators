2 + 2 === 4 ? console.log(" correct answer") : console.log("try again");

let cost;
const sub = "free";
switch (sub) {
    case "free":
        cost = 0;
        break;
    
    case "optimal":
        cost = 100;
        break;
    case "premium":
        cost = 500;
        break;
    
        default: console.log("No  information")
    
}
console.log(sub + cost);
//  ______________________________________
 
let inp = document.querySelector('.age');
let button = document.querySelector('.btn');

button.onclick = () => {
    let num = +inp.value;
    if (num < 10) {
        console.log("You are not ready")
    }
    else if (num <= 40) {
        console.log(" ok Great");
    }
    else {
        console.log(" be cautious")
    }
}
    

 
let inputIn = document.querySelector(".i-1");
let button_1 = document.querySelector(".b-1");
let div = document.querySelector(".out-1"); // Corrected the selector for the output div

button_1.onclick = function () {
    let inputValue = +inputIn.value; // Parse the input value as a number

    if (inputValue === 4) {
        div.textContent = "True";
    } else {
        div.textContent = "False";
    }
}
let inputIn_1 = document.querySelector(".i-1-1");
let inputIn_2 = document.querySelector(".i-2-1");
let button_1 = document.querySelector(".b-2");
let div_1 = document.querySelector(".out-2");

button_1.onclick = () => {
    let inputValue1 = +inputIn_1.value;
    let inputValue2 = +inputIn_2.value;

    if (inputValue1 > inputValue2) {
        div_1.innerHTML = inputValue1;
    } else if (inputValue1 < inputValue2) {
        div_1.innerHTML = inputValue2;
    } else {
        div_1.innerHTML = "both wrong";
    }
}