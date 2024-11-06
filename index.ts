#! /usr/bin/env node
import inquirer from "inquirer";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. What is the correct way to check if two values are not equal in TypeScript?",
        choices: [
            "value1 !== value2",
            "value1 != value2",
            "value1 !=== value2",
            "value1 ==! value2"
        ]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which of the following is a correct way to declare a string in TypeScript?",
        choices: [
            "let name: string = 'John';",
            "let name: str = 'John';",
            "let name: text = 'John';",
            "let name: character = 'John';"
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which keyword is used to define a constant in TypeScript?",
        choices: [
            "const",
            "let",
            "var",
            "define"
        ]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. Which of these is the correct syntax for defining an interface in TypeScript?",
        choices: [
            "interface Person { name: string; age: number; }",
            "type Person = { name: string, age: number }",
            "Person interface { name: string; age: number; }",
            "define interface Person { name: string, age: number }"
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which of these is the correct syntax to import a module in TypeScript?",
        choices: [
            "import module from 'module-name';",
            "import { module } from 'module-name';",
            "import module = require('module-name');",
            "All of the above"
        ]
    }
]);

console.log("Your answers:", quiz);
