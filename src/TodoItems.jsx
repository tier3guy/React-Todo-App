import React from 'react';

function TodoItems(props) {

    return(
        <>
        <div id = 'todoItems'>
            <button id = 'cancel'><i 
                class="bi bi-trash-fill" 
                onClick = {() => {
                    props.onSelect(props.id);
                }}>
            </i></button>
            <p id = 'task'>
                {props.task}
            </p>
        </div>
        </>
    );
}

export default TodoItems;