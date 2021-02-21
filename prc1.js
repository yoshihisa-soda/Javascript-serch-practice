// アロー関数

// 引数が複数の場合
let func = (arg1, arg2, arg3) => expression;

let func = function(arg1, arg2, arg3) {
    return expression;
}


let sum = (a, b) => a + b;

let sum = function(a, b) {
    return a + b;
}

alert( sum(1,2) ); // 3

// 引数が1つの場合はさらに省略
let double = n => n * 2;

let double = function(n) {
    return n * 2;
}

// 引数がない場合
let sayHi = () => console.log("Hi");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hllo') :
    () => alert("Greetings!");

welcome();

// 複数行のアロー関数
let sum = (a, b) => {
    let result = a + b;
    return result;
}

alert( sum(1, 2) ); // 3


// アロー関数を使った書き換え
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
