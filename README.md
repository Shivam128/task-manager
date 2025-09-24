
# Task Manager App

A simple Task Manager built with **React** that allows users to add, complete, delete, and filter tasks. Tasks are persisted using **Local Storage**. Includes theming and performance optimizations.

## Features

- Add tasks (with validation)
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Completed, Pending)
- Persist tasks using Local Storage
- Dark Mode / Light Mode toggle
- Optimized using React.memo, useCallback, useMemo
- Context API for state management
- Minimal CSS animations
- Mobile-responsive layout
- Optional: Drag-and-drop tasks using \`react-beautiful-dnd\`

## Project Structure

```bash
task-manager/
├─ src/
│  ├─ components/       # TaskForm, TaskList, TaskItem, Filter, ThemeToggle
│  ├─ context/          # TaskContext
│  ├─ hooks/            # useLocalStorage
│  ├─ App.js
│  └─ index.js
```

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd task-manager
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

    Start the development server:

    ```bash
    npm start
    ```

    Open http://localhost:3000 in your browser.

## Usage

- Add tasks in the input field and click Add.
- Click a task to mark it as completed.
- Click Delete to remove a task.
- Use filter buttons to view All, Completed, or Pending tasks.
- Toggle between Dark Mode / Light Mode using the theme button.

## Notes

- Tasks are stored in your browser’s Local Storage, so they persist after reload.
- Designed to focus on functionality rather than aesthetics.

---

### 3️⃣ Steps to Run

1. Make sure Node.js and npm are installed:
   ```bash
   node -v
   npm -v
   ```

2. Create a new React app or place your files in the folder `task-manager`.

3. Copy the above `package.json` to your project root.

4. Install dependencies:

   ```bash
   npm install
      ```

5. Start the project:

   ```bash
   npm start
   ```

6. Open your browser at http://localhost:3000 to see the Task Manager app.
