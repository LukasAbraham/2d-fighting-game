function rectangularCollision({rectangle1, rectangle2}) {
    if(rectangle1 instanceof Fighter) {
        return (
            rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
                rectangle2.position.x &&
            rectangle1.attackBox.position.x <=
                rectangle2.position.x + rectangle2.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
                rectangle2.position.y &&
            rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
            )
    }
    else {
        if(rectangle1.flip) {
            return (rectangle1.position.x - rectangle1.offset.x - rectangle1.width <= rectangle2.position.x + rectangle2.width
                && rectangle1.position.x + rectangle1.offset.x >= rectangle2.position.x 
                && rectangle1.position.y + rectangle1.offset.y + rectangle1.height <= rectangle2.position.y + rectangle2.height
                && rectangle1.position.y + rectangle1.offset.y >= rectangle2.position.y)
        } else {
            return (rectangle1.position.x + rectangle1.offset.x + rectangle1.width >= rectangle2.position.x
                && rectangle1.position.x + rectangle1.offset.x <= rectangle2.position.x + rectangle2.width
                && rectangle1.position.y + rectangle1.offset.y + rectangle1.height >= rectangle2.position.y
                && rectangle1.position.y + rectangle1.offset.y <= rectangle2.position.y + rectangle2.height)
        }
    }
}

function checkSuccessfulHit({obj1, obj2}) {
    if(obj1 instanceof Object) {
        return rectangularCollision({ rectangle1: obj1, rectangle2: obj2 });
    } else {
        return rectangularCollision({ rectangle1: obj1, rectangle2: obj2 }) && obj1.isAttacking && obj1.currentFrame === obj1.hitPoint;
    }
}

function handleHit(attacker, defender) {
    if (attacker.rangedWeapon) {
      for (let i = 1; i < attacker.object.length; i++) {
        if (checkSuccessfulHit({ obj1: attacker.object[i], obj2: defender })) {
          defender.takeHit(attacker.damage);
          attacker.object.splice(i, 1);
          attacker.isAttacking = false;
          gsap.to(`#${defender === player ? 'player' : 'enemy'}Health`, {
            width: defender.health + '%',
          });
        }
      }
    } else {
      if (checkSuccessfulHit({ obj1: attacker, obj2: defender })) {
        defender.takeHit(attacker.damage);
        attacker.isAttacking = false;
        gsap.to(`#${defender === player ? 'player' : 'enemy'}Health`, {
          width: defender.health + '%',
        });
      }
      // if attacker misses
      if (attacker.isAttacking && attacker.currentFrame === attacker.hitPoint) {
        attacker.isAttacking = false;
      }
    }
  }

var endGameSound = new Audio('./asset/sounds/endGame.mp3');
var soundPlay = false;
function determineWinner({player, enemy, timerId}) {
    if(!soundPlay) {
        soundPlay = true;
        endGameSound.play();
    }
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

let timer = 100
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