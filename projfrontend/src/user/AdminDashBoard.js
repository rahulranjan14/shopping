import React from 'react'
import Base from "../core/Base"
import {isAuthenticated} from "../auth/helper/index"
import {Link, Redirect} from "react-router-dom"
import "../styles.css"

const AdminDashBoard = () => {


    const {
        user: {name, email, role}
    } = isAuthenticated();


    const adminLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header adminheader text-center text-white">Admin Panel</h4>
                <ul className="list-group">
                    <li className="list-group-item adminoptions">
                        <Link to="/admin/create/category" className="nav-link text-dark adminoptions">Create categories</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link to="/admin/categories" className="nav-link text-dark">Manage categories</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link to="/admin/create/product" className="nav-link text-dark">Create Product</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link to="/admin/products" className="nav-link text-dark">Manage Products</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link   className="nav-link text-dark">Manage Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSide = () => {
        return(
            <div className="card mb-4">
                <h4 className="card-header text-center">My Profile</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span>{name}
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span>{email}
                    </li>
                    
                    
                </ul>
            </div>
        )
    }


    return (
       <Base title="Admin Section"
       description="manage all products here"
       className="container mt-4 mb-4 adminbg p-4"
       >
       <div className="row">
            

            <div className=" col-lg-9 col-md-9 col-sm-12">
            {adminRightSide()}
            </div>

            <div className=" col-lg-3 col-md-3 col-sm-12">
            {adminLeftSide()}
            </div>
       </div>
           
           
       </Base>
    )
}

export default AdminDashBoard