import { useEffect, useState } from 'react';
import { deleteTodoData, getTodoData, postTodoData } from '../../api/todo.api';
import { NAME } from '../../constant';
import Todo from '../Todo';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  const fetchData = async() => {
    const data = await getTodoData('', {name: NAME});
    setTodoList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickAddBtn = async() => {
    const payload = {
      name: NAME,
      title: todoName
    };
    const response = await postTodoData('', payload);
    if (response) {
      setTodoName('');
      fetchData();
    };
  };

  const handleClickDeleteBtn = async(id) => {
    const payload = {
      name: NAME,
      id
    };
    const response = await deleteTodoData('', payload);
    if (response) {
      fetchData();
    };
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleClickAddBtn();
    };
  };

  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" 
               id="myInput" 
               placeholder="Title..." 
               value={todoName} 
               onChange={handleInputChange}
               onKeyDown={handleOnKeyDown}
        />
        <span onClick={handleClickAddBtn} className="addBtn">Add</span>
      </div>
      
      <ul id="myUL">
        {todoList.map(todo => 
            <Todo key={todo.id} 
                  title={todo.title} 
                  id={todo.id} 
                  handleDelete={handleClickDeleteBtn}
            />
          )
        }
      </ul>
    </>
  );
}
