import { Button, Spinner, Table } from "react-bootstrap"
import hook from "./hook"
import Avatar from '@mui/material/Avatar';
import { Rating, TextField } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
export default () => {
    const {
        doctor,
        onSubmit,
        update,
        onDenied
    } = hook()






    return (
        !doctor ? <Spinner animation="border" variant="dark" /> :
            <div className="doctorInfo">
                <Avatar
                    className="avatar"
                    alt={doctor.first_name}
                    src={doctor.profile_image}
                    sx={{ width: 150, height: 150 }}
                />
                <form >

                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td colSpan="2">
                                    <TextField

                                        value={doctor.first_name}
                                        variant="standard"
                                        onChange={(event) => {
                                            update("first_name", event.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td colSpan="2">
                                    <TextField
                                        value={doctor?.last_name}
                                        variant="standard"
                                        onChange={(event) => {
                                            update("last_name", event.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Date Of Birth:</td>
                                <td colSpan="2">
                                    <TextField
                                        value={doctor?.date_of_birth}
                                        variant="standard"
                                        onChange={(event) => {
                                            update("date_of_birth", event.target.value)
                                        }}
                                    />
                                </td>
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
                                    {doctor?.doctor_details.is_popular ? <Check /> : <Close />}
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
                                <td><Button variant="outline-secondary" id="button-addon1" onClick={onDenied}>Cancel </Button></td>
                                <td><Button  variant="outline-secondary" id="button-addon1"  onClick={onSubmit}>Save changes </Button></td>
                            </tr>

                        </tbody>
                    </Table>
                </form>
            </div>


    )
}