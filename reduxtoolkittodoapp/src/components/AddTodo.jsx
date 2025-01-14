import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-4 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-4 hover:bg-indigo-700 transition duration-300"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

