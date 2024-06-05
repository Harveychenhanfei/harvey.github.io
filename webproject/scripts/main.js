let myImage = document.querySelector('img');


myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
        myImage.setAttribute('src', 'images/firefox3.webp');
    } else {
        myImage.setAttribute('src', 'images/firefox.png')
    }
}


let myBtn = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("请输入你的名字: ");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎你' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = '欢迎你' + storedName;
}

myBtn.onclick = function () {
    setUserName();
}