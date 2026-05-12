//ダミーデータ
const tasks = [
    {id:1,title:"課題提出",priority:"S",completed:false,urgency:5},
    {id:2,title:"ES作成",priority:"B",completed:true,urgency:4},
    {id:3,title:"面接対策",priority:"A",completed:false,urgency:1},
    {id:4,title:"ポートフォリオ作成",priority:"C",completed:true,urgency:5}
];
//DOM
const taskForm = document.getElementById("task-form");
const taskText = document.getElementById("taskText");
const priority = document.getElementById("priority");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

//フォーム送信時の処理
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();  //ページリロード防止
//入力値の取得
    const title = taskText.value;
    const prio = priority.value;
//空入力チェック(何も入力されていない場合処理しない)
    if(title.trim() === "" ) return;
//タスクオブジェクト作成
    const task ={
        id: Date.now(),
        title: title,
        priority: prio,
        completed: false,
        urgency: 5
    };
//配列に追加(状態更新)
    tasks.push(task);
//画面更新
    renderTasks();
//入力欄リセット
    taskText.value = "";
    priority.value = "";
});


