//Local Storageから読み込み
const savedTasks = localStorage.getItem("tasks");
//保存データがあれば復元、なければダミーデータ
let tasks = savedTasks
   ? JSON.parse(savedTasks)
   : [
    {id:1,title:"課題提出",priority:"S",completed:false,urgency:5},
    {id:2,title:"ES作成",priority:"B",completed:true,urgency:4},
    {id:3,title:"面接対策",priority:"A",completed:false,urgency:1},
    {id:4,title:"ポートフォリオ作成",priority:"C",completed:true,urgency:5}
];
//DOM取得
//const taskForm = document.getElementById("task-form");
//const taskText = document.getElementById("taskText");
//const priority = document.getElementById("priority");
//const taskList = document.getElementById("task-list");
//const emptyMessage = document.getElementById("empty-message");

//Local Storage保存関数
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//フォーム送信時の処理
//taskForm.addEventListener("submit", (e) => {
    //ページリロード防止
    //e.preventDefault(); 

//入力値の取得
    //const title = taskText.value;
    //const prio = priority.value;
//空入力チェック(何も入力されていない場合処理しない)
    //if(title.trim() === "" ) return;
    //タスクオブジェクト作成
    //const task = {
        //id: Date.now(),
        //title: title,
        //priority: prio,
        //completed: false,
        //urgency: 5
    };
//配列に追加(状態更新)
    //tasks.push(task);

//Local Strage保存
    saveTasks();

//画面更新
    //renderTasks();

//入力欄リセット
    //taskText.value = "";
    //priority.value = "";
//});


//function renderTasks(){

//画面をいったん空にする
    //taskList.innerHTML = "";

//優先度順ソート
    const priorityOrder = {
        S: 0,
        A: 1,
        B: 2,
        C: 3
 };
   tasks.sort((a,b)=> {
       return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

//タスクが０件の場合メッセージを表示
    if(tasks.length === 0){
        taskList.innerHTML = "";
        taskList.appendChild(emptyMessage);
        return;
    }
    tasks.forEach(task =>{
//div要素を作成
       // const taskItem = document.createElement("div");
//class追加
       // taskItem.classList.add("task-item");
//完了済みならcompletedクラス追加
       // if(task.completed){
          //  taskItem.classList.add("completed");
      //  }
//タスクの中身を作成
       // taskItem.innerHTML = `
        //<span>${task.title}</span>
       // <span>[${task.priority}]</span>

       // <button class ="toggle-btn">
            //${task.completed ? "完了済みにする" : "完了"}
       // </button>

        //<button class="delete-btn">
       // 削除
       // </button>
      //  `;

//完了、未了切り替え,削除ボタン取得
//const toggleBtn = taskItem.querySelector(".toggle-btn");
//const deleteBtn = taskItem.querySelector(".delete-btn");

//ボタンクリック時
//toggleBtn.addEventListener("click", () =>{

//completedを反転
  //  task.completed = !task.completed;
//保存
    saveTasks();

    //再描画
    //renderTasks();
//});
//削除
//deleteBtn.addEventListener("click",() =>{
    //tasks = tasks.filter(t => t.id !== task.id);
//保存
    saveTasks();

    //renderTasks();
//});


//task-listに追加
//taskList.appendChild(taskItem);
  //  });
}
//描画
//renderTasks();
    )
