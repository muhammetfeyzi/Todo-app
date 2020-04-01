import React from 'react'

export default function Item({todo,index,handleRemoveClick}) {

    return (
        <div className="todo">
            <span className=""> {todo.text }  </span> 
            <span className="remove-item-cross" onClick={()=> handleRemoveClick(index)}> X</span>
        </div>
    )
}
