import { useSelector } from "react-redux"
import { useRouteMatch } from "react-router"
import { userSelector } from "../../store/Selectors/authSelectors"

export default ()=>{
    const user =useSelector(userSelector)
    const match = useRouteMatch()
    return {user,match}
}