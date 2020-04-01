import React,{useState} from 'react'

export default function TodoForm({addTodo}) {

    const [value , setValue] = useState('');


    const handleOnChange = (event) =>{
        setValue(event.target.value);
    }
 
    const onFormSubmit = (event) =>{ 

       event.preventDefault(); // this is necessary when use form application
        
        if(!value) return;
        
        addTodo(value);
    }
    return (
        <form onSubmit={onFormSubmit} >
            <label className="form-label">
                add new task 
                <input
                    type='text'
                    className='form-input'
                    placeholder='Enter new Task'
                    value = {value}
                    onChange = {handleOnChange}
                />
               
            </label>
        </form>
    )
}
