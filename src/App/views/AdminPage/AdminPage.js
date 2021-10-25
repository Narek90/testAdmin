import { useEffect } from "react"
import {Switch} from "react-router"
import { Route } from "react-router"
import DoctorsPage from "../NavMenu/DoctorsList/DoctorsPage"
import {NavMenu} from "../NavMenu/index"
import MyProfile from "../NavMenu/MyProfile/MyProfile"
import hook from "./hook"

export default () => {
    const {match } = hook()


    useEffect(() => {
        const access = localStorage.getItem('access')

        if (!access) {
            window.location = "/login"
        }
    }, [])

    return <div className="adminPage">
        <NavMenu />
        <div className= "main">
        <Switch>
            <Route path={`${match.url}/profile`}>
                <MyProfile/>
            </Route>
            <Route path={`${match.url}/doctors`}>
                <DoctorsPage />
            </Route>

        </Switch>
        </div>

    </div>
}