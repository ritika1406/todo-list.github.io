import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    let headerStyle={
        textAlign: "center",
         color: "chocolate",

    }
    let boxStyle={
        borderStyle: "double",
        padding: "1rem",
        backgroundColor: "aquamarine",
        marginTop: "2rem",
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("This can't be empty!!")
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }

    }
    return (
        <div className="container" style={boxStyle} >
            <h3 style={headerStyle}>Add a Todo</h3>
            <form onSubmit={submit}>
                <div classNameName="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control" id="title" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Description</label>
                    <input type="text"  value={desc} onChange={ (e)=>{setDesc(e.target.value)}}  className="form-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
