import {useState} from "react";


function App(){
    const[tasks, setTasks] = useState([]); /*tasksは現在値、setTasksは値を更新する関数*/
    const[newTask, setNewTask] = useState(""); /*newTaskは今入力されるタスク、setNewTaskは入力文字更新関数*/

/*タスク追加関数 */
const addTasks = () =>{
    if (newTask.trim() ==="") return;   /*空のタスクは追加しない */
    const newTaskObject = {
        id: Date.now(),
        title: newTask,
        completed: false
    };
    setTasks([...tasks, newTaskObject]); /*既存のタスクリストに追加 */
    setNewTask(""); /*入力欄を空に */
} ;

/*タスク完了を切り替える関数 */
const toggleTaskCompleted = (id) =>{
    setTasks(
        tasks.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task
    )
    );
};

/*タスクを削除する関数 */
const deleteTask = (id) =>{
    setTasks(tasks.filter((task) =>task.id !==id));
};

return(
<div className="app-container">
    <h1 className="app-title">やることリスト</h1>

    <div className="task-input-container">
        <input
        type = "text"
        value = {newTask}
        onChange = {(e) => setNewTask(e.target.value)}
        placeholder = "タスクを入力"
        className = "task-input"
        />

        
        <button onClick = {addTasks} className ="add-btn">追加</button>
    </div>

    <ul className="task-list">
        {tasks.map((task) => (
            <li key={task.id} className="task-item">
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
                className="task-checkbox"
                />
                <span
                className={`task-text ${task.completed ? "completed" : ""}`}
                >
                    {task.title}
                </span>
                <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
                >
                    削除
                </button>
            </li>
        ))}
    </ul>
</div>
);
}
export default App;