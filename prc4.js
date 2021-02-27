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

// シンボリックなプロパティはfor...inに参加しない
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) {
    alert(key); // name, age, no symbol
}
// symbol による直アクセスは動作する
alert("Direct: " + user[id]);

// 他の型のプロパティキーは文字列に強制される
let obj = {
    0: "test"
};
// 両方のアラートは同じプロパティにアクセス（文字列"0"に変換）
alert(obj["0"]); // test
alert(obj[0]); // test (同じプロパティ)

// <グローバルシンボル>

// グローバルレジストリから読む
let id = Symbol.for("id"); // symbol が存在しない場合に作られるっぽい
// 再度読み込み
let isAgain = Symbol.for("id");
// 同じシンボル
alert( id === idAgain ); // true

// Symbol.keyFor
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// symbol から name を取得
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// 非グローバルのものに対しては動作しない
alert( Symbol.keyFor(Symbol.for("name")) ); // name, global symbol
alert( Symbol.keyFor(Symbol("name2")) ); // undefined, 引数はグローバルシンボルではありません