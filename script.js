let sum = 0, x = 0, ans = 0, stage = 1;
let first = true;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
    document.querySelector('.text').innerHTML = '';
    first = true;
    sum = 0;
    for (let i = 1; i <= Math.floor(stage / 10 + 2); i++) {
        if (i != Math.floor(stage / 10 + 2)) {
            if (sum > 0 & sum < 3) {
                x = getRandomInt(0, 1);
                if (x = 0) {
                    x = getRandomInt(-3, -1);
                } else {
                    x = getRandomInt(1, 3);
                }
            } else {
                if (sum < 1) {
                    x = getRandomInt(1, 3);
                } else if (sum > 2) {
                    x = getRandomInt(-3, -1);
                }
            }
        } else {
            if (sum == 0) {
                x = getRandomInt(1, 3);
            } else if (sum < 0) {
                x = getRandomInt(Math.abs(sum - 1), 3);
            } else if (sum > 3) {
                x = getRandomInt(-3, -(sum - 2));
            } else if (sum == 1) {
                x = getRandomInt(1, 2);
            } else if (sum == 3) {
                x = getRandomInt(-2, -1);
            } else {
                x = getRandomInt(0, 1);
                if (x == 0) {
                    x = -1;
                } else if (x == 1) {
                    x = 1;
                }
            }
        }
        sum += x;
        if (first) {
            document.querySelector('.text').innerHTML += x;
            first = false;
        } else if (x < 0) {
            document.querySelector('.text').innerHTML += x;
        } else if (x > 0) {
            document.querySelector('.text').innerHTML += '+' + x;
        }
    }
    document.querySelector('.text').innerHTML += '=?';
    console.log(sum);
}

generate();

document.querySelectorAll('.button').forEach((element) => {
    element.addEventListener('click', function () {
        if (element.innerHTML == sum) {
            //alert('Success');
            generate();
            stage += 1;
        } else {
            //alert('Wrong');
        }
    });
});