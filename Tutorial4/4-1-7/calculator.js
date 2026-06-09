// 足し算

// 通常関数
// function add(a, b) {
//     return a + b;
// }

// アロー関数
const add = (a, b) => a + b;

// 引き算

// function subtract(a, b) {
//     return a - b;
// }
const subtract = (a, b) => a - b;

// 掛け算
// function multiply(a, b) {
//     return a * b;
// }
const multiply = (a, b) => a * b;

// 割り算
// function divide(a, b) {
//     if (b === 0) {
//         return "エラー：0で割ることはできません";
//     }
//     return a / b;
// }
const divide = (a, b) => {
    if (b === 0) {
        return "エラー：0で割ることはできません";
    }
    return a / b;
};

// 検証ツールでのテスト記述
// console.log("足し算: 1 + 2 =", add(1, 2));
// console.log("引き算", subtract(5, 2));
// console.log("掛け算", multiply(2, 2));
// console.log("0エラー確認", divide(5, 0));
// console.log("割り算", divide(6, 3));

// 検索して出てきた関数例
// function calculate(a, operator, b) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if (b === 0) {
//                 return "エラー:0で割ることはできません";
//             }
//             return a / b;
//         default:
//             return "エラー:無効な演算子です";
//     }
// }
// それを利用して解答例を見て当てはめてみたもの
function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "エラー:無効な演算子です";
    }
}

// const calculate = (a, operator, b) => {
//     switch (operator) {
//         case "+":
//             return add(a, b);
//         case "-":
//             return subtract(a, b);
//         case "*":
//             return multiply(a, b);
//         case "/":
//             return divide(a, b);
//         default:
//             return "エラー:無効な演算子です";
//     }
// };

// function calculate(a, operator, b) {
//     if (operator === "+") {
//         return add(a, b);
//     } else if (operator === "-") {
//         return subtract(a, b);
//     } else if (operator === "*") {
//         return multiply(a, b);
//     } else if (operator === "/") {
//         return divide(a, b);
//     } else {
//         return "エラー:無効な演算子です";
//     }
// }

// const calculate = (a, operator, b) => {
//     if (operator === "+") {
//         return add(a, b);
//     } else if (operator === "-") {
//         return subtract(a, b);
//     } else if (operator === "*") {
//         return multiply(a, b);
//     } else if (operator === "/") {
//         return divide(a, b);
//     } else {
//         return "エラー:無効な演算子です";
//     }
// };

// 複数の計算を連続で行う場合
// Web検索の例
// const calculationArray = [10, "+", 5, "*", 2, "-", 4];

// function calculateAll(arr) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 2) {
//         const operator = arr[i];
//         const nextNum = arr[i + 1];
//         switch (operator) {
//             case "+":
//                 total += nextNum;
//                 break;
//             case "-":
//                 total -= nextNum;
//                 break;
//             case "*":
//                 total *= nextNum;
//                 break;
//             case "/":
//                 total /= nextNum;
//                 break;
//         }
//     }
//     return total;
// }

const calculations = [
    { a: 10, operator: "+", b: 5 },
    { a: 3, operator: "-", b: 1 },
    { a: 2, operator: "*", b: 3 },
    { a: 4, operator: "/", b: 2 },
];

for (const calculation of calculations) {
    console.log("現在処理中", calculation);
    const total = calculate(calculation.a, calculation.operator, calculation.b);
    console.log("結果", total);
}
