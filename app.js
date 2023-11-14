import myColleaguesNames from "./index.js";
import chalk from 'chalk';

for (let i = 0; i < myColleaguesNames.length; i++){
    console.log(chalk.bgAnsi256(i) (myColleaguesNames[i]))
}