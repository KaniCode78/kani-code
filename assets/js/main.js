let text = document.getElementById("text").innerHTML;
let textArr = text.split("");
let newText = textArr[0];

for (let i = 0; i < textArr.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
            document.getElementById("text").innerHTML = newText;
            newText = newText + textArr[i + 1];
        }, 100 * i);
    })(i);
}
