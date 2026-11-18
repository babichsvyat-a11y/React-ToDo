# React To-Do App 📝

A clean and interactive To-Do application built with React. This project was created as a hands-on practice to master core React concepts, explore all essential React Hooks, and perform full CRUD operations using a mock JSON backend.

![App Demo](./assets/demo.gif)

## 🚀 Key Features
- **Full CRUD Support:** Create, read, update, and delete tasks seamlessly.
- **Task Filtering:** Filter tasks by status (All, Active, Completed).
- **Persistent Storage:** All data is synced with a local `json-server` database.
- **Responsive UI:** Clean and intuitive interface for managing daily tasks.

## 🧠 Concepts & Hooks Practiced
- **Core React:** Component composition, props drilling, conditional rendering, and controlled forms.
- **React Hooks:** 
  - `useState` & `useEffect` for state management and API side effects.
  - `useContext` & `useReducer` for global state handling.
  - `useRef` for direct DOM access and input focus.
  - `useMemo` & `useCallback` for performance optimization.
- **REST API Integration:** Asynchronous data fetching (`fetch` / `axios`) connected to `json-server`.

## 🛠️ Tech Stack
- **Frontend:** React, CSS3 / Tailwind *(adjust if needed)*
- **Mock Backend:** JSON Server (`db.json`)

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the JSON Server (in a separate terminal):**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. **Run the React app:**
   ```bash
   npm start
   ```
