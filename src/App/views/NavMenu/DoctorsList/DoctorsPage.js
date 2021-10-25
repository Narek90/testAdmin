import { Route, Switch } from "react-router"
import { DoctorsList } from ".."
import hook from "../hook"
import ChangeDoctorInfo from "./ChangeDoctorInfo/ChangeDoctorInfo"
import DoctorProfile from "./DoctorProfile"

export default ()=>{
    const {match}=hook()

    return (
    <Switch>
     <Route path={`${match.url}/list`}>
         <DoctorsList/>

     </Route>
     <Route path={`${match.url}/doctorprofile/:id/changedoctorinfo`}>
        <ChangeDoctorInfo/>
     </Route>
     <Route path={`${match.url}/doctorprofile/:id`}>
         <DoctorProfile/>
     </Route>
    </Switch>
    )
}