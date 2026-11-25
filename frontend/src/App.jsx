import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import Project from './pages/project';
import Tasks from './pages/tasks';
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;