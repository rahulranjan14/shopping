import React, {useState} from "react"
import Base from "../core/Base"
import {Link, Redirect} from "react-router-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {signin, authenticate, isAuthenticated} from "../auth/helper"

const Signin = () => {


    const [values, setValues] = useState({
        email: "",
        password: "",
        error : "",
        loading: false,
        didRedirect: false
    })


    const{email, password, error, loading, didRedirect} = values
    const {user} = isAuthenticated()



    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }


    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false})
            } else {
                authenticate(data, () => {
                    setValues({...values, didRedirect: true})
                })
            }
        })
        .catch(console.log("sign in failed"))
    }


    const performRedirect = () => {

        

        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/user/dashboard" />
        }
    };


    const loadingMessage = () => {
        return(
            loading && (
                <div className="parent d-flex align-items-center justify-content-center">
                <div className="child col-lg-6 col-md-6 col-sm-12">

                <h3 className="text-center text-dark">Loading...</h3>                

                </div>
                </div>
            )
        )
    }


    const errorMessage = () => {
        return(
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
  }




    const signInForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">

                         <div className="form-group">
                            <label  className="text-dark">Email</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email"/>
                        </div>

                         <div className="form-group">
                            <label  className="text-dark">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password"/>
                        </div>
                        <button onClick={onSubmit}  className="btn signbtn text-white btn-block">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }



    return (
        <Base title="Sign In page" description="">
        <hr className="sign"/>
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        
        {performRedirect()}
    {/*  <p className="text-white text-center">{JSON.stringify(values)}</p>  */}
    <hr className="sign"/>
        </Base>
    )
}

export default Signin