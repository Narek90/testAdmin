
import { useEffect } from "react";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import api from "./services";
import AdminPage from "./views/AdminPage/AdminPage";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  useEffect(()=>{
    const access=localStorage.getItem("access")
    if (access) {
      api.defaults.headers.common['Authorization'] = "Bearer "+access;
     
    }
},[])
 
  
  return (
    
    <div className="App">
      <Router>
     <Switch>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route  path="/login" >
        <Login />
      </Route>
      <Route path="/adminpage">
        <AdminPage/>
      </Route>
     </Switch>
     </Router>
    </div>
  );
 
}

export default App;
