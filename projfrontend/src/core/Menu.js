import React, {Fragment, useState} from "react"
import {Link, withRouter} from "react-router-dom"
import { signout, isAuthenticated,  } from "../auth/helper/index"
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
} from "react-bootstrap"





import "../styles.css";
  

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#EAF0F1"}
    }
    else{
        return {color: "#EAF0F1"}
    }
}




const Menu = ({history}) => {



   // TODO: conditional rendering of username
     // const {
    //     user: {name}
    // } = isAuthenticated(); 




   
    
    return(


 

    
    <Fragment>


  


    
<div className="container-fluid  sticky-top bg-primary">
<div className="container ">
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">



<Link style={currentTab(history, "/")} className="navbar-brand" to="/">
<i class="fas fa-store"></i>  E Shopping
    </Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto">
  
  
    

    

        
    {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <Button className="btn btn-primary hovereffect"> 
        <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
          Dashboard  <i class="fas fa-user"></i>
        </Link>
        </Button>
       
   
    )}

     {isAuthenticated() && isAuthenticated().user.role === 1 && (

        <Button className="btn btn-primary hovereffect"> 
        <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
         Dashboard  <i class="fas fa-user-tie"></i>
        </Link>
        </Button>
        
    
     )}
   
      <Button className="btn btn-primary hovereffect"> 
     <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">
      Cart  <i class="fas fa-cart-plus"></i>
    </Link>
    </Button> 
   
  </ul>
  <div class="navbar-nav mr-right">

  {!isAuthenticated() && (
    <Fragment>

    <Button className="btn btn-primary hovereffect"> 
       <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
           Sign Up  <i class="fas fa-user-plus"></i>
       </Link>
    </Button>

    <Button className="btn btn-primary hovereffect"> 
       <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
           Sign In  <i class="fas fa-sign-in-alt"></i>
       </Link>
  </Button>

   </Fragment>
   )}

   {isAuthenticated() && (
    
    <Button className="btn btn-primary hovereffect"> 
       <span
       className="nav-link text-white" 
       onClick={() => {
           signout(() => {
               history.push("/")
           })
       }}
       >
            Sign Out  <i class="fas fa-sign-out-alt"></i>
       </span>
       </Button>
   
)}


  </div>
</div> 
 

</nav>
</div>
</div>


    



  {/*  { <Navbar className=""  light expand="md">
    <NavbarBrand href="/">Shopping app</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
    
      <Nav className="mr-auto " navbar>

        <NavItem>
            <Link style={currentTab(history, "/")} className="nav-link textnav" to="/">
            Home
            </Link>
        </NavItem>

        <NavItem>
                <li className="nav-item">
                    <Link style={currentTab(history, "/cart")} className="nav-link textnav" to="/cart">
                        cart
                    </Link>
                </li>
        </NavItem>


        {isAuthenticated() && isAuthenticated().user.role === 0 && (
           <NavItem>
                <Link style={currentTab(history, "/user/dashboard")} className="nav-link textnav" to="/user/dashboard">
                u dashboard
                </Link>
           </NavItem>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <NavItem>
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link textnav" to="/admin/dashboard">
                     a. dashboard
                    </Link>
                </NavItem>
         )}


        {!isAuthenticated() && (
           
            <Fragment>
            <NavItem>
                <Link style={currentTab(history, "/signup")} className="nav-link textnav" to="/signup">
                signup
                </Link>
            </NavItem>


            <NavItem>
                <Link style={currentTab(history, "/signin")} className="nav-link textnav"  to="/signin">
                    sign in
                </Link>
            </NavItem>

            </Fragment>

           

           
           )}


           {isAuthenticated() && (
           <NavItem>
           
           <span
           className="nav-link text-white textnav" 
           onClick={() => {
               signout(() => {
                   history.push("/")
               })
           }}
         
           >
                signout
           </span>
        
           </NavItem>
        )}


        
       
      </Nav>

      {isAuthenticated() && (
         
        <NavbarText>
         {name} 
        </NavbarText>
       
      )}

      
    </Collapse>
  </Navbar>
} */}


        {/* <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>

             <li className="nav-item">
                <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">
                    cart
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
                   u dashboard
                </Link>
            </li>
            )}

             {isAuthenticated() && isAuthenticated().user.role === 1 && (

                <li className="nav-item">
                <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                    a. dashboard
                </Link>
            </li>
             )}


           {!isAuthenticated() && (
            <Fragment>

            <li className="nav-item">
               <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                   signup
               </Link>
           </li>

            <li className="nav-item">
               <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
                   sign in
               </Link>
           </li>

           </Fragment>
           )}

            {isAuthenticated() && (
                <li className="nav-item">
                   <span
                   className="nav-link text-warning" 
                   onClick={() => {
                       signout(() => {
                           history.push("/")
                       })
                   }}
                   >
                        signout
                   </span>
                </li>
            )}
            
        </ul> */}

        
    </Fragment>

    
)
}

export default withRouter(Menu)