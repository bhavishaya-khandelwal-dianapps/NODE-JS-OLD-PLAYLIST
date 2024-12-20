import chalk from "chalk";
import validator from "validator";


const res = validator.isEmail("bhavishaya.khandelwal@dianapps.com");


if(res) {
    console.log(chalk.green.underline.inverse("This email is valid"));
}
else {
    console.log(chalk.red.underline.inverse("This email is not valid"));
} 