import React, { useState } from 'react';
import TodoItems from './TodoItems';

const App = () => {

    const [task,setTask] = useState('');
    const [items,setItems] = useState([]);

    const Settask = (e) => {
        setTask(e.target.value);
    }
    const insertItems = () => {
        setItems((oldItems) => {
            return [...oldItems,task];
        })
        setTask('');
    }
    const deleteItem = (id) => {
        console.log(id);
        setItems((oldItems) => {
            return oldItems.filter((value , index , items) => {
                return index !== id;
            })
        })
    }
    const keyCheck = (event) => {
        if(event.key === 'Enter'){
           insertItems();
        }
    }

    return (
        <>
           <div id = 'container'>
              <h1 id = 'tittle'>Todo App</h1> 
              <div className = 'inputs'>
                <input 
                    placeholder = 'Add Your Todo'
                    id = 'todo'
                    value = {task}
                    onChange = {Settask}
                    autoComplete = 'off'
                    onKeyPress = {keyCheck}/>
                <botton 
                    id = 'addbtn'
                    onClick = {insertItems}>+</botton>
              </div>
              <ol id = 'items'>
                {items.map((currentItem , index) => {
                    return (
                        <TodoItems 
                            task = {currentItem}
                            id = {index}
                            key = {index}
                            onSelect = {deleteItem}
                        />
                    );
                })}
              </ol>
           </div> 
        </>
    );
}

export default App;