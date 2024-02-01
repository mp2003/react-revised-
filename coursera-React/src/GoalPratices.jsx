import React, { useState } from "react";

const GoalPratices = () => {
    const [value, setValue] = useState('');
    const [goal, setGoal] = useState([]);
    const addList = () => {
        if (value.trim() !== '') {
            setGoal([...goal, value])
            setValue("");
        }
    }
    const deleteList = (index) => {
        let updatedList = [...goal];
        updatedList.splice(index, 1);
        setGoal(updatedList);
    };
    return (
        <>
            <div className="flex flex-col h-screen w-full justify-center items-center">
                <header>
                    <h1>Goals</h1>
                </header>
                <div>
                    <input type="text" className="ring-2 ring-black" value={value} onChange={(e) => { setValue(e.target.value) }} />
                    <button className="px-4 py-2" onClick={addList}>Add</button>
                </div>
                <ul className="list-disc">
                    {goal.map((g, index) => {
                        return (<div>
                            <li key={index}>{g}</li>
                            <button onClick={() => deleteList(index)}>Delete</button>
                        </div>)
                    })}
                </ul>
            </div>
        </>
    );
};

export default GoalPratices;
