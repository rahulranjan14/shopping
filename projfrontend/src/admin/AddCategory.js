import React, {useState} from "react"
import Base from "../core/Base"
import { isAuthenticated } from "../auth/helper"
import { Link } from "react-router-dom"
import {createCategory} from "./helper/adminapicall"

const AddCategory = () => {

    const [name, setName] = useState("")
    const[error, setError] = useState(false)
    const[success, setSuccess] = useState(false)

    const { user,token } = isAuthenticated();


    const goBack = () => {
       return(
            <div className="mt-3">
                <Link className="btn  btn-success mb-3" to="/admin/dashboard">
                    Admin Home
                </Link>
            </div>
        )
    }


    const handleChange = event => {
        setError("");
        setName(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false)

        //backend request fired
        createCategory(user._id, token, {name})
        .then(data => {
            if (data.error) {
                setError(true)
            }else{
                setError("");
                setSuccess(true)
                setName("")
            }
        })


    }


    const successMessage = () => {
        if (success) {
            return <h5 className="text-success"> Category created succesfully </h5>
        }
    }

    const errorMessage = () => {
        if (error) {
            return <h4 className="text-success"> Category creation failed </h4>
        }
    }

    const myCategoryForm = () => {
       return( 
            <form >
                <div className="form-group ">
                    <p className="lead ">Enter the category name</p>
                    <input type="text" className="form-control my-3" 
                    autoFocus required placeholder=""
                    onChange={handleChange}
                    value={name}
                    />
                    <button onClick={onSubmit} className="btn  btn-outline-info">
                        Create Category
                    </button>
                </div>
            </form>
        )
    }

    return (
       <Base
       title="Create a category"
       description="add a new category for new range of products"
       className="container mt-4 mb-4 adminbg p-4"
       >
       <div className="container">
            <div className="row formbg rounded">
                <div className="col-md-6 offset-md-3">
                {goBack()}
                {successMessage()}
                {errorMessage()}
                  {myCategoryForm()} 
                </div>
            </div>
        </div>
       </Base>
    )
}

export default AddCategory