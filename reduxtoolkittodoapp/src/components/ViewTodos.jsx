import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewTodos = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition duration-300 hover:shadow-lg"
        >
          <span className="text-gray-800">{todo.text}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => onUpdate(todo)}
              className="text-yellow-500 hover:text-yellow-600 transition duration-300"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ViewTodos;

