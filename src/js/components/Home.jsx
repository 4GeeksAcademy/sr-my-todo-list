import React, { useState } from "react";



//create your first component
const Home = () => {
    const [inputValue, setInputValue ] = useState("");
    const [todos, setTodos] = useState ([]);

    return (
        <div className="container">
           <h1> To Do List </h1>
           <ul>
                <li>
                    <input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue} 
                    onKeyPress={(e) =>{
                        if (e.key === "Enter") {
                            setTodos(todos.concat (inputValue));
                            setInputValue("");
                        }
                    }} 
                    placeholder="your task"></input>

                </li>
                {todos.map((item, index) => (
                     <li> 
                        {item}{" "}
                        
						class=<i>"fa-solid fa-delete-left"</i>
                            onClick={()=> 
                            setTodos(
                                todos.filter(
                                    (t, currentIndex)=>
                                    	 index != currentIndex
                                )
                            )
                        }
                </li>
            ))}
        </ul>

            
        </div>
    );
};

export default Home;
