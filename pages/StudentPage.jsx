import { useState, useEffect } from "react";

const StudentPage = () => {
  const [students, setStudents] = useState([]);

  const URL = "http://127.0.0.1:8000/api";

  useEffect(() => {
    console.log("Called useEffect");

    loadData();
  }, []);

  const loadData = () => {
    fetch(`${URL}/students`)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="w-4/6 mx-auto my-5 ">
        <h1 className="font-semibold text-center text-3xl mb-2">Students</h1>
        <table className="border-collapse border border-slate-400 w-full p-3">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2"> Student ID</th>
              <th className="border border-slate-300 p-2">Name</th>
              <th className="border border-slate-300 p-2">Department</th>
              <th className="border border-slate-300 p-2">Date of birth</th>
              <th className="border border-slate-300 p-2">Image</th>
              <th className="border border-slate-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({StudentID,Name,Dept,DOB, Image}) => {
              return (
               <tr key={StudentID}>
                <td className="border border-slate-300 p-2">{StudentID}</td>
                <td className="border border-slate-300 p-2">{Name}</td>
                <td className="border border-slate-300 p-2">{Dept}</td>
                <td className="border border-slate-300 p-2">{DOB}</td>
                <td className="border border-slate-300 p-2">
                    <img src={Image} alt="" width='60' className=" mx-auto" />
                </td>
                <td className="border border-slate-300 p-2">
                    <button className="btn bg-red-600">Delete</button>
                    <button className="btn bg-green-500">Edit</button>
                </td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPage;
