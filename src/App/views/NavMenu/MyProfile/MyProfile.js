import { Spinner, Table } from "react-bootstrap"
import hook from "../hook"
import Avatar from '@mui/material/Avatar';
export default () => {
    const { loading, user } = hook()

    return <div className="myProfile">
        {loading ? <Spinner animation="border" variant="dark" /> :
            <div className="userInfo">
                <Avatar
                    alt={user.first_name}
                    src={user.profile_image}
                    sx={{ width: 150, height: 150 }}
                />
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td colSpan="2">{user.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td colSpan="2">{user.last_name}</td>
                           
                        </tr>
                        <tr>
                            <td>Date Of Birth:</td>
                            <td colSpan="2">{user.date_of_birth}</td>
                           
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td colSpan="2">{user.gender}</td>
                           
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td colSpan="2">{user.email}</td>
                           
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td colSpan="2">{user.phone_number}</td>
                           
                        </tr>
                        <tr>
                            <td>Role:</td>
                            <td colSpan="2">{user.role}</td>
                           
                        </tr>
                    </tbody>
                </Table>
            </div>
        }
    </div>
}