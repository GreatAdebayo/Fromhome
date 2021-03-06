import React, {useState, useEffect, useRef} from 'react';
import { Link , useHistory} from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Skeleton from 'react-loading-skeleton';
import Swal from 'sweetalert2'


const Toast2 = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



const Courses = () => {
let history = useHistory();
const [skeleton, Setskeleton] = useState(true);
useEffect(() => {
  setTimeout(() => Setskeleton(false), 500);
})
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
   setIsOpen(!isOpen);
  };
const searchRef = useRef('')
const searchCourse = () => {
  let course = searchRef.current.value;
  if (course) {
  history.push(`/allcourses/${course}`)  
  } else {
    Toast2.fire({
      icon: 'info',
      title: 'Type a course name'
    })
  }

}

 return (
   <div>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
   {/* Courses us section starts */}
   <section id="courses" class="features mt-5">
      <div class="container" data-aos="fade-up">
      <div class="section-title mt-5">
      <h2>Courses</h2>
      <p>Our Courses</p>
      <h5><Link to="/" style={{textDecoration: 'none', color:'#5fcf80'}}><i class="fas fa-long-arrow-alt-left"></i> Home</Link></h5>
      </div>     
     <div class="row" data-aos="zoom-in" data-aos-delay="100">
     <div class="input-group mb-3">
      <input type="text" class="form-control py-3" placeholder="Search for a course" aria-label="Username" aria-describedby="basic-addon1" ref={searchRef}/>
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1" onClick={searchCourse}><i class="fas fa-search"></i></span>
      </div>
      </div>
           
      
      <div class="col-lg-3 col-md-4">
      {skeleton ?  <Skeleton  count={3} duration={2}/> : <div class="icon-box">
      <i class="fab fa-html5" style={{color: '#ffbb2c'}}></i>
      <Link to={"/allcourses/html"}   style={{ textDecoration: 'none' }}><h3><a>HTML</a></h3></Link>
      </div>}     
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
      {skeleton ?  <Skeleton  count={3} duration={2}/> : <div class="icon-box">
      <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
      <Link to={"/allcourses/graphics design"} style={{ textDecoration: 'none' }}><h3><a>Graphics Design</a></h3></Link>
      </div>}
      </div>
           
    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
    {skeleton ? <Skeleton  count={3} duration={2}/> : <div class="icon-box">
    <i class="fab fa-android" style={{color:" #e80368"}}></i>
    <Link to={"/allcourses/andriod development"}  style={{ textDecoration: 'none' }}><h3><a>Andriod Development</a></h3></Link>
    </div> }
    </div>
    
           
    <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
     {skeleton ? <Skeleton  count={3} duration={2}/>:<div class="icon-box">
     <i class="fab fa-react" style={{color:" #e361ff"}}></i>
     <Link to={"/allcourses/react"} style={{ textDecoration: 'none' }}><h3><a>React</a></h3></Link>
     </div> }        
     </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-angular" style={{color: "#47aeff"}}></i>
      <Link to={"/allcourses/angular"} style={{ textDecoration: 'none' }}><h3><a>Angular</a></h3></Link>
      </div> }
      
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-git"  style={{color: "#ffa76e"}}></i>
      <Link to={"/allcourses/git"} style={{ textDecoration: 'none' }}><h3><a>GIT</a></h3></Link>
      </div>}
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-bootstrap"  style={{color: "#11dbcf"}}></i>
      <Link to={"/allcourses/bootstrap"} style={{ textDecoration: 'none' }}><h3><a>Bootstrap</a></h3></Link>
      </div> }
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-wordpress"  style={{color: "#4233ff"}}></i>
      <Link to={"/allcourses/wordpress"}  style={{ textDecoration: 'none' }}><h3><a>Wordpress</a></h3></Link>
      </div>}
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ?  <Skeleton  count={3} duration={2}/> :  <div class="icon-box">
      <i class="fab fa-vuejs" style={{color: "#b2904f"}}></i>
      <Link to={"/allcourses/vue"}  style={{ textDecoration: 'none' }}><h3><a>Vue</a></h3></Link>
      </div>}
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/> : <div class="icon-box">
      <i class="fab fa-laravel"  style={{color: "#b20969"}}></i>
      <Link to={"/allcourses/laravel"} style={{ textDecoration: 'none' }}><h3><a>Laravel</a></h3></Link>
      </div>}
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>  :  <div class="icon-box">
      <i class="fab fa-php" style={{color: "#ff5828"}}></i>
      <Link to={"/allcourses/php"} style={{ textDecoration: 'none' }}><h3><a>PHP</a></h3></Link>
      </div>}
      </div>
      
      <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-discourse" style={{color: "#29cc61"}}></i>
      <Link to={"/allcourses/Others"} style={{ textDecoration: 'none' }}><h3><a>Others</a></h3></Link>
      </div>}
             
      {/* <div class="col-lg-3 col-md-4 mt-4">
      {skeleton ? <Skeleton  count={3} duration={2}/>: <div class="icon-box">
      <i class="fab fa-java"  style={{color: "#29cc61"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Java</a></h3></Link>
      </div>}
      </div> */}
             
      </div>
      </div>

      </div>
      
   </section>
   
   {/* Courses ends */}

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
              <li><i class="bx bx-chevron-right"></i> <a href="#">HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>

      <Link2 to="courses"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link2>
      </div>
      </div>
      </div>
      </footer>
   
  </div>
 )
}

export default Courses;
