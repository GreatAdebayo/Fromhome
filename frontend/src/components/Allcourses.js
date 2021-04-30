import React from 'react'
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
const AllCourses = () => {
return (
<div>
<main id="main" data-aos="fade-in">
<div class="breadcrumbs">
<div class="container">
<h2>React JS</h2>
<p className="font-weight-bold">Below are all the available React JS courses <i class="fal fa-angle-double-down"></i></p>
</div>
</div>
<section id="courses" class="courses">
<div class="container" data-aos="fade-up">
<Link to="/courses" style={{textDecoration: 'none', color: '#5fcf80'}}> <p><i class="fas fa-long-arrow-alt-left"></i> Back to Courses</p></Link>
<div class="row" data-aos="zoom-in" data-aos-delay="100">
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<div class="course-item">
<div class="course-content">
<div class="d-flex justify-content-between align-items-center mb-3">
<Link to="/coursedetails" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Course Details</h4></Link>
<p class="price">Free</p>
</div>

<h3><a style={{ cursor: 'pointer' }}>Website Design</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
  <span>Antonio</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;50
  &nbsp;&nbsp;
  <i class="bx bx-heart"></i>&nbsp;65
</div>
</div>
</div>
</div>
</div> 

<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
<div class="course-item">
<div class="course-content">
<div class="d-flex justify-content-between align-items-center mb-3">
<Link to="/coursedetails" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Course Details</h4></Link>
<p class="price">Free</p>
</div>

<h3><a style={{ cursor: 'pointer' }}>Search Engine Optimization</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
  <span>Lana</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;35
  &nbsp;&nbsp;
  <i class="bx bx-heart"></i>&nbsp;42
</div>
</div>
</div>
</div>
</div> 

<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
<div class="course-item">
<div class="course-content">
<div class="d-flex justify-content-between align-items-center mb-3">
<Link to="/coursedetails" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Course Details</h4></Link>
<p class="price">Free</p>
</div>

<h3><a style={{ cursor: 'pointer' }}>Copywriting</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""/>
  <span>Brandon</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;20
  &nbsp;&nbsp;
  <i class="bx bx-heart"></i>&nbsp;85
</div>
</div>
</div>
</div>
</div> 

</div>

</div>
</section>
</main>

<footer id="footer">
      <div className="footer-top">
      <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-6 footer-contact">
      <h3>Fromhome</h3>
       <p>
              Lagos,
              Nigeria <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@fromhome.com<br/>
            </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link></li>
              <li><Link to="/" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link></li>
              <li><Link2 to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link2></li>
              <li><Link to="/signup"><i class="bx bx-chevron-right"></i> <a href="#">Signup</a></Link></li>
           
            </ul>
              </div>
              

              <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Courses</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a>HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a  class="twitter"><i class="bx bxl-twitter"></i></a>
        <a  class="facebook"><i class="bx bxl-facebook"></i></a>
        <a  class="instagram"><i class="bx bxl-instagram"></i></a>
        <a class="google-plus"><i class="bx bxl-skype"></i></a>
        <a  class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>

      <Link2 to="main"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link2>
      </div>
      </div>
      </div>
      </footer>
  
</div>
)
}

export default AllCourses;