import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, deleteTodo } from '../actions/index'
// import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState("")
    // console.log(inputData);
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>
                            Add your List here 👍
                        </figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fa-solid fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), 
                            
                        )}></i>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItems' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-trash-alt add-btn" title='delete item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo