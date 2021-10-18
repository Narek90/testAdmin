import { Spinner, Table } from "react-bootstrap"
import hook from "../hook"
import Avatar from '@mui/material/Avatar';
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSelectedDoctorAction } from "../../../store/Actions/doctorActions";
import { useSelector } from "react-redux";
import { selectedDoctorSelector } from "../../../store/Selectors/doctorsSelectors";
import { Rating } from "@mui/material";
export default () => {
    const { loading,
        dispatch } = hook()
    const {id}=useParams()
    const doctor = useSelector(selectedDoctorSelector)
    useEffect(()=>{
        dispatch(getSelectedDoctorAction(id))
        
    },[id])
    console.log(doctor);
  

    return (
        !doctor ? <Spinner animation="border" variant="dark" /> :
            <div className="doctorInfo">
                <Avatar 
                className="avatar"
                    alt={doctor.first_name}
                    src={doctor.profile_image}
                    sx={{ width: 150, height: 150 }}
                />
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td colSpan="2">{doctor?.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td colSpan="2">{doctor?.last_name}</td>
                           
                        </tr>
                        <tr>
                            <td>Date Of Birth:</td>
                            <td colSpan="2">{doctor?.date_of_birth}</td>
                           
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td colSpan="2">{doctor?.price}$</td>
                           
                        </tr>
                        <tr>
                            <td>Discription title:</td>
                            <td colSpan="2">{doctor.user_categories[0]?.category?.title?.en}</td>
                           
                        </tr>
                        <tr>
                        <td>Discription:</td>
                            <td colSpan="2">{doctor.user_categories[0]?.category?.description?.en}</td>
                           
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td colSpan="2">
                            <Rating name="half-rating" defaultValue={doctor.rating} precision={0.5} />
                            </td>
                           
                        </tr>
                        <tr>
                            <td>Excperience Start Year:</td>
                            <td colSpan="2">
                            {doctor?.excperience_start_year}
                            </td>
                           
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        
    
        )}