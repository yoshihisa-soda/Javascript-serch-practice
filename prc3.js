// オブジェクト

let user = new Object(); // "オブジェクトコンストラクタ" 構文
let user = {}; // "オブジェクトリテラル" 構文 リテラル: 値を直接入れているもの(忘れやすい)

let user = {
    name: "John",
    age: 30,
    "likes birds": true,
}
console.log(user.name);
console.log(user.age);

// 追加
user.isAdmin = true;
// 削除
delete user.age;

let user = {};
// set
user["likes birds"] = true;
// get
console.log(user["likes birds"]);
// delete
delete user["likes birds"];

let key = "likes birds";
user[key] = true;

// 算出プロパティ
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5,
};
console.log( bag.apple ); // 5, fruit="apple"の場合

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // // bag.appleComputers = 5
}
// 角括弧はドット表記よりもはるかに強力
// それらは任意のプロパティ名や変数を許容
// 書くのはドットより面倒

// プロパティの短縮系
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("John", 28);
alert(user.name);

// ↓↓↓
function makeUser {
    return {
        name,
        age,
    }
}

let user = {
    name: "soda",
    age: 30,
};

// プロパティ名の制限（これは予約語だからダメ）
let obj = {
    for: 1,
    let: 2,
    return: 3,
}

alert( obj.for + obj.let + obj.return );  // 6

let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__);

// プロパティの存在チェック
let user = {};
alert( user.noSuchProperty === undefined );

// 構文: "key" in object
let user = {name: "ikeike", age: 90};

alert( "age" in user ); // true, user.age は存在する
alert( "blabla" in user ); // false, user.blabla は存在しない

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, キーから名前を取り、そのプロパティをチェック

let obj = {
    test: undefined
};
  
alert( obj.test ); // これは undefined, なので - このようなプロパティはなし?
alert( "test" in obj ); // true, プロパティは存在します!

// for ... in ループ
for (key in object) {
    // オブジェクトプロパティの各キーに対して本体を実行
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    alert(key); // // name, age, isAdmin（keys）
    alert(user[key]); // ohn, 30, true（values）
}


// オブジェクトの順序付け
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
}

for (let code in codes) {
    alert(code);
}

let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // 1つ追加
  
// 非整数プロパティは作成順にリストされます
for (let prop in user) {
    alert( prop ); // name, surname, age
}

// オブジェクトはいくつかの特別な機能を持つ連想配列

// タスク1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// タスク2
function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false;
}

// タスク3
const user = {
    name: "John"
};
// works
user.name = "Pete";
// error
user = 123;

// タスク4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

for (let salary in salaries) {
    sum += salaries[salary];
}

alert(sum); // 390

// タスク5

// 呼び出し前
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};
  
multiplyNumeric(menu);
  
// 呼び出し後
menu = {
   width: 400,
   height: 600,
   title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number')
            return obj[key] *= 2; 
    }
}