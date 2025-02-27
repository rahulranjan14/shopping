import React,{useState, useEffect} from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import {getCategories, getProduct, updateProduct} from "./helper/adminapicall"
import { isAuthenticated } from "../auth/helper/index"

//TODO: redirect to home after product creation
const UpdateProduct = ({match}) => {


    const {user, token} = isAuthenticated();


    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: ""
    });


    const {name, description, price, stock, categories, category, loading, error, createdProduct, getaRedirect, formData} = values


    const preload = (productId) => {
        getProduct(productId).then(data => {
           // console.log(data)
            if (data?.error) {
                setValues({...values, error: data.error})
            }else{
                preloadCategories();
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    stock: data.stock,
                    formData: new FormData()
                  
                })
               
            }
        })
    }

    const  preloadCategories = () => {
        getCategories()
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else{
                setValues({
                    categories: data,  formData: new FormData()
                })
            }
        })
    }

    useEffect(() => {
        preload(match.params.productId);
    }, [])

//TODO: work on it
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true})

        updateProduct( match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            }
            else{
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    price: "",
                    photo: "",
                    stock: "",
                    loading: false,
                    createdProduct: data.name
                })
            }
        })
    }


    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value})
    };

    const successMessage = () => (
        <div className=" mt-3"
        style={{display: createdProduct ? "" : "none"}}>
        <h5 className="text-dark text-center" >{createdProduct} updated successfully</h5>
        </div>
    )


    const createProductForm = () => (
        <form >
          <span className="text-dark">Upload photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-info">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              
              {categories && categories.map((cate, index) => (
                  <option key={index} value={cate._id}>{cate.name}</option>
              ))}

            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-info mb-3">
            Update Product
          </button>
        </form>
      );




    return (
        <Base
        title="Product updation section "
        description="update the product here"
        className="container mt-4 mb-4 adminbg p-4"
        >
            <Link to="/admin/dashboard" className="btn btn-md btn-success mb-3" >Admin home</Link>
            <div className="container">
            <div className="row formbg text-white rounded">
                <div className="col-md-8 offset-md-2">
                {successMessage()}
                    {createProductForm()}
                </div>
            </div>
            </div>
        </Base>
    )
}


export default UpdateProduct