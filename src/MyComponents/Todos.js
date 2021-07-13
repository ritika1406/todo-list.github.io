import React from 'react'

import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let listStyle={
        paddingTop: "4rem",

    }
    return (
        <div className ="container" >
           <h3 className="text-center my-3" style={listStyle} > Todo </h3>
           {props.todos.length===0? "No Todos to display, Add Some":
            props.todos.map((todo)=>{
               return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>

           })
           }

        </div>
    )
}
