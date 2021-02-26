// シンボル型

// id は新しい symbol
let id = Symbol();

// デバッグ用にシンボルに説明を与えることができる
let id = Symbol("id");

// シンボルはユニークであることが保証されている
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
alert(id); // TypeError
alert(id.toString()); // Symbol(id), これは動作する

// "隠れた"プロパティ
let user = { name: "John" };
let id = Symbol("id");

user[id] = "ID Value";
alert( user[id] ); // キーとして symbol を使ってデータにアクセスできる

// ...
let id = Symbol("id");

user[id] = "Their id value";

let user = { name: "John" };

// 我々のスクリプトは　"id" プロパティを使う
user.id = "ID Value";

// ...もし後で別のスクリプトが別の目的で "id" を使う？

user.id = "Their id value"
// boom! 上書きされる