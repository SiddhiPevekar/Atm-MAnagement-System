var amount=50000;
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'done') {
            if(screen.value>amount){
                alert("The entered amount is more than your account balance.");
                screenValue = "";
                screen.value = screenValue;
            }
            else{
                amount = amount - screen.value;
                //console.log(amount);
                document.getElementById("balance").innerHTML = amount;
                screenValue = "";
                screen.value = screenValue;
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }     
    })
}
document.getElementById("balance").innerHTML = amount;
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}