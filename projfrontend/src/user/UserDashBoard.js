import React from 'react'
import Base from "../core/Base"
import {isAuthenticated} from "../auth/helper/index"
import {Link, Redirect} from "react-router-dom"
import "../styles.css"

const UserDashBoard = () => {
   
    const {
        user: {name, email, role}
    } = isAuthenticated();


    const userLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header adminheader text-center text-white">User Panel</h4>
                <ul className="list-group">
                    <li className="list-group-item adminoptions">
                        <Link  className="nav-link text-dark adminoptions">Update details</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link  className="nav-link text-dark">Wishlist</Link>
                    </li>

                    <li className="list-group-item adminoptions">
                        <Link  className="nav-link text-dark">Orders</Link>
                    </li>

                  
                </ul>
            </div>
        )
    }

    const userRightSide = () => {
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
       <Base title="welcome to the section"
       description="manage all your details here"
       className="container adminbg p-4"
       >
       <div className="row">
            

            <div className=" col-lg-9 col-md-9 col-sm-12">
            {userRightSide()}
            </div>

            <div className=" col-lg-3 col-md-3 col-sm-12">
            {userLeftSide()}
            </div>
       </div>
           
           
       </Base>
    )
}

export default UserDashBoard