
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import api from "./services";
import authAction, { getMeAction, sucsessLogin } from "./store/Actions/authAction";
import AdminPage from "./views/AdminPage/AdminPage";
import Home from "./views/Home";
import Login from "./views/Login";
import Private from "./views/Private/Private";

function App() {
const dispatch= useDispatch()
const [loading, setLoading]=useState(true)
  useEffect(()=>{
    const access=localStorage.getItem("access")
    if (access) {
      api.defaults.headers.common['Authorization'] = "Bearer "+access;
      dispatch(sucsessLogin())
      dispatch(getMeAction())
    }
    setTimeout(()=>{
      setLoading(false)
    },1000)
},[])
 
  
  return (
    
    <div className="App">
     {loading?<h1>loading....</h1>:
      <Router>
     <Switch>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route  path="/login" >
        <Login />
      </Route>
      <Route path="/adminpage">
        <Private>
         <AdminPage/>
        </Private>
      </Route>
     </Switch>
     </Router>
     }
    </div>
  );
 
}

export default App;
