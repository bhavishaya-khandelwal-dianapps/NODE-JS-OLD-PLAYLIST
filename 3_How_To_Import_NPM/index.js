import validator from "validator";
import chalk from "chalk";



const res = validator.isEmail("bhavishayakhandelwal@gmail.com");

if(res === true) {
    console.log(chalk.green.underline.inverse(res));
}
else {
    console.log(chalk.red.underline.inverse(res));
}