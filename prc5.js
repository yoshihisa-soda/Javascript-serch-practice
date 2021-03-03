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


// 書式設定 spacer
let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
};

alert(JSON.stringify(user, null, 2));
/* 
JSON.stringify(user, null, 4) の場合
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

// カスタムの "toJSON"
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
{
    "title":"Conference",
    "room": 23
}
*/


// JSON.parse
// 文字列化された配列
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

// ネストされたオブジェクト
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1

// リバイバー(reviver)の利用
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date.getDate() ); // 動作！

// ネストされたものでもOK
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;
  
schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // これも動作します!