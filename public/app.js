function roll(max) {
    return Math.floor(Math.random() * max) + 1;
}

function rollChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateDice(element, value) {
    element.innerHTML = '&nbsp;';
    element.classList.add('shake', 'shake-constant');
    setTimeout(function() {
        element.innerHTML = value;
        element.classList.remove('shake', 'shake-constant');
    }, 300);
}

document.getElementById('roll-numbers').addEventListener('click', (e) => {
    document.querySelectorAll('#numbers .dice').forEach(dice => {
        updateDice(dice, roll(6));
    });
});

document.getElementById('roll-safe').addEventListener('click', (e) => {
    updateDice(
        document.querySelector('#safe .dice'),
        rollChoice(['safe', 'out'])
    );
});

document.getElementById('roll-pitch').addEventListener('click', (e) => {
    const choice = rollChoice([
        'ball',
        'ball',
        'strike',
        'foul ball',
        '⚾︎',
        '⚾︎'
    ]);
    const dice = document.querySelector('#pitch .dice');
    switch (choice) {
        case '⚾︎':
            dice.style.fontSize = '2.9rem';
            dice.style.paddingTop = '0.8rem';
            break;
        case 'foul ball':
            dice.style.fontSize = null;
            dice.style.paddingTop = '1.3rem';
            break;
        default:
            dice.style.fontSize = null;
            dice.style.paddingTop = null;
    }
    updateDice(dice, choice);
});

document.getElementById('roll-extra').addEventListener('click', (e) => {
    const choice = rollChoice([
        'balk',
        'double play',
        'wild pitch',
        'reach<br />on<br />error',
        'attempt<br />to<br />sacrifice',
        'attempt<br />to<br />steal'
    ]);
    const dice = document.querySelector('#extra .dice');
    switch (choice) {
        case 'balk':
            dice.style.paddingTop = '1.8rem';
            break;
        case 'wild pitch':
        case 'double play':
            dice.style.paddingTop = '1.3rem';
            break;
        default:
            dice.style.paddingTop = null;
    }
    updateDice(dice, choice);
});
