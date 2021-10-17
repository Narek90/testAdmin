import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import api from "./services";
import { getMeAction, sucsessLogin } from "./store/Actions/authAction";
import AdminPage from "./views/AdminPage/AdminPage";
import Home from "./views/Home";
import Login from "./views/Login";
import Private from "./views/Private/Private";

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const access = localStorage.getItem("access")
    if (access) {
      api.defaults.headers.common['Authorization'] = "Bearer " + access;
      dispatch(sucsessLogin())
      dispatch(getMeAction())
    }
    setTimeout(() => {
      setLoading(false)
    })
  }, [])


  return (

    <div className="App">
      {loading ? <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>
        :
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/adminpage">
              <Private>
                <AdminPage />
              </Private>
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );

}

export default App;
