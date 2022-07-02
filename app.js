const p1 = {
    button: document.querySelector('#butt1'),
    display: document.querySelector('#sp1'),
    score: 0
}
const p2 = {
    button: document.querySelector('#butt2'),
    display: document.querySelector('#sp2'),
    score: 0
}

const numb = document.querySelector('#players');
const resetButton = document.querySelector('#reset');

function updateScore(player, opponent) {
    player.score++;
    player.display.innerText = player.score;

    if (numb.value == player.score) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
    }
}

numb.addEventListener('change', function () {
    reset()

})

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetButton.addEventListener('click', function () {
    reset()
})
function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}


