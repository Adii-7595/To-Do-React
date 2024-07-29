# Todo App

A simple Todo App built with React. This application allows users to create, update, and manage tasks with features like marking tasks as done, editing, and deleting tasks. The application is styled with CSS and is designed to be responsive.

## Features

- Add new tasks with titles and descriptions.
- Mark tasks as done with a strikethrough effect.
- Edit existing tasks.
- Delete tasks.
- Responsive design for different screen sizes.

## Folder Structure

- `public/`: Contains the public assets like the main HTML file and global styles.
- `src/`: Contains all source files.
  - `components/`: Contains React components.
    - `TaskForm.jsx`: Component for adding new tasks.
    - `TaskItem.jsx`: Component for displaying and managing individual tasks.
    - `TaskList.jsx`: Component for displaying the list of tasks.
  - `styles/`: Contains CSS files for styling components.
    - `App.css`: Global styles for the application.
    - `TaskItem.css`: Styles for individual task items.
    - `TaskList.css`: Styles for the task list.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd todo-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

5. **Open your browser and navigate to**:

    ```
    http://localhost:3000
    ```

## Usage

- **Adding a Task**: Fill in the title and description in the form and click "Add Task".
- **Marking as Done**: Click on the task title to mark it as done. It will have a strikethrough effect.
- **Editing a Task**: Click the "Edit" button to modify the task's title or description.
- **Deleting a Task**: Click the "Delete" button to remove the task from the list.
- **Undoing Done**: Click the "Undo" button to revert the task to its original state.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License

This project is licensed under the Aditya License.

## Acknowledgements

- React for providing a powerful JavaScript library for building user interfaces.
- CSS for styling and responsive design.

