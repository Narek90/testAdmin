import { Delete, Edit } from "@mui/icons-material"
import { useEffect } from "react"
import { Button, Spinner, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategoryAction, getCategoriesAction } from "../../../store/Actions/categoriesActions"
import { categoriesSelector } from "../../../store/Selectors/categoriesSelectors"
import hook from "../hook"

export default ()=>{
    
    const dispatch=useDispatch()
    const categories=useSelector(categoriesSelector)
    console.log(categories);
    const deleteCategory=(id)=>{
        dispatch(deleteCategoryAction(id))

    }
    useEffect(()=>{
        dispatch(getCategoriesAction())
    },[])
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