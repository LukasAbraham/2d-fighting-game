console.clear();

const characterList = document.querySelectorAll('.character');
let currentPlayer = 1; // Player 1 starts choosing characters
let selectionComplete = false; // Flag to indicate if both players have chosen characters
let selectedCharacterP1 = null; // Variable to store the selected character for Player 1

var clickSound = new Audio('../asset/sounds/click.mp3')

characterList.forEach(character => {
  character.addEventListener('click', () => {
    clickSound.play();
    if (!selectionComplete) {
      if (currentPlayer === 1) {
        if (document.querySelector('.character.activeP1')) {
          document.querySelector('.character.activeP1').classList.remove('activeP1');
        }
        character.classList.add('activeP1');
        selectedCharacterP1 = character.getAttribute('data-name'); // Store the selected character for Player 1
      } else if (currentPlayer === 2) {
        if (document.querySelector('.character.activeP2')) {
          document.querySelector('.character.activeP2').classList.remove('activeP2');
        }

        // Check if the selected character for Player 2 is the same as Player 1
        if (character.getAttribute('data-name') === selectedCharacterP1) {
          console.log('Player 2 cannot choose the same character as Player 1.');
          return; // Prevent selecting the same character for Player 2
        }

        character.classList.add('activeP2');
      }
    }
  });
});

var lockSound = new Audio('../asset/sounds/select.mp3');
var submitSound = new Audio('../asset/sounds/StepIn.wav')

window.addEventListener('keydown', event => {
  if (!selectionComplete) {
    if (event.key === ' ') {
      if (currentPlayer === 1) {
        const activeCharacterP1 = document.querySelector('.character.activeP1');
        if (activeCharacterP1) {
          lockSound.play();
          console.log(`Player 1 selected: ${activeCharacterP1.getAttribute('data-name')}`);
          currentPlayer = 2; // Switch to Player 2
        }
      }
    } else if (event.key === '0') {
      if (currentPlayer === 2) {
        const activeCharacterP2 = document.querySelector('.character.activeP2');
        if (activeCharacterP2) {
          lockSound.play();
          console.log(`Player 2 selected: ${activeCharacterP2.getAttribute('data-name')}`);
          currentPlayer = 1; // Switch back to Player 1 for the next round
          selectionComplete = true; // All selections are complete
          console.log("Character selection complete. Get ready for the fight!");
        }
      }
    }
  } else {
    if (event.key === 'Enter') {
      submitSound.play();
      // Get the selected characters' data
      const characterP1 = document.querySelector('.character.activeP1').getAttribute('data-name');
      const characterP2 = document.querySelector('.character.activeP2').getAttribute('data-name');
      // Navigate to the fighting.html page with the character data as query parameters
      const url = `fighting.html?p1=${encodeURIComponent(characterP1)}&p2=${encodeURIComponent(characterP2)}&p3=${encodeURIComponent(backgrounds[currentBackgroundIndex])}`;
      setTimeout(() => { window.location.href = url; }, 1000);
    }
  }
});

var arrowSound = new Audio('../asset/sounds/slide.wav');

const backgrounds = ["Oak Woods", "Red River", "Countryside", "Silent Hill", "Dark Forest", "Dragon Temple", "Sacred Pagoda", "Town", "Underworld"];
let currentBackgroundIndex = 0;
const backgroundNameElement = document.getElementById("background-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function updateBackgroundName() {
  backgroundNameElement.textContent = backgrounds[currentBackgroundIndex];
}

leftArrow.addEventListener("click", () => {
  arrowSound.play();
  currentBackgroundIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackgroundName();
});

rightArrow.addEventListener("click", () => {
  arrowSound.play();
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  updateBackgroundName();
});

// Initialize the background name
updateBackgroundName();
