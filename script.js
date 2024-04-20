let sum = 3,
    points = 0,
    ans = 0,
    stage = 1,
    block = false,
    header = document.querySelector('header'),
    test = document.querySelector('.test'),
    text = document.querySelector('.text'),
    answer = document.querySelector('.answer'),
    buttons = document.querySelectorAll('.button'),
    footer = document.querySelector('footer');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
    let x = 0,
        s = '',
        first = true;
    
    sum = 0;
    for (let i = 1; i <= (Math.floor(stage / 10 + 2) < 5 ? Math.floor(stage / 10 + 2) : 5); i++) {
        if (i != (Math.floor(stage / 10 + 2) < 5 ? Math.floor(stage / 10 + 2) : 5)) {
            if (sum > 0 & sum < 3) {
                x = random(0, 1);
                if (x = 0) {
                    x = random(-3, -1);
                } else {
                    x = random(1, 3);
                }
            } else {
                if (sum < 1) {
                    x = random(1, 3);
                } else if (sum > 2) {
                    x = random(-3, -1);
                }
            }
        } else {
            if (sum == 0) {
                x = random(1, 3);
            } else if (sum < 0) {
                x = random(Math.abs(sum - 1), 3);
            } else if (sum > 3) {
                x = random(-3, -(sum - 2));
            } else if (sum == 1) {
                x = random(1, 2);
            } else if (sum == 3) {
                x = random(-2, -1);
            } else {
                x = random(0, 1);
                if (x == 0) {
                    x = -1;
                } else if (x == 1) {
                    x = 1;
                }
            }
        }
        sum += x;
        if (first) {
            s += x;
            first = false;
        } else if (x < 0) {
            s += x;
        } else if (x > 0) {
            s += '+' + x;
        }
    }
    test.innerHTML = s + '=';
    console.log(sum);
}

function rightAnswer() {
    block = true;
    answer.innerHTML = sum;
    answer.classList.add('purple');
    text.classList.add('animation');
    setTimeout("generate(); answer.classList.remove('purple'); answer.innerHTML = '?'", 1500);
    setTimeout("text.classList.remove('animation'); block = false", 2000);
    points += stage;
    stage += 1;
    header.innerHTML = 'Score: ' + points;
    footer.innerHTML = 'Stage: ' + stage;
}

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', function () {
        ans = Number(buttons[i].innerHTML);
        if (ans === sum & !block) {
            rightAnswer();
        }
    });
}
