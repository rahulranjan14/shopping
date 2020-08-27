import React,{ useState, useEffect} from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import { getCategories, deleteCategory } from "./helper/adminapicall"



const ManageCategories = () => {



    const [categories, setCategories] = useState([])

    const{user, token} = isAuthenticated();

    const preload = () => {
        getCategories()
        .then(data => {
            if (data.error) {
                console.log(data.error)
            }else{
                setCategories(data)
            }
        })
    }


    useEffect(() => {
        preload();
    }, [])


    const deleteThisCategory = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            }else{
                preload();
            }
        })
    }



    return (
        <Base title="Categories management section" description="Manage categories here" >
        <div className="container mt-4 mb-4 adminbg">

        <Link className="btn btn-success btn-md mb-4 mt-4" to={`/admin/dashboard`}>
          <span className="">Admin Home</span>
        </Link>
        <h2 className="mb-4 text-white text-center">All categories:</h2>
        
        <div className="row">
          <div className="col-12">
            


            {categories.map((category, index) => {

                return(
                  <div>
                  <div key={index} className="row text-center mb-2 ">
                 <div className="col-6">
                   <h5 className="text-white text-center">{category.name}</h5>
                 </div>
                 
                 <div className="col-6">
                   <button onClick={() => {
                       deleteThisCategory(category._id)
                   }} className="btn btn-danger">
                     Delete
                   </button>
                   
                 </div>
                 
                 </div>
                 <hr/>
                 </div>
                )
               })}
          </div>
        </div>
        </div>
      </Base>
    )
}


export default ManageCategories