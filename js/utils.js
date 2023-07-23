function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height)
}

function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId);
    document.querySelector('#displayResult').style.display = 'flex' 
    if(player.health === enemy.health) {
        document.querySelector('#displayResult').innerHTML = 'TIE'
    } else if (player.health > enemy.health){
        document.querySelector('#displayResult').innerHTML = 'PLAYER 1 WINS'
    } else {
        document.querySelector('#displayResult').innerHTML = 'PLAYER 2 WINS'
    }
    document.querySelector('#subDisplay').innerHTML = 'Press Enter to continue'
    window.addEventListener('keydown', event => {
        if(event.key === 'Enter') {
            window.location.href = 'index.html';
        }
    })
}

let timer = 20
let timerId
function decreaseTimer() {
    if(timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }

    if(timer === 0) {
        determineWinner({player, enemy})
        // stop character's animation
        player.dead = true;
        enemy.dead = true;
    }
}
