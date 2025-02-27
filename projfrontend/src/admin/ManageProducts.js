import React,{useState, useEffect} from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import { getProducts, deleteProduct } from "./helper/adminapicall"


const ManageProducts = () => {

    const [products, setProducts] = useState([])

    const{user, token} = isAuthenticated();

    const preload = () => {
        getProducts()
        .then(data => {
            if (data.error) {
                console.log(data.error)
            }else{
                setProducts(data)
            }
        })
    }


    useEffect(() => {
        preload();
    }, [])

    const deleteThisProduct = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            }else{
                preload();
            }
        })
    }


    return(
        <Base title="Products management section" description="manage the products here">
        <div className="container mt-4 mb-4 adminbg">
        <Link className="btn btn-success btn-md mb-4 mt-4" to={`/admin/dashboard`}>
          <span className="">Admin Home</span>
        </Link>
        <h2 className="mb-4 text-white text-center">All products:</h2>
        <div className="row">
          <div className="col-12">
            
  
          {products.map((product, index) => {
           return(
            <div> 
            <div key={index} className="row text-center mb-2 ">
            <div className="col-4">
              <h5 className="text-white text-center">{product.name}</h5>
            </div>
            <div className="col-4">
              <Link
                className="btn btn-sm btn-success"
                to={`/admin/product/update/${product._id}`}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-4">
              <button onClick={() => {
                  deleteThisProduct(product._id)
              }} className="btn btn-sm btn-danger">
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

export default ManageProducts