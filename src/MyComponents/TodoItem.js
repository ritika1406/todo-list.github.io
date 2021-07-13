import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    let listStyle={
        border: "black",
        padding: "1rem",
        borderStyle: "groove",
        margin: "2rem",
    }
    
    return (
        <div style={listStyle} >
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
