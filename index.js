#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function rainbow(arr, time) {
    let text = chalkAnimation.rainbow(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
async function radar(arr, time) {
    let text = chalkAnimation.karaoke(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
const My_pin = 10000;
await rainbow("Welcome to Hassan_Ali ATM", 3000);
await radar(`\n\n_____________________________________________________`, 4000);
let my_balance = await inquirer.prompt({
    name: "amount",
    type: "number",
    message: "Enter your Demo Account Balance :",
});
let balance = `your Demo Account Balance is :${my_balance.amount} PKR`;
console.log(await rainbow(balance, 2000));
let pinAns = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.red("Enter your pin {pin : 10000} : "),
});
console.log(pinAns);
if (pinAns.pin === My_pin) {
    console.log(await rainbow(`correct pin code!!`, 2000));
    let operation = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "Please select option",
        choices: [
            "Withdraw",
            "Tranfer Amount",
            "FastCash",
            "Check balance",
            "Exit",
        ],
    });
    if (operation.option === "Withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your Amount : ",
        });
        my_balance.amount -= amountAns.amount;
        console.log("Your remaining Balance is:" + my_balance.amount);
    }
    else if (operation.option === "Tranfer Amount") {
        let info = await inquirer.prompt({
            name: "Account",
            type: "input",
            message: "Enter Account Number :",
        });
        let balanc = await inquirer.prompt({
            name: "amountAns",
            type: "number",
            message: "Please Enter the amount For transfer:  ",
        });
        my_balance.amount -= balanc.amountAns;
        console.log(await radar(`Succesfully Transferred ${balanc.amountAns} To the Account Number ${info.Account} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! `, 4000));
        console.log("Your current Account balance is :" + my_balance.amount);
    }
    else if (operation.option === "FastCash") {
        let cash = await inquirer.prompt([
            {
                name: "fastAmount",
                type: "list",
                message: "Please select The Amount ",
                choices: [1000, 2500, 5000, 15000, 20000, 25000],
            },
        ]);
        my_balance.amount -= cash.fastAmount;
        console.log("Current balance is :" + my_balance.amount);
    }
    else if (operation.option === "Check balance") {
        console.log("your currant balance is :" + my_balance.amount);
    }
    else if (operation.option === "Exit") {
        console.log(await rainbow(`Thanks for using this ATM!!!`, 1000));
    }
}
else {
    console.log("incorrect pin code!!!");
}
