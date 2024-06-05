// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";

// function multiply(num1, num2) {
//     let resutt = num1 * num2;
//     return resutt
// }

// document.querySelector("html").addEventListener("click", () => { alert("我爱JavaScript!") })

let myImage = document.querySelector("img");
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    console.log(mySrc === "images/firefox.png");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/firefox3.webp");
        console.log(myImage.getAttribute("src"));
    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
};

let myBtn = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        // alert('未输入名字');
        // myName = prompt('请输入你的名字');//这种写法只能限制第一次,无法限制多次的不输入姓名
        // localStorage.setItem('name', myName);
        // myHeading.textContent = '酷毙了!!!' + myName;
        alert('请输入名字');
        setUserName();//这种写法可以限制多次不输入姓名的情况
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "酷毙了! " + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    myName = localStorage.getItem('name');
    myHeading.textContent = "酷毙了!" + myName;
}

myBtn.onclick = function () {
    setUserName();
}