import { Spinner, Table } from "react-bootstrap"
import hook from "../hook"
import Avatar from '@mui/material/Avatar';
import { useParams } from "react-router";
import { useEffect } from "react";
import { getDoctorsAction, getSelectedDoctorAction } from "../../../store/Actions/doctorActions";
import { useSelector } from "react-redux";
import { doctorsSelector, selectedDoctorSelector } from "../../../store/Selectors/doctorsSelectors";
import { Rating} from "@mui/material";
import { Check, Close,Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default () => {
    const {dispatch,match } = hook()
    const {id}=useParams()
    const doctor = useSelector(selectedDoctorSelector)
    const doctorsList= useSelector(doctorsSelector)
    
    useEffect(()=>{
        if (doctorsList) {
            dispatch(getSelectedDoctorAction(id))  
        }
    },[id,doctorsList])
   


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
                            <td colSpan="2">{doctor?.doctor_details.price}$</td>
                           
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
                            {doctor?.doctor_details.excperience_start_year}
                            </td>
                        </tr>
                        <tr>
                            <td>Is popular:</td>
                            <td colSpan="2">
                            {doctor?.doctor_details.is_popular? <Check/>: <Close/>}
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td colSpan="2">
                            {doctor?.email}
                            </td>
                        </tr>
                        <tr>
                            <td>Phone number:</td>
                            <td colSpan="2">
                            {doctor?.phone_number}
                            </td>
                        </tr>
                        <tr>
                            <td>Make changes:</td>
                            <td colSpan="2">
                        <Link to={`${match.url}/changedoctorinfo`}>
                          <Edit/>
                          </Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        
    
        )}