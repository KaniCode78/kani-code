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

/* slide */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}