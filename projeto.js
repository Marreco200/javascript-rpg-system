const name = "Mateus";
const age = 17;
const classe = "Mago";
let level = 67;
let xp = 70;
let trainingTime = 60;

const earnedXp = trainingTime >= 60 ? 10 : 5;
xp = xp+earnedXp;

console.log(name);

if (xp >= 100){
    console.log(`You reached a new level! Now your level is: ${level + 1}`);
} else {
    console.log(`You stay at the same level!`);
}



