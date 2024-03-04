import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='bg-slate-100'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
