import { Delete, Edit } from "@mui/icons-material"
import { Button,Table } from "react-bootstrap"
import hookCategories from "./hook"


export default ()=>{
    const {categories,deleteCategory}=hookCategories()
    return <div className='Categories'>
        <h1>Категории</h1>
      
         {
            <Table striped bordered hover variant>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th colspan='2'><Button>Добавить</Button></th>
                    </tr>
                </thead>
                <tbody>
            {categories.map((category, index) => {
           
                    return (
                        <tr key={index} className="doctorListRow"> 
                        <td>{index+1}</td>
                        <td>{category.title.en}</td>
                        <td>{category.description.en}</td>
                        <td><Edit/></td>
                        <td><Delete onClick={()=>{deleteCategory(category.id)}}/></td>
                        </tr>
                        
                    )
                
                }) }
                </tbody>
          </Table>

        }
    </div>
}