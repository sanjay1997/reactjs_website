import React from "react";
import Topbar from "../components/Topbar";
import { useState, useEffect } from "react";
import axios from "axios";
const Register = () => {

const initialValues = {fullname:"",email:"",contact:"",password:"",cpassword:""}; 
const [formValues,setFormValues] = useState(initialValues);
const [formErrors,setFromErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) =>{
    const {name,value} =e.target;
    setFormValues({...formValues,[name]:value});
    //console.log(formValues);
}

const handleSubmit =  async(e) =>{
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);

    const regFormData = new FormData();
    regFormData.append("fullname", formValues.fullname);
    regFormData.append("email", formValues.email);
    regFormData.append("contact", formValues.contact);
    regFormData.append("password", formValues.password);

    try {
        const response = await axios({
            method: "post",
            url: "http://localhost/ci4/register",
            data: regFormData,
          });

          if (response.data.status === 200) {
            alert(response.data.message);
          }
          if (response.data.status === 500) {
            alert(response.data.message);
          }

    } catch (error) {
        console.log(error);
    }
};

useEffect(() =>{
    //console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        //console.log(formValues);
    }
},[formErrors]);

const validate = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.fullname){
        errors.fullname = "Fullname is required !";  
    }  
    if(!values.email){
        errors.email = "Email is required !";  
    } else if(!regex.test(values.email)){
        errors.email = "This is not valid email format !";  
    }
    if(!values.contact){
        errors.contact = "Contact is required !";  
    }

    if(!values.password){
        errors.password = "Password is required !";  
    }else if( values.password.length < 4){
        errors.password = "Password must be more tham 4 characters !";  
    }else if( values.password.length > 10){
        errors.password = "Password cannot exceed more than 10 characters !";  
    }

    if(values.cpassword != values.password){
        errors.cpassword = "Confirm Password does not match !";  
    }
    return errors;
};
    return(
        <>
        <Topbar/>
        <div className="container mt-3 mt-3 mt-3 mt-3 mt-3">
            <div className="row">
                <div className="col-sm-3">
                    {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
                </div>

                <div className="col-sm-6">
                    <form onSubmit={handleSubmit}>
                    <div className="colsm6">
                        <h5 className="d-flex justify-content-center">Create New Account</h5>
                        <p className="errors">{ formErrors.fullname }</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-user'></i></span>
                            <input type="text" class="form-control" name="fullname" 
                            value={formValues.fullname}
                            onChange={handleChange} 
                            placeholder="Enter Full Name." />
                        </div>
                        
                        <p className="errors">{ formErrors.email }</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-envelope'></i></span>
                            <input type="email" class="form-control" name="email" 
                            value={formValues.email}
                            onChange={handleChange}  
                            placeholder="Enter E-mail." />
                        </div>
                        
                        <p className="errors">{ formErrors.contact }</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-phone'></i></span>
                            <input type="text" class="form-control" name="contact" 
                            value={formValues.contact}
                            onChange={handleChange} 
                             placeholder="Enter Contact." />
                        </div>
                        
                        <p className="errors">{ formErrors.password }</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-lock'></i></span>
                            <input type="text" class="form-control" name="password" 
                            value={formValues.password}
                            onChange={handleChange} 
                             placeholder="Enter Password." />
                        </div>
                        
                        <p className="errors">{ formErrors.cpassword }</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-lock'></i></span>
                            <input type="text" class="form-control" name="cpassword" 
                            value={formValues.cpassword}
                            onChange={handleChange} 
                             placeholder="Confirm Password." />
                        </div>
                        
                        <div class="input-group mb-3">
                            <button type="submit" class="form-control register">REGISTER</button>
                        </div>
                    </div>
                   </form>
                </div>

                <div className="col-sm-3">
                </div>
            </div>
        </div>

        </>
    );
}
export default Register;