import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProductType from './pages/ProductType';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <div className='bg-slate-100'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='' element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/users' element={<User />} />
          <Route path='/metarials/product_type' element={<ProductType />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
