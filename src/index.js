// var val1 = "val1";
// console.log(val1);

// // var変数は上書き可能
// val1 = "違う値";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書きval2";
// console.log(val2);

// // let変数は再宣言不可
// let val2 = "再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// val3 = "上書きval2";
// console.log(val3);

// // const変数は再宣言不可
// let val3 = "再宣言";
// console.log(val3);

// テンプレート文字列 文字列の中に変数

// const name = "小俣";
// const age = 28;

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来

function func1(str) {
  return str;
}

// 上としたは同じ
// const func1 = function(str) {
//   return str;
// }

console.log(func1("小俣です"));

//　アロー関数
// const func2 = (str) => {
//   return str;
// };
// したと同じ
const func2 = (str) => str;

console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(1, 100));
