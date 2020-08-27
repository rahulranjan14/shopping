import React, {useState, useEffect} from "react"

import {API} from "../backend"
import Base from "./Base"
import Card from "./Card"
import { getProducts } from "../admin/helper/adminapicall"
import { loadCart } from "./helper/cartHelper"
import StripeCheckout from "./StripeCheckout"
import "../styles.css"
import emptycart from "../assets/emptycart.svg"



const Cart = () => {
    

    const [products, setProducts] = useState([])


    const [reload, setReload] = useState(false)


    useEffect(() => {
        setProducts(loadCart())
    }, [reload])


      const loadAllProducts = () => {
        return (
            <div className="container">
                <h2>My Cart</h2>
                <hr/>
                <div className="parent d-flex align-items-center justify-content-center">
                <div className="child col-lg-6 col-md-6 col-sm-12">
                
                {products && products.length!=0 ?
                    
                    (
                        
                            products.map((product, index) =>{ 
                                    return(
                                        <div className="">
                                    <Card 
                                    key={index}
                                    product={product}
                                    removeFromCart={true}
                                    addtoCart={false}
                                    setReload={setReload}
                                    reload={reload}
                                    />
                                    <hr/>
                                        </div>
                                        
                                    )
                                } 
                             )
                            
                    )


                 :
                 
                     (
                        <div className="parent d-flex align-items-center justify-content-center">
                       
                        <div className="child ">
                        
                        <h4> Cart is empty </h4>
                        <img src={emptycart} className="emptycartimg" alt=""/>
                 
                        </div>
                        </div>
                     )
                }
                <br/>
                </div>
                </div>
            </div>
        )
    }



    const loadCheckout = () => {
        return (
            <div>
                <h2>this section is for checkout</h2>
            </div>
        )
    }

   


    return (
        <Base title="Cart Section" description="ready to checkout">
        
            <div className="row text-center">
                <div className=" col-lg-6 col-md-6 col-sm-12">
               
                
                {loadAllProducts(products)}
               

                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                <StripeCheckout
                products={products}
                setReload={setReload}
                /></div>
            </div>
        </Base>
    )
}

export default Cart;