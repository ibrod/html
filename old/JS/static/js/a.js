let person = {
    name: 'yxc',
    age: 18,
    money: 1000,
    friends: ['Bob', 'Alice', 'Lucy'],
    clothes: {
        color: 'red',
        price: 20,
        size: 'M',
    },
    nu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    add_money: function (x) {
        this.money += x;
        this.nu.push(this.nu.length + 1);
        console.log(this.nu)
    }
}

function main() {
    console.log(person);
    let adm = document.querySelector('button');
    adm.value = person.name;
    // button event
    adm.onclick = function () {
        person['add_money'](100);
        console.log(person);
    }

    let div = document.querySelector('div');
    div.addEventListener('mouseup', function () {
        alert('Don\'t touch me!');
    });

    div.addEventListener('keyup', function () {
        alert('Don\'t use keyboard!');
        console.log($('div').css('background-color'));//一个参数是获取属性，两个参数是设置属性
        if ($('div').css('background-color') === 'rgb(197, 22, 22)') {
            $('div').removeClass('c2');
            $('div').addClass('c1');
        } else {
            $('div').removeClass('c1');
            $('div').addClass('c2');
        }
        console.log($('div').css('background-color'));
        console.log($('div').text());
    });
}

main();

export {
    person,
    main
}
