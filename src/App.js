import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from 'react-router-dom';
import Login from "./components/login";
import Friendslist from './components/friendsList';
import FriendsAdd from './components/addFriends';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoute';
//

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>FREINDS DATABASE</h2>
          <Link to={'login'} className='link'>LOGIN.</Link>
          <Link to={'friends'} className='link'>FRIENDSLIST.</Link>
          <Link to={'addfriends'} className='link'>ADD FRIENDS.</Link>
          <Link to={'logout'} className='link'>LOGOUT</Link>
        </header>
        <Routes>
          <Route exact path="/login" exact element={<Login/>}>
            
          </Route>
          <Route exact path="/" exact element={<Navigate to="/login"/>}>
           
          </Route>
          <Route exact path="/friends" exact element={<PrivateRoute><Friendslist/></PrivateRoute>}>

          </Route>
          <Route exact path="/addfriends" exact element={<PrivateRoute><FriendsAdd/></PrivateRoute>}>

          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
