/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
let iceCream = 'チョコレート';
if (iceCream === 'チョコレート') {
    alert('やった、チョコレートアイス大好き！');
} else {
    alert('あれれ、でもチョコレートは私のお気に入り......');
}
*/


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}


document.querySelector('html').onclick = function () {
    alert('痛っ! つつくのはやめて!');
}


let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function () {
    setUserName();
}