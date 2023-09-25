class person {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    add_money(x) {
        this.money += parseInt(x);
        alert('add_money ' + x + ' success!');
    }
    add_age(x) {
        this.age += parseInt(x);
        alert('add_age ' + x + ' success!');
    }
    print() {
        alert("My name   " + this.name + " and I am " + this.age + " years old.My money is " + this.money);
    }
}

let p = new person('yxc', 18, 1000);
let $add_money = $('#add_money');
let $add_age = $('#add_age');
let $query = $('#query');
let $input = $('#ipt');
var $div = $('div');

$input.on('keyup', function (e) {
    $input.val($input.val().replace(/[^0-9]/g, ''));
    console.log($input.val());
});

$add_money.click(function () {
    p.add_money($input.val());
    $div.fadeOut(1000);
});

$add_age.on('mouseup', function (e) {
    p.add_age($input.val());
    $div.fadeIn(1000);
});

let step = () => {
    let r_color = Math.floor(Math.random() * 256);
    let g_color = Math.floor(Math.random() * 256);
    let b_color = Math.floor(Math.random() * 256);
    $div.css('transition', 'all 0.9s ease-in-out');
    $div.css('background-color', 'rgb(' + r_color + ',' + g_color + ',' + b_color + ')');
    $div.css('height', parseInt($div.css('height'))+1);
};

$query.on('mousedown.name1', function () {
    requestAnimationFrame(step);
    let secx = 0;
    let idd = setInterval(function () {
        if (secx > 60) {
            clearInterval(idd);
            secx = 0;
            console.log('计时器停止');
        }
        console.log('在 ' + secx + 's 之前查询过一次');
        secx++;
        requestAnimationFrame(step);
    }, 1000);
    p.print();
    //$div.hide(1000);
});

$div.on('click', function (e) {
    alert('Don\'t touch me!');
});

let gg = false;
$('a').on('click.name1', function (e) {
    $div.append(`<a href="https://www.acwing.com" 
    target="_blank">acwing</a>`);
    if (gg) {
        e.preventDefault();//阻止本次触发
        gg = false;
    } else {
        e.stopPropagation();//阻止向上传递(触发完成后不会向上传递触发)
        gg = true;
    }
});