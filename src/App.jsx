import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Watch from './Pages/Watch'
import Market from "./Pages/Market";
import Groups from "./Pages/Groups";
import Games from "./Pages/Games";
import Profile from './Pages/Profile'
import { ReduxFun } from "./Hook/Context";
const App = () => {


  return (
    <div>
      <ReduxFun>

      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/watch" element={<Watch/> } />
        <Route path="/market" element={<Market/> } />
        <Route path="/groups" element={<Groups/> } />
        <Route path="/games" element={<Games/> } />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </ReduxFun>
    </div>
  );
};

export default App;
