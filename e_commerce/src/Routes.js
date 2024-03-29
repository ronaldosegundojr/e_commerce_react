import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/pages/Register';
import Login from './components/pages/Login/Login';
// import Logout from './components/pages/pages/Logout';
// import Account from './components/pages/Account';
// import Admin from './components/pages/Admin';
// import CreateUser from './components/pages/CreateUser';
// import EditUser from './components/pages/EditUser';
// import DeleteUser from './components/pages/DeleteUser';
// import UpdateUser from './components/pages/UpdateUser';
// import Products from './components/pages/Products';
// import CreateProducts from './components/pages/CreateProducts';
// import EditProducts from './components/pages/EditProducts';
// import ViewProducts from './components/pages/ViewProducts';
// import DeleteProducts from './components/pages/DeleteProducts';
// import Cart from './components/pages/Cart';

function Rotas() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" component={Logout} />
        <Route path="/account" component={Account} />
        <Route path="/admin" component={Admin} />
        <Route path="/create_user" component={CreateUser} />
        <Route path="/edit_user" component={EditUser} />
        <Route path="/delete_user" component={DeleteUser} />
        <Route path="/update_user" component={UpdateUser} />
        <Route path="/products" component={Products} />
        <Route path="/create_products" component={CreateProducts} />
        <Route path="/edit_products" component={EditProducts} />
        <Route path="/view_products" component={ViewProducts} />
        <Route path="/delete_products" component={DeleteProducts} />
        <Route path="/cart" component={Cart} /> */}
      </Routes>
    </Router>
  );
}

export default Rotas;
