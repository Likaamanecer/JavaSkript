/*const c = document.querySelector('circle');

const d = document.querySelector('first');

console.log(c.getTotalLength()); 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3];

const res = arr1.find(el => el == 3);
const res = arr1.slice(0, 2);
arr1.splice(0, 1, 5);



const res = arr2.every(e1 => arr1.includes(e1));

console.log(res);*/

const game = document.querySelector('.game');
const res = document.querySelector('.res');
const btnGame = document.querySelector('.new-game');
const fields = document.querySelectorAll('.filed');

let stepCross = true;
let count = 0;

const circle = `<svg class="circle">
<circle r = "45" cx="58" cy="58" stroke="blue" stroke-width="10"
fill="none"/>
</svg>`

const cross = `<svg class="cross">
<line class="first"
x1="15" y1="15"
x2="105" y2="105"
stroke="red"
stroke-width="10" 
stroke-linecap="round"/>

<line class="second"
x1="105" y1="15"
x2="15" y2="105"
stroke="red"
stroke-width="10" 
stroke-linecap="round"/>
</svg>`

/*game.addEventListener('click', (e) => {
    console.log(e);
})*/

/*res.innerHTML= 'test';*/

game.addEventListener("click", init);
btnGame.addEventListener("click", newGame);

function doStep(target) {
    target.innerHTML = stepCross ? cross : circle;
    target.classList.add(stepCross ? "x" : "o");
}

function init(e) {
    const curFields = e.target.closest(".field");
    if (!curFields.classList.contains("x", "o")) {
        console.log('here');
        doStep(e.target);
        stepCross = !stepCross;
        count++;
        win();
    }
}

function newGame() {
    res.innerHTML = "";
    stepCross = true;
    count = 0;
    Array.from(fields).forEach((el) => {
        el.innerHTML = "";
        el.classList.remove("x", "o", "active");
    });
    game.addEventListener("click", init);
}

function win() {
    const comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < comb.length; i++) {
        const cur = comb[i];
        const curFields = [fields[cur[0]], fields[cur[1]], fields[cur[2]]];

        if (curFields.every(el => el.classList.contains("x"))) {
            res.innerHTML = "Выиграли крестики";
            curFields.forEach(field => field.classList.add("active"));
            game.removeEventListener("click", init);
            break;
        } if (curFields.every(el => el.classList.contains("o"))) {
            res.innerHTML = "Выиграли нолики";
            curFields.forEach(field => field.classList.add("active"));
            game.removeEventListener("click", init);
            break;
        } if (count === 9) {
            res.innerHTML = "Ничья"
            game.removeEventListener("click", init);
            break;
        }

    }
}