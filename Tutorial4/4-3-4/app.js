// 自分で書いたコード
// 問題点は、inputの値が空白でも内容がliとして追加出来てしまうことだった
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// 追加ボタンのイベントリスナーを監視
todoButton.addEventListener("click", function () {
    // inputタグに書かれた内容を取得
    const todoText = todoInput.value;
    // 問題点解決
    if (todoText === "") return;
    // liタグを追加するために作成
    const li = document.createElement("li");
    // ユーザーが入力した値をliとして表示するように定義（この時にconstで定義したtodoTextを使用してみた）
    // innerTextはブラウザで実際に表示される文字列を参照するため処理速度が重たくなる。
    // li.innerText = todoText;
    // 基本的に文字列を表示するだけなら、textContentを用いたほうが良い
    li.textContent = todoText;
    // ulタグの子要素としてliを指定
    todoList.appendChild(li);
    // inputタグの内容を空にするよう設定
    todoInput.value = "";
});

// // 解答例
// const todoInput = document.querySelector("#todo-input");
// const addButton = document.querySelector("#add-button");
// const todoList = document.querySelector("#todo-list");

// addButton.addEventListener("click", function () {
//     const todoText = todoInput.value;
//     // もしinputタグの値が空だった場合、処理終了
//     if (todoText === "") return;
//     const newTodoItem = document.createElement("li");
//     newTodoItem.textContent = todoText;
//     todoList.appendChild(newTodoItem);
//     todoInput.value = "";
// });
