// JSONメソッド

let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age} }`;
    }
};

alert(user); // {name: "John", age: 30}

// JSON.stringify : オブジェクトをJSONに変換
// JSON.parse : JSONをオブジェクトに変換

let student = {
    name: "soda",
    age: 100,
    isAdmin: false,
    course: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // string
alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// JSON 内の数値はまさに数値です
alert( JSON.stringify(1) ) // 1

// JSON 内の文字列は文字列のままですが、ダブルクォートです
alert( JSON.stringify('test') ) // "test"
alert( JSON.stringify(true) ); // true
alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// 次のようなプロパティは無視
// ・関数プロパティ(メソッド)
// ・シンボルプロパティ
// ・undefined を格納しているプロパティ

let user = {
    sayHi() { // 無視
      alert("Hello");
    },
    [Symbol("id")]: 123, // 無視
    something: undefined // 無視
};
  
alert( JSON.stringify(user) ); // {} (空オブジェクト)

let meetup = {
    title: "Conference",
    room: {
        number: 123,
        participants: ["john", "ann"]
    }
};

alert( JSON.stringify(meetup) );
/* 構造全体が文字列化される
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

// 重要な制限: 循環参照があってはいけない
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

// 循環参照のため、変換が失敗
meetup.place = room;        // meetup は room を参照
room.occupiedBy = meetup;   // room は meetup を参照
JSON.stringify(meetup);     // Error: Converting circular structure to JSON