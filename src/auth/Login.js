import React from "react";
import Topbar from "../components/Topbar";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
        <Topbar/>
        
        <div className="container mt-3 mt-3 mt-3 mt-3 mt-3">
            <div className="row">
                <div className="col-sm-3">
                </div>

                <div className="col-sm-6">
                    <div className="colsm6">
                        <h6 className="d-flex justify-content-center">Please login using your existing account</h6>
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-envelope'></i></span>
                            <input type="text" class="form-control" placeholder="Enter Your E-mail/mobile no." />
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className='fa fa-lock'></i></span>
                            <input type="text" class="form-control" placeholder="Enter Your Password." />
                        </div>

                        <div class="input-group mb-3">
                            <button type="button" class="form-control register">LOGIN</button>
                        </div>

                        <div class="checkbox">
                            <label> Don't have an account?<Link to="/register">     Register</Link></label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                </div>
            </div>
        </div>
    
        </>
    );
}
export default Login;