import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from "../auth/helper";
import "../styles.css"

const Signup = () => {


    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const {name, email, password, error, success} = values


    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({name, email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, success: false})
            }
            else{
                setValues({...values, name:"", email: "" , password: "", error: "", success: true})
            }
        })
        .catch(console.log("error in signup"))
    }



    const signUpForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label  className="text-dark">Name</label>
                            <input className="form-control" onChange={handleChange("name")} type="text" value={name} />
                        </div>

                         <div className="form-group">
                            <label  className="text-dark">Email</label>
                            <input className="form-control" onChange={handleChange("email")} type="email" value={email}/>
                        </div>

                         <div className="form-group">
                            <label  className="text-dark">Password</label>
                            <input className="form-control" onChange={handleChange("password")} type="password" value={password} />
                        </div>
                        <button onClick={onSubmit}  className="btn signbtn text-white btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }


    const successMessage = () => (
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
        <div className="" style={{display: success ? "" : "none"}}>
        <h6 className="text-center text-dark">
        Your account was created successfully. Please <Link to="/signin">Login here</Link>
        </h6>
        </div>
        </div>
        </div>
    )


    const errorMessage = () => (
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
        <div className="" style={{display: error ? "" : "none"}}>
        <h6 className="text-center text-dark">
        {error}
        </h6>
        </div>
        </div>
        </div>
    )


    return (
        <Base title="Sign Up page" description="">
        <hr className="sign"/>
            {successMessage()}
            {errorMessage()}

            {signUpForm()}
            <hr className="sign"/>
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}

        </Base>
    )
}

export default Signup