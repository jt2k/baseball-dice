function roll(max) {
    return Math.floor(Math.random() * max) + 1;
}

function rollChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

document.getElementById('roll-numbers').addEventListener('click', (e) => {
    document.querySelectorAll('#numbers .dice').forEach(dice => {
        dice.textContent = roll(6);
    });
});

document.getElementById('roll-safe').addEventListener('click', (e) => {
    document.querySelector('#safe .dice').textContent = rollChoice(['safe', 'out']);
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
    const diceElement = document.querySelector('#pitch .dice');
    diceElement.textContent = choice;
    switch (choice) {
        case '⚾︎':
            diceElement.style.fontSize = '2.9rem';
            diceElement.style.paddingTop = '0.8rem';
            break;
        case 'foul ball':
            diceElement.style.fontSize = null;
            diceElement.style.paddingTop = '1.3rem';
            break;
        default:
            diceElement.style.fontSize = null;
            diceElement.style.paddingTop = null;
    }
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
    const diceElement = document.querySelector('#extra .dice');
    diceElement.innerHTML = choice;
    switch (choice) {
        case 'balk':
            diceElement.style.paddingTop = '1.8rem';
            break;
        case 'wild pitch':
        case 'double play':
            diceElement.style.paddingTop = '1.3rem';
            break;
        default:
            diceElement.style.paddingTop = null;
    }
});
