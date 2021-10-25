import { Link } from "react-router-dom"
import { Spinner, Table } from "react-bootstrap"
import hook from "../hook"
import {ReadMore } from "@mui/icons-material"

export default () => {

    const { loading, doctors } = hook()
  


    return <div className= " doctorsList">
        {loading ? <Spinner animation="border" variant="dark" /> :

            <Table striped bordered hover variant>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Имя</th>
                        <th>Номер телефона</th>
                        <th>Образование</th>
                        <th>Специализируется</th>
                        <th>Цена</th> 
                        <th></th> 

                    </tr>
                </thead>
                <tbody>
            {doctors.map((doctor, index) => {
           
                    return (
                        <tr key={index} className="doctorListRow"> 
                        <td>{index+1}</td>
                        <td >{doctor.first_name} <br/> {doctor.last_name}</td>
                        <td>{doctor.phone_number}</td>
                        <td>{doctor.doctor_details.education}</td>
                        <td>{doctor.doctor_details.experience}</td>
                        <td>{doctor.doctor_details.price}</td>
                     
                        <td><Link to={`doctorprofile/${doctor.id}`}><ReadMore/></Link></td> 
                        </tr>
                        
                    )
                
                }) }
                </tbody>
          </Table>

        }
    </div>
}