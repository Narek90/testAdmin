
import { Link } from "react-router-dom"
import { Spinner, Table } from "react-bootstrap"
import hook from "../hook"

export default () => {

    const { loading, doctors, match } = hook()
  


    return <div>
        {loading ? <Spinner animation="border" variant="dark" /> :

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Id</th>
                        <th>profile</th>

                    </tr>
                </thead>
                <tbody>
            {doctors.map((doctor, index) => {
                return (
                <tr key={index} className="doctorListRow">
                    
                <td>{index+1}</td>
                <td>{doctor.first_name}</td>
                <td>{doctor.last_name}</td>
                <td>{doctor.date_of_birth}</td>
                <td>{doctor.id}</td>
                <Link to={`doctorprofile/${doctor.id}`}>
                <td>more</td> {/*??*/}
                </Link>
                </tr>
                
            )}) }
                </tbody>
          </Table>

        }
    </div>
}