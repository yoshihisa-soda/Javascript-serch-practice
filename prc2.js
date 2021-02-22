// null合体演算子

// 例（短縮系）
x = a ?? b;
// 例（通常）
x = (a !== null && a !== undefined) ? a : b;

let firstName = null;
let lastName = null;
let nickName = "Supercorder";

// 最初のnull/undifeined出ない値を表示します
// nonymousは"匿名"という意味
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// OR演算子「||」は真の値を返す
// NULL合体演算子「??」は定義済みの値を返す
height = height ?? 100; // heightが未定義であれば100を返す
let height = 0;

alert(height || 100); // 100 
alert(height ?? 100); // 0

let height = null;
let width = null;
// 重要: かっこを使用する
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000
// 恐らくこれは正しくない計算でしょう
let area = height ?? (100 * width) ?? 50;

// 安全上の理由により、&& や || 演算子と一緒に ?? を用いることは禁止されている
// 以下はエラー
// let x = 1 && 2 ?? 3;
let x = (1 && 2) ?? 3; // 動作します
alert(x); // 2