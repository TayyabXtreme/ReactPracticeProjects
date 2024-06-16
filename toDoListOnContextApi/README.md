# To-Do App with Context API

A simple and efficient to-do list application built using React and Context API. This app allows users to add, edit, and delete tasks, providing a streamlined task management experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persistent state management using Context API

## Demo

Check out the live demo of the app [here](#).

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/TayyabXtreme/ReactPracticeProjects.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd todoListOnContextApi
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Start the development server:**
    ```sh
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Add, edit, or delete tasks using the input field and buttons provided.
3. Tasks will be managed and displayed in real-time.


### Important Files

- **TaskContext.js:** Creates the context for managing tasks.
- **TaskProvider.js:** Contains the provider component that uses `useReducer` to manage the state.
- **Task.js:** Component to render individual tasks.
- **TaskList.js:** Component to render the list of tasks.
- **TaskForm.js:** Component for adding and editing tasks.
- **App.js:** Main component that ties everything together.

