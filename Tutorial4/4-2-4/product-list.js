let todos = [
    {
        // ToDoリストのNo
        id: 1,
        // textはToDOの内容
        text: "買い物",
        // ToDoがtrueの時は完了、falseの時は未完了
        completed: false,
    },
    {
        id: 2,
        text: "掃除",
        completed: false,
    },
    {
        id: 3,
        text: "洗濯物",
        completed: false,
    },
    {
        id: 4,
        text: "学習",
        completed: false,
    },
    {
        id: 5,
        text: "お風呂掃除",
        completed: false,
    },
];

// // 未完了の部分を判定するfilterの使用方法はOKこれを関数に落とし込む必要があった
// const incompleteTodos = todos.filter((todo) => todo.completed === false);
// console.log(incompleteTodos);

// 今夏の課題では、完了後の内容はfilter不要
// const completeTodos = todos.filter((todo) => todo.completed === true);
// console.log(completeTodos);

// Todoリストの中で未完了の物だけを取得する関数
// function getIncompleteTodos() {
//     return todos.filter((todo) => todo.completed === false);
// }
// 上記はtodosの配列でのみ関数を使用する前提だが、（）の引数にtodoListといった形で関数を読んだ先の違うTodoリストでも関数を使用することができる
function getIncompleteTodos(todoList) {
    return todos.filter((todo) => todo.completed === false);
}
console.log("未完了のtodo：", getIncompleteTodos(todos));

function completeTodo(todoList, todoId) {
    return todoList.map((todo) => {
        if (todo.id === todoId) {
            return {
                ...todo,
                completed: true,
            };
        }
        return todo;
    });
}

todos = completeTodo(todos, 2);
console.log("更新後のTodoリスト：", todos);

// 練習問題
const products = [
    { id: 1, name: "MacBook Air", stock: true },
    { id: 2, name: "iPhone", stock: true },
    { id: 3, name: "iPad", stock: false },
];

function soldOut(productList, productId) {
    return productList.map((product) => {
        if (product.id === productId) {
            return {
                ...product,
                stock: false,
            };
        }
        return product;
    });
}

const updatedProducts = soldOut(products, 2);
console.log(updatedProducts);
