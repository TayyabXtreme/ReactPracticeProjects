import React, { useState, useEffect } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

const UpdateTodo = ({ todo, onUpdate, onCancel }) => {
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    setText(todo.text);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onUpdate({ ...todo, text });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-4 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-4 hover:bg-green-600 transition duration-300"
        >
          <CheckIcon className="h-6 w-6" />
        </button>   
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 text-white p-4 hover:bg-red-600 transition duration-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};

export default UpdateTodo;

