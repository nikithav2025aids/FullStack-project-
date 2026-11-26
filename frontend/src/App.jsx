import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Project from './pages/project';
import Tasks from './pages/tasks';
import Clients from './pages/clients';
import Team from './pages/team';
import Calender from './pages/calender';
import Settings from './pages/settings';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<Team />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;