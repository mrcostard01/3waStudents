import myColleaguesNames from "./index.js";
import chalk from 'chalk';

for (let i = 0; i < myColleaguesNames.length; i++){
    let couleur = Math.round(Math.random()*100);
    console.log(chalk.bgAnsi256(couleur) (myColleaguesNames[i]))
}