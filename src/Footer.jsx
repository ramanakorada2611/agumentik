import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsDribbble ,BsTwitter,BsFacebook,BsInstagram,BsPinterest} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    
    <>
    <div className='middle'>
    <h3><img src="https://cdn.dribbble.com/users/1171505/avatars/normal/bca5dd491ebd367881697314fb82d71d.png?1465807523" alt="#"  height="40px" width="40px" className='logo'/>Hero section illustration for art site</h3>
   <div className='inside-middle'>
    <Link to="/signin"><Button variant="outline-success" className='save'>Save</Button></Link>
    <Link to="/signin"><Button variant="outline-danger" className='Like'>💙 Like</Button></Link>
   </div>
  </div>
  <div className='image-div'><br></br><br></br>
  <img src='https://cdn.dribbble.com/users/1171505/screenshots/16527682/media/910e9ca0aa3d0556d8a62a0e2f715b72.png' alt='#' height="700px" width="920px" className='main-image'/>
  </div>
   <br></br><br></br>
  <h3 className='hero-section'>Hero section illustration for art site</h3>
  <br></br><br></br>
  <div className='center-logo-div'>
   <hr width="500px" className='first-hr'></hr>
   <img src="https://cdn.dribbble.com/users/1171505/avatars/normal/bca5dd491ebd367881697314fb82d71d.png?1465807523" alt="#"  height="50px" width="50px" className='logo1'/>
   <hr width="500px"></hr>
  </div>
  <br></br>
  <div className='after-logo-div'>
    <h3>Zahidul</h3>
    <h6>Do you need Illustration, logo or other designs?</h6>
    <Link to="/signin"><Button  className='hire'>✉️Hire Me</Button></Link>
  </div>
  <br></br><br></br>
  <div className='view-profile '>
    <h5 className='view-head'>More by Zahidul</h5>
    <p>view profile</p>
  </div>

  <div className='flex-container'>
  <Card style={{ width: '13rem'}}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/3654028/file/original-e707e9631e50ce9ab358b9d9dd7539eb.png?compress=1&resize=752x" alt='#'/>
    </Card>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/3226651/file/original-330704127e1b2207c7eb4080c502cc73.png?compress=1&resize=450x338&vertical=top" alt='#'/>
    </Card>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1171505/screenshots/16483375/media/73edf8736839ef59179883bafe662549.png?compress=1&resize=320x240&vertical=top" alt='#'/>
    </Card>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1171505/screenshots/16764450/media/db28cde66d0703f9b1eb755fc1ed094f.png?compress=1&resize=320x240&vertical=top" alt='#'/>
    </Card>
  </div><br></br><br></br><hr></hr>
  <br></br><br></br><br></br><br></br><br></br><br></br>
  <div className='l-f-like'>
    <button className='button1'>L</button>
    <button className='button2'>F</button>
    <h6 className='move-aside'>Like</h6>
  </div><br></br><br></br><br></br><br></br>

<div className='footer'>
<Card style={{ width: '18rem' ,border:"none",backgroundColor:"rgb(193, 205, 215)"}}>  
      <Card.Body>
        <Card.Title>dribbble</Card.Title>
        <Card.Text>
        Dribbble is the world’s leading community for creatives to share, grow, and get hired.
        </Card.Text>
        <Card.Text >
         <div className='logos'>
         <BsDribbble/>
         <BsTwitter/> 
         <BsFacebook/>
          <BsInstagram/>
          <BsPinterest/>
         </div>
          
        </Card.Text>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem',border:"none",backgroundColor:"rgb(193, 205, 215)" }}>  
      <Card.Body>
        <Card.Title>For designers</Card.Title>
        <Card.Text>
          <p>Go Pro!</p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Refer a Friend</p>
          <p>Code of Conduct</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,border:"none",backgroundColor:"rgb(193, 205, 215)"}}>  
      <Card.Body>
        <Card.Title>Hire designers</Card.Title>
        <Card.Text>
          <p>Post a job opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
        </Card.Text>
        <Card.Title>Brands</Card.Title>
        <p>Advertise with us</p>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,border:"none",backgroundColor:"rgb(193, 205, 215)"}}>  
      <Card.Body>
        <Card.Title>Company</Card.Title>
        <Card.Text>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media Kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Testimonials</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,border:"none",backgroundColor:"rgb(193, 205, 215)"}}>  
      <Card.Body>
        <Card.Title>Directories</Card.Title>
        <Card.Text>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers for hire</p>
          <p>Tags</p>
          <p>Places</p>
        </Card.Text>
        <Card.Title>Design assets</Card.Title>
          <Card.Text>
            <p>Dribbble Marketplace</p>
            <p>Creative Market</p>
            <p>Fontspring</p>
            <p>Font Squirrel</p>
          </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,border:"none",backgroundColor:"rgb(193, 205, 215)"}}>  
      <Card.Body>
        <Card.Title>Design Resources</Card.Title>
        <Card.Text>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry Trends</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>
    </>
  )
}

export default Footer