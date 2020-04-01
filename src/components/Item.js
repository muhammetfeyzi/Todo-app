import React from 'react'

export default function Item({todo,index}) {
    return (
        <div className="todo">
            <span className=""> {todo.text +  " " +todo.isComplated}  </span> 
        </div>
    )
}
