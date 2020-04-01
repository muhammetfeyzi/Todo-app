import React,{useState} from 'react'
import Item from './Item';
import TodoForm from './TodoForm';

export default function Todo() {

    const initialState = [
        {
            text : 'Learn Hooks ',
            isComplated : false
        },
        {
            text : 'Learn JavaScript',
            isComplated : false
        },
        {
            text : 'Learn Htmml & CSSS',
            isComplated : false
        },
    ]

   // const resultArray = useState(initialState);
   // const todos = resultArray[0];   --- bu todos current state
   // const setTodos = resultArray[1]; -- todos updated state

    const [todos,setTodo] = useState(initialState);  // -- this is  same code blog above 

    const addTodo = (text) =>{
        const newTodo = [...todos,{text,isComplated:false}];
        setTodo(newTodo);
    }

    const handleRemoveClick = (index) =>{
        // get all todos array . . . 

        const allTodos = [...todos];

        // remove the click item on array . . .
        allTodos.splice(index,1);

        // set todos with removed index
        setTodo(allTodos)

    }

    return (
        <div className="todo-container">
            <h2 className='main-heading'> To-do Application</h2>
            <TodoForm addTodo= {addTodo}/>
            <div>
                {
                    todos.length ? (
                        todos.map((item,index)=>(
                         <Item
                         key = {index} // must be use on loop
                         todo = {item}
                         index = {index}
                         handleRemoveClick = {handleRemoveClick}
                         />
                    ))
                    ) : ""
                }
            </div>
        </div>
    )
}
