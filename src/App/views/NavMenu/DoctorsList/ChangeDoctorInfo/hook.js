import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useRouteMatch } from "react-router"
import { ChangeDoctorInfoAction, getSelectedDoctorAction, updateDoctorInfoAction } from "../../../../store/Actions/doctorActions"
import { selectedDoctorSelector } from "../../../../store/Selectors/doctorsSelectors"

export default ()=>{
   
    const match=useRouteMatch()
    const dispatch= useDispatch()
    const {id}=useParams()
    const doctor = useSelector(selectedDoctorSelector)
    
    
    const update=(kay, value)=>{
        dispatch(ChangeDoctorInfoAction(
           { [kay]:value}
        ))
        
        

    }
    const onSubmit=()=>{
      dispatch(updateDoctorInfoAction())

      window.location=`/adminpage/doctors/doctorprofile/${id}`

    }
    const onDenied=()=>{
      window.location=`/adminpage/doctors/doctorprofile/${id}`

    }
    useEffect(() => {
        dispatch(getSelectedDoctorAction(id))
        
    }, [id])
    return {
        match,
        dispatch,
        id,
        doctor,
        onSubmit,
        update,
        onDenied

    }
}