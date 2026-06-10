// 課題１
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

// 課題２
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

// 課題３:複数の計算を連続で行う場合
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
    { a: 4, operator: "/", b: 0 },
];

// // 自身で作成
// for (const calculation of calculations) {
//     console.log("現在処理中", calculation);
//     const total = calculate(calculation.a, calculation.operator, calculation.b);
//     console.log("結果", total);
// }
// 解答例
console.log("計算結果");

for (const calc of calculations) {
    const result = calculate(calc.a, calc.operator, calc.b);
    console.log(`${calc.a} ${calc.operator} ${calc.b} = ${result}`);
}

// 課題４:計算履歴の保存
// 検索したものの写経
// 履歴を保存する配列
const calcHistory = [];
// 履歴を追加してコンソールで確認する関数
function addHistory(expression, result) {
    const historyItem = {
        formula: expression,
        answer: result,
        timestamp: new Date().toLocaleTimeString(),
    };
    // 配列の先頭に保存
    calcHistory.unshift(historyItem);
    // 最大10件までに制限
    if (calcHistory.length > 10) {
        calcHistory.pop();
    }

    // 保存時にコンソールに表示
    console.log("【履歴が保存されました】");
    // 表形式で見やすく表示
    console.table(calcHistory);
}

// 現在の履歴一覧を呼び出して確認する関数
function showHistory() {
    if (calcHistory.length === 0) {
        console.log("履歴は空です");
        return;
    }
    console.log(`現在の履歴（合計 ${calcHistory.length} 件）`);
    console.table(calcHistory);
}

function clearHistory() {
    calcHistory.length = 0;
    console.log("履歴をすべて削除しました");
}

addHistory("5 + 3", 8);
addHistory("5 - 3", 2);
addHistory("10 * 2", 20);
addHistory("10 / 2", 5);

// 解答例
// 履歴を保存する配列
const history = [];

// 履歴付きの計算関数
function calculateWithHistory(a, operator, b) {
    const result = calculate(a, operator, b);
    const record = {
        // 式：recordの変数に５＋２のような式をa,operator,bを用いて代入するため
        expression: `${a} ${operator} ${b}`,
        // 結果：resultにcalculateの関数を代入してそれを結果の表示に使用
        result: result,
        // 計算式を保存した時間の打刻：ja-JPと明記することで日本時間で保存されるようにしている
        timestamp: new Date().toLocaleDateString("ja-JP"),
    };
    // .push(引数)を用いて、配列に引数のデータを追加することができる
    history.push(record);
    // 計算後の結果をreturnで返す
    return result;
}

// 履歴を表示する関数
function showHistory() {
    console.log("=== 計算履歴 ===");
    if (history.length === 0) {
        console.log("履歴がありません");
        return;
    }
    for (let i = 0; i < history.length; i++) {
        const record = history[i];
        console.log(
            `${i + 1}.${record.expression} = ${record.result} (${record.timestamp})`,
        );
    }
}

// テスト
calculateWithHistory(100, "+", 200);
calculateWithHistory(300, "+", 200);
calculateWithHistory(10, "*", 10);
calculateWithHistory(20, "/", 2);
calculateWithHistory(100, "/", 0);

showHistory();
