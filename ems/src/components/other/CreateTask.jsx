import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userDatas, setUserDatas] = useContext(AuthContext);

  const [task, setTask] = useState({
    title: '',
    date: '',
    asingTo: '',
    category: '',
    description: '',
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // Fetch employees from localStorage
    const data = JSON.parse(localStorage.getItem('employe'));

    const updatedEmployees = data.map((emp) => {
      if (emp.firstName === task.asingTo) {
        console.log('Employee Found');
        emp.tasks.push(task);
        emp.taskNumbers.newTask += 1;
        emp.taskNumbers.totalTasks += 1;
      }
      return emp;
    });

    // Update localStorage with new task data
    localStorage.setItem('employe', JSON.stringify(updatedEmployees));

    // Update userDatas state to trigger re-render
    setUserDatas(updatedEmployees);

    // Clear form fields
    setTask({
      title: '',
      date: '',
      asingTo: '',
      category: '',
      description: '',
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-gray-300 text-sm mb-0.5">Task Title</h3>
            <input
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-0.5">Date</h3>
            <input
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
              className="text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-0.5">Assign to</h3>
            <input
              value={task.asingTo}
              onChange={(e) => setTask({ ...task, asingTo: e.target.value })}
              className="text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-0.5">Category</h3>
            <input
              value={task.category}
              onChange={(e) => setTask({ ...task, category: e.target.value })}
              className="text-sm py-1 px-2 w-4/5 bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
