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

// 練習問題２
const users = [
    {
        id: 1,
        name: "田中",
        active: true,
    },
    {
        id: 2,
        name: "佐藤",
        active: false,
    },
    {
        id: 3,
        name: "鈴木",
        active: true,
    },
];

// アクティブなユーザーだけ取得する関数
function getActiveUser(userList) {
    return userList.filter((user) => user.active === true);
}
console.log(getActiveUser(users));

// 指定したIDのユーザーをactive:falseに変更する関数
function deactivateUser(userList, userId) {
    return userList.map((user) => {
        if (user.id === userId) {
            return {
                ...user,
                active: false,
            };
        }
        return user;
    });
}

console.log(deactivateUser(users, 1));

// 実務より練習問題；企業サイトのお問い合わせ管理画面
// 要望：①未対応のお問い合わせだけを確認したい②対応済みに変更したい
// 下記はデータ
const inquiries = [
    {
        id: 1,
        name: "田中",
        subject: "料金について",
        handled: false,
    },
    {
        id: 2,
        name: "佐藤",
        subject: "サービス内容について",
        handled: true,
    },
    {
        id: 3,
        name: "鈴木",
        subject: "見積もり依頼",
        handled: false,
    },
];

// 未対応の問合せを取得する関数
function getUnansweredInquiries(inquiriesList) {
    return inquiriesList.filter((inquiry) => inquiry.handled === false);
}
console.log(getUnansweredInquiries(inquiries));
// お問い合わせ内容に対応した場合にupdateして問合せ済みに変更する関数
function completeInquiry(inquiriesList, inquiryId) {
    return inquiriesList.map((inquiry) => {
        if (inquiry.id === inquiryId) {
            return {
                ...inquiry,
                handled: true,
            };
        }
        return inquiry;
    });
}
console.log(completeInquiry(inquiries, 3));

// 実務風練習問題②：お知らせ管理画面
// 公開中のお知らせだけを取得し、一覧画面にタイトルだけ表示したい
// 期待結果：[ "夏季休業のお知らせ","新サービス開始" ]
const notices = [
    {
        id: 1,
        title: "夏季休業のお知らせ",
        published: true,
    },
    {
        id: 2,
        title: "システムメンテナンス",
        published: false,
    },
    {
        id: 3,
        title: "新サービス開始",
        published: true,
    },
];

function getPublishedTitles(noticeList) {
    return noticeList
        .filter((notice) => notice.published === true)
        .map((notice) => notice.title);
}

console.log(getPublishedTitles(notices));
console.log("test");
