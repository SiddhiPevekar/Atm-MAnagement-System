amtlocal = localStorage.setItem("amount", "50000");
var x = localStorage.getItem("amount");
// console.log(x)
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == 'done') {
            if (screen.value > x) {
                alert("The entered amount is more than your account balance.");
                screenValue = "";
                screen.value = screenValue;
            } else {
                x = x - screen.value;
                console.log(x);
                document.getElementById("balance").innerHTML = x;
                reduced = localStorage.setItem("amount", x);
                screenValue = "";
                screen.value = screenValue;
                // const myJSON = JSON.stringify(obj);
                // document.getElementById("demo").innerHTML = myJSON;
                // const jsonData = JSON.stringify(amt);
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
document.getElementById("amount").innerHTML = x;
balance = localStorage.getItem("reduced");
console.log(balance);
// document.getElementById("amount").innerHTML = balance;
// document.getElementById("balance").innerHTML = amt.amount;
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}