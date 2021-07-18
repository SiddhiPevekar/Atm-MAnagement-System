let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText; //this specifies the text
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == 'done') {
            if (screen.value == '1234') {
                window.location.href = "homepage.html";
            } else {
                alert("Please Enter Correct Pin");
                screenValue = "";
                screen.value = screenValue;
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}