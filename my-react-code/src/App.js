import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard.js";
import ToDoLists from "./components/toDoList/ToDoList.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import RealTimeSearch from "./components/realTimeSearch/RealTimeSearch.js";
import StarRating from "./components/starRating/StarRating.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <button
          onClick={() => { window.location.href = "/"; }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#1E40AF',
            color: 'white',
            fontWeight: '600',
            borderRadius: '0.5rem',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
            outline: 'none',
            border: 'none'
          }}
        >
          Home
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/toDoList" element={<ToDoLists />} />
        <Route path="/searchBar" element={<SearchBar />} />
        <Route path="/realTimeSearch" element={<RealTimeSearch />} />
        <Route path="/starRating" element={<StarRating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
