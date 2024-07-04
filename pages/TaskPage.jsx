import { useState, useEffect } from "react";

export default function TaskPage() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const URL = "http://localhost:3005";

  useEffect(() => {
    console.log("Called useEffect");

    loadData();
  }, []); // Empty dependency array ensures this effect runs only once

  const loadData = () => {
    fetch(`${URL}/tasks`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = {
      name: inputValue,
    };
    fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInputValue("");
        loadData();
      })
      .catch((error) => console.log(error));
  };
  const updateItem = (id, value) => {
    const form_data = {
      id: id,
      name: value,
    };
    fetch(`${URL}/tasks/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form_data),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        loadData();
      })

      .catch((error) => console.log(error));
  };
  
  const deleteItem = (id) => {
    fetch(`${URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        loadData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex  justify-center my-5">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="font-semibold text-2xl text-center mb-3">
          Task Manager
        </h1>
        <hr />
        <ol className="list-decimal p-3 my-3">
          {!tasks.length && (
            <h1 className="text-center bg-yellow-500 p-2 text-white rounded-lg">
              Nothing Found
            </h1>
          )}

          {tasks.map(({ id, name }) => {
            return (
              <li className="" key={id}>
                <div className="p-1 flex justify-between">
                  <div>
                    {/* <span>{item}</span> */}

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateItem(id, e.target.value)}
                      className="appearance-none rounded w-full p-1 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2"
                    />
                  </div>
                  <div>
                    <span
                      onClick={() => deleteItem(id)}
                      className="text-red-500 hover:text-red-600 border px-2 rounded hover:bg-slate-400 cursor-pointer"
                    >
                      X
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="inputField"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2"
              placeholder="Enter something"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

