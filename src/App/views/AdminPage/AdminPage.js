import { useEffect } from "react"
import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import { NavMenu, DoctorsList } from "../NavMenu/index"
import MyProfile from "../NavMenu/MyProfile/MyProfile"
import hook from "./hook"

export default () => {
    const { user, match } = hook()
    console.log(user);

    useEffect(() => {
        const access = localStorage.getItem('access')

        if (!access) {
            window.location = "/login"
        }
    }, [])

    return <div className="adminPage">
        <NavMenu />
        <Switch>
            <Route path={`${match.url}/profile`}>
                <MyProfile/>
            </Route>
            <Route path={`${match.url}/doctors`}>
                <DoctorsList />
            </Route>
        </Switch>

    </div>
}