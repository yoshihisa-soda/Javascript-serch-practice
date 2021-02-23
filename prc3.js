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