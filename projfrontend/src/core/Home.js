import React, {useState, useEffect} from "react"
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"
import Card from "./Card"
import { getProducts } from "../admin/helper/adminapicall"
import {Container} from "reactstrap"
import shop from "../assets/shop.svg"




export default function Home(){
    

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProduct = () => {
        getProducts().then( data => {
            if (data.error) {
                setError(data.error)
            }else{
                setProducts(data)
            }
        })
    }
    

    useEffect(() => {
        loadAllProduct()
    }, [])


    return (
        
        <Base title="Online Shopping Store"  description="get everything at your doorstep">
        
            <div className="row text-center">
               <div className="container">
                <h1 className="text-dark text-center">All products</h1>
                <hr className="home"/>
                </div>
                <div className="row">
                    {products.map((product, index) => {
                        return(
                            
                            <div className=" mb-4 col-lg-3 col-md-6 col-sm-12">
                            <div className="">
                            
                                <Card product={product} />
                               
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Base>
       
    )
}