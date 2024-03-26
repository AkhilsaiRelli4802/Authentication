import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Signup from './Components/signupForm/signUp';
import Autherization from './Components/Authentication/Autherization';
import UserDetails from './Components/DetailsForm/UserDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
          <Route
              exact
              path="/"
              element={<Signup />}
          />
          <Route
              exact
              path="/autherization"
              element={<Autherization />}
          />
          <Route 
          exact
          path='/UserDetails'
          element={<UserDetails/>}
          />
      </Routes>
  </BrowserRouter>
</>
);