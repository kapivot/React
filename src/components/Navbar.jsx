import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
return (
<section className="row">
<div className="col-md-12">
<nav className="navbar bg-light navbar-light navbar-expand-md">
<Link to="/" className="navbar-brand fw-bold">
HomeGlow;Every Home Deserves A Glow
</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#mynavbar"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="mynavbar">
<div className="navbar-nav">
<Link to="/" className="nav-link active">Products</Link>
<Link to="/signup" className="nav-link">Sign Up</Link>
<Link to="/signin" className="nav-link">Sign in </Link>
<Link to="/aboutus" className="nav-link">About Us</Link>
<Link to="/addproducts" className="nav-link">Upload Products</Link>
<Link to="/contactus" className="nav-link">Contact Us</Link>





</div>
</div>
</nav>
</div>
</section>
);
};

export default Navbar;

