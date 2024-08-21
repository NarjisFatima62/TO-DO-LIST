#! /usr/bin/env node
import inquirer from "inquirer";

let todos = ["Coding", "Gym"];
async function createTodo(todos: string[]){
    do{
        let answer = await inquirer.prompt(
            {
            type: "list",
            message: "Select an option,",
            name: "Option",
            choices: ["Add", "Update", "View", "Delete"],
        }
    );
    if(answer.Option === "Add"){
        let addMore = await inquirer.prompt(
            {
            type: "input",
            message: "Add task in the list",
            name: "addmore",
        }
    );
        todos.push(addMore.addmore);
        todos.forEach((addMore) => console.log(addMore));
    }
    if(answer.Option === "Update"){
        let UpdateMore = await inquirer.prompt(
            {
            type: "list",
            message: "Update task in the list",
            name: "todos",
            choices: todos.map((item) => (item))
         }
        );
         let addMore = await inquirer.prompt(
            {
            type: "input",
            message: "Add items in the list",
            name: "todo",
         }
        );
         let newTask = todos.filter((val) => val !== UpdateMore.todos);
         todos = [...newTask,addMore.todo];
    }
    if(answer.Option === "View"){
        console.log("****TO DO LIST****");
        console.log(todos);
        console.log("***************");
    }
    if(answer.Option === "Delete"){
        let deletetask = await inquirer.prompt(
            {
            type: "list",
            message: "Delete task from list",
            name: "deletetask",
            choices: todos.map((item) => (item))
        }
    );
        let newTask = todos.filter((val) => val !== deletetask.deletetask);
        todos = [...newTask];
        console.log(todos);
    }
    }
    while(true)
}
createTodo(todos);