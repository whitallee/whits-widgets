const counter1 = document.getElementById("counter-1");
const minus1 = document.getElementById("minus-1");
const plus1 = document.getElementById("plus-1");
const copy1 = document.getElementById("copy-1");
const countText1 = document.getElementById("count-text-1");

const counter2 = document.getElementById("counter-2");
const minus2 = document.getElementById("minus-2");
const plus2 = document.getElementById("plus-2");
const copy2 = document.getElementById("copy-2");
const countText2 = document.getElementById("count-text-2");

const counter3 = document.getElementById("counter-3");
const minus3 = document.getElementById("minus-3");
const plus3 = document.getElementById("plus-3");
const copy3 = document.getElementById("copy-3");
const countText3 = document.getElementById("count-text-3");


function countFunction(countText, minus, plus, copy) {
    let count = countText.innerHTML;

    minus.onclick = function(){
        count--;
        countText.innerHTML = count;
    };

    plus.onclick = function(){
        count++;
        countText.innerHTML = count;
    };

    copy.onclick = function(){
        navigator.clipboard.writeText(count);
    };
}

counter1.onclick = countFunction(countText1, minus1, plus1, copy1);
counter2.onclick = countFunction(countText2, minus2, plus2, copy2);
counter3.onclick = countFunction(countText3, minus3, plus3, copy3);