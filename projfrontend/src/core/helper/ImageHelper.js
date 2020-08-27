import React from "react"
import { API } from "../../backend"



const ImageHelper = ({product}) => {

    const imageurl = product 
    ? `${API}/product/photo/${product._id}` 
    : `https://images.unsplash.com/photo-1503513883989-25ef8b2f1a53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80`

    return(
        <div className="rounded  p-2">
                <img
                  src={imageurl}
                  alt="a pic here"
                  style={{ maxHeight: "200px", maxWidth: "100%", minHeight: "200px" }}
                  className="mb-1 rounded"
                />
        </div>
    )
}

export default ImageHelper