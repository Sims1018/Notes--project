import React, { useState } from "react";

const App = () => {
  const [tital, settital] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  // New state for bullet point
  const [point, setPoint] = useState("");
  const [points, setPoints] = useState([]);

  const addPoint = () => {
    if (point.trim() === "") return;

    setPoints([...points, point]);
    setPoint("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (tital.trim() === "") return;

    const copyTask = [...task];

    copyTask.push({
      tital: tital,
      detail: detail,
      points: points,
    })

    setTask(copyTask);

    // Clear inputs
    settital("");
    setDetail("");
    setPoint("");
    setPoints([]);

  };

   // -------------------Dete-----------
  const deleteNote = (idx)=>{
    console.log("delete completed !");
    let copyDel = [...task];
    copyDel.splice(idx ,  1)
    setTask(copyDel)
    
    
  }


  return (
    <div className="bg-black lg:flex text-white min-h-screen gap-20">

      {/* ================= LEFT SIDE ================= */}

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 w-full lg:w-1/2 p-10"
      >
        <h1 className="text-5xl font-bold">
          Notes App
        </h1>

        {/* TITLE */}

        <input
          className="border-2 border-white bg-transparent px-3 py-5 text-2xl outline-none"
          type="text"
          placeholder="Enter title..."
          value={tital}
          onChange={(e) => {
            settital(e.target.value);
          }}
        />

        {/* DETAIL */}

        <textarea
          className="border-2 border-white bg-transparent px-4 py-5 text-2xl outline-none resize-none"
          placeholder="Enter note..."
          rows="4"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />

        {/* BULLET POINT INPUT */}

        <div className="flex gap-2">

          <input
            className="border-2 border-white bg-transparent px-3 py-3 text-xl outline-none flex-1"
            type="text"
            placeholder="Enter bullet point..."
            value={point}
            onChange={(e) => {
              setPoint(e.target.value);
            }}
          />

          <button
            type="button"
            onClick={addPoint}
            className="bg-white text-black px-5 rounded transition-transform hover:scale-105 active:scale-95"
          >
            + Point
          </button>

        </div>

        

        {/* SHOW ADDED POINTS */}

        {points.length > 0 && (
          <ul className="list-disc ml-6 text-xl">
            {points.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))} 
          </ul>
        )}

        {/* SUBMIT */}

        <button
          type="submit"
          className="border-2 border-white bg-white text-black px-4 py-3 rounded font-bold transition-transform  active:scale-95"
        >
          Add Note
        </button>

      </form>

      {/* ================= RIGHT SIDE ================= */}

      <div className="w-full bg-gray-700 lg:w-1/2 p-10 lg:border-l-2 border-white">

        <h1 className="text-5xl mb-7 font-bold">
          Your Notes
        </h1>

        {/* NOTES */}

        <div className="flex flex-wrap gap-5 overflow-y-auto max-h-[70vh]">




          {task.map((elem, index) => (
            <div
              key={index}
              className="bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)] text-black w-52 min-h-52 rounded-2xl p-8"
            >

              {/* BOLD TITLE */}

              


              <h2 className="text-2xl font-bold `break-words`">
                {elem.tital}
              </h2>

              {/* DETAIL */}

              <p className="mt-3 text-whitetext-lg `break-words`">
                {elem.detail}
              </p>


              {/* BULLET POINTS */}

              {elem.points.length > 0 && (
                <ul className="list-disc ml-5 mt-3 text-lg">
                  {elem.points.map((item, pointIndex) => (
                    <li key={pointIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}


              
{/*  ---------------------delete button------------------------------------------------- */}

                <button onClick={deleteNote} className= "bg-red-500 p-1 cursor-pointer active:scale-95 text-white rounded  h-8 w-35 mt-5">Delete</button>

            </div>


          ))}

        </div>

      </div>
    </div>
  );
};

export default App;