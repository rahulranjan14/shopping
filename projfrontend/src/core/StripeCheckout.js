import React, {useState, useEffect} from "react"
import { cartEmpty, loadCart } from "./helper/cartHelper"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import StripeCheckoutButton from "react-stripe-checkout"
import {API} from "../backend";
import{createOrder} from "./helper/orderHelper"
import credit from "../assets/credit.svg"
import "../styles.css"

const StripeCheckout = ({
    products,
    setReload = f => f,
    reload = undefined
}) => {


    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    })


    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    const getFinalAmount = () => {
       
       if(products){
        let amount = 0;
        products.map(p => {
          amount = amount + p.price;
        });
        return(
            <div>
            <h3>Continue to payment</h3>
           <h4>Total amount = $ {amount} </h4>
            </div>
            );
    }
    else{
        return (
            <div>
            <h3>Continue to payment</h3>
           <h4>Total amount = $0 </h4>
            </div>
            );
    }
      };

    const makePayment = token => {
        const body = {
            token,
            products
        };
        const headers = {
            "Content-Type": "application/json"
        };
        return fetch(`${API}/stripepayment`, {
            method:"POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => {
            console.log(response);
            const {status} = response;
            console.log("Status", status);

            const orderData = {
                products: products,

            }
            
            createOrder(userId, token, orderData)

            //empty cart
            cartEmpty(() => {
                console.log("did it crashed")

                // setReload(!reload);
                
            });
            //force reload
            setReload(!reload);
        }).catch(error => console.log(error))
    }



    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton
            stripeKey="pk_test_51HDyGkGWMb9GZu08NIv8DfxlDMMeOQMoKTWBmth56GwhEYfWWSVRf3wIpyU191aGBS34BSvLwFjxQHx1bCBDXAPC00baxLlFn6"
            token={makePayment}
            amount={getFinalAmount() * 100 }
            name="pay with stripe"
            shippingAddress
            billingAddress
            >
            <button  className="btn btn-success">Pay</button>
            </StripeCheckoutButton>
        ) : (
            <Link to="/signin">
                <button className="btn btn-success">Sign In</button>
            </Link>
        )
        
    }


    return(
        <div>
         {getFinalAmount()}
        {showStripeButton()} <br/>

        <div className="parent d-flex align-items-center justify-content-center">
        <div className="child ">

        <img src={credit} className="creditimg" alt=""/>

        </div>
        </div>

        </div>
    )
}

export default StripeCheckout