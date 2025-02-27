import React, {useState, useEffect} from "react"
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";



import "../styles.css"


    const Card = ({product,
    
        addtoCart = true ,
        removeFromCart = false,
        setReload = f => f,
        reload = undefined

    }) => {

        const [redirect, setRedirect] = useState(false);
        const [count, setCount] = useState(product.count)

        const cartTitle = product ? product.name : "a product"
        const cartDescription = product ? product.description : "default description"
        const cartPrice = product ? product.price : "price not available"


        const addToCart = () => {
            addItemToCart(product, () => setRedirect(true))
        }

        const getARedirect = (redirect) => {
            if (redirect) {
                return <Redirect to="/cart" />
            }
        }


        const showAddToCart = (addtoCart) => {
            return(
               addtoCart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-info btnaddcartcol text-white mt-2 mb-2"
              >
                Add to Cart
              </button>
               )
            )
        }

        const showRemoveFromCart = (removeFromCart) => {
           return(
                removeFromCart && (
                <button
            onClick={() => {
              removeItemFromCart(product._id);
              setReload(!reload);
              
            }}
            className="btn btn-block btn-outline-info btnremcartcol text-white  mt-2 mb-2"
          >
            Remove from cart
          </button>
            )
            )
        }

        return (
          <div className="card text-dark  border rounded cardbg  cardalign">
            <div className="card-header lead text-white cardheadcol">{cartTitle}</div>
            <div className="card-body">
            {getARedirect(redirect)}
             <ImageHelper product={product} />
              <p className="lead  font-weight-normal text-wrap">
               {cartDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">${cartPrice}</p>
              <div className="row">
                <div className="col-12">
               {showAddToCart(addtoCart)}
                </div>
                <div className="col-12">
                 {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
        );
      };


export default Card