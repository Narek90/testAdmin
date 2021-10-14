import { useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import hook from "./hook"
export default () => {
    const { onSubmit, register, handleSubmit, errors } = hook()
  useEffect(()=>{ 
    const access= localStorage.getItem('access')
      if (access) {
    window.location="/adminpage"
   }
   },[])
    
  
   
   return <div className="generalConteinerLogin">

        <Form className="generalForm " onSubmit={handleSubmit(onSubmit)}>
            <div className="loginTitle">Login</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  placeholder="Enter email" {...register('userName')}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}