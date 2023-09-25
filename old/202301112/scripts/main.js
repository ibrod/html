function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1);
}
let myHeading = document.querySelector('h1');
alert(myHeading.textContent + " " + fact(5));
myHeading.textContent = 'Hello world!hahaha';

let mytitle = document.querySelector('title');
mytitle.textContent = 'Title changed!';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/aaaa.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');//设置更改的对象为按钮

function setUserName() {
    let myName = prompt('Please enter your name.');//设置弹出框
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);//设置本地存储
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {//判断本地存储是否存在
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}


