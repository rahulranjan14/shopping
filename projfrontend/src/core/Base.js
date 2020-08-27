import React from "react"
import Menu from "./Menu";
import { Container } from "reactstrap";
import "../styles.css"


const Base = ({
    imgsrc="",
    title= "My title",
    description = "my description",
    className= " ",
    children
}) => (
    <div>
   
    <Menu />
        
        <div className="container-fluid">
            <div className="jumbotron  text-dark text-center basebg">
            
                <h2 className="display-4 htext">{title}</h2>
                <p className="lead ptext">{description}</p>
            </div>
         
            <hr className="base"/>
            
           <div className={className}>{children}</div>
        </div>
        <hr className="base"/>
        <footer className="footer  mt-auto py-3 footercol">
        <div className="container-fluid  text-white text-center py-3 footercol">

            <div className="container">
            <h2>ABOUT</h2>
            <p>This is a demo shopping website. It's backend is written in Node.js and express.js, frontend using react js,
             and MongoDb atlas is used for database. For styling purpose i have used CSS and bootstrap. This website involves all CRUD operations.
             Also, for payment purposes, a popular payment gateway Stripe is integreated, though this is a demo webiste so real payments can't be done
             but its good enough for testing purposes. For the payment enter card number as "4242 4242 4242 4242" month and year as "12/21" 
             and CVV as "123". There are two type of accounts for this website, User account and Admin account, user can place orders,
             Admin can add categories, delete categories, add products, delete products and update products. For testing purposes, the default
             signup makes the new user as admin. The admin account has all the features which are there in user and the admin authority.
              This is not a complete website. Still many things can be done, some functionalities are not working, This is just for demo purpose. I will eventually add more features during my free time. </p>
            
        </div>
       
        <div className="container">
        <hr className=""/>
        <h3>Contact Me</h3>
            <span className="text-white">If you dicover any bug in this application, please report it to <br/> 
             <span className="text-white text-lg">ranjan96932@gmail.com</span> </span>
        </div>
        </div>
        </footer>
    </div>
)

export default Base;