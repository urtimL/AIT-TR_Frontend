import { log } from "console";
import React, { ChangeEvent, useState } from "react";

interface ITask {
    name: string;
    completed: boolean;
}

const ToDoList: React.FC = (): JSX.Element => {
   // const [taskList, setTaskList] = useState<ITask[]>([]);

    const [taskList, setTaskList] = useState<ITask[]>([{
        name: '11111111',
        completed: false
    }]);

    const [task, setTask] = useState<ITask>({
        name: '',
        completed: false
    });

    const [check, setCheck] = useState<boolean>(false);

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked);

        const copy = [...taskList];
        
        const arr = taskList.filter(task => {
            return task.name === e.target.value
        })

        arr[0].completed = e.target.checked;

        const index = copy.findIndex(task => {
            return arr[0].name = task.name;
        })

        copy[index] = arr[0];

        setTaskList(copy);

        }
    }

    const handleRemoveTask = (index: number): void => {
        const updatedTask = [...taskList];

        updatedTask.splice
    }
 
    return (
        <div className="container">
            <h1>Todo List App</h1>
            <input type="text" />
            <button>Add Task</button>
            <ol>
                {taskList.map((task, index) => (
                    /*
                        1. один корневой вложенный элемент
                        2. Обязательный атрибут key
                    */
                   <div key={index} className="task">
                        <li>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input 
                                type="checkbox" 
                                id="isDone" 
                                onChange={handleIsDone}
                            />
                            <button
                                onClick={() => handleRemoveTask(index)}
                            >
                                Remove
                            </button>
                        </li>
                   </div>
                ))}
            </ol>
        </div>
    );
};

export default ToDoList;
