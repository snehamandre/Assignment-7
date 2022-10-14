/*eslint-env browser*/
//STEP 1
function alertMessage() {
    window.alert("I have been Clicked");
}

function onLoad() {
    //STEP 2
    var button2 = document.getElementById('button2');
    button2.onclick = alertMessage;

    //STEP 3
    var button3 = document.getElementById('button3');
    button3.addEventListener('click', alertMessage);

    //STEP 4
    var button4 = document.getElementById('button4');
    button4.addEventListener('click', function () {
        window.alert("I have been clicked");
    });
}

//STEP 5
window.addEventListener('load', function () {
    onLoad();
 });

