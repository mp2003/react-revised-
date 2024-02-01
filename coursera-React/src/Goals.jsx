import React, { useState } from "react";

const Goals = () => {
    const [value, setValue] = useState("");
    const [goals, setGoals] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addGoal = () => {
        if (value.trim() !== "") {
            const timestamp = new Date().toLocaleString(); // Get current timestamp
            const newGoal = { text: value, timestamp: timestamp };
            setGoals([...goals, newGoal]);
            setValue("");
        }
    };
    const deleteGoal = (index) => {
        let Updatedgoals = [...goals];
        Updatedgoals.splice(index, 1);
        setGoals(Updatedgoals);
    }
    return (
        <>
            <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex flex-col items-center w-full min-h-screen  p-4 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] sm:rounded-none mx-auto">
                <header className="m-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-slate-100">
                        Goals
                    </h1>
                </header>
                <main>
                    <div className="flex flex-col items-center">
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            className="m-4 sm:m-8 h-14 p-4 rounded-full text-base sm:text-xl border-none focus:ring focus:ring-slate-900 ring-4
                focus:outline-none bg-gradient-to-r from-gray-300 via-fuchsia-600 to-orange-600 w-full max-w-lg"
                        />

                        <button
                            type="button"
                            onClick={addGoal}
                            className="text-slate-100 bg-black p-4 text-base sm:text-xl font-semibold rounded-full"
                        >
                            Add Goal
                        </button>
                    </div>

                    <h3 className="text-slate-100 p-4 mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl font-semibold">
                        Today's Goals
                    </h3>
                    <ul className="text-slate-100 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold list-disc flex flex-col items-evenly relative justify-center max-w-lg">
                        {goals.map((goal, index) => (
                            <li
                                key={index}
                                className="p-2 min-h-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-gradient-to-r rounded-xl m-4 ring-2 ring-black"
                            >
                                <div className="gap-4 flex justify-around items-center ">
                                    <span>
                                        {goal.text} <br /> {goal.timestamp}</span>
                                    <button className="text-sm bg-black w-20 h-10 rounded-lg" onClick={() => deleteGoal(index)}>Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
};

export default Goals;
